# 📖 Kitab Git & GitHub

**Panduan Lengkap Belajar Git dan GitHub dari Nol — untuk Pemula**

🌐 **Live Demo:** [https://tujuhtigapuluh.github.io/kitab-git-github/](https://tujuhtigapuluh.github.io/kitab-git-github/)

---

## 📋 Daftar Isi (21 Bab)

| No | Bab | Kategori |
|----|-----|----------|
| 1 | Pengenalan Git & GitHub | Dasar |
| 2 | Instalasi Git | Dasar |
| 3 | Konfigurasi Awal | Dasar |
| 4 | Membuat Repository | Dasar |
| 5 | Memahami 3 Area Git | Dasar |
| 6 | Perintah Dasar Git | Perintah |
| 7 | Remote Repository & GitHub | Perintah |
| 8 | ⭐ **Edit Lokal & Push ke GitHub** | Perintah |
| 9 | Branching (Percabangan) | Lanjutan |
| 10 | Merging & Merge Conflict | Lanjutan |
| 11 | File .gitignore | Lanjutan |
| 12 | Git Stash (Simpan Sementara) | Lanjutan |
| 13 | Git Reset & Revert | Lanjutan |
| 14 | Git Tag (Versi Rilis) | Lanjutan |
| 15 | Setup SSH Key | Lanjutan |
| 16 | Pull Request di GitHub | GitHub |
| 17 | GitHub Pages (Deploy Web) | GitHub |
| 18 | Git Log & History Lanjutan | GitHub |
| 19 | Tips & Trik Git | Bonus |
| 20 | Solusi Error Umum | Bonus |
| 21 | Glosarium & Istilah Git | Bonus |

---

## 🚀 Cara Deploy ke GitHub Pages

### Jika Website Blank Putih, Ikuti Langkah Ini:

**Cara yang paling mudah — push isi folder `dist`:**

```bash
# 1. Clone repo ini
git clone https://github.com/tujuhtigapuluh/kitab-git-github.git
cd kitab-git-github

# 2. Install dependencies
npm install

# 3. Build proyek
npm run build

# 4. Masuk ke folder hasil build
cd dist

# 5. Inisialisasi git di folder dist
git init
git add .
git commit -m "deploy"

# 6. Push ke branch gh-pages
git push -f https://github.com/tujuhtigapuluh/kitab-git-github.git main:gh-pages
```

**Lalu di GitHub:**
1. Buka repo → **Settings** → **Pages**
2. Source: pilih branch **gh-pages**, folder **/ (root)**
3. Klik **Save**
4. Tunggu 1-2 menit, website akan live!

### Alternatif: Gunakan gh-pages package

```bash
npm install -D gh-pages
npx gh-pages -d dist
```

---

## 🛠️ Development

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

---

## 📄 Teknologi

- **React 19** + **TypeScript**
- **Vite 7** (build tool)
- **Tailwind CSS 4** (styling)
- **vite-plugin-singlefile** (bundle menjadi 1 file HTML)

---

## 📝 Lisensi

MIT License — Bebas digunakan, dimodifikasi, dan didistribusikan.
