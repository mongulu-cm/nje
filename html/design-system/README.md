# Design System

This folder consolidates reusable UI foundations and patterns for the Mongulu website.

## File Structure

- `tokens.css`: design tokens (colors, spacing, typography, radii, layout measurements).
- `base.css`: global base styles (reset, typography, page background, focus states, skip link).
- `motion.css`: shared motion patterns (reveal states, scroll progress, reduced-motion behavior).
- `layout.css`: reusable layout primitives (containers, grids, responsive breakpoints).
- `components.css`: reusable component styles (header/nav, hero, buttons, cards, footer).

## Reusable Patterns

- Navigation shell: `.site-header`, `.site-header__bar`, `.site-nav`, `.language-switcher`
- Hero pattern: `.hero`, `.hero__panel`, `.hero__media`, `.hero__actions`
- Content blocks: `.content-section` with modifiers (`--text-only`, `--split`, `--center`, `--reverse`)
- Card grids: `.section-grid`, `.cards-two-up`, `.section-grid--values`
- Project cards: `.project-card`, `.project-card__media`, `.project-card__body`, `.project-card__meta`
- CTA buttons: `.button-link`, `.button-link--primary`, `.button-link--secondary`
- Footer pattern: `.site-footer`, `.site-footer__inner`, `.footer-links`, `.footer-link`

## Usage

Include files in this order in each page:

1. `tokens.css`
2. `base.css`
3. `motion.css`
4. `layout.css`
5. `components.css`

This keeps token definitions available before components and preserves predictable cascade behavior.
