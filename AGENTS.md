# Agents Rules

Aturan ini berlaku untuk semua coding agents yang bekerja pada project Birthday Surprise.

## Must Do

1. **Baca dokumentasi** (`PROJECT_SPEC.md`, `ARCHITECTURE.md`, `CONTENT.md`) sebelum memulai coding
2. **Ikuti technology stack**: Vite + Vanilla JS + HTML5 + CSS3 + GSAP + HTML5 Audio
3. **Gunakan incremental development** — buat perubahan kecil, test, lalu lanjut
4. **Single-page scene architecture** — semua scene dalam satu index.html
5. **Gunakan GSAP** untuk semua animasi kompleks dan transisi
6. **Pisahkan content dari logic** — teks dan data tidak hardcode di JS
7. **Responsive design** — cek tampilan di desktop dan mobile
8. **Accessibility** — semantic HTML, alt text, keyboard nav, reduced motion support
9. **Test setelah setiap perubahan** — `npm run dev` lalu cek manual
10. **Update TODO.md** — tandai task yang selesai
11. **Update CHANGELOG.md** — catat perubahan di setiap milestone

## Must NOT Do

1. **Jangan ganti technology stack** — tidak React, Vue, Angular, Bootstrap, Tailwind, jQuery
2. **Jangan membuat project ulang** — kembangkan dari yang sudah ada
3. **Jangan tambah dependency** tanpa alasan kuat dan approval
4. **Jangan merusak fitur yang sudah ada** — selalu test sebelum push
5. **Jangan over-engineer** — pertahankan kesederhanaan
6. **Jangan hardcode content** — gunakan content files
7. **Jangan skip responsive check** — selalu cek mobile view
8. **Jangan commit tanpa test** — pastikan `npm run dev` berjalan

## Development Workflow

```
1. Baca task di TODO.md
2. Baca dokumentasi terkait
3. Buat perubahan kecil
4. Test dengan npm run dev
5. Cek responsive (mobile + desktop)
6. Update TODO.md
7. Update CHANGELOG.md
8. Lanjut ke task berikutnya
```

## File Editing Rules

- Edit file yang sudah ada, jangan buat file baru tanpa alasan
- Ikuti code style yang sudah ada
- Jangan hapus kode yang masih diperlukan
- Komentari hanya jika logic-nya kompleks
