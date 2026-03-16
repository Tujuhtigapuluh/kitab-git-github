# 📖 Kitab Git & GitHub Ultimate
Selamat datang di repositori Kitab Git & GitHub Ultimate! 🚀
Proyek ini diciptakan sebagai "Buku Suci" komprehensif bagi siapa saja yang ingin menguasai version control dari nol hingga mahir.

Tujuan utama panduan ini adalah menghilangkan rasa takut saat memencet tombol git push. Anda tidak perlu lagi panik kode hilang, tertimpa, atau error saat bekerja sendiri maupun di dalam tim.

---

## 📑 Daftar Isi

1.  🌟 Alur Kerja Wajib Anti-Error (Daily Workflow)
2.  📚 Kamus Lengkap Perintah Git
3.  🛠️ Kenapa Web React/Vite Blank Putih di GitHub Pages?
4.  🚀 Solusi PRO: Auto-Deploy via GitHub Actions (YML)
5.  🚑 P3K Git: Cara Mengatasi Error Paling Sering Terjadi
6.  💻 Cara Menjalankan Proyek Ini di Lokal

---

## 1. 🌟 Alur Kerja Wajib Anti-Error (Daily Workflow)

Ini adalah SOP (Standar Operasional Prosedur) harian yang wajib dilakukan agar kode lokal Anda dan kode di GitHub selalu sinkron tanpa error.
Langkah demi Langkah (Lakukan Berurutan):

### Cara Mengatasi Layar Putih (Blank) dan Cara Publish:

1.  git pull origin main
(SELALU LAKUKAN INI SEBELUM NGODING! Menarik update terbaru dari GitHub ke laptop Anda agar tidak bentrok).
2.  Ngoding & Edit File
(Buka VS Code, lakukan perubahan pada kode Anda, lalu save).
3.  git add .
(Memasukkan semua file yang baru diedit ke dalam "keranjang belanja" / Staging Area).
4.  git commit -m "fitur: menambahkan tombol login"
(Memberikan label/catatan pada perubahan Anda. Gunakan pesan yang jelas).
5.  git push origin main
(Mengunggah "keranjang" yang sudah dilabeli tadi ke server GitHub).

---

## 2. 📚 Kamus Lengkap Perintah Git 
Berikut adalah perintah-perintah yang akan menjadi senjata utama Anda sehari-hari:

Konfigurasi Awal (Wajib Saat Pertama Instal Git)

  1. git config --global user.name "Nama Anda" : Mengatur nama Anda.
  2. git config --global user.email "email@anda.com" : Mengatur email (samakan dengan email akun GitHub).
   
Memulai Proyek
  1. git init : Menyulap folder biasa menjadi repositori Git (hanya dilakukan 1x di awal).
  2. git clone <url-repo> : Mengunduh proyek dari GitHub ke laptop.
   
Cek Status & Riwayat
  1. git status : Mengecek file mana saja yang diubah, dihapus, atau baru ditambahkan (SANGAT PENTING).
  2. git log : Melihat riwayat commit (siapa yang ngoding, kapan, dan pesan commit-nya). Tekan q untuk keluar dari log.
   
Branching & Merging (Bekerja Paralel)
  1. git branch : Melihat daftar cabang (branch) yang ada.
  2. git checkout -b <nama-branch> atau git switch -c <nama-branch> : Membuat cabang baru sekaligus berpindah ke cabang tersebut.
  3. git merge <nama-branch> : Menggabungkan kode dari branch lain ke branch Anda saat ini.

---

## 3. 🛠️ Kenapa Web React/Vite Blank Putih di GitHub Pages?
   
Jika Anda mendeploy proyek React/Vite ke GitHub Pages dan yang muncul hanya Layar Blank Putih, itu karena GitHub Pages tidak bisa membaca file mentah (.tsx / .jsx). Browser hanya memahami HTML, CSS, dan JavaScript mentah yang sudah di-build (dikompilasi).

Selain itu, jika Anda tidak mengatur parameter base di Vite, GitHub Pages akan kebingungan mencari letak assets (seperti gambar dan file CSS) karena direktori path-nya tidak sesuai.

Mari kita selesaikan masalah ini secara permanen di langkah selanjutnya!

---
## 4. 🚀 Solusi PRO: Auto-Deploy via GitHub Actions (YML)

Ini adalah cara paling modern dan direkomendasikan langsung oleh GitHub. Setiap kali Anda melakukan git push, GitHub akan otomatis mem-build dan mem-publish web Anda ke GitHub Pages di belakang layar.

Langkah 1: Wajib Atur base di Vite
* Buka file vite.config.ts. Pastikan Anda menambahkan baris base yang berisi nama repositori GitHub Anda.
```bash

import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  base: './', // Menghindari masalah blank putih di GitHub Pages
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

```

---
Langkah 2: Buat File deploy.yml (Jantung Otomatisasinya)

Di dalam folder proyek Anda, buat folder baru bernama .github, lalu di dalamnya buat folder workflows. Di dalam folder workflows tersebut, buat file deploy.yml.
(Struktur foldernya: proyek-anda/.github/workflows/deploy.yml).

Copy & paste kode ini ke dalam deploy.yml:
```bash
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
      - master

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        # BAGIAN PENTING: Menambahkan --base=/nama-repo/ agar build Vite tidak menyebabkan blank screen (white screen) di GitHub Pages.
        run: npx tsc -b && npx vite build --base=/${{ github.event.repository.name }}/

      - name: Setup Pages
        uses: actions/configure-pages@v4
        with:
          enablement: true

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 📂 Struktur Proyek React/Vite

Untuk proyek yang menggunakan React + Vite dengan build tool dan CI/CD:

```bash

📂 nama-folder-project/
├── 📂 .github/
│   └── 📂 workflows/
│       └── 📄 deploy.yml        # Workflow GitHub Actions untuk build & deploy ke GitHub Pages
│
├── 📂 public/                   # File statis (favicon, manifest, dll.)
│   └── 📄 favicon.ico
│
├── 📂 src/                      # Source code utama aplikasi
│   ├── 📂 assets/               # Gambar, ikon, font, dll.
│   ├── 📂 components/           # Komponen React reusable
│   ├── 📂 pages/                # Halaman utama aplikasi
│   ├── 📄 App.tsx               # Root komponen React
│   ├── 📄 index.css             # File CSS utama/global styling
│   └── 📄 main.tsx              # Entry point aplikasi
│
├── 📄 .gitignore                # File/folder yang diabaikan Git
├── 📄 index.html                # Template HTML utama
├── 📄 package.json              # Konfigurasi npm, dependencies, scripts
├── 📄 tsconfig.json             # Konfigurasi TypeScript
├── 📄 vite.config.ts            # Konfigurasi Vite (build, plugin, alias)
└── 📄 README.md                 # Dokumentasi proyek

```

⚙️ Pengaturan GitHub (Sangat Penting!)

| Langkah | Aksi                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------- |
| 1       | Buka repository Anda di GitHub                                                                          |
| 2       | Klik tab **⚙️ Settings** (Pengaturan)                                                                   |
| 3       | Di menu sebelah kiri, klik **Pages**                                                                    |
| 4       | Pada bagian **Build and deployment**, ubah **Source**:<br>`Deploy from a branch` → **`GitHub Actions`** |


## 📂 Struktur Proyek Mentah (HTML/CSS/JS)

Untuk proyek statis sederhana tanpa build tool:

```bash

📂 nama-folder-project/
├── 📄 index.html                # Template HTML utama
├── 📄 script.js                 # File JavaScript
└── 📄 style.css                 # File CSS

```

| Langkah | Aksi                                                                                     |
| ------- | ---------------------------------------------------------------------------------------- |
| 1       | Buka repository Anda di GitHub                                                           |
| 2       | Klik tab **⚙️ Settings** (Pengaturan)                                                    |
| 3       | Di menu sebelah kiri, klik **Pages**                                                     |
| 4       | Pada bagian **Build and deployment**, pastikan **Source**:<br>**`Deploy from a branch`** |
| 5       | **Branch**: pilih `main` (atau `master`)                                                 |
| 6       | **Folder**: pilih `/(root)`                                                              |
| 7       | Klik **Save**                                                                            |
 
```bash

Branch

╰┈➤ 「 ⚧ main 」 ╰┈➤ 「 📂/root 」 👉 「 save 」

```

📋 Ringkasan Perbedaan


| Aspek             | React/Vite                       | HTML/CSS/JS Mentah   |
| ----------------- | -------------------------------- | -------------------- |
| **Build Tool**    | Vite + Node.js                   | Tidak ada            |
| **Source**        | GitHub Actions                   | Deploy from a branch |
| **Dependencies**  | npm packages                     | Tidak ada            |
| **Build Process** | Perlu build (`npm run build`)    | Langsung deploy      |
| **File Config**   | `vite.config.ts`, `package.json` | Hanya HTML, CSS, JS  |

---

Langkah 3: Push Kode Anda!

* Buka terminal dan lakukan rutinitas:
```bash
git add .
git commit -m "setup: menambahkan auto-deploy github actions"
git push origin main
```

*"Selesai! 🎉 Cek tab "Actions" di repositori GitHub Anda. Jika prosesnya centang hijau, web Anda sudah online dan bebas blank screen!"*

---

5. 🚑 P3K Git: Cara Mengatasi Error Paling Sering Terjadi
   
Jangan panik! Semua error di Git ada obatnya.

1. Error: Updates were rejected because the remote contains work...
Penyebab: Ada kode di GitHub yang belum ada di laptop Anda, tapi Anda memaksa untuk git push.
Solusi: Tarik dulu kodenya! Jalankan:
```bash
git pull origin main
```
Setelah berhasil di-pull, baru lakukan git push origin main lagi.

---

2. Error: Merge Conflict 💥
   
Penyebab: Anda dan teman Anda mengedit baris kode yang sama di file yang sama.

* Solusi:
1. Buka file yang berkonflik di VS Code.
2. Anda akan melihat tanda aneh seperti <<<<<<< HEAD, =======, dan >>>>>>>.
3. Pilih salah satu kode yang ingin dipertahankan (Gunakan tombol "Accept Current Change" atau "Accept Both Changes" di VS Code).  
4. Simpan file, lalu jalankan:
```bash
git add .
git commit -m "fix: resolve merge conflict"
git push origin main
```

---

3. Duh, Salah Ketik Pesan Commit! (Sebelum di Push)
   
* Solusi: Cukup ketik perintah ini untuk mengganti pesan commit terakhir:
```bash
git commit --amend -m "pesan commit yang benar"
```

---

4. Terlanjur git add . padahal ada file rahasia (seperti .env)
   
* Solusi: Batalkan dengan cara:
```bash
git reset
```
*(Jangan lupa masukkan file rahasia tersebut ke dalam .gitignore sebelum melakukan add lagi).*

---

6. 💻 Cara Menjalankan Proyek Ini di Lokal
   
Ingin mengoprek, mencoba, atau berkontribusi pada panduan interaktif ini? Ikuti langkah berikut:

1. Persiapan: Pastikan Node.js dan Git sudah terinstal di komputer Anda.
2. Clone Repo:
   
```bash
git clone https://github.com/username-anda/kitab-git-github.git
```
3. Masuk ke Folder Proyek:
   
```bash
cd kitab-git-github
```
4. Instal Dependensi (Wajib):
   
```bash
npm install
```
5. Jalankan Server Lokal:
```bash
npm run dev
```
6. Buka di Browser: Buka alamat http://localhost:5173/ yang muncul di terminal Anda.
   
---
*💡 Dibuat dari Developer, oleh Developer, untuk Developer.
Mari jadikan error sebagai teman belajar, bukan halangan! Happy Coding! ☕💻*

## Bintang Toba
