# TalkshowLand-Remake

> Cinematic remake of [talkshowland.com](https://talkshowland.com/home/) — Yolando's TalkshowLand talk show site. Same cinematic grammar as the EveryWayWoman remake, its own unique voice.

**Branch policy:** work happens on the latest *-vN / project branch. List branches before editing. Never assume the GitHub default is the working line. Working line: `talkshowland-v1` (GitHub default is `main`).

[![Preview](https://img.shields.io/badge/Preview-Live-brightgreen)](https://inavizionmedia.github.io/TalkshowLand-Remake/)
[![Pages](https://img.shields.io/badge/GitHub_Pages-deployed-blue)](https://inavizionmedia.github.io/TalkshowLand-Remake/)
[![Last commit](https://img.shields.io/github/last-commit/InavizionMedia/TalkshowLand-Remake)](https://github.com/InavizionMedia/TalkshowLand-Remake/commits/main)
[![Repo size](https://img.shields.io/github/repo-size/InavizionMedia/TalkshowLand-Remake)](https://github.com/InavizionMedia/TalkshowLand-Remake)
[![Static site](https://img.shields.io/badge/site-static-lightgrey)](https://inavizionmedia.github.io/TalkshowLand-Remake/)

**Live preview:** https://inavizionmedia.github.io/TalkshowLand-Remake/

## Screenshots

*Recon in progress — screenshots land with the first working build.*

## What's inside

- `index.html` — the remake (single-file + separate image assets)
- `docs/REMAKE-BRIEF-V1.md` — design brief: content inventory from the live temp site

## Design language

Carries over from the live temp site per Jon: the existing hero slideshow + hero art he made, and the top-left navbar logo. Full design lock after recon.

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
