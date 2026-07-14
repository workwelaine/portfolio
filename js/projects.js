// =============================================================
// projects.js — single source of truth for all project data
// To add a project: add one object to the array below.
// The site renders cards, filters, and featured sections automatically.
// =============================================================

// SCHEMA REFERENCE
// ---------------------------------------------------------
// slug         string    URL key → case study at work/{slug}.html
// title        string    Card headline
// subtitle     string    Company or context line
// description  string    1–2 sentence summary shown on card
// year         number    Year completed or in progress
// categories   string[]  One or more of: 'Product' | 'Graphic' | 'Process'
// tags         string[]  3–5 capability tags (skill/impact, not tools)
// thumbnail    string    Path from root, e.g. 'images/projects/partner-finding.jpg'
// featured     boolean   true = appears in homepage featured section (aim for 4 total)
// featuredOrder number   1–4, controls homepage position (ai-band always last)
// featuredType string    'default' | 'ai-band' (full-width homepage treatment)
// protected    boolean   true = SAP case studies, password gate required
// status       string    'published' | 'coming-soon' | 'draft'
//                        draft = hidden from all grids until promoted
// ---------------------------------------------------------

const projects = [

  // ── PRODUCT — SAP (password protected) ─────────────────────────────

  {
    slug:         'partner-finding',
    title:        'Partner Finding',
    subtitle:     'SAP Business Network · CUPID',
    description:  '',
    year:         2024,
    categories:   ['Product'],
    tags:         ['End-to-end UX', 'Enterprise Scale', 'Foundational Research', 'Stakeholder Management'],
    thumbnail:    'images/projects/partner-finding.jpg',
    featured:     true,
    featuredOrder: 1,
    featuredType: 'default',
    protected:    true,
    status:       'published',
  },

  {
    slug:         'sap-ai-search',
    title:        'AI Search',
    subtitle:     'SAP Business Network',
    description:  '',
    year:         2025,
    categories:   ['Product'],
    tags:         ['AI Interaction Design', 'End-to-end UX', 'Enterprise Scale', 'Design Systems'],
    thumbnail:    'images/projects/sap-ai-search.jpg',
    url:          'work/sap-ai-search.html',
    featured:     true,
    featuredOrder: 2,
    featuredType: 'default',
    protected:    true,
    status:       'published',
  },

  {
    slug:         'universal-search',
    title:        'Universal Search',
    subtitle:     'SAP Business Network',
    description:  '',
    year:         2023,
    categories:   ['Product'],
    tags:         ['End-to-end UX', 'Enterprise Scale', 'Design Systems', 'Foundational Research'],
    thumbnail:    'images/projects/universal-search.jpg',
    featured:     false,
    featuredOrder: null,
    featuredType: 'default',
    protected:    true,
    status:       'published',
  },

  {
    slug:         'product-search',
    title:        'Product Search',
    subtitle:     'SAP Business Network',
    description:  '',
    year:         2024,
    categories:   ['Product'],
    tags:         ['End-to-end UX', 'Enterprise Scale', 'Foundational Research'],
    thumbnail:    'images/projects/product-search.jpg',
    url:          'work/product-search.html',
    featured:     false,
    featuredOrder: null,
    featuredType: 'default',
    protected:    true,
    status:       'published',
  },

  {
    slug:         'content-hubs',
    title:        'Content Hubs',
    subtitle:     'SAP Business Network · Editorial Hub',
    description:  '',
    year:         2022,
    categories:   ['Product'],
    tags:         ['End-to-end UX', 'Enterprise Scale', 'Stakeholder Management', 'Organizational Influence'],
    thumbnail:    'images/projects/content-hubs.jpg',
    featured:     false,
    featuredOrder: null,
    featuredType: 'default',
    protected:    true,
    status:       'coming-soon',
  },

  // ── PRODUCT — Public ────────────────────────────────────────────────

  {
    slug:         'apple-notes',
    title:        'Apple Notes Redesign',
    subtitle:     'Concept',
    description:  '',
    year:         2022,
    categories:   ['Product'],
    tags:         ['End-to-end UX', 'Visual Design'],
    thumbnail:    'images/projects/apple-notes.jpg',
    featured:     true,
    featuredOrder: 3,
    featuredType: 'default',
    protected:    false,
    status:       'published',
  },

  {
    slug:         'silver-mirror',
    title:        'Silver Mirror',
    subtitle:     'App Design',
    description:  '',
    year:         2021,
    categories:   ['Product'],
    tags:         ['End-to-end UX', 'Visual Design'],
    thumbnail:    'images/projects/silver-mirror.jpg',
    featured:     false,
    featuredOrder: null,
    featuredType: 'default',
    protected:    false,
    status:       'published',
  },

  {
    slug:         'slickdeals-money',
    title:        'Slickdeals Money',
    subtitle:     'App Design · Freelance',
    description:  '',
    year:         2021,
    categories:   ['Product'],
    tags:         ['End-to-end UX', 'Mobile Design', 'Foundational Research'],
    thumbnail:    'images/projects/slickdeals-money.jpg',
    featured:     false,
    featuredOrder: null,
    featuredType: 'default',
    protected:    false,
    status:       'published',
  },

  {
    slug:         'plaaan',
    title:        'PLAAAN',
    subtitle:     'App Design',
    description:  '',
    year:         2021,
    categories:   ['Product'],
    tags:         ['End-to-end UX', 'Mobile Design'],
    thumbnail:    'images/projects/plaaan.jpg',
    featured:     false,
    featuredOrder: null,
    featuredType: 'default',
    protected:    false,
    status:       'published',
  },

  {
    slug:         'stationery-addicts',
    title:        'Stationery Addicts',
    subtitle:     'App Design · Self-initiated',
    description:  '',
    year:         2021,
    categories:   ['Product'],
    tags:         ['End-to-end UX', 'Self-directed PM', 'Visual Design'],
    thumbnail:    'images/projects/stationery-addicts.jpg',
    featured:     false,
    featuredOrder: null,
    featuredType: 'default',
    protected:    false,
    status:       'draft',   // promote to 'published' only if strong case study exists
  },

  // ── GRAPHIC DESIGN (keep lean — 2–3 max) ────────────────────────────

  {
    slug:         'nostalgia',
    title:        'Nostalgia',
    subtitle:     'Typeface Design',
    description:  '',
    year:         2020,
    categories:   ['Graphic'],
    tags:         ['Typeface Design', 'Visual Design'],
    thumbnail:    'images/projects/nostalgia.jpg',
    featured:     false,
    featuredOrder: null,
    featuredType: 'default',
    protected:    false,
    status:       'published',
  },

  {
    slug:         'fictious',
    title:        'Fictious',
    subtitle:     'Brand Identity',
    description:  '',
    year:         2020,
    categories:   ['Graphic'],
    tags:         ['Brand Identity', 'Visual Design'],
    thumbnail:    'images/projects/fictious.jpg',
    featured:     false,
    featuredOrder: null,
    featuredType: 'default',
    protected:    false,
    status:       'published',
  },

  {
    slug:         'de-cecco',
    title:        'De Cecco',
    subtitle:     'Packaging Design',
    description:  '',
    year:         2020,
    categories:   ['Graphic'],
    tags:         ['Packaging Design', 'Visual Design'],
    thumbnail:    'images/projects/de-cecco.jpg',
    featured:     false,
    featuredOrder: null,
    featuredType: 'default',
    protected:    false,
    status:       'published',
  },

  // ── PROCESS ─────────────────────────────────────────────────────────

  {
    slug:         'ai-portfolio',
    title:        'Building This Portfolio with AI',
    subtitle:     'Process · 2025',
    description:  '',
    year:         2025,
    categories:   ['Process'],
    tags:         ['AI Interaction Design', 'Self-directed PM', 'Design Systems', 'Organizational Influence'],
    thumbnail:    'images/projects/ai-portfolio.jpg',
    featured:     true,
    featuredOrder: 4,
    featuredType: 'ai-band',
    protected:    false,
    status:       'coming-soon',
  },

  {
    slug:         'prompt-party',
    title:        'Prompt Party',
    subtitle:     'Self-initiated · AI Community',
    description:  '',
    year:         2026,
    categories:   ['Process'],
    tags:         ['AI Interaction Design', 'Self-directed PM', 'Organizational Influence'],
    thumbnail:    'images/projects/prompt-party.jpg',
    featured:     false,
    featuredOrder: null,
    featuredType: 'default',
    protected:    false,
    status:       'published',
  },

];

// Derived helpers used by site renderers
const featuredProjects = projects
  .filter(p => p.featured && p.status !== 'draft')
  .sort((a, b) => a.featuredOrder - b.featuredOrder);

const publicProjects = projects.filter(p => !p.protected && p.status !== 'draft');
