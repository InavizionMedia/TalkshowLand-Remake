# TalkshowLand Remake — Brief V1

**Source:** https://talkshowland.com/home/ (temp homepage; the root `/` is a coming-soon page — ignore it)
**Owner:** Yolando project, semi-associated with the InavizionMedia remakes (EveryWayWoman, YolandoMitchellBrown)
**Platform:** WordPress + Divi, child theme "TSL Divi Child v.1.0.39"
**Status:** recon complete 2026-10-07 — site is VERY early, all placeholder copy

## Carry-overs (Jon's call)

- The hero slideshow stays — same structure; hero images are the ones Jon made.
- The navbar logo (top-left) carries over: circular TSL camera-aperture emblem + "TalkShowLand" wordmark ("Talk" red, "ShowLand" white, bold sans).
- ⚠️ Asset note: the live site runs Sucuri bot protection — direct downloads of the logo/hero files are blocked from here. Jon to supply the originals (he made them; originals beat scrapes anyway).

## Content inventory (all placeholder on the live temp site)

- **Title:** "HOME | Talk Show Land | Daytime TV Streaming Platform | Watch Talk Shows Online"
- **Nav (7):** SHOWS · DIALOGUE · NEWS · SPORTS · STREAMING · ENTERTAINMENT · STORE — transparent dark bar over hero
- **Hero (3 slides, dots, red active state):** headlines "TALK SHOW LAND v1/v2/v3" (identical lorem ipsum subtext each) · button "VIEW SHOWS" → #latest · dark red-tinted cinema-camera close-up backgrounds
- **Fan Favorites:** horizontal video-card carousel, 16 cards / 10 unique — "VIDEO TEMPLATE v1, v2, v3, v4, v18, v20, v23, v25, v27, v28"; some dated 11/29/25, 12/13/25
- **Latest Full Shows** (#latest): second carousel, 20 cards / 10 unique — "VIDEO TEMPLATE v2, v4, v17, v18, v19, v20, v22, v23, v24, v28"
- **Newsletter band:** "Subscribe Now!" + email field + "Sign up" (no privacy copy)
- **Footer:** single "Quick Links" column (Night Lights, Red Carpets, all the behind scenes, Talk Show Land at night, The Dialogue Awards Show, TSL Specials, Social, Press, Corporate, The Talk Reporter) · "Copyright © 2025 Talk Show Land | Powered by Inazivion Media" · socials: Facebook, X, Instagram, TikTok, Youtube, Bandcamp · no contact info
- **No** About section, host info, or episode descriptions — skeleton only, as Jon said

## Design language (from the temp site)

Dark cinematic streaming-service look — near-black background (~#121212), white uppercase headlines, light-gray body, dark-red accent (#a00807, active dot + logo "Talk"), thin outlined buttons. Headlines render as a bold condensed sans (Montserrat/Raleway from the loaded Google Fonts: Mulish, Noto Sans, Raleway, Montserrat, Alice, Open Sans). Netflix-template vibe, but every word is placeholder — the remake supplies the voice.

## Build plan

1. ✅ Repo scaffold (InavizionMedia/TalkshowLand-Remake, talkshowland-v1, Pages)
2. ✅ Assets banked (4 logos, 3 heroes, 10 thumbnails — via wp-admin)
3. First working build on `talkshowland-v1` — Spotlight lane candidate (talk show site), dark-native register
4. **Multi-page build (Jon):** NOT one-page — nav links go to real separate pages (SHOWS, DIALOGUE, NEWS, SPORTS, STREAMING, ENTERTAINMENT, STORE)
5. **Keep:** established color scheme + fonts, all video thumbnails, the post carousel system
6. **SHOWS page (Jon):** keep his full filter system — filters reveal specifically-tagged videos; below the top section keep Related Shows, Trending Shows, Latest Full Shows; the different thumbnail sizes per section are BY DESIGN, do not normalize
7. Test copy throughout (better than lorem ipsum — Jon's call)
8. Screenshots + README gallery refresh in the same pass

## Ravyn's research (2026-10-07, bridge doc)

- **Nav reality:** only /shows/ is actually built; STREAMING is partial (broken MP4 + promo); DIALOGUE / NEWS / SPORTS / ENTERTAINMENT / STORE are latin-placeholder skeletons. 7 real URLs confirmed (not anchors). Root / is Coming Soon — /home/ is the real temp home.
- **SHOWS filters:** custom 8-chip exclusive system (NOT Divi Filterable Portfolio). Tags: ALL SHOWS · DAYTIME · DIALOGUE · FEATURED · FOOD · GAME SHOWS · NEWS · PARENTHOOD. CSS classes tslCat-* → rows tsl-row-*; jQuery fade 300ms; no URL state.
- **Thumbnail size ladder @1440 (keep relative differences):** filter grid 243×152 · Related 212×375 (tall poster) · Trending 208×161 · Latest 248×217 · Fan Favorites 425×315.
- **Carousels:** dg-blog-carousel → Swiper 5.2.1 (not Slick). Fan Favorites 3/view; Latest Full Shows 5/view; loop on, autoplay off, arrows yes, dots no. Hero = Divi et_pb_slider. Remake: light Swiper or scroll-snap, no WP plugin.
- **Concept:** public vision OK (2018 daytime talk-show network; Voyage LA; TALK SHOW LAND trademark 2025). Footer names (Night Lights, Red Carpets, Talk Show Land at night, Dialogue Awards, TSL Specials) = placeholder labels only — need Yolando/Jon's real definitions.
- **Design refs:** Netflix (dual rails) · Disney+ (dark canvas/posters) · Tubi (chips + density). Stay off the EWW ivory/cocoa/gold palette.
- **Ravyn's opinion:** keep relative thumb scale differences; rebuild carousels as light Swiper or scroll-snap.
