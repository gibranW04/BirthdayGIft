# Architecture

## Single-Page Architecture

Seluruh website berjalan dari satu `index.html`. Tidak ada multiple pages atau page reload. Website menggunakan alur interaktif bertahap yang berakhir pada satu halaman scrolling utama:

```
Phase 1: Flower Mini Game (data-scene="game")
    ↓ (Kumpulkan 5 bunga)
Phase 2: Unlock Letter Envelope (data-scene="envelope")
    ↓ (Buka amplop)
Phase 3: One Long Main Experience Page (data-scene="main-experience")
    ├── Section 1: Hero / Birthday (#sec-hero)
    ├── Section 2: Personal Message (#sec-personal)
    ├── Section 3: Physical Letter (#sec-letter)
    ├── Section 4: Compact Music Player (#sec-music)
    ├── Section 5: Memories / Polaroid Scrapbook (#sec-memories)
    ├── Section 6: Small Surprise Gift Box (#sec-surprise)
    └── Section 7: Final Closing & Replay (#sec-final)
```

## Scene System

Scene awal dikontrol via GSAP dan CSS visibility:
- **Game Scene**: `data-scene="game"`
- **Envelope Scene**: `data-scene="envelope"`
- **Main Experience Scene**: `data-scene="main-experience"` (Scrolling container `overflow-y: auto`)

```css
.scene {
  display: none;
  position: absolute;
  inset: 0;
}
.scene.active {
  display: flex;
}
.scene[data-scene="main-experience"].active {
  display: block;
  overflow-y: auto;
}
```

## State Management

State aplikasi disimpan dalam objek global sederhana di `main.js`:

```js
const state = {
  currentScene: "game",
  collectedFlowers: 0,
  isPlayingMusic: false,
  envelopeOpened: false,
  surpriseOpened: false,
};
```

## Content & Data Separation

Content dipisahkan dari logic utama dan disimpan di `src/content.js`:

- `src/content.js` → configurable text, photo list, track audio, game settings.
- `main.js` membaca data dari `content.js`.

## Asset Structure

```
public/
├── favicon.svg
├── icons.svg
└── assets/
    ├── images/          → Foto recipient (centil1.jpeg, centilbgt.jpeg, us.jpeg)
    ├── music/           → Audio (tresno tekan mati ndx.mp3)
    └── decorations/     → SVGs / visual assets
```

## Animation & Visual Features

- **GSAP**: Digunakan untuk animasi entrance, hover/click micro-interactions, petal burst particles, confetti explosion, dan transisi scene.
- **IntersectionObserver**: Digunakan untuk scroll reveal animasi pada setiap section di Main Experience.
- **HTML5 Audio API**: Digunakan untuk music player interaktif.
- **Reduced Motion Support**: Memeriksa `prefers-reduced-motion` untuk performa dan aksesibilitas.
