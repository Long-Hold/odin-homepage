# Portfolio Website

A personal portfolio site built from scratch with vanilla JavaScript, CSS, and a webpack build pipeline. The site showcases a set of Odin Project exercises alongside an about-me section and a working contact form.

## Tech Stack

- HTML5 (semantic markup)
- CSS3 (custom properties, native nesting, `color-mix()`, `:user-invalid`)
- Vanilla JavaScript (`IntersectionObserver`, dynamic `import()`)
- Webpack (separate common/prod configs)
- web3forms (contact form submission, no client-side JS required)

## Features

**Responsive layout**
Two global breakpoints, 48rem (tablet) and 64rem (desktop), applied consistently across every stylesheet. The header switches from a stacked mobile layout to a floated portrait on tablet, then to a row layout on desktop. The project cards move from a single column to a 2-column tablet grid to a 3-column desktop grid.

**Scroll reveal animations**
Project cards and the contact form fade up into view as they enter the viewport, using `IntersectionObserver`. Each element animates once and then stops being observed. `will-change` is set just before the animation starts and cleared on `animationend`, rather than being applied permanently in CSS.

**Progressive enhancement**
- The site is fully usable with JavaScript disabled. Content is visible by default; the `opacity: 0` starting state for animations only applies once a `js-enabled` class is present on `<html>`.
- Users with `prefers-reduced-motion: reduce` never download the scroll reveal module at all, handled through a conditional dynamic `import()` in `index.js`.
- Form validation relies on native browser constraint validation and `:user-invalid`, so it works even without JavaScript.

**Accessibility**
- Semantic HTML throughout (`header`, `main`, `footer`, `figure`/`figcaption`, `nav`).
- `aria-label` on icon links and navigation regions.
- Visible focus states using `:focus-visible` rather than removing outlines.

**Design**
Dark theme built around a deep crimson red and dark grey palette, with a diagonal gradient header, in place of the more common blue, card-heavy layout style. Typeface is Fira Sans, self-hosted as a woff2 file.

## Project Structure

```
src/
  assets/
    fonts/         Fira Sans webfont + font-face stylesheet
    icons/         SVG sprite sheet (icon-github, icon-upwork, icon-new-tab, etc.)
    portraits/     Responsive portrait images (srcset)
    thumbnails/    Project card thumbnails
  modules/
    scrollReveal.js  IntersectionObserver-based entrance animations
  styles/
    variables.css    Design tokens (colors, spacing, shadows)
    animations.css   Shared keyframes
    styles.css       Reset + base/global styles
    header.css       Header, portrait, about-me, social links
    projects.css      Project card grid and layout
    footer.css       Contact form and footer
  index.js           Composition root, imports styles and conditionally loads scrollReveal
  template.html       Page markup, used by HtmlWebpackPlugin
```

`index.js` stays limited to imports and top-level wiring. Feature logic lives in its own module under `modules/`.

## Getting Started

```bash
npm install
npm run start   # local dev server
npm run build    # production build to dist/
npm run preview  # build, then serve dist/ locally
```

## Notes on the Build

The dev server uses `style-loader`, which injects CSS in a way that is not render-blocking. This can show up as layout shift during development that will not appear in production. `npm run preview` serves the actual production build (using `mini-css-extract-plugin`) and is the accurate way to check for layout shift.

## Contact Form

Submissions are handled by web3forms, so no backend or JS interception is required. Validation states use `:user-invalid` rather than `:user-valid`, and error styling is kept in white tones to stay legible against the red footer background rather than using a conventional red error color.