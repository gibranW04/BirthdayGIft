# Project Specification

## Overview

Birthday Surprise adalah interactive single-page website yang dirancang sebagai kejutan digital personal. Website ini menyajikan rangkaian scene animasi dengan transisi cinematic, dari membuka amplop digital hingga pesan penutup.

Visual terinspirasi dari referensi video, tetapi seluruh desain dan implementasi harus original.

## User Experience Flow

```
Opening Envelope
    ↓
Welcome Scene
    ↓
Choose Your Surprise (Menu)
    ↓
┌──────────┬──────────┬──────────┬──────────┐
│ Gallery  │  Letter  │  Music   │ Surprise │
│(Memories)│          │          │  / Gift  │
└──────────┴──────────┴──────────┴──────────┘
    ↓
Final Message
```

User membuka website → melihat amplop digital → klik untuk membuka → masuk ke welcome message → memilih salah satu surprise dari menu → setiap pilihan membawa ke scene yang berbeda → semua scene berakhir di final message.

## Design Direction

- **Mood**: Romantic, dreamy, elegant, cinematic
- **Color Palette**: Dark romantic — deep pink (#c2185b), burgundy (#880e4f), soft rose (#f48fb1), dark background (#1a0a10), gold accent (#ffd54f)
- **Typography**: Serif untuk heading (elegant), Sans-serif untuk body (clean)
- **Effects**: Soft glow, light particles, gradient overlays, depth through layering
- **Tone**: Intimate, personal, warm

## Scenes

### 1. Opening
- Amplop digital dengan animasi membuka
- Triggered by user click ("Open Me" button)
- Transisi smooth ke Welcome

### 2. Welcome
- Pesan selamat datang / selamat ulang tahun
- Nama recipient ditampilkan prominent
- Transisi ke Menu setelah beberapa detik atau click

### 3. Menu (Choose Your Surprise)
- Grid atau cards dengan pilihan: Gallery, Letter, Music, Surprise
- Setiap card punya ikon dan label
- Klik card → navigasi ke scene terkait

### 4. Gallery (Memories)
- Slideshow atau grid foto dengan animasi
- Caption untuk setiap foto
- Navigasi kembali ke menu

### 5. Letter
- Surat digital dengan animasi typewriter atau fade-in per paragraf
- Background elegant
- Navigasi kembali ke menu

### 6. Music
- Player musik dengan visual progress
- Background visual yang mendukung mood
- Opsi autoplay atau manual play

### 7. Surprise / Gift
- Reveal animation untuk kejutan (teks, gambar, atau video)
- Confetti atau particle effects
- Moment of surprise harus impactful

### 8. Final Message
- Pesan penutup yang heartfelt
- Closing statement dari pembuat
- End screen dengan opsi restart

## Animation & Interaction

- Semua transisi scene menggunakan GSAP
- Enter animation: fade-in, slide-up, scale, atau kombinasi
- Exit animation: fade-out, slide-out, atau dissolve
- Hover effects pada interactive elements
- Scroll-triggered animations jika konten panjang
- Micro-interactions pada buttons dan cards

## Responsive Design

- **Desktop**: Full visual experience, hover effects, multi-column layout
- **Tablet**: Adapted layout, touch-friendly interactions
- **Mobile**: Single column, optimized touch targets, reduced particles jika performa rendah
- Breakpoints: 768px (tablet), 480px (mobile)

## Accessibility

- Semantic HTML untuk setiap scene
- Alt text untuk semua gambar
- Keyboard navigation untuk interactive elements
- `prefers-reduced-motion`: disable atau simplify animations
- Sufficient color contrast ratios
- Focus indicators untuk keyboard users
- Audio controls yang accessible

## Technology

| Tool | Purpose |
|---|---|
| Vite | Build tool & dev server |
| Vanilla JavaScript | Application logic |
| HTML5 | Structure & semantics |
| CSS3 | Styling & basic animations |
| GSAP | Complex animations & transitions |
| HTML5 Audio | Music playback |

**Tidak menggunakan**: React, Vue, Angular, Laravel, Bootstrap, Tailwind, jQuery, atau framework lainnya.
