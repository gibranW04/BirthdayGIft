# Changelog

All notable changes to this project will be documented in this file.

Format based on [Keep a Changelog](https://keepachangelog.com/).

---

## [1.3.0] — 2026-09-23

### Changed

- **Music Auto-Play After Opening Envelope**:
  - Lagu pertama kini langsung dimainkan secara otomatis begitu amplop surat dibuka dan masuk ke Main Experience.
  - UI player ikut aktif (icon pause, visualizer bars, card "playing") tanpa perlu klik tombol play.
- **Responsive Ambient Falling Petals**:
  - Jumlah kelopak bunga berjatuhan disesuaikan ukuran layar: ~10 di mobile (768px breakpoint), ~22 di desktop/larger viewport (sebelumnya 35 di semua layar).
  - Mengurangi penutupan layar pada tampilan HP.

## [1.2.0] — 2026-09-12

### Added

- **Heart-Shaped QR Code Panel** in Final Section:
  - QR code berbentuk hati ditampilkan di `#sec-final` antara pesan penutup dan tombol Replay.
  - Heading: "Scan to Open This Gift".
  - Caption petunjuk & link fallback teks (`https://hbd-octaviya.vercel.app/`).
  - Styling glow gold/rose, frame putih elegan, responsive mobile.
  - Scroll-reveal animation via IntersectionObserver & GSAP.
  - Konten QR terpisah di `content.js` (`final.qr`).

---

## [1.1.0] — 2026-09-11

### Added

- **Continuous Falling Flower Petals**:
  - Efek bunga & kelopak melayang berjatuhan kini muncul secara **kontinu di seluruh halaman website** (termasuk saat membaca surat, mendengarkan musik, melihat galeri foto, hingga ending).
  - Menggunakan variasi kelopak (*rose*, *soft*, *gold*, dan emoji *sakura/blossom*) dengan animasi *swaying* & *rotation* tanpa henti.
  - Mengatur `z-index: 50` dengan `pointer-events: none` sehingga bunga berjatuhan di depan konten tanpa mengganggu interaksi tombol atau *scrolling*.
- **Multi-Track Playlist Music Player**:
  - Menambahkan dukungan untuk 3 pilihan lagu di Music Player (*Tresno Tekan Mati*, *Aku Ikhlas*, *Kalah*).
  - Menambahkan tombol kontrol Previous (`⏮`), Next (`⏭`), dan *playlist selector pills*.

---

## [1.0.0] — 2026-09-11

### Major Redesign — Interactive Birthday Experience

- **Alur UX Baru (Linear Interactive Experience)**:
  - Mengubah arsitektur menu pilihan ("Choose Your Surprise") menjadi alur cerita linier bertahap: **Flower Game → Unlock Envelope → One Long Main Experience Page**.
- **Phase 1: Flower Mini Game**:
  - Mini game "Collect 5 flowers for a special letter ♡".
  - 5 bunga interaktif muncul secara acak di arena dengan animasi float.
  - Efek partikel kelopak bunga & animasi bunga berpindah ke keranjang saat dikumpulkan.
  - Counter badge interaktif (`0/5` hingga `5/5`) dan selebrasi keranjang.
  - Toast "Almost there... ♡" sebelum beralih ke amplop.
- **Phase 2: Unlock Letter Envelope**:
  - Amplop digital polished dengan efek ambient glow, wax seal (`🌹`), dan floating petals.
  - Interaksi unseal: wax seal pecah/terbuka, flap terbuka (3D rotateX), dan preview surat keluar dengan partikel emas.
  - Transisi cinematic menuju Main Experience.
- **Phase 3: One Long Main Experience Page (7 Section Scrolling Page)**:
  - **Hero Section**: Judul "Happy Birthday To Someone Special", nama recipient, dan tombol indikator scroll.
  - **Personal Message Section**: Kartu glassmorphism dengan pesan pembuka personal.
  - **Physical Letter Section**: Tampilan surat fisik vintage dengan tekstur kertas, border emas, tipografi serif, dan tanda tangan tulisan tangan.
  - **Compact Music Player Section**: Vinyl artwork berputar, kontrol play/pause, seek progress bar, counter durasi, dan visualizer equalizer bars.
  - **Memories / Photos Section**: Layout scrapbook Polaroid miring dengan pin, caption, dan efek hover straighten & shadow.
  - **Small Surprise Section**: Kotak kado 3D interaktif yang terbuka saat diklik, confetti particle explosion, dan pesan kejutan manis.
  - **Final Section**: Pesan penutup heartfelt dan tombol "Replay Experience" untuk mengulang dari awal.
- **Visual & Polish**:
  - Tema warna deep burgundy, wine, rose soft, dan aksen emas.
  - Google Fonts terintegrasi (`Cormorant Garamond`, `Dancing Script`, `Plus Jakarta Sans`).
  - Animasi entrance berbasis `IntersectionObserver` & GSAP saat di-scroll.
  - Dukungan `prefers-reduced-motion` dan aksesibilitas keyboard.
- **Separation of Content**:
  - Modul data terpusat `src/content.js` terhubung dengan `CONTENT.md`.

---

## [0.11.1] — 2026-09-09

### Fixed

- Welcome title no longer splits words across lines ("Irma" stays whole)
  - Char-split now groups letters per word in `white-space: nowrap` spans
  - Line breaks only occur at spaces between words
- Welcome title font is now fluid: `clamp(1.4rem, 3.5vw, 2.2rem)` for clean wrapping on mobile

---

## [0.11.0] — 2026-09-09

### Added

- Final personal content filled in (no placeholders):
  - Recipient name: Octaviya Irma Afriyani
  - Sender name: Gibran Wicaksono
  - Photo captions: Aesthetic Girl, Buddhiee Luv, Luv
  - 4 letter paragraphs (personal, with emoji)
  - Signature: With love, Gibran Wicaksono ❤️
  - Surprise reveal text
  - Final message & closing with recipient name
- `recipientName` and `senderName` now shared via constants in `content.js`
- CONTENT.md fully synced with final content
- Production build verified

---

## [0.10.1] — 2026-09-09

### Changed

- Gallery photos now use `object-fit: contain` — no more cropping, full image visible
- Slide background restyled as dark elegant letterbox panel (burgundy radial → black)
- Added gold frame border via `::after` overlay for cinematic framing
- Caption stays on top of the frame

---

## [0.10.0] — 2026-09-09

### Added

- Real photos integrated into gallery (3 images, object-fit cover + caption overlay)
- Music track integrated: "Tresno Tekan Mati" — NDX AKA
- Gallery placeholder swapped for `<img loading="lazy">` with alt text
- Photo caption overlay with bottom gradient
- CONTENT.md asset paths synced with actual files
- Production build verified with assets copied to `dist/`

---

## [0.9.0] — 2026-09-09

### Added

- `prefers-reduced-motion` support (GSAP + CSS)
  - Perpetual animations (envelope float, gift bob, music bars) disabled
  - Entrance animations reduced to minimal duration
- Keyboard navigation for menu cards (Enter/Space)
- Keyboard navigation for back buttons (Enter/Space)
- `role="button"` + `tabindex` on menu cards
- `:focus-visible` gold outline for keyboard users
- `aria-hidden` on decorative card icons
- Tablet responsive breakpoint (768px)
- Production build verified (`npm run build`)

---

## [0.8.0] — 2026-09-09

### Added

- Surprise scene with gift box reveal
- Animatable gift box (lid + bow) with float animation
- Reveal button that triggers confetti + gift transform
- Confetti particle effect (40 pieces, GSAP)
- Surprise text reveal with scale/bounce
- Final scene with heartfelt closing message
- "Watch Again" restart button (location.reload)
- Surprise + confetti + final CSS styles
- Mobile responsive updates

---

## [0.7.0] — 2026-09-09

### Added

- Music scene with HTML5 Audio player
- Play/pause toggling
- Animated visualizer bars (GSAP yoyo)
- Progress bar with time display
- Track name and artist display
- Auto-reset on track end
- Back button navigation to menu
- Music player CSS styles
- Mobile responsive updates

---

## [0.6.0] — 2026-09-09

### Added

- Letter scene with paper-style layout
- 4 paragraphs loaded from content data
- GSAP staggered paragraph reveal animation
- Gold signature display
- Back button navigation to menu
- Letter + paper CSS styles
- Mobile responsive updates

---

## [0.5.0] — 2026-09-09

### Added

- Gallery scene with 3-slide auto-advancing slideshow
- Photo placeholder cards (gradient placeholder)
- Caption display for each photo
- Dot navigation to switch slides
- GSAP slide transitions (slide-out/slide-in)
- Back button navigation to menu
- Placeholder scenes for letter, music, surprise
- Gallery + placeholder CSS styles
- Mobile responsive updates

---

## [0.4.0] — 2026-09-09

### Added

- Menu scene with 4 surprise cards (Gallery, Letter, Music, Gift)
- 2x2 card grid layout with backdrop blur
- Card hover effects (lift, glow, border highlight)
- GSAP stagger entrance animation for cards
- Click handler to navigate to target scene
- Menu + card CSS styles
- Mobile responsive updates

---

## [0.3.0] — 2026-09-09

### Added

- Welcome scene with dynamic name display
- Character-by-character GSAP text reveal animation
- Auto-advance to menu after 4.5 seconds
- "Continue" button for manual advance
- Menu scene placeholder
- Welcome + menu CSS styles
- Mobile responsive updates

---

## [0.2.0] — 2026-09-09

### Added

- Opening scene with animated envelope
- Envelope flap open animation (CSS rotateX)
- Letter reveal inside envelope on open
- GSAP entrance animation (scale + fade-in)
- Idle floating animation on envelope
- Button hover glow effect
- Scene transition system (`showScene()`)
- Opening → Welcome scene transition
- Welcome scene placeholder
- Responsive styles for mobile (480px)
- Content data object in main.js

---

## [0.1.0] — 2026-09-09

### Added

- Project scaffold with Vite + Vanilla JS
- GSAP dependency installed
- Basic `index.html` with `#app` container
- Basic `style.css` with scene foundation styles
- Basic `main.js` with opening scene placeholder
- Asset directory structure: `images/`, `music/`, `decorations/`
- Project documentation:
  - `AGENTS.md` — coding agent rules
  - `TODO.md` — development roadmap
  - `PROJECT_SPEC.md` — project specification
  - `ARCHITECTURE.md` — architecture documentation
  - `CONTENT.md` — content placeholder
  - `CHANGELOG.md` — this file
