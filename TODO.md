# TODO

Roadmap project Birthday Surprise (Interactive Experience Redesign).

## Legend

- `[ ]` Not started
- `[-]` In progress
- `[x]` Completed
- `[!]` Blocked

---

## Phase 0 — Foundation & Design System

- [x] Vite scaffold with HTML, JS, CSS
- [x] GSAP dependency installed & configured
- [x] Google Fonts integration (Cormorant Garamond, Dancing Script, Plus Jakarta Sans)
- [x] Deep burgundy & dark romantic color palette tokens

## Phase 1 — Flower Mini Game

- [x] DOM structure for flower game container & score basket
- [x] Dynamic spawning of 5 interactive flower elements inside game arena
- [x] Touch & click interaction handlers for mobile/desktop
- [x] GSAP collection animation (flower float to basket + petal burst particles)
- [x] Counter badge update (`0/5` to `5/5`)
- [x] "Almost there... ♡" toast display upon collecting 5 flowers
- [x] Smooth auto transition delay to Unlock Letter scene

## Phase 2 — Unlock Letter Envelope

- [x] DOM structure for polished 3D envelope with ambient glow
- [x] Envelope body, top flap, and wax seal button (`🌹`)
- [x] Hover and idle floating animations
- [x] Unseal click sequence: wax seal break, top flap rotate, letter preview slide up
- [x] Petal burst explosion effect
- [x] Cinematic transition timeline into Main Experience

## Phase 3 — One Long Main Scrolling Experience Page

- [x] **Section 1: Hero** — "Happy Birthday To Someone Special", recipient name, scroll down button
- [x] **Section 2: Personal Message** — Glassmorphism card, opening lines
- [x] **Section 3: Physical Letter** — Vintage paper card, serif typography, handwritten signature
- [x] **Section 4: Compact Music Player** — Spinning vinyl cover art, play/pause, time tracker, progress seek bar, equalizing visualizer bars
- [x] **Section 5: Memories / Photos** — Polaroid scrapbook stack layout, pins, captions, dates, tilt effects
- [x] **Section 6: Small Surprise** — Interactive 3D gift box, lid pop animation, confetti particle burst, surprise text reveal
- [x] **Section 7: Final & Replay** — Heartfelt closing statement, "Replay Experience" restart button

## Phase 4 — Polish & Accessibility

- [x] Scroll reveal entrance animations using IntersectionObserver & GSAP
- [x] Ambient floating background petals canvas/layer
- [x] Accessibility: `prefers-reduced-motion` support across all GSAP & CSS animations
- [x] Keyboard focus visible indicators & accessible controls
- [x] Full mobile (480px) and tablet (768px) responsive layout optimization
- [x] Audio user-interaction restriction compliance (manual play trigger)
- [x] Production build validation (`npm run build`)

## Phase 5 — Deployment (Pending Request)

- [x] Production build succeeds
- [x] Asset paths verified (`/assets/...`)
- [ ] Deploy to hosting (Vercel / Netlify / GitHub Pages)
- [x] Heart-shaped QR code in final section (scan-to-open gift link)
