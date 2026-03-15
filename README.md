# 📖 Kitab Git & GitHub Ultimate

Selamat datang di repositori **Kitab Git**! Proyek ini saya buat secara eksklusif untuk pembelajaran komprehensif tentang Git dan GitHub, dari mulai perintah dasar hingga solusi mengatasi error paling umum (seperti *Merge Conflict* dan *Blank Screen* di GitHub Pages).

Tujuan dari aplikasi web interaktif ini adalah agar siapa pun, bahkan pemula, tidak pernah lagi takut memencet tombol *push* karena takut kodenya error atau hilang!

---

## 🌟 Fitur Utama (Apa Saja yang Dibahas di Aplikasi?)

1.  **Pengenalan Git & GitHub:** Konsep dasar untuk pemula.
2.  **Instalasi & Konfigurasi:** Mulai dari instalasi hingga konfigurasi wajib (`user.name` & `user.email`).
3.  **Alur Kerja Utama (Cara Edit Lokal & Push):** Menjawab secara langsung dan sangat detail langkah demi langkah (*pull -> edit -> add -> commit -> push*) agar tidak pernah error saat sinkronisasi kode lokal dengan GitHub.
4.  **Kamus Perintah Wajib:** Ringkasan perintah Git esensial (`init`, `clone`, dll).
5.  **Branching & Merging:** Fitur penting yang membedakan Git dari sekadar menyalin folder.
6.  **Solusi Error & Troubleshooting:** Cara menyelesaikan masalah *Updates were rejected*, *Merge Conflict*, dan lain-lain.

---

## 🛠️ Kenapa Web Saya di GitHub Pages *Blank* Putih? (Solusinya)

*(Jawaban untuk masalah GitHub Pages yang Anda tanyakan!)*

Jika Anda menggunakan React / Vite (seperti aplikasi ini), **Anda tidak bisa** langsung meng-*upload* *source code* aslinya (`.tsx`, `.ts`) ke GitHub Pages. Browser hanya memahami HTML, CSS, dan JavaScript mentah.

### Cara Mengatasi Layar Putih (Blank) dan Cara Publish:

1.  **Atur Konfigurasi Base:**
    Di proyek Anda, buka file `vite.config.ts`. Pastikan Anda sudah menambahkan kode `base: './'` seperti di bawah ini agar GitHub Pages bisa melacak alamat sub-folder proyek Anda (`/kitab-git-github/`):
    ```typescript
    export default defineConfig({
      base: './', // <--- INI WAJIB ADA!
      plugins: [react(), viteSingleFile()],
    });
    ```
    *(Saya sudah mengatur ini di proyek Anda saat ini!)*

2.  **Lakukan Build (Wajib!):**
    Buka terminal di komputer lokal Anda, lalu jalankan perintah:
    ```bash
    npm run build
    ```
    Tunggu sampai selesai. Perintah ini akan menghasilkan folder baru bernama **`dist/`**. Folder ini berisi file web yang sudah matang dan siap dibaca oleh browser.

3.  **Upload ke GitHub Pages:**
    Anda hanya perlu mengunggah (push) isi dari folder `dist/` ke repositori GitHub Anda (biasanya ditaruh di *branch* `gh-pages` atau di *root* jika Anda mengatur *source* Pages ke *root*).

---

## 🚀 Cara Menjalankan Proyek Ini di Lokal

Jika Anda ingin mencoba mengubah tampilan Kitab Git ini:

1. Pastikan Node.js sudah terinstal.
2. Clone repositori ini atau *download* ZIP-nya.
3. Buka terminal di folder proyek ini dan ketik:
   ```bash
   npm install
   ```
4. Untuk menjalankan *server* pengembangan lokal, ketik:
   ```bash
   npm run dev
   ```
5. Buka `http://localhost:5173/` di browser Anda.

---

*Dibuat khusus untuk Anda sebagai media pembelajaran Git & GitHub yang mendalam.* Semoga bermanfaat!
