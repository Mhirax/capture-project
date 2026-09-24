# Capture Photography

A photography studio website project. It has two parts:

| Folder | What it is | Stack |
| --- | --- | --- |
| [`hero/`](hero) | Full-screen hero section with a transparent navbar and image carousel | HTML, CSS, JavaScript |
| [`capture/`](capture) | Landing page sections: About, Services and FAQ | React, styled-components |

## Hero section

A responsive, full-screen hero built with plain HTML, CSS and JavaScript (no build step, no dependencies).

**Features**

- Full-width photo background that fills the viewport (`100svh`, so mobile browser bars don't cut it off)
- Transparent top navbar with white text: `HOME` `ABOUT` on the left, `CAPTURE PHOTOGRAPHY` (bold, letter-spaced) in the centre, `INFO` `CONTACT` on the right
- Large serif headline, "Capture Your Moment", centred on the screen
- Image carousel with crossfade, pagination dots at the bottom centre and faint arrows on the left and right edges
- Autoplay every 7 seconds, paused on hover or keyboard focus, and switched off for visitors who prefer reduced motion
- Below 768px the navbar collapses into a hamburger menu

**Readable text on any photo**

White text can get lost on busy images, so the hero does two things to keep it legible:

1. The placeholder photos were chosen with calm, dark areas behind the headline.
2. A CSS overlay sits above the photos: darker at the top (behind the nav) and bottom (behind the dots), an even veil through the middle, and a soft vignette at the edges. The headline also has a subtle text shadow.

To swap in your own photos, replace the files in `hero/img/` (or edit the `<img>` tags in `hero/index.html`). If a portrait-orientation photo crops badly on widescreen, adjust the `object-position` value on that slide's `<img>`.

**Accessibility**

- Semantic `<header>` and `<nav>` landmarks, `<h1>` headline and descriptive alt text on every photo
- Carousel exposes `aria-roledescription`, slide labels, and `aria-current` on the active dot
- Every control is a real `<button>` with an `aria-label` and a visible focus outline
- The mobile menu reports `aria-expanded` and closes with `Esc`

**Run it**

Open `hero/index.html` in a browser, or serve the folder with any static server:

```bash
cd hero
npx serve
```

**Files**

```
hero/
├── index.html   markup: slides, navbar, headline, carousel controls
├── style.css    layout, overlay, responsive rules
├── script.js    carousel logic and mobile menu
└── img/         placeholder photos
```

**Credits**

Placeholder photos are from [Unsplash](https://unsplash.com) and used under the Unsplash License. Fonts are [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) and [Montserrat](https://fonts.google.com/specimen/Montserrat) from Google Fonts.

## React app (`capture/`)

A Create React App project with About, Services and FAQ sections, styled with styled-components.

```bash
cd capture
npm install
npm start
```

## Status

The hero is a standalone page for now. Next step is to wire it into the React app (or convert the rest of the site to match).
