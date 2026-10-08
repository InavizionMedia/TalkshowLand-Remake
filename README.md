# TalkshowLand-Remake

> Cinematic remake of [talkshowland.com](https://talkshowland.com/home/) — Yolando's TalkshowLand talk show site. Same cinematic grammar as the EveryWayWoman remake, its own unique voice.

**Branch policy:** work happens on the latest *-vN / project branch. List branches before editing. Never assume the GitHub default is the working line. Working line: `talkshowland-v4` (GitHub default is `main`).

[![Preview](https://img.shields.io/badge/Preview-Live-brightgreen)](https://inavizionmedia.github.io/TalkshowLand-Remake/)
[![Pages](https://img.shields.io/badge/GitHub_Pages-deployed-blue)](https://inavizionmedia.github.io/TalkshowLand-Remake/)
[![Last commit](https://img.shields.io/github/last-commit/InavizionMedia/TalkshowLand-Remake)](https://github.com/InavizionMedia/TalkshowLand-Remake/commits/main)
[![Repo size](https://img.shields.io/github/repo-size/InavizionMedia/TalkshowLand-Remake)](https://github.com/InavizionMedia/TalkshowLand-Remake)
[![Static site](https://img.shields.io/badge/site-static-lightgrey)](https://inavizionmedia.github.io/TalkshowLand-Remake/)

**Live preview:** https://inavizionmedia.github.io/TalkshowLand-Remake/

## Screenshots

![Hero — dark cinematic slider with red wash](media/hero.jpg?v=20261007k)
*Dark cinematic hero: Jon's camera/mixer art, red multiply wash, 3-slide slider.*

![Shows page — bordered browse cards and rails](media/screenshot-shows.jpg?v=20261007k)
![Streaming — FAQ with red kicker, title and rule](media/screenshot-streaming.jpg?v=20261007k)
*Shows page: exclusive 8-chip filter system with the thumbnail size ladder kept.*

![Mobile — 390px](media/screenshot-mobile.jpg?v=20261007k)
*390px mobile: hamburger nav, stacked hero, swipeable rails.*

## What's inside

- `index.html` — the remake (single-file + separate image assets)
- `docs/REMAKE-BRIEF-V1.md` — design brief: content inventory from the live temp site

## Design language

Dark cinematic streaming-service look: near-black (#121212) canvas, white uppercase Montserrat headlines, dark-red (#a00807) accent, thin outlined buttons. Jon's hero art with the red multiply wash, transparent TSL logo top-left. Eight pages sharing one stylesheet.

## Tech stack

| Layer | Choice |
|---|---|
| Markup | Single HTML file, semantic sections |
| Styling | Hand-written CSS, no framework |
| Images | Separate files (never base64 — link-preview discipline) |
| Hosting | GitHub Pages (static) |

## Project tree

```
TalkshowLand-Remake/
├── index.html
├── style.css
├── script.js
├── assets/            # images, one file each
├── media/             # README screenshots
└── docs/
    └── REMAKE-BRIEF-V1.md
```

## Branches — not overwrites

- `main` — landing ground, deploys to Pages
- `talkshowland-v1` — active working line
