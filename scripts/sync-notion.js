// sync-notion.js
// Fetches text content from Notion and writes content.json to the project root.
// Run with: npm run sync
//
// Notion setup required:
//   1. Create an integration at https://www.notion.so/my-integrations
//   2. Copy the API key into .env as NOTION_API_KEY
//   3. Create a Projects database in Notion (see schema below)
//   4. Create Homepage and About pages in Notion
//   5. Share all three with your integration (click "..." → "Add connections")
//   6. Copy their IDs into .env

import 'dotenv/config';
import { Client } from '@notionhq/client';
import { writeFileSync } from 'fs';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// ── Helpers ──────────────────────────────────────────────────────────────────

// Extracts plain text from a Notion rich_text array
function richTextToString(richTextArr = []) {
  return richTextArr.map(t => t.plain_text).join('');
}

// Converts Notion block content to simple HTML
// Handles: paragraph, heading_1/2/3, bulleted_list_item, numbered_list_item, quote, callout, divider
function blocksToHTML(blocks = []) {
  const lines = [];
  let inBulletList = false;
  let inNumberedList = false;

  const closeLists = () => {
    if (inBulletList)  { lines.push('</ul>');  inBulletList = false; }
    if (inNumberedList){ lines.push('</ol>');  inNumberedList = false; }
  };

  for (const block of blocks) {
    const type = block.type;
    const content = block[type];
    const text = richTextToString(content?.rich_text || []);

    if (type !== 'bulleted_list_item' && inBulletList) { lines.push('</ul>'); inBulletList = false; }
    if (type !== 'numbered_list_item' && inNumberedList) { lines.push('</ol>'); inNumberedList = false; }

    switch (type) {
      case 'paragraph':
        if (text) lines.push(`<p>${text}</p>`);
        break;
      case 'heading_1':
        lines.push(`<h2>${text}</h2>`);
        break;
      case 'heading_2':
        lines.push(`<h3>${text}</h3>`);
        break;
      case 'heading_3':
        lines.push(`<h4>${text}</h4>`);
        break;
      case 'bulleted_list_item':
        if (!inBulletList) { lines.push('<ul>'); inBulletList = true; }
        lines.push(`  <li>${text}</li>`);
        break;
      case 'numbered_list_item':
        if (!inNumberedList) { lines.push('<ol>'); inNumberedList = true; }
        lines.push(`  <li>${text}</li>`);
        break;
      case 'quote':
        lines.push(`<blockquote>${text}</blockquote>`);
        break;
      case 'callout':
        lines.push(`<div class="callout">${text}</div>`);
        break;
      case 'divider':
        lines.push('<hr>');
        break;
      default:
        break;
    }
  }

  closeLists();
  return lines.join('\n');
}

// Fetches all blocks for a given page ID
async function getPageBlocks(pageId) {
  const blocks = [];
  let cursor;

  do {
    const res = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });
    blocks.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);

  return blocks;
}

// ── Fetch: Projects database ──────────────────────────────────────────────────

async function fetchProjects() {
  const rows = [];
  let cursor;

  do {
    const res = await notion.databases.query({
      database_id: process.env.NOTION_PROJECTS_DB_ID,
      start_cursor: cursor,
      page_size: 100,
    });
    rows.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);

  return rows.map(page => {
    const props = page.properties;
    return {
      slug:        richTextToString(props.Slug?.rich_text),
      description: richTextToString(props.Description?.rich_text),
    };
  }).filter(p => p.slug);
}

// ── Fetch: Homepage page ──────────────────────────────────────────────────────

async function fetchHomepage() {
  if (!process.env.NOTION_HOMEPAGE_PAGE_ID) return {};
  const blocks = await getPageBlocks(process.env.NOTION_HOMEPAGE_PAGE_ID);

  // Expect the page to have three paragraphs in order: eyebrow, headline, sub
  const paragraphs = blocks
    .filter(b => b.type === 'paragraph')
    .map(b => richTextToString(b.paragraph.rich_text));

  return {
    eyebrow:  paragraphs[0] || '',
    headline: paragraphs[1] || '',
    sub:      paragraphs[2] || '',
  };
}

// ── Fetch: About page ─────────────────────────────────────────────────────────

async function fetchAbout() {
  if (!process.env.NOTION_ABOUT_PAGE_ID) return {};
  const blocks = await getPageBlocks(process.env.NOTION_ABOUT_PAGE_ID);

  // Each paragraph block = one <p> on the about page
  const paragraphs = blocks
    .filter(b => b.type === 'paragraph')
    .map(b => richTextToString(b.paragraph.rich_text))
    .filter(Boolean);

  return { paragraphs };
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('Syncing content from Notion...');

  const [projects, homepage, about] = await Promise.all([
    fetchProjects(),
    fetchHomepage(),
    fetchAbout(),
  ]);

  const content = { projects, homepage, about };

  writeFileSync(
    new URL('../content.json', import.meta.url),
    JSON.stringify(content, null, 2),
    'utf-8'
  );

  console.log(`✓ content.json written`);
  console.log(`  ${projects.length} project descriptions`);
  console.log(`  Homepage: ${Object.values(homepage).filter(Boolean).length}/3 fields`);
  console.log(`  About: ${about.paragraphs?.length || 0} paragraphs`);
}

main().catch(err => {
  console.error('Sync failed:', err.message);
  process.exit(1);
});
