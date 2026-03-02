# Specification

## Summary
**Goal:** Build a luxury romantic one-page static website from Zeeshan to his wife Taibaa, featuring six richly styled sections, floating heart particles, background music toggle, scroll animations, and elegant typography.

**Planned changes:**
- Set up a global design system using CSS custom properties with deep maroon (#6B1A2A), blush pink (#F4B8C1), champagne gold (#D4AF6A), and soft beige (#F9F0E6); Google Fonts Cormorant Garamond (serif) and Dancing Script/Great Vibes (script); smooth scroll; mobile-first layout.
- Add a fixed floating heart particles layer (20–30 hearts, CSS keyframe animations, pointer-events:none, z-index:0).
- Add a fixed music toggle button (top-right, muted by default, toggles play/pause of looping ambient audio, champagne gold border + blush pink background).
- Implement Hero Section (full viewport, hero-candlelight.dim_1920x1080.jpg background, dark maroon overlay, serif gold heading "To My Beautiful Wife, Taibaa ❤️", script blush subheading, "Open My Heart" CTA button with smooth-scroll, fade-up entrance animation).
- Implement Apology Section (beige/blush gradient, serif deep maroon title "I Am Truly Sorry, Taibaa", exact apology paragraph, Intersection Observer fade-in scroll animation).
- Implement Memories Gallery Section ("Our Story, Our Moments", 2-col mobile / 4-col desktop responsive grid, 8 placeholder cards with labeled text, hover overlay showing romantic captions in script font, smooth CSS transitions).
- Implement Love Letter Section ("From Zeeshan to Taibaa", rose-bg.dim_1920x1080.jpg background with blur/gradient overlay, exact love letter copy in script font body and serif title, fade-in scroll animation).
- Implement Shayari & Love Quotes Section (4 Urdu/Hindi quotes verbatim, large script font in champagne gold on deep maroon, sequential fade-in on scroll via Intersection Observer, decorative dividers between quotes).
- Implement Dinner Invitation Section ("Will You Go On A Date With Me Again?", exact invitation text, date 28/03/2026 and location Nagpur with gold icons, "Yes ❤️" button with heart burst animation on click, ghost "I Already Forgive You" button showing inline sweet message, fade-in scroll animation).
- Implement Final Closing Section (glowing pulsing serif champagne gold heading "Taibaa, I Choose You. Again. Every Single Day.", script blush "Forever Yours, / Zeeshan Khan ❤️", pulsing large heart SVG background, near-black/deep maroon background).
- Serve hero-candlelight.dim_1920x1080.jpg and rose-bg.dim_1920x1080.jpg from frontend/public/assets/generated.

**User-visible outcome:** Taibaa can open the website and experience a full luxury romantic one-page journey — from a candlelit hero, through an apology, memories gallery, love letter, shayari quotes, and dinner invitation, to a glowing closing declaration — with floating hearts, optional ambient music, and elegant animations throughout.
