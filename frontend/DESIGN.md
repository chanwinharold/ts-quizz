---
name: QuizMaster
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#ccc3d8'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#958da1'
  outline-variant: '#4a4455'
  surface-tint: '#d2bbff'
  primary: '#d2bbff'
  on-primary: '#3f008e'
  primary-container: '#7c3aed'
  on-primary-container: '#ede0ff'
  inverse-primary: '#732ee4'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb2b7'
  on-tertiary: '#67001b'
  tertiary-container: '#c81a42'
  on-tertiary-container: '#ffdedf'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d2bbff'
  on-primary-fixed: '#25005a'
  on-primary-fixed-variant: '#5a00c6'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b7'
  on-tertiary-fixed: '#40000d'
  on-tertiary-fixed-variant: '#92002a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system for this product centers on an immersive, high-energy educational experience. It balances a professional, systematic structure with the vibrant aesthetic of modern digital entertainment. The brand personality is "Expertly Energetic"—authoritative enough to be a reliable learning tool, yet visually stimulating enough to maintain high engagement levels.

The style is a fusion of **Modern Minimalism** and **Glassmorphism**. By utilizing a dark canvas, the interface allows the "Electric Violet" accents to act as functional beacons, guiding the user through the quiz flow. High-contrast type and subtle peripheral glows create a sense of depth and focus, ensuring that the primary content (the questions) remains the undisputed hero of the interface.

## Colors
The palette is engineered for a dark-mode-first experience, prioritizing visual comfort during extended focus sessions while maintaining high-impact callouts.

- **Primary (Electric Violet):** Used for active states, primary actions, and brand-defining glows.
- **Secondary (Emerald):** Reserved specifically for "Correct" feedback and positive progress indicators.
- **Tertiary (Rose):** Reserved for "Incorrect" feedback, errors, and urgent destructive actions.
- **Neutral:** A deep slate foundation (`#0F172A`) provides better contrast and less eye strain than pure black.
- **Surface:** Glassmorphic layers use a semi-transparent white (`rgba(255, 255, 255, 0.05)`) to create tiered hierarchy over the neutral background.

## Typography
The typography strategy employs a high-contrast pairing to distinguish between narrative content and technical UI elements.

**Plus Jakarta Sans** is used for all headings and display text. Its bold, slightly rounded geometric forms provide a modern, friendly, yet professional tone. **Inter** handles the body copy, chosen for its exceptional legibility in dark mode and its neutral, systematic feel. For technical labels, difficulty tags, and monospaced data, **Geist** provides a precise, developer-friendly aesthetic that reinforces the "Mastery" aspect of the brand.

## Layout & Spacing
The layout follows a **fluid grid** system based on an 8px square rhythm. 

- **Desktop:** A 12-column grid with a maximum container width of 1200px. Content is centered to maintain focus.
- **Mobile:** A single-column flow with 16px side margins. 
- **Vertical Rhythm:** Large sections are separated by 64px or 80px to prevent visual clutter. Quiz options are grouped with 12px or 16px gaps to create clear hit targets.

Components should utilize "Safe Areas" for text, ensuring content never touches the edges of the high-radius glass containers.

## Elevation & Depth
Depth in this design system is achieved through **Glassmorphism** and **Luminous Shadows**.

1.  **Base Layer:** The neutral background (`#0F172A`).
2.  **Card Layer:** Semi-transparent surfaces with a `24px` backdrop blur. A subtle `1px` inner border (white at 10% opacity) defines the edges.
3.  **Accent Elevation:** Primary elements (like the "Next" button or active category) emit a soft `Electric Violet` outer glow (`box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3)`).
4.  **Interaction:** On hover, glass cards increase in opacity from 5% to 8%, and the backdrop blur intensifies, creating a "lifting" sensation.

## Shapes
The shape language is defined by generous, friendly curves. 

- **Standard Containers:** Use `rounded-2xl` (1rem) for standard cards and input fields.
- **Interactive Elements:** Buttons and Category cards use `rounded-xl` (1.5rem) to feel more substantial.
- **Pills/Tabs:** Difficulty selectors and status chips utilize a fully rounded (pill) shape to distinguish them from actionable buttons and structural cards.

## Components

### Category Cards
Large glassmorphic squares. Icons should be placed in the top-left, utilizing a gradient background matching the Primary color. Titles are `headline-md`. The entire card should have a 1px border that brightens on hover.

### Difficulty Tabs
Pill-shaped toggles. The inactive state is a ghost-style (outline only) while the active state is a solid Electric Violet fill with a matching glow.

### CTA Buttons
Full-width buttons on mobile, fixed-width on desktop. They use a heavy weight and the Primary color. Text is `label-sm` but scaled up to 16px for impact. Use a subtle pulse animation for the final "Submit" button.

### Progress Bars
Track: `rgba(255, 255, 255, 0.1)`. 
Fill: A linear gradient from `#7C3AED` to `#A855F7`. 
The leading edge of the fill should have a small "spark" glow to indicate movement.

### Result Rings
A circular SVG progress indicator. The stroke should be thick (12px+) with rounded caps. Use the Secondary color for the percentage fill. The center of the ring displays the score using `display-lg`.

### Input Fields (Quiz Options)
Large, selectable rows. Use a 5% white glass fill. When selected, the background changes to a 20% Electric Violet tint with a solid 2px violet border.