# How to Publish Your Website on GitHub Pages

Target address: **https://bretmdumaraos.github.io/**

## 1. Create the correct repository

1. Sign in to GitHub as `bretmdumaraos`.
2. Visit https://github.com/new.
3. Set **Repository name** to exactly `bretmdumaraos.github.io` (no `.com`, no spaces, no other name).
4. Set **Public** and choose **Create repository**.

If the repository already exists, open it instead. Do **not** create a second similarly named repository.

## 2. Upload the website files

1. Extract the ZIP archive on your computer.
2. Open your `bretmdumaraos.github.io` GitHub repository.
3. Choose **Add file → Upload files**.
4. Upload the **CONTENTS** of `bretmdumaraos-app-gallery/` — **not the parent folder**. The `index.html` file must appear immediately at the top level of the repository.
5. Make sure the `css`, `js` and `assets` folders and their files are included. GitHub's web uploader may omit an empty `.nojekyll` file; this website works even if you don't upload it.
6. Commit the changes to `main`.

Your repo should look like:

```
bretmdumaraos.github.io/
├── index.html
├── app.html
├── privacy.html
├── terms.html
├── support.html
├── 404.html
├── css/style.css
├── js/apps.js
├── js/site.js
└── assets/... (WebP application banners, SVG design files)
```

## 3. Switch on GitHub Pages

1. In that repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose branch **main**, folder **/(root)**, then **Save**.
4. Wait a few minutes. GitHub says publishing may take up to 10 minutes.
5. Open **https://bretmdumaraos.github.io/**. Hard-refresh if you still see an older site (Ctrl+F5).

If you still get 404: check the account and repository spelling, verify `index.html` is at repo root, and check **Actions** for deployment errors.

## 4. Check your policy URLs

All of the following should now open directly in your browser:

- Home: `https://bretmdumaraos.github.io/`
- Privacy: `https://bretmdumaraos.github.io/privacy.html`
- Terms: `https://bretmdumaraos.github.io/terms.html`
- Support: `https://bretmdumaraos.github.io/support.html`

For the Google OAuth consent screen, you can enter the published homepage and appropriate privacy/terms URLs and `bretmdumaraos.github.io` as your intended domain, **subject to Google's domain-verification rules**. GitHub Pages subdomains may not be verifiable as domains you own for all Google OAuth verification requirements; using your own custom verified domain may be necessary.

**Do not enter fake app URLs.** Publish the individual app and its appropriate privacy policy first.

## 5. Add a new app in the future

1. Upload the app cover image to the `assets/` folder.
2. Edit `js/apps.js` in GitHub and create or update one app object.
3. Edit the four included applications, or add new objects for a fifth and sixth app. Eldoria is already marked Coming soon.
4. Add the **real** Google Play, website and app-specific privacy URLs only once they're live.
5. Commit; GitHub Pages will automatically publish changes shortly afterward.

## Frequent mistakes

- **404 at homepage:** The repository name is not exactly your user name + `.github.io`, Pages is not enabled, or `index.html` is not at root.
- **No images / style:** Your `assets`, `css` or `js` folders did not upload or got renamed.
- **Filter doesn't work:** `js/apps.js` or `js/site.js` was not uploaded; check the browser Developer Tools Console.
- **Privacy / terms are 404:** The exact filenames must be `privacy.html` and `terms.html` at the root.
- **Google asks for domain verification:** Public hosting alone does not prove ownership of `github.io`; follow Google's authorized-domain requirements or use a custom verified domain.

Official GitHub Pages setup: https://docs.github.com/en/pages/quickstart


## October 2026 gallery update

All four supplied banners are included: BreonMoto, Judith’s Ledger, Brent Studio, and The Last Seed of Eldoria. Eldoria is labeled **COMING SOON** on both its gallery card and details page, and does not have a Play Store or download link. Change the release status and add real links in `js/apps.js` when the game launches.


## October 2026 — Bret brand refresh

The portfolio is branded **Bret Michael Dumaraos** and uses the supplied transparent **B** logo throughout the header, footer, About section, browser favicon and social preview. The design palette is derived from the logo: **cyan `#00D9F7`**, **electric blue `#1266F4`**, **violet `#8748F5`**, with midnight navy surfaces. The four app banners are unchanged, and The Last Seed of Eldoria is still marked **Coming soon**. Upload the **contents** of this ZIP to the repository root (replace old files), then use Ctrl+F5 to refresh.


## October 2026 — Official app gallery links

The three published app cards now open their corresponding official sites directly (in a new tab):

- **BreonMoto:** https://bretmdumaraos.github.io/breonmoto/
- **Judith’s Ledger:** https://bretmdumaraos.github.io/judiths-ledger/
- **Brent Studio:** https://bretmdumaraos.github.io/brent-studio/

Clicking a published app banner, app title or **Visit app website** opens its site. **The Last Seed of Eldoria** still links to its local Coming Soon page. To update URLs later, edit the `website` property in `js/apps.js`.
