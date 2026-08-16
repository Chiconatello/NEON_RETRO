# Retro Games Site — Static Version

No accounts, no login, no tracking. Just four files:

| File | Purpose |
|---|---|
| `index.html` | Landing page — video preview + a **Get Started** button that goes straight to `games.html` |
| `games.html` | The game browser, with category filter buttons (Arcade / Platform / Shooter / Fighting) |
| `about.html` | About & credits page |
| `j.js` | Just the category filter logic — clicking a category shows/hides matching game cards |
| `s.css` | All the styling |

## Deploying to GitHub Pages

Since this is now plain HTML/CSS/JS with no PHP or database, **GitHub Pages
will work fine** for this version:

1. Push these files to a GitHub repo.
2. Repo → Settings → Pages → set the source branch (usually `main`) and
   folder (`/root` if these files are at the top level).
3. GitHub gives you a `https://yourusername.github.io/reponame/` URL —
   that's your live site.

## Assets not included here

The HTML references some files not in this folder — `logo.png`, `loop.mp4`,
`SIGNUPVID1.mp4`, and all the individual game cover images (`pac.png`,
`1.png`, etc.) referenced in `games.html`. Upload those alongside these
files (same folder) or update the paths if you keep them elsewhere.
