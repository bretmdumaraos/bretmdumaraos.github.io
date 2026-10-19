# Bret Michael Dumaraos — GitHub Pages Application Gallery

A professional, responsive app showcase for **https://bretmdumaraos.github.io/**. Built entirely with HTML, CSS and vanilla JavaScript. No installation, API keys, Node build process, framework or server required.

## What's included

- Responsive home page with original custom-designed visual artwork.
- App collection with real-time search and category filters.
- Gallery cards open the published app websites; `app.html?app=your-app-slug` detail pages are retained for unpublished projects and direct links.
- App information centralized in **`js/apps.js`**, so publishing new apps is easy.
- Light/dark mode (remembers only the chosen theme in browser storage).
- Accessible navigation, semantic HTML, keyboard-friendly controls, reduced-motion support.
- Privacy Policy (`privacy.html`), Terms (`terms.html`), Support (`support.html`).
- Custom `404.html`, favicon, Open Graph image, sitemap and robots.txt.
- Original local SVG gallery cover artwork. No third-party images or dependencies.

## Deploy

See **DEPLOYMENT-GUIDE.md** for exact beginner-friendly steps.

**Live card destinations:** BreonMoto → https://bretmdumaraos.github.io/breonmoto/ ; Judith’s Ledger → https://bretmdumaraos.github.io/judiths-ledger/ ; Brent Studio → https://bretmdumaraos.github.io/brent-studio/ . Clicking their banner, name, or "Visit app website" link opens that page in a new tab. The fourth project, **The Last Seed of Eldoria**, remains **Coming soon** with its local detail page and no release/download link. The three Google Play store links remain blank until supplied.

## Add or edit your apps

Open `js/apps.js` and edit `window.PORTFOLIO_APPS`. Example:

```js
{
  slug: 'my-new-app',
  title: 'My New App',
  category: 'Productivity',
  tagline: 'A simple description of what it does.',
  description: 'A longer and accurate description.',
  image: 'assets/my-new-app.png',
  status: 'Project',
  featured: false,
  repository: 'https://github.com/bretmdumaraos/my-new-app',
  website: '',       // Only when published and tested
  playStore: '',     // Only when published and tested
  privacy: '',       // The app-specific, public privacy policy URL
  terms: '',         // The app-specific terms URL
  number: '05',
  accent: '#90d6ba'
}
```

Upload your cover image to `assets/`; PNG, WebP, JPG or SVG all work. Four supplied 16:9 banners are already included as optimized WebP files. You can add as many apps as needed. The gallery automatically generates filter categories. To change the developer brand or bio, edit `index.html`; to change the palette, edit `css/style.css`.

## Preview before publishing

Double-click `index.html` to preview the homepage; because JavaScript assets are ordinary local files, the gallery works without a local server. Published app cards use the full external GitHub Pages addresses above; the Coming Soon project uses a relative detail page, which also works locally.

For a local web server, run `python -m http.server 8000` inside this folder then visit http://localhost:8000/.

## Google Drive OAuth setup note

If you are adding Google Drive to a mobile app, you must review Google's OAuth consent screen policies. The portfolio-wide Privacy Policy intentionally covers only this **gallery website**. Each app that accesses Drive or Google account information needs accurate app-specific policies, permission explanations, and where relevant domain ownership verification. Do not present the generic portfolio privacy page as your app's complete Google Drive policy without updating its coverage to match the actual app.

## License and customization

Design code and sample original artwork were created for this portfolio. App trademarks, code, documentation and their specific licenses remain the rights of their respective owners.


## October 2026 gallery update

All four supplied banners are included: BreonMoto, Judith’s Ledger, Brent Studio, and The Last Seed of Eldoria. Eldoria is labeled **COMING SOON** on both its gallery card and details page, and does not have a Play Store or download link. Change the release status and add real links in `js/apps.js` when the game launches.


## October 2026 — Bret brand refresh

The portfolio is branded **Bret Michael Dumaraos** and uses the supplied transparent **B** logo throughout the header, footer, About section, browser favicon and social preview. The design palette is derived from the logo: **cyan `#00D9F7`**, **electric blue `#1266F4`**, **violet `#8748F5`**, with midnight navy surfaces. The four app banners are unchanged, and The Last Seed of Eldoria is still marked **Coming soon**. Upload the **contents** of this ZIP to the repository root (replace old files), then use Ctrl+F5 to refresh.
