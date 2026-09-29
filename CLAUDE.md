# Project: Hellen Wang's UI/UX portfolio

Static site (plain HTML/CSS/JS, no build step), migrated from Notion, to be hosted on GitHub Pages.

## Files
- `index.html` — home (hero, featured work rows, contact)
- `about.html` — about me (photo, bio, skills)
- `hairsay.html`, `wildsafe.html` — case studies
- `drawings.html` — gallery
- `style.css` — all styles; colour tokens in `:root`, dark mode via `prefers-color-scheme`
- `script.js` — missing-image placeholders, scroll fade-in, footer year
- `README.md` — image checklist (exact file names → which Notion image)

## Rules
- Keep it plain HTML/CSS/JS. No frameworks or build tools unless Hellen asks.
- Nav is copied in all five pages; the footer is in every page except `about.html` (its Contact link goes to `index.html#contact`). When changing one, change them all.
- Images live in `images/<project>/` with the names in README.md. Missing images show a dashed "Add file: ..." box.
- Hellen prefers concise answers and simple language.

## Source content (Notion)
- Home: https://imported-replace-371.notion.site/UI-UX-Portfolio-6c1131601732822999e881ddeab3f316
- Featured Work database: collection://88613160-1732-83bd-84b2-87a895ccd28d
- Hairsay: https://app.notion.com/p/7241316017328252b0ad01d9a9b91262
- Wildsafe: https://app.notion.com/p/b14131601732829c94ec81ca80bc9775
- Chateraise (draft, mostly empty): https://app.notion.com/p/1bf13160173283f1b611818c6535a39f
- Drawings: https://app.notion.com/p/3c613160173280fba2eaec2b65afc549

## To do
1. ~~Download images from Notion~~ Done. Drawings are `.jpg`; Hairsay GIFs were converted to looping `.mp4` videos; the lo-fi video was compressed to 720p. Chateraise cover is still missing (page not public).
2. ~~Fill in email and LinkedIn~~ Done.
3. Repo is `github.com/Hellenwangg/Hellenwangg.github.io` (pushed). Site: https://hellenwangg.github.io (GitHub Pages from `main`, root).
4. Later: build `chateraise.html` from the `hairsay.html` template once the content is ready, then add it back to the home page project rows and the "More projects" lists (it was removed for now).
