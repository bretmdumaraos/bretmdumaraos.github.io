/*
 * Bret Michael Dumaraos App Gallery
 * Edit app information here. No framework, build, or server required.
 * Images live inside /assets; 16:9 banner images work best.
 *
 * status: 'Project' or 'Coming soon'
 * repository, website, playStore, privacy, terms: leave '' until their URLs are live.
 * App cards link directly to website when provided; otherwise they use local details.
 * Google Drive OAuth apps should have accurate APP-SPECIFIC privacy policies.
 */
window.PORTFOLIO_APPS = [
  {
    slug: 'breonmoto',
    title: 'BreonMoto',
    category: 'Lifestyle',
    tagline: 'Your digital workshop for motorcycle and car care.',
    description: 'BreonMoto brings useful vehicle maintenance information together. Keep track of oil, parts, tyres, papers, fuel, and what your motorcycle or car may need next.',
    image: 'assets/breonmoto-banner.webp',
    status: 'Project',
    featured: true,
    repository: 'https://github.com/bretmdumaraos/breonmoto',
    website: 'https://bretmdumaraos.github.io/breonmoto/', playStore: '', privacy: '', terms: '',
    number: '01', accent: '#28c8ff'
  },
  {
    slug: 'judiths-ledger',
    title: 'Judith’s Ledger',
    category: 'Finance',
    tagline: 'Keep your bills, budget, savings, and expenses in view.',
    description: 'Judith’s Ledger is a personal finance and everyday organization project built around tracking bills, managing budgets, watching savings, and recording expenses in one simple experience.',
    image: 'assets/judiths-ledger-banner.webp',
    status: 'Project',
    featured: false,
    repository: 'https://github.com/bretmdumaraos/judiths-ledger-privacy',
    website: 'https://bretmdumaraos.github.io/judiths-ledger/', playStore: '', privacy: '', terms: '',
    number: '02', accent: '#00dabf'
  },
  {
    slug: 'brent-studio',
    title: 'Brent Studio',
    category: 'Creative',
    tagline: 'A creative space where digital ideas come to life.',
    description: 'Brent Studio is a space for creative digital projects and media, bringing room for video, imagery, sound, and ideas to develop into new experiences.',
    image: 'assets/brent-studio-banner.webp',
    status: 'Project',
    featured: false,
    repository: 'https://github.com/bretmdumaraos/brent-studio',
    website: 'https://bretmdumaraos.github.io/brent-studio/', playStore: '', privacy: '', terms: '',
    number: '03', accent: '#ac75ff'
  },
  {
    slug: 'the-last-seed-of-eldoria',
    title: 'The Last Seed of Eldoria',
    category: 'Games',
    tagline: 'A story-driven fantasy RPG adventure is on its way.',
    description: 'Coming soon: The Last Seed of Eldoria is a fantasy role-playing adventure with exploration, turn-based battles, magic, heroes, and a world full of discovery. The game is currently in development; release and download links will be added when available.',
    image: 'assets/eldoria-banner.webp',
    status: 'Coming soon',
    featured: false,
    repository: '', website: '', playStore: '', privacy: '', terms: '',
    number: '04', accent: '#dfb466'
  }
];
