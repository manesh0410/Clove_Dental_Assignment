# Clove Dental — Assignment Submission

A clean, responsive landing page built from the provided Figma design using **only HTML, CSS, and vanilla JavaScript**. This project implements the required UI sections and interactions while following the assignment rules (no frameworks).

---

## Live Demo

**[https://clove-dental-assignment.vercel.app/](https://clove-dental-assignment.vercel.app/)**

---

## What I built

I implemented a pixel‑accurate, responsive landing page that includes the following sections (you can replace images with exported Figma assets in the `images/` folder):

* Navigation bar with action buttons and mobile menu
* Hero section with clinic background, responsive doctor image and floating info box
* Stats marquee (infinite-scroll) with icons + numbers + labels in one row
* Treatments / Cards section
* Patient testimonials / horizontal gallery
* Why‑choose us accordion with dynamic image swap
* Safety / feature cards and Google Reviews section
* Find‑us cities grid and membership CTA
* FAQ accordion and footer

> Note: You only need any 6 sections for the assignment — I provided more so you can pick the best ones for submission.

---

## Key Features

* **Vanilla HTML/CSS/JS only** — no React, Tailwind, Bootstrap, or other libraries
* **Responsive design** with carefully chosen breakpoints for mobile/tablet/desktop
* **Interactive components**: mobile menu, marquee pause, patient carousel scroll buttons, accordions, smooth anchors, form submission simulations
* **Accessible basics**: semantic sections, `alt` attributes for images, keyboard-friendly toggles
* **Ready to deploy**: works with GitHub Pages, Vercel, or Netlify

---

## Project structure

```
my-landing-page/
├── index.html          # Main page
├── css/
│   └── style.css      # All styles
├── js/
│   └── script.js      # All interactions
├── images/            # Exported Figma assets (place your PNG/SVGs here)
└── README.md          # This file
```

---

## How to run locally

1. Clone the repo:

```bash
git clone <your-repo-url>
cd my-landing-page
```

2. Open `index.html` in a browser (double-click or `right click → Open With → Chrome`).

> No build step or npm install required — this is plain HTML/CSS/JS.

---

## How to deploy (quick)

### GitHub Pages

1. Push the repo to GitHub.
2. In repository settings → Pages, set source to `main` branch and folder `/ (root)`.
3. Save — the site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Vercel / Netlify

* Drag-and-drop the project folder into Vercel/Netlify or connect your GitHub repo and deploy. Both handle static HTML sites directly.

---

## Using Figma assets

1. In Figma: select the image/frame → Export → PNG or SVG @2x.
2. Move the downloaded file into the `/images` folder.
3. Update the `src` in `<img>` tags if filenames differ.

Tip: Don’t copy/paste from Figma — always export.

---

## Notes & Tips I followed

* Used CSS custom properties for easy theme adjustments
* Kept buttons, cards and components reusable with utility-like classes
* Ensured the marquee items display in a single row (image, number, label) as requested
* Ensured the hero info-box aligns and scales beside the responsive doctor image
* Added keyboard-friendly toggles and accessible `aria` attributes where helpful

---

## Known improvements (optional extras)

* Replace placeholders with exact Figma exported images for pixel-perfect visuals
* Add `srcset` for responsive images to optimize bandwidth
* Add structured data / meta tags for SEO
* Optimize images (compress) to reduce load time

---

## Final notes

If you want, I can:

* Replace placeholder images with the exported ones (send them or upload them into the `images/` folder)
* Trim the page down to exactly 6 sections you plan to submit
* Create a deploy-ready ZIP with correct filenames and README screenshots

---

Thank you — tell me how you want the final submission packaged (which 6 sections to include or if you want the full page).
