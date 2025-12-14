# 3Music · SMAMS (Static Site)

A lightweight, GitHub Pages–ready static site for 3Music’s SMAMS demo. Includes a polished UI shell, brandable header with logo fallback, and premium styling.

## Structure
- `index.html` — Static page with header, control-center section, stats, chips, and noscript message.
- `styles.css` — Aurora backdrop, glass header, animated cards/stats/sections, glossy badges, and refined forms/tables.
- `logo.png` — Place your logo image in the repository root. If missing, an inline SVG fallback is used.

## Deploy to GitHub Pages

1. Initialize and commit locally:
   ```powershell
   cd "C:\Users\Nhana K. Otto\Downloads\3media-networks---smams (1)"
   git init ; git add . ; git commit -m "Init 3Music static site"
   git branch -M main
   ```

2. Create the GitHub repo named `3music` and set remote:
   - If you have GitHub CLI:
     ```powershell
     gh repo create 3music --public --source . --remote origin --push
     ```
   - Or manually (replace `<YOUR_USERNAME>`):
     ```powershell
     git remote add origin https://github.com/<YOUR_USERNAME>/3music.git
     git push -u origin main
     ```

3. Enable GitHub Pages:
   - In GitHub → Settings → Pages → Source: select `Deploy from a branch`, Branch: `main`, Folder: `/root`.
   - Or via CLI (requires gh >= 2.0):
     ```powershell
     gh repo edit --enable-pages
     gh api -X PUT repos/:owner/:repo/pages -f source.branch=main -f source.path="/"
     ```

4. Access your site:
   - URL will be `https://<YOUR_USERNAME>.github.io/3music/`

## Branding
- Drop your logo as `logo.png` in the repo root.
- The header brand links to the 3Music YouTube channel.

## Notes
- No build step required; pure HTML/CSS for Pages.
- You can later add lightweight JS for interactivity while keeping static fallback.
