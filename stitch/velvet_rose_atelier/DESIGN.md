# Design System Strategy: The Radiant Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Vanity"**
This design system moves away from the sterile, modular nature of standard web apps and toward the tactile, warm experience of a high-end editorial magazine or a boutique luxury vanity. It is designed to feel "lit from within." We achieve this through a "Soft-Focus" UI approach—prioritizing fluid transitions, layered semi-transparent surfaces, and high-fashion typography scales. 

To break the "template" feel, layouts must embrace **Intentional Asymmetry**. Overlap cinematic imagery with oversized typography (`display-lg`), and allow elements to "bleed" off the grid. The goal is to make the user feel like they are flipping through a bespoke brand book, not clicking through a database.

---

## 2. Colors
The palette is a sophisticated blend of warm nudes, metallic accents, and deep botanical rose tones.

*   **Primary (`#894e46` / Rose):** Reserved for high-intent actions and focal points.
*   **Secondary (`#745a27` / Gold):** Used sparingly for decorative accents, "Shimmer" lines, and premium indicators.
*   **Neutral Palette:** A range of creams (`surface`) and taupes (`tertiary`) that provide a skin-tone-like warmth.

### The "No-Line" Rule
**Standard 1px solid borders are strictly prohibited.** We define space through "Tonal Sculpting." 
- Change of context is signaled by shifting from `surface` (#fdf8f5) to `surface-container-low` (#f8f3f0).
- For section breaks, use a soft gradient transition or a `secondary-fixed` gold shimmer line (0.5px height) that fades out at the edges.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of luxury stationery.
- **Base Layer:** `background` (#fdf8f5).
- **Secondary Section:** `tertiary` (#705953) for deep-contrast "About" sections.
- **Component Layer:** `surface-container-lowest` (#ffffff) for floating cards to create a subtle "pop" against the cream background.

### The "Glass & Gradient" Rule
To mimic the Charlotte Tilbury aesthetic, use **Glassmorphism** for navigation bars and floating modals.
- **Token:** `surface` at 80% opacity with a `20px` backdrop-blur.
- **Signature Texture:** Apply a linear gradient from `primary` (#894e46) to `primary-container` (#c9847a) on all main CTAs to give them a "silk-satin" sheen.

---

## 3. Typography
The typographic soul of this system lies in the tension between the romantic serifs and the modern, breathable sans-serif.

*   **Display (Cormorant Garamond):** The "Editorial Voice." Use `300 italic` for emphasis (e.g., "Experience *the Glow*"). Use `display-lg` for hero moments, intentionally breaking line heights to create a compact, high-fashion look.
*   **Headings (Playfair Display):** The "Authority." Use for section titles and service names. It conveys weight and timelessness.
*   **Body/UI (DM Sans):** The "Functional Layer." Use `300` weight for long-form reading to maintain a light, airy feel. Use `500` for labels and interactive UI elements to ensure legibility against soft backgrounds.

---

## 4. Elevation & Depth
In this system, depth is "felt," not "seen."

*   **The Layering Principle:** Instead of shadows, use color steps. A `surface-container-highest` card sitting on a `surface` background creates a "recessed" or "elevated" feel through contrast alone.
*   **Ambient Shadows:** If a floating element (like an image or a modal) requires a shadow, use:
    - **Color:** `on-surface-variant` (#524341) at 5% opacity.
    - **Blur:** 40px to 60px. 
    - **Spread:** -10px to keep the shadow tucked softly under the element.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use the `outline-variant` token at 15% opacity. It should be barely perceptible.
*   **Cinematic Motion:** All depth transitions should be accompanied by a subtle `20px` Y-axis slide and a `600ms` ease-in-out opacity fade.

---

## 5. Components

### Buttons
*   **Primary:** Gradient of `primary` to `primary-container`. Text: `on-primary` (White). Border-radius: `DEFAULT` (0.25rem) for a sharp, editorial edge.
*   **Secondary/Ghost:** `outline` token at 20% opacity. On hover, fill with `surface-container-high`.
*   **Tertiary:** `display-sm` (italic) with a `secondary` (Gold) underline that expands from the center on hover.

### Input Fields
*   **Style:** No background fill. Only a bottom border (0.5px) using `outline-variant`.
*   **Focus State:** Border color shifts to `primary`. Label (DM Sans 500) floats upward and reduces to `label-sm`.

### Cards & Lists
*   **The "No-Divider" Rule:** In service lists, do not use lines. Use `spacing-8` to separate items, or use alternating backgrounds between `surface` and `surface-container-low`.
*   **Imagery:** All images in cards must have a `0.25rem` radius and a subtle `0.98` scale-up on hover to simulate "reaching out" to the user.

### Floating Booking Bar
*   A persistent footer or header using **Glassmorphism**.
*   Background: `surface` at 70% opacity + `backdrop-blur: 15px`.
*   Shadow: Ambient Shadow (as defined in Section 4).

---

## 6. Do's and Don'ts

### Do:
*   **Use Whitespace as Luxury:** Use `spacing-24` between major sections. Space is the ultimate sign of a premium brand.
*   **Mix Type Styles:** Use `Cormorant Garamond Italic` for one word within a `Playfair Display` headline.
*   **Tonal Overlays:** Place `Text Primary` on `Blush` or `Taupe` surfaces. The contrast is softer and more "expensive" than black on white.

### Don't:
*   **Never use pure black (#000000).** It kills the "warm luxury" vibe. Always use `Text Primary` (#2C1F1A).
*   **Avoid "Bouncy" Animations:** Use smooth, slow fades. We want "cinematic," not "playful."
*   **No Heavy Radii:** Avoid "pill" shapes for buttons unless they are small selection chips. Stick to the `0.25rem` or `none` for a more architectural, high-end feel.
*   **No Grid-Rigidity:** If three images are in a row, offset the middle one by `spacing-10` vertically to create a staggered, curated look.