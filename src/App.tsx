import { useState, useRef, useEffect, type ReactNode } from 'react';

// ============================================================
// ICON COMPONENTS (SVG inline agar tidak bergantung library)
// ============================================================
const Icon = ({ children, className = "w-5 h-5" }: { children: ReactNode; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>{children}</svg>
);

const BookIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></Icon>;
const TerminalIcon = ({ className }: { className?: string }) => <Icon className={className}><polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" /></Icon>;
const DownloadIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></Icon>;
const SettingsIcon = ({ className }: { className?: string }) => <Icon className={className}><circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></Icon>;
const FolderIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></Icon>;
const LayersIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 12-8.58 3.91a2 2 0 0 1-1.66 0L2 12" /><path d="m22 17-8.58 3.91a2 2 0 0 1-1.66 0L2 17" /></Icon>;
const GitBranchIcon = ({ className }: { className?: string }) => <Icon className={className}><line x1="6" x2="6" y1="3" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" /></Icon>;
const GitMergeIcon = ({ className }: { className?: string }) => <Icon className={className}><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M6 21V9a9 9 0 0 0 9 9" /></Icon>;
const AlertIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" x2="12" y1="9" y2="13" /><line x1="12" x2="12.01" y1="17" y2="17" /></Icon>;
// UploadIcon dihapus karena tidak digunakan
const CloudIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></Icon>;
const StarIcon = ({ className }: { className?: string }) => <Icon className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></Icon>;
const KeyIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777Zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" /></Icon>;
const EyeOffIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></Icon>;
const TagIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" /><path d="M7 7h.01" /></Icon>;
const UsersIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Icon>;
const GlobeIcon = ({ className }: { className?: string }) => <Icon className={className}><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></Icon>;
const ArchiveIcon = ({ className }: { className?: string }) => <Icon className={className}><rect width="20" height="5" x="2" y="3" rx="1" /><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" /><path d="M10 12h4" /></Icon>;
const UndoIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="M3 7v6h6" /><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" /></Icon>;
const ClockIcon = ({ className }: { className?: string }) => <Icon className={className}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></Icon>;
const LightbulbIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></Icon>;
const BookmarkIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /></Icon>;
const CheckIcon = ({ className }: { className?: string }) => <Icon className={className}><polyline points="20 6 9 17 4 12" /></Icon>;
const CopyIcon = ({ className }: { className?: string }) => <Icon className={className}><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></Icon>;
const MenuIcon = ({ className }: { className?: string }) => <Icon className={className}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></Icon>;
const XIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></Icon>;
const SearchIcon = ({ className }: { className?: string }) => <Icon className={className}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></Icon>;
const ChevronRightIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="m9 18 6-6-6-6" /></Icon>;
const ArrowRightIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></Icon>;
const ArrowLeftIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></Icon>;
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// ============================================================
// CODE BLOCK COMPONENT
// ============================================================
function CodeBlock({ children, title }: { children: string; title?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = children.replace(/^\$ /gm, '').replace(/^# .*$/gm, '').trim();
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative group my-3">
      {title && <div className="bg-slate-700 text-slate-300 text-xs px-4 py-1.5 rounded-t-lg font-mono">{title}</div>}
      <div className={`bg-slate-900 ${title ? 'rounded-b-lg' : 'rounded-lg'} p-4 font-mono text-sm overflow-x-auto shadow-inner`}>
        <button onClick={handleCopy} className="absolute top-2 right-2 p-1.5 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" title="Copy">
          {copied ? <CheckIcon className="w-3.5 h-3.5 text-green-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
        </button>
        <pre className="text-green-400 whitespace-pre-wrap leading-relaxed"><code>{children}</code></pre>
      </div>
    </div>
  );
}

// ============================================================
// REUSABLE UI COMPONENTS
// ============================================================
function InfoBox({ type, title, children }: { type: 'info' | 'warning' | 'success' | 'danger' | 'tip'; title?: string; children: ReactNode }) {
  const styles = {
    info: 'bg-blue-50 border-blue-400 text-blue-900',
    warning: 'bg-amber-50 border-amber-400 text-amber-900',
    success: 'bg-emerald-50 border-emerald-400 text-emerald-900',
    danger: 'bg-red-50 border-red-400 text-red-900',
    tip: 'bg-purple-50 border-purple-400 text-purple-900',
  };
  const icons = {
    info: '💡', warning: '⚠️', success: '✅', danger: '❌', tip: '💎',
  };
  return (
    <div className={`border-l-4 p-4 rounded-r-lg my-4 ${styles[type]}`}>
      {title && <p className="font-bold mb-1">{icons[type]} {title}</p>}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function SectionTitle({ children, id }: { children: ReactNode; id?: string }) {
  return <h3 id={id} className="text-xl font-bold text-gray-800 mt-8 mb-3 flex items-center gap-2">{children}</h3>;
}

// ============================================================
// CHAPTER DATA — KITAB GIT LENGKAP
// ============================================================
interface Chapter {
  id: string;
  title: string;
  icon: ReactNode;
  category: string;
  content: ReactNode;
}

const chapters: Chapter[] = [
  // ===== BAB 1: PENGENALAN =====
  {
    id: 'pengenalan',
    title: '1. Pengenalan Git & GitHub',
    icon: <BookIcon className="w-4 h-4" />,
    category: 'Dasar',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">📖 Pengenalan Git & GitHub</h2>
        <p className="text-gray-700 leading-relaxed text-base">
          Selamat datang di <strong>Kitab Git & GitHub</strong>! Panduan ini dirancang khusus untuk Anda yang baru pertama kali belajar Git, atau sudah pernah menggunakan tapi masih sering bingung. 
          Di sini, setiap konsep dijelaskan dari nol dengan bahasa yang mudah dipahami, lengkap dengan contoh nyata.
        </p>

        <SectionTitle>Apa itu Version Control System (VCS)?</SectionTitle>
        <p className="text-gray-700 leading-relaxed">
          Bayangkan Anda sedang menulis skripsi. Pernah menyimpan file seperti ini?
        </p>
        <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm text-gray-700 space-y-1">
          <p>📄 skripsi_final.docx</p>
          <p>📄 skripsi_final_revisi.docx</p>
          <p>📄 skripsi_final_revisi_v2.docx</p>
          <p>📄 skripsi_final_BENERAN_FINAL.docx</p>
          <p>📄 skripsi_final_FIX_BANGET_INI.docx</p>
        </div>
        <p className="text-gray-700 leading-relaxed mt-3">
          Sangat berantakan, bukan? <strong>Version Control System (VCS)</strong> adalah solusi untuk masalah ini. 
          VCS mencatat setiap perubahan yang Anda buat pada file, sehingga Anda bisa:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>Melihat <strong>siapa</strong> yang mengubah file</li>
          <li>Melihat <strong>apa</strong> yang diubah (baris mana yang ditambah/dihapus)</li>
          <li>Melihat <strong>kapan</strong> perubahan itu dilakukan</li>
          <li><strong>Memutar waktu</strong> kembali ke versi sebelumnya jika terjadi kesalahan</li>
          <li><strong>Berkolaborasi</strong> dengan banyak orang tanpa saling menimpa kode</li>
        </ul>

        <SectionTitle>Apa itu Git?</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h4 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
              <TerminalIcon className="w-5 h-5" /> Git = Mesin Waktu Kode
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Git</strong> adalah software Version Control System yang paling populer di dunia, dibuat oleh <strong>Linus Torvalds</strong> (pembuat Linux) pada tahun 2005. 
              Git berjalan <strong>secara lokal di komputer Anda</strong>. Artinya, meskipun tanpa internet, Anda tetap bisa mencatat setiap perubahan kode.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Gratis dan Open Source</p>
              <p className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Berjalan di Windows, Mac, Linux</p>
              <p className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Sangat cepat, bahkan untuk proyek besar</p>
              <p className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Bisa bekerja offline</p>
              <p className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Digunakan oleh 90%+ developer di dunia</p>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-white">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
              <GithubIcon className="w-5 h-5" /> GitHub = Rumah Kode Online
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>GitHub</strong> adalah platform cloud (website) untuk menyimpan repository Git Anda di internet. 
              Jika Git adalah buku catatan pribadi di meja Anda, GitHub adalah perpustakaan online tempat Anda membagikan buku tersebut agar orang lain bisa membaca dan ikut menulis bersama.
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-300">
              <p className="flex items-start gap-2"><span className="text-blue-400 font-bold">★</span> Hosting gratis untuk repositori publik</p>
              <p className="flex items-start gap-2"><span className="text-blue-400 font-bold">★</span> Fitur kolaborasi (Pull Request, Issues)</p>
              <p className="flex items-start gap-2"><span className="text-blue-400 font-bold">★</span> GitHub Pages (hosting website gratis!)</p>
              <p className="flex items-start gap-2"><span className="text-blue-400 font-bold">★</span> GitHub Actions (otomasi)</p>
              <p className="flex items-start gap-2"><span className="text-blue-400 font-bold">★</span> Portofolio developer profesional</p>
            </div>
          </div>
        </div>

        <SectionTitle>Perbedaan Git vs GitHub</SectionTitle>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 font-semibold text-gray-700 border-b">Aspek</th>
                <th className="p-3 font-semibold text-gray-700 border-b">Git</th>
                <th className="p-3 font-semibold text-gray-700 border-b">GitHub</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="p-3 font-medium">Jenis</td><td className="p-3">Software / Tool</td><td className="p-3">Website / Platform Cloud</td></tr>
              <tr><td className="p-3 font-medium">Lokasi</td><td className="p-3">Di komputer lokal Anda</td><td className="p-3">Di internet (server GitHub)</td></tr>
              <tr><td className="p-3 font-medium">Fungsi</td><td className="p-3">Mencatat perubahan kode</td><td className="p-3">Menyimpan & berbagi kode</td></tr>
              <tr><td className="p-3 font-medium">Internet</td><td className="p-3">Tidak perlu</td><td className="p-3">Wajib perlu</td></tr>
              <tr><td className="p-3 font-medium">Akun</td><td className="p-3">Tidak perlu akun</td><td className="p-3">Perlu akun GitHub</td></tr>
              <tr><td className="p-3 font-medium">Pesaing</td><td className="p-3">Mercurial, SVN</td><td className="p-3">GitLab, Bitbucket</td></tr>
            </tbody>
          </table>
        </div>

        <InfoBox type="info" title="Analogi Sederhana">
          <strong>Git</strong> = Microsoft Word dengan fitur "Track Changes" (tapi jauh lebih canggih).<br/>
          <strong>GitHub</strong> = Google Drive khusus untuk kode, di mana orang lain bisa ikut mengedit.<br/><br/>
          Anda <strong>menggunakan Git</strong> di komputer lokal, lalu <strong>menyimpan hasilnya ke GitHub</strong> agar aman dan bisa diakses dari mana saja.
        </InfoBox>
      </div>
    )
  },

  // ===== BAB 2: INSTALASI =====
  {
    id: 'instalasi',
    title: '2. Instalasi Git',
    icon: <DownloadIcon className="w-4 h-4" />,
    category: 'Dasar',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">⬇️ Instalasi Git</h2>
        <p className="text-gray-700 leading-relaxed">Langkah pertama adalah menginstal Git di komputer Anda. Proses ini hanya perlu dilakukan SATU KALI saja.</p>

        <SectionTitle>Instalasi di Windows</SectionTitle>
        <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-4">
          <li>Buka browser, kunjungi <strong>https://git-scm.com/download/win</strong></li>
          <li>Download akan otomatis berjalan. Klik file <code>.exe</code> yang sudah terdownload.</li>
          <li>Ikuti wizard instalasi — klik <strong>Next</strong> terus hingga <strong>Install</strong>.</li>
          <li>
            <strong>Tips untuk pemula:</strong> Pada langkah "Adjusting your PATH", pastikan pilih opsi <em>"Git from the command line and also from 3rd-party software"</em>. Ini membuat Git bisa dijalankan dari mana saja.
          </li>
          <li>Setelah selesai, buka <strong>Git Bash</strong> (cari di Start Menu) atau <strong>Command Prompt</strong>.</li>
        </ol>

        <SectionTitle>Instalasi di macOS</SectionTitle>
        <p className="text-gray-700">Ada beberapa cara:</p>
        <CodeBlock title="Cara 1: Lewat Xcode Command Line Tools">{`$ xcode-select --install`}</CodeBlock>
        <CodeBlock title="Cara 2: Lewat Homebrew (disarankan)">{`$ brew install git`}</CodeBlock>
        <p className="text-gray-600 text-sm">Jika belum punya Homebrew, instal dulu dari https://brew.sh</p>

        <SectionTitle>Instalasi di Linux</SectionTitle>
        <CodeBlock title="Ubuntu / Debian">{`$ sudo apt update
$ sudo apt install git`}</CodeBlock>
        <CodeBlock title="Fedora">{`$ sudo dnf install git`}</CodeBlock>
        <CodeBlock title="Arch Linux">{`$ sudo pacman -S git`}</CodeBlock>

        <SectionTitle>Verifikasi Instalasi</SectionTitle>
        <p className="text-gray-700">Setelah instalasi selesai, buka terminal dan ketik perintah berikut untuk memastikan Git sudah terinstal dengan benar:</p>
        <CodeBlock>{`$ git --version
# Output contoh: git version 2.43.0`}</CodeBlock>
        <InfoBox type="success" title="Berhasil!">
          Jika muncul nomor versi seperti di atas, selamat! Git sudah terinstal di komputer Anda. Lanjut ke langkah konfigurasi!
        </InfoBox>
        <InfoBox type="danger" title="Jika Muncul Error 'git is not recognized'">
          Artinya Git belum terinstal dengan benar atau PATH-nya belum diatur. Coba restart komputer Anda terlebih dahulu, atau ulangi proses instalasi.
        </InfoBox>
      </div>
    )
  },

  // ===== BAB 3: KONFIGURASI =====
  {
    id: 'konfigurasi',
    title: '3. Konfigurasi Awal',
    icon: <SettingsIcon className="w-4 h-4" />,
    category: 'Dasar',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">⚙️ Konfigurasi Awal Git</h2>
        <p className="text-gray-700 leading-relaxed">Setelah Git terinstal, ada pengaturan wajib yang harus Anda lakukan SATU KALI. Ini agar setiap perubahan yang Anda buat tercatat atas nama Anda.</p>

        <SectionTitle>Mengatur Nama dan Email (WAJIB)</SectionTitle>
        <p className="text-gray-700">Buka terminal (atau Git Bash di Windows), lalu jalankan:</p>
        <CodeBlock title="Perintah Wajib Pertama Kali">{`# Ganti dengan nama Anda
$ git config --global user.name "Budi Santoso"

# Ganti dengan email akun GitHub Anda
$ git config --global user.email "budi@gmail.com"`}</CodeBlock>

        <InfoBox type="warning" title="Penting!">
          Email yang Anda gunakan di <code>user.email</code> <strong>HARUS SAMA</strong> dengan email yang terdaftar di akun GitHub Anda. 
          Jika berbeda, commit Anda tidak akan terkoneksi dengan profil GitHub Anda.
        </InfoBox>

        <SectionTitle>Mengecek Konfigurasi</SectionTitle>
        <CodeBlock>{`# Melihat semua konfigurasi Git
$ git config --list

# Melihat konfigurasi spesifik
$ git config user.name
$ git config user.email`}</CodeBlock>

        <SectionTitle>Mengatur Default Branch Name</SectionTitle>
        <p className="text-gray-700">Secara default, Git membuat branch utama bernama "master". GitHub sekarang menggunakan "main". Agar seragam:</p>
        <CodeBlock>{`$ git config --global init.defaultBranch main`}</CodeBlock>

        <SectionTitle>Mengatur Text Editor Default</SectionTitle>
        <p className="text-gray-700">Git kadang membutuhkan text editor (misal saat merge conflict). Anda bisa mengaturnya:</p>
        <CodeBlock>{`# Menggunakan VS Code (disarankan)
$ git config --global core.editor "code --wait"

# Menggunakan Nano (lebih simpel)
$ git config --global core.editor "nano"

# Menggunakan Notepad (Windows)
$ git config --global core.editor "notepad"`}</CodeBlock>

        <SectionTitle>Tingkat Konfigurasi Git</SectionTitle>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200 rounded overflow-hidden">
            <thead><tr className="bg-gray-100"><th className="p-3 text-left border-b">Level</th><th className="p-3 text-left border-b">Flag</th><th className="p-3 text-left border-b">Berlaku Untuk</th><th className="p-3 text-left border-b">Lokasi File</th></tr></thead>
            <tbody className="divide-y">
              <tr><td className="p-3 font-medium">System</td><td className="p-3"><code>--system</code></td><td className="p-3">Semua user di komputer</td><td className="p-3">/etc/gitconfig</td></tr>
              <tr><td className="p-3 font-medium">Global</td><td className="p-3"><code>--global</code></td><td className="p-3">User yang sedang login</td><td className="p-3">~/.gitconfig</td></tr>
              <tr><td className="p-3 font-medium">Local</td><td className="p-3"><code>--local</code></td><td className="p-3">Repository saat ini saja</td><td className="p-3">.git/config</td></tr>
            </tbody>
          </table>
        </div>
        <InfoBox type="tip" title="Tips">
          Gunakan <code>--global</code> untuk pengaturan umum, dan <code>--local</code> jika Anda ingin konfigurasi khusus untuk proyek tertentu (misal: email kantor untuk proyek kantor).
        </InfoBox>
      </div>
    )
  },

  // ===== BAB 4: MEMBUAT REPOSITORY =====
  {
    id: 'repository',
    title: '4. Membuat Repository',
    icon: <FolderIcon className="w-4 h-4" />,
    category: 'Dasar',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">📁 Membuat Repository</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Repository (repo)</strong> adalah folder proyek yang dilacak oleh Git. Ada dua cara untuk memulai: membuat baru dari nol, atau menyalin (clone) dari GitHub.
        </p>

        <SectionTitle>Cara 1: Membuat Repository Baru dari Nol (git init)</SectionTitle>
        <p className="text-gray-700">Gunakan ini jika Anda memulai proyek baru di komputer lokal.</p>
        <CodeBlock title="Langkah-langkah">{`# 1. Buat folder baru untuk proyek
$ mkdir proyek-pertama
$ cd proyek-pertama

# 2. Inisialisasi Git di folder ini
$ git init

# Output: Initialized empty Git repository in /path/proyek-pertama/.git/`}</CodeBlock>
        <InfoBox type="info" title="Apa yang terjadi?">
          Perintah <code>git init</code> membuat folder tersembunyi bernama <code>.git/</code> di dalam folder proyek Anda.
          Folder ini berisi semua data history Git. <strong>JANGAN pernah menghapus folder .git!</strong> Jika dihapus, semua riwayat perubahan akan hilang.
        </InfoBox>

        <SectionTitle>Cara 2: Menyalin Repository dari GitHub (git clone)</SectionTitle>
        <p className="text-gray-700">Gunakan ini jika Anda ingin mendownload proyek yang sudah ada di GitHub.</p>
        <CodeBlock title="Clone repository">{`# Clone lewat HTTPS (cara termudah)
$ git clone https://github.com/username/nama-repo.git

# Clone ke folder dengan nama berbeda
$ git clone https://github.com/username/nama-repo.git nama-folder-saya

# Clone lewat SSH (jika sudah setup SSH key)
$ git clone git@github.com:username/nama-repo.git`}</CodeBlock>
        <p className="text-gray-700">Setelah clone, masuk ke folder-nya:</p>
        <CodeBlock>{`$ cd nama-repo
$ ls  # Lihat isi file yang sudah terdownload`}</CodeBlock>

        <SectionTitle>Cara 3: Menghubungkan Folder Lokal ke GitHub</SectionTitle>
        <p className="text-gray-700">Jika Anda sudah punya folder proyek di lokal dan ingin menghubungkannya ke repository GitHub yang sudah dibuat (kosong):</p>
        <CodeBlock title="Hubungkan lokal ke GitHub">{`# 1. Masuk ke folder proyek yang sudah ada
$ cd folder-proyek-saya

# 2. Inisialisasi Git (jika belum)
$ git init

# 3. Tambahkan remote URL GitHub
$ git remote add origin https://github.com/username/nama-repo.git

# 4. Tambah semua file ke staging
$ git add .

# 5. Buat commit pertama
$ git commit -m "initial commit: upload proyek pertama"

# 6. Push ke GitHub
$ git branch -M main
$ git push -u origin main`}</CodeBlock>

        <InfoBox type="success" title="Selamat!">
          Sekarang folder lokal Anda sudah terhubung dengan GitHub! Setiap kali ada perubahan, Anda tinggal <code>add → commit → push</code>.
        </InfoBox>

        <SectionTitle>Membuat Repository di GitHub (lewat Website)</SectionTitle>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
          <li>Login ke <strong>github.com</strong></li>
          <li>Klik tombol <strong>"+"</strong> di pojok kanan atas → <strong>"New repository"</strong></li>
          <li>Isi nama repository (misal: <code>proyek-pertama</code>)</li>
          <li>Pilih <strong>Public</strong> (bisa dilihat semua orang) atau <strong>Private</strong> (hanya Anda)</li>
          <li>Centang <strong>"Add a README file"</strong> jika ingin langsung ada file awal</li>
          <li>Klik <strong>"Create repository"</strong></li>
        </ol>
        <InfoBox type="warning" title="Perhatian">
          Jika Anda berencana menghubungkan folder lokal yang sudah ada file-nya, <strong>JANGAN</strong> centang "Add a README file". 
          Biarkan repository GitHub kosong, lalu push dari lokal. Ini menghindari konflik.
        </InfoBox>
      </div>
    )
  },

  // ===== BAB 5: 3 AREA GIT =====
  {
    id: 'tiga-area',
    title: '5. Memahami 3 Area Git',
    icon: <LayersIcon className="w-4 h-4" />,
    category: 'Dasar',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">📦 Memahami 3 Area Kerja Git</h2>
        <p className="text-gray-700 leading-relaxed">
          Ini adalah <strong>konsep paling fundamental</strong> yang WAJIB Anda pahami sebelum melangkah lebih jauh. 
          Banyak pemula yang bingung karena belum mengerti 3 area ini. Jika Anda paham konsep ini, semua perintah Git akan masuk akal.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200 my-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">🔄 Alur File dalam Git</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 w-full md:w-1/3">
              <p className="font-bold text-red-800 text-lg">Working Directory</p>
              <p className="text-xs text-red-600 mt-1">Folder proyek Anda</p>
              <p className="text-xs text-gray-500 mt-2">File yang sedang Anda edit di VS Code. Belum dicatat oleh Git.</p>
            </div>
            <div className="text-2xl text-gray-400 rotate-90 md:rotate-0">
              <ArrowRightIcon className="w-6 h-6" />
            </div>
            <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-4 w-full md:w-1/3">
              <p className="font-bold text-yellow-800 text-lg">Staging Area</p>
              <p className="text-xs text-yellow-600 mt-1">Area Persiapan</p>
              <p className="text-xs text-gray-500 mt-2">File yang sudah ditandai (git add) dan siap untuk dibungkus/commit.</p>
            </div>
            <div className="text-2xl text-gray-400 rotate-90 md:rotate-0">
              <ArrowRightIcon className="w-6 h-6" />
            </div>
            <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 w-full md:w-1/3">
              <p className="font-bold text-green-800 text-lg">Repository</p>
              <p className="text-xs text-green-600 mt-1">History/Riwayat Git</p>
              <p className="text-xs text-gray-500 mt-2">File yang sudah di-commit. Tercatat permanen dalam sejarah Git.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4 text-center">
            <div className="text-xs bg-white rounded px-3 py-1.5 border shadow-sm"><code>git add</code> → pindah ke Staging</div>
            <div className="text-xs bg-white rounded px-3 py-1.5 border shadow-sm"><code>git commit</code> → pindah ke Repository</div>
            <div className="text-xs bg-white rounded px-3 py-1.5 border shadow-sm"><code>git push</code> → kirim ke GitHub (Remote)</div>
          </div>
        </div>

        <SectionTitle>1. Working Directory (Area Kerja)</SectionTitle>
        <p className="text-gray-700 leading-relaxed">
          Ini adalah <strong>folder proyek Anda yang sebenarnya</strong>. Semua file yang Anda lihat dan edit di VS Code, Sublime Text, atau editor lainnya ada di area ini.
          Ketika Anda mengedit file, menambah file baru, atau menghapus file, perubahan itu terjadi di Working Directory.
          Git <strong>belum mencatat</strong> perubahan ini sampai Anda melakukan <code>git add</code>.
        </p>

        <SectionTitle>2. Staging Area (Area Persiapan)</SectionTitle>
        <p className="text-gray-700 leading-relaxed">
          Staging Area adalah area "antrian" atau "ruang tunggu". Ketika Anda menjalankan <code>git add namafile</code>, 
          file tersebut dipindahkan dari Working Directory ke Staging Area. 
          Ini artinya Anda mengatakan kepada Git: <em>"Hei Git, saya mau menyimpan perubahan file ini."</em>
        </p>
        <InfoBox type="tip" title="Kenapa ada Staging Area?">
          Staging Area memungkinkan Anda <strong>memilih file mana yang mau di-commit</strong>. Misalnya, Anda mengubah 5 file tapi hanya ingin menyimpan 2 file saja dulu. 
          Anda bisa <code>git add file1 file2</code> saja tanpa menyertakan yang lain.
        </InfoBox>

        <SectionTitle>3. Repository (Riwayat Tersimpan)</SectionTitle>
        <p className="text-gray-700 leading-relaxed">
          Setelah file masuk ke Staging Area, Anda menjalankan <code>git commit</code> untuk menyimpannya secara permanen ke dalam Repository lokal.
          Setiap commit memiliki ID unik (hash), nama pembuat, tanggal, dan pesan deskripsi. Ini seperti membuat "checkpoint" dalam game — Anda selalu bisa kembali ke checkpoint manapun.
        </p>

        <SectionTitle>Analogi Pengiriman Paket</SectionTitle>
        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
          <div className="space-y-4 text-gray-700">
            <p>📝 <strong>Working Directory</strong> = Anda sedang membungkus barang di rumah (mengedit file)</p>
            <p>📦 <strong>git add</strong> = Memasukkan barang ke dalam kardus (staging)</p>
            <p>🏷️ <strong>git commit</strong> = Menulis label/alamat pada kardus dan menyegelnya (commit)</p>
            <p>🚚 <strong>git push</strong> = Mengirim kardus ke kantor pos / gudang pusat (GitHub)</p>
            <p>📬 <strong>git pull</strong> = Menerima kiriman dari gudang pusat ke rumah Anda</p>
          </div>
        </div>
      </div>
    )
  },

  // ===== BAB 6: PERINTAH DASAR =====
  {
    id: 'perintah-dasar',
    title: '6. Perintah Dasar Git',
    icon: <TerminalIcon className="w-4 h-4" />,
    category: 'Perintah',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">⌨️ Perintah Dasar Git</h2>
        <p className="text-gray-700 leading-relaxed">Ini adalah perintah-perintah yang akan Anda gunakan SETIAP HARI sebagai developer. Hafalkan!</p>

        <SectionTitle>git status — Cek Kondisi Saat Ini</SectionTitle>
        <p className="text-gray-700">Perintah paling sering digunakan. Jalankan kapan saja untuk melihat kondisi file Anda.</p>
        <CodeBlock>{`$ git status

# Contoh output:
# On branch main
# Changes not staged for commit:
#   modified:   index.html      ← File ini diedit tapi belum di-add
#
# Untracked files:
#   style.css                   ← File baru yang belum dilacak Git`}</CodeBlock>
        <InfoBox type="tip" title="Tips Pro">Biasakan menjalankan <code>git status</code> sebelum dan sesudah melakukan apapun. Ini membantu Anda selalu tahu kondisi proyek.</InfoBox>

        <SectionTitle>git add — Masukkan ke Staging</SectionTitle>
        <CodeBlock>{`# Menambah SATU file spesifik
$ git add index.html

# Menambah BEBERAPA file sekaligus
$ git add index.html style.css script.js

# Menambah SEMUA file yang berubah (paling sering dipakai)
$ git add .

# Menambah semua file dengan ekstensi tertentu
$ git add *.css`}</CodeBlock>

        <SectionTitle>git commit — Simpan Perubahan</SectionTitle>
        <CodeBlock>{`# Commit dengan pesan singkat (WAJIB ada pesan!)
$ git commit -m "menambahkan halaman login"

# Shortcut: add + commit sekaligus (hanya file yang sudah dilacak)
$ git commit -am "fix: memperbaiki bug tombol submit"

# Commit dengan pesan panjang (buka editor)
$ git commit`}</CodeBlock>

        <InfoBox type="warning" title="Tips Menulis Pesan Commit yang Baik">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Gunakan bahasa yang jelas dan singkat</li>
            <li>Jelaskan APA yang diubah, bukan BAGAIMANA</li>
            <li>Contoh BAGUS: <code>"feat: menambahkan fitur dark mode"</code></li>
            <li>Contoh BAGUS: <code>"fix: memperbaiki error login pada halaman register"</code></li>
            <li>Contoh JELEK: <code>"update"</code>, <code>"fix bug"</code>, <code>"asdfgh"</code></li>
          </ul>
        </InfoBox>

        <SectionTitle>git log — Lihat Riwayat Commit</SectionTitle>
        <CodeBlock>{`# Melihat semua riwayat commit
$ git log

# Tampilan ringkas (1 baris per commit)
$ git log --oneline

# Melihat 5 commit terakhir
$ git log --oneline -5

# Melihat commit dengan grafik branch
$ git log --oneline --graph --all

# Melihat commit oleh author tertentu
$ git log --author="Budi"`}</CodeBlock>

        <SectionTitle>git diff — Lihat Perbedaan</SectionTitle>
        <CodeBlock>{`# Lihat perubahan yang belum di-staging
$ git diff

# Lihat perubahan yang sudah di-staging (siap commit)
$ git diff --staged

# Bandingkan 2 commit
$ git diff abc1234 def5678

# Bandingkan file tertentu
$ git diff index.html`}</CodeBlock>

        <SectionTitle>Kamus Perintah Dasar (Cheat Sheet)</SectionTitle>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200 rounded overflow-hidden">
            <thead><tr className="bg-gray-100"><th className="p-3 text-left border-b font-semibold">Perintah</th><th className="p-3 text-left border-b font-semibold">Fungsi</th></tr></thead>
            <tbody className="divide-y">
              <tr><td className="p-3 font-mono text-blue-600">git init</td><td className="p-3">Membuat repository baru di folder saat ini</td></tr>
              <tr><td className="p-3 font-mono text-blue-600">git clone &lt;url&gt;</td><td className="p-3">Menyalin repository dari GitHub ke lokal</td></tr>
              <tr><td className="p-3 font-mono text-blue-600">git status</td><td className="p-3">Melihat status file (modified, staged, untracked)</td></tr>
              <tr><td className="p-3 font-mono text-blue-600">git add .</td><td className="p-3">Memasukkan semua perubahan ke staging area</td></tr>
              <tr><td className="p-3 font-mono text-blue-600">git commit -m "pesan"</td><td className="p-3">Menyimpan perubahan dengan pesan deskripsi</td></tr>
              <tr><td className="p-3 font-mono text-blue-600">git log --oneline</td><td className="p-3">Melihat riwayat commit secara ringkas</td></tr>
              <tr><td className="p-3 font-mono text-blue-600">git diff</td><td className="p-3">Melihat perubahan yang belum di-staging</td></tr>
              <tr><td className="p-3 font-mono text-blue-600">git restore &lt;file&gt;</td><td className="p-3">Membatalkan perubahan file yang belum di-staging</td></tr>
              <tr><td className="p-3 font-mono text-blue-600">git rm &lt;file&gt;</td><td className="p-3">Menghapus file dan mencatat penghapusan ke staging</td></tr>
              <tr><td className="p-3 font-mono text-blue-600">git mv &lt;lama&gt; &lt;baru&gt;</td><td className="p-3">Rename/pindah file dengan tetap terlacak Git</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },

  // ===== BAB 7: REMOTE & GITHUB =====
  {
    id: 'remote',
    title: '7. Remote Repository & GitHub',
    icon: <CloudIcon className="w-4 h-4" />,
    category: 'Perintah',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">☁️ Remote Repository & GitHub</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Remote</strong> adalah versi repository Anda yang tersimpan di server (internet), biasanya di GitHub. 
          Perintah-perintah di bab ini menghubungkan Git lokal Anda dengan GitHub.
        </p>

        <SectionTitle>git remote — Mengelola Koneksi Remote</SectionTitle>
        <CodeBlock>{`# Melihat remote yang terhubung
$ git remote -v
# Output: origin  https://github.com/username/repo.git (fetch)
#         origin  https://github.com/username/repo.git (push)

# Menambah remote baru
$ git remote add origin https://github.com/username/repo.git

# Mengubah URL remote
$ git remote set-url origin https://github.com/username/repo-baru.git

# Menghapus remote
$ git remote remove origin

# Melihat info detail remote
$ git remote show origin`}</CodeBlock>
        <InfoBox type="info" title="Apa itu 'origin'?">
          <code>origin</code> adalah nama default untuk remote repository Anda di GitHub. Ini hanya sebuah alias/nama panggilan. 
          Anda bisa memberi nama apa saja, tapi konvensi standarnya adalah <code>origin</code>.
        </InfoBox>

        <SectionTitle>git push — Mengirim ke GitHub</SectionTitle>
        <CodeBlock>{`# Push ke branch main
$ git push origin main

# Push pertama kali (dengan -u untuk set upstream)
$ git push -u origin main
# Setelah pakai -u, selanjutnya cukup:
$ git push

# Push ke branch tertentu
$ git push origin nama-branch

# Push semua branch sekaligus
$ git push --all origin

# Force push (HATI-HATI! Menimpa remote)
$ git push --force origin main`}</CodeBlock>
        <InfoBox type="danger" title="⚠️ JANGAN gunakan --force sembarangan!">
          <code>git push --force</code> akan <strong>menimpa semua perubahan di GitHub</strong> dengan versi lokal Anda. 
          Jika ada commit dari orang lain di GitHub, commit tersebut akan HILANG. 
          Gunakan hanya jika Anda benar-benar tahu apa yang Anda lakukan.
        </InfoBox>

        <SectionTitle>git pull — Menarik dari GitHub</SectionTitle>
        <CodeBlock>{`# Tarik perubahan terbaru dari GitHub
$ git pull origin main

# Jika sudah set upstream:
$ git pull

# Pull dengan rebase (agar history lebih rapi)
$ git pull --rebase origin main`}</CodeBlock>

        <SectionTitle>git fetch — Download Tanpa Merge</SectionTitle>
        <CodeBlock>{`# Download perubahan dari remote tanpa menggabungkan
$ git fetch origin

# Setelah fetch, Anda bisa lihat perbedaan:
$ git diff main origin/main

# Lalu merge manual jika mau:
$ git merge origin/main`}</CodeBlock>
        <InfoBox type="tip" title="Perbedaan pull vs fetch">
          <code>git pull</code> = <code>git fetch</code> + <code>git merge</code>.<br/>
          <code>git fetch</code> lebih aman karena Anda bisa melihat dulu apa yang berubah sebelum digabungkan.
          Tapi untuk pemula, <code>git pull</code> sudah cukup.
        </InfoBox>

        <SectionTitle>Alur Lengkap: Lokal ↔ GitHub</SectionTitle>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="bg-white rounded-lg p-4 border-2 border-green-300 shadow-sm w-full md:w-2/5">
              <p className="font-bold text-green-800 text-lg">💻 Komputer Lokal</p>
              <p className="text-xs text-gray-500 mt-2">Working Dir → Staging → Local Repo</p>
              <p className="text-xs text-gray-400 mt-1">git add → git commit</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1 text-blue-600 text-xs font-mono"><span>git push →</span></div>
              <div className="flex items-center gap-1 text-green-600 text-xs font-mono"><span>← git pull</span></div>
            </div>
            <div className="bg-white rounded-lg p-4 border-2 border-blue-300 shadow-sm w-full md:w-2/5">
              <p className="font-bold text-blue-800 text-lg">☁️ GitHub (Remote)</p>
              <p className="text-xs text-gray-500 mt-2">Repository tersimpan di cloud</p>
              <p className="text-xs text-gray-400 mt-1">Bisa diakses dari mana saja</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // ===== BAB 8: ⭐ EDIT LOKAL & PUSH =====
  {
    id: 'edit-push',
    title: '8. ⭐ Edit Lokal & Push ke GitHub',
    icon: <StarIcon className="w-4 h-4" />,
    category: 'Perintah',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-amber-500 pb-3">⭐ Edit Script Lokal & Push ke GitHub</h2>
        
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5 my-4">
          <p className="text-amber-900 font-bold text-lg mb-2">📌 Pertanyaan yang Dijawab di Bab Ini:</p>
          <p className="text-amber-800 italic">
            "Kalau file di lokal di-edit, lalu mau push ke GitHub yang sudah ada file-nya, bagaimana caranya agar tidak error?"
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Ini adalah skenario <strong>paling umum</strong> dalam penggunaan Git sehari-hari. Anda sudah punya repository di GitHub, 
          lalu ingin mengedit kode di komputer lokal dan mengirimkan perubahannya kembali ke GitHub. Ikuti <strong>5 LANGKAH EMAS</strong> ini:
        </p>

        {/* LANGKAH 1 */}
        <div className="border-2 border-blue-200 rounded-xl p-6 bg-white shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-blue-600 text-white py-1.5 px-4 rounded-full text-sm font-bold">Langkah 1</span>
            <h4 className="text-lg font-bold text-blue-800">Clone Repository (Pertama Kali Saja)</h4>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Jika Anda <strong>belum pernah</strong> mendownload repository ke komputer, clone dulu:
          </p>
          <CodeBlock>{`# Clone dari GitHub ke komputer Anda
$ git clone https://github.com/username/nama-repo.git

# Masuk ke folder proyek
$ cd nama-repo`}</CodeBlock>
          <InfoBox type="info">
            Langkah ini hanya perlu dilakukan <strong>SATU KALI</strong>. Setelah clone, Anda tidak perlu clone lagi. 
            Cukup lakukan langkah 2-5 untuk setiap kali mau edit.
          </InfoBox>
        </div>

        {/* LANGKAH 2 */}
        <div className="border-2 border-green-200 rounded-xl p-6 bg-white shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-green-600 text-white py-1.5 px-4 rounded-full text-sm font-bold">Langkah 2</span>
            <h4 className="text-lg font-bold text-green-800">Tarik Data Terbaru (git pull) — WAJIB!</h4>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>SEBELUM mengedit apapun</strong>, SELALU tarik versi terbaru dari GitHub. 
            Ini memastikan file di komputer Anda sama dengan yang ada di GitHub.
          </p>
          <CodeBlock>{`$ git pull origin main`}</CodeBlock>
          <InfoBox type="danger" title="Kenapa ini WAJIB?">
            Jika Anda langsung mengedit tanpa <code>git pull</code> dulu, dan ternyata ada perubahan di GitHub 
            (misal: Anda pernah mengedit langsung lewat website GitHub), maka saat Anda push nanti akan DITOLAK (rejected). 
            Jadi, SELALU pull dulu sebelum mulai kerja!
          </InfoBox>
        </div>

        {/* LANGKAH 3 */}
        <div className="border-2 border-purple-200 rounded-xl p-6 bg-white shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-purple-600 text-white py-1.5 px-4 rounded-full text-sm font-bold">Langkah 3</span>
            <h4 className="text-lg font-bold text-purple-800">Edit File Anda Sesuka Hati</h4>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Sekarang, buka proyek di VS Code, Sublime Text, Notepad++, atau editor apapun yang Anda suka. 
            Edit file yang mau diubah. Anda bisa:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 ml-4 mt-2">
            <li>Mengubah isi file yang sudah ada</li>
            <li>Menambah file baru</li>
            <li>Menghapus file yang tidak diperlukan</li>
            <li>Rename file</li>
            <li>Mengubah banyak file sekaligus — boleh!</li>
          </ul>
          <CodeBlock title="Contoh: Buka proyek di VS Code">{`# Buka seluruh folder proyek di VS Code
$ code .

# Atau buka file spesifik
$ code index.html`}</CodeBlock>
          <p className="text-gray-500 text-xs mt-2">Setelah selesai mengedit, jangan lupa save (Ctrl+S)!</p>
        </div>

        {/* LANGKAH 4 */}
        <div className="border-2 border-orange-200 rounded-xl p-6 bg-white shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-orange-600 text-white py-1.5 px-4 rounded-full text-sm font-bold">Langkah 4</span>
            <h4 className="text-lg font-bold text-orange-800">Staging & Commit (Simpan Perubahan)</h4>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Setelah selesai mengedit dan menyimpan file, kembali ke terminal dan jalankan:
          </p>
          <CodeBlock>{`# Cek file apa saja yang berubah
$ git status

# Masukkan SEMUA perubahan ke staging
$ git add .

# Bungkus/simpan dengan pesan commit
$ git commit -m "update: mengubah tampilan halaman utama"`}</CodeBlock>
          <InfoBox type="tip" title="Tips Pesan Commit">
            Tulis pesan commit yang menjelaskan APA yang Anda ubah. Contoh:<br/>
            • <code>"feat: menambahkan fitur pencarian"</code><br/>
            • <code>"fix: memperbaiki bug login"</code><br/>
            • <code>"docs: memperbarui README.md"</code><br/>
            • <code>"style: merapikan CSS halaman about"</code>
          </InfoBox>
        </div>

        {/* LANGKAH 5 */}
        <div className="border-2 border-red-200 rounded-xl p-6 bg-white shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-red-600 text-white py-1.5 px-4 rounded-full text-sm font-bold">Langkah 5</span>
            <h4 className="text-lg font-bold text-red-800">Push ke GitHub (Kirim!)</h4>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Langkah terakhir! Kirim semua commit dari komputer lokal Anda ke GitHub:
          </p>
          <CodeBlock>{`$ git push origin main`}</CodeBlock>
          <div className="bg-green-50 border border-green-300 rounded-lg p-4 mt-3">
            <p className="text-green-800 font-bold flex items-center gap-2">
              <CheckIcon className="w-5 h-5" /> Selesai!
            </p>
            <p className="text-green-700 text-sm mt-1">
              Buka GitHub di browser, refresh halaman repository Anda, dan Anda akan melihat perubahan yang baru saja Anda edit sudah muncul di sana!
            </p>
          </div>
        </div>

        {/* RINGKASAN */}
        <div className="bg-slate-900 rounded-xl p-6 text-white mt-8">
          <h4 className="text-lg font-bold mb-4 text-yellow-400">📋 Ringkasan: Copy-Paste Perintah Ini!</h4>
          <p className="text-slate-400 text-sm mb-3">Setiap kali Anda selesai mengedit file di lokal, jalankan 4 perintah ini secara berurutan:</p>
          <CodeBlock>{`$ git pull origin main
$ git add .
$ git commit -m "pesan perubahan Anda"
$ git push origin main`}</CodeBlock>
          <p className="text-slate-400 text-xs mt-2">Hafal urutan ini: <strong>PULL → ADD → COMMIT → PUSH</strong>. Itu saja!</p>
        </div>

        {/* BAGAIMANA JIKA ERROR */}
        <SectionTitle>🚨 Bagaimana Jika Push Ditolak (Rejected)?</SectionTitle>
        <p className="text-gray-700">Jika Anda mendapat error seperti ini saat push:</p>
        <div className="bg-red-50 rounded-lg p-4 font-mono text-sm text-red-700 border border-red-200">
          <p>! [rejected] main → main (non-fast-forward)</p>
          <p>error: failed to push some refs to 'https://github.com/...'</p>
          <p>hint: Updates were rejected because the remote contains work that you do not have locally.</p>
        </div>
        <p className="text-gray-700 mt-3"><strong>Penyebab:</strong> Ada perubahan di GitHub yang belum Anda tarik ke lokal. Biasanya karena Anda pernah mengedit file langsung di website GitHub.</p>
        <p className="text-gray-700 mt-2"><strong>Solusi:</strong></p>
        <CodeBlock>{`# Tarik dulu perubahan dari GitHub
git pull origin main

# Jika muncul pesan editor:
# - "Please enter a commit message to explain why this merge is necessary..."
# Tekan :wq untuk simpan dan keluar
# Tekan :q! untuk batal tanpa simpan

# Jika ada conflict, selesaikan dulu (lihat bagian Merge Conflict)
# Setelah selesai, push lagi ke remote
git push origin main
`}</CodeBlock>
      </div>
    )
  },

  // ===== BAB 9: BRANCHING =====
  {
    id: 'branching',
    title: '9. Branching (Percabangan)',
    icon: <GitBranchIcon className="w-4 h-4" />,
    category: 'Lanjutan',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">🌿 Branching (Percabangan)</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Branch</strong> (cabang) adalah fitur paling powerful dari Git. Branch memungkinkan Anda membuat "dunia paralel" 
          dari kode Anda. Anda bisa mengerjakan fitur baru, memperbaiki bug, atau bereksperimen tanpa merusak kode utama.
        </p>

        <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200">
          <h4 className="font-bold text-indigo-800 mb-2">🎯 Analogi Branch</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Bayangkan Anda sedang menulis novel di buku utama (branch <code>main</code>). 
            Tiba-tiba, Anda ingin mencoba ending alternatif. Alih-alih mencoret buku utama, 
            Anda fotokopi buku itu dan menulis ending baru di salinannya (branch baru). 
            Jika ending baru bagus, Anda bisa menyatukan keduanya. Jika jelek, buang saja salinannya tanpa merusak buku asli.
          </p>
        </div>

        <SectionTitle>Perintah Branch Dasar</SectionTitle>
        <CodeBlock>{`# Melihat daftar semua branch lokal
$ git branch
# * main        ← tanda * menunjukkan posisi Anda saat ini
#   fitur-login
#   fix-css

# Melihat semua branch (lokal + remote)
$ git branch -a

# Membuat branch baru
$ git branch fitur-login

# Pindah ke branch lain
$ git switch fitur-login
# atau cara lama:
$ git checkout fitur-login

# Membuat branch baru DAN langsung pindah ke sana (shortcut)
$ git switch -c fitur-login
# atau:
$ git checkout -b fitur-login

# Menghapus branch yang sudah di-merge
$ git branch -d fitur-login

# Menghapus branch secara paksa (belum di-merge)
$ git branch -D fitur-login

# Rename branch
$ git branch -m nama-lama nama-baru`}</CodeBlock>

        <SectionTitle>Alur Kerja dengan Branch</SectionTitle>
        <CodeBlock title="Contoh: Membuat fitur login">{`# 1. Pastikan Anda di branch main dan sudah update
$ git switch main
$ git pull origin main

# 2. Buat branch baru untuk fitur login
$ git switch -c fitur-login

# 3. Kerjakan fitur Anda... edit file, tambah file, dst
# ... (coding di VS Code)

# 4. Setelah selesai, add dan commit
$ git add .
$ git commit -m "feat: menambahkan halaman login dan validasi form"

# 5. Push branch ke GitHub
$ git push origin fitur-login

# 6. Setelah fitur selesai dan di-review, merge ke main
$ git switch main
$ git merge fitur-login

# 7. Push main yang sudah di-merge
$ git push origin main

# 8. Hapus branch yang sudah tidak diperlukan
$ git branch -d fitur-login`}</CodeBlock>

        <InfoBox type="tip" title="Best Practice Penamaan Branch">
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><code>fitur-login</code> atau <code>feature/login</code> → untuk fitur baru</li>
            <li><code>fix-bug-navbar</code> atau <code>bugfix/navbar</code> → untuk perbaikan bug</li>
            <li><code>hotfix/security-patch</code> → untuk perbaikan darurat</li>
            <li><code>dev</code> atau <code>develop</code> → branch pengembangan</li>
          </ul>
        </InfoBox>
      </div>
    )
  },

  // ===== BAB 10: MERGING =====
  {
    id: 'merging',
    title: '10. Merging & Merge Conflict',
    icon: <GitMergeIcon className="w-4 h-4" />,
    category: 'Lanjutan',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">🔀 Merging & Mengatasi Merge Conflict</h2>
        
        <SectionTitle>Apa itu Merge?</SectionTitle>
        <p className="text-gray-700 leading-relaxed">
          <strong>Merge</strong> adalah proses menggabungkan perubahan dari satu branch ke branch lain. 
          Ini adalah cara Anda "menyatukan" kembali fitur yang dikerjakan di branch terpisah ke branch utama.
        </p>
        <CodeBlock title="Cara Merge">{`# 1. Pindah ke branch tujuan (yang mau menerima perubahan)
$ git switch main

# 2. Merge branch fitur ke main
$ git merge fitur-login

# Output jika sukses:
# Updating abc1234..def5678
# Fast-forward
#  login.html | 50 ++++++
#  style.css  | 10 ++
#  2 files changed, 60 insertions(+)`}</CodeBlock>

        <SectionTitle>Apa itu Merge Conflict?</SectionTitle>
        <p className="text-gray-700 leading-relaxed">
          Merge Conflict terjadi ketika <strong>dua branch mengubah baris yang sama pada file yang sama</strong>. 
          Git tidak bisa memutuskan sendiri mana yang benar, jadi Git meminta ANDA untuk menyelesaikannya secara manual.
        </p>

        <InfoBox type="warning" title="Kapan Conflict Terjadi?">
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Anda dan teman mengedit <strong>baris yang sama</strong> di file yang sama</li>
            <li>Anda mengedit file di GitHub web DAN di lokal di baris yang sama</li>
            <li>Dua branch berbeda mengedit bagian yang sama</li>
          </ul>
        </InfoBox>

        <SectionTitle>Cara Menyelesaikan Merge Conflict</SectionTitle>
        <p className="text-gray-700">Ketika conflict terjadi, Git akan menandai file yang bermasalah seperti ini:</p>
        <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-gray-300 my-3">
          <pre className="whitespace-pre-wrap">{`<<<<<<< HEAD
<h1>Selamat Datang di Website Kami</h1>
=======
<h1>Welcome to Our Website</h1>
>>>>>>> fitur-english`}</pre>
        </div>
        <div className="space-y-2 text-gray-700 text-sm">
          <p>• <code>{"<<<<<<< HEAD"}</code> = Kode dari branch Anda saat ini (main)</p>
          <p>• <code>{"======="}</code> = Pemisah antara kedua versi</p>
          <p>• <code>{">>>>>>> fitur-english"}</code> = Kode dari branch yang ingin di-merge</p>
        </div>

        <p className="text-gray-700 mt-4 font-bold">Cara menyelesaikan:</p>
        <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-4">
          <li>
            <strong>Buka file yang conflict</strong> di VS Code. VS Code akan otomatis mendeteksi dan memberi tombol: 
            "Accept Current Change", "Accept Incoming Change", "Accept Both Changes".
          </li>
          <li><strong>Pilih mana yang benar</strong>, atau edit manual sesuai keinginan Anda.</li>
          <li><strong>Hapus semua tanda conflict</strong> (<code>{"<<<<<<<, =======, >>>>>>>"}</code>).</li>
          <li><strong>Save file</strong> (Ctrl+S).</li>
          <li><strong>Tandai sebagai resolved</strong> dan commit:</li>
        </ol>
        <CodeBlock>{`$ git add .
$ git commit -m "fix: resolve merge conflict pada index.html"`}</CodeBlock>

        <InfoBox type="success" title="Selamat!">
          Conflict sudah diselesaikan! Jangan takut dengan merge conflict — ini hal yang normal dan sering terjadi. 
          Semakin sering Anda menghadapinya, semakin cepat Anda menyelesaikannya.
        </InfoBox>

        <SectionTitle>Tips Menghindari Merge Conflict</SectionTitle>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>Selalu <code>git pull</code> sebelum mulai bekerja</li>
          <li>Komunikasikan dengan tim siapa yang mengerjakan file apa</li>
          <li>Buat branch kecil dan sering merge, jangan buat branch besar yang jarang di-merge</li>
          <li>Commit sesering mungkin agar perubahan tidak menumpuk</li>
        </ul>
      </div>
    )
  },

  // ===== BAB 11: GITIGNORE =====
  {
    id: 'gitignore',
    title: '11. File .gitignore',
    icon: <EyeOffIcon className="w-4 h-4" />,
    category: 'Lanjutan',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">🙈 File .gitignore</h2>
        <p className="text-gray-700 leading-relaxed">
          <code>.gitignore</code> adalah file khusus yang memberitahu Git <strong>file atau folder mana yang TIDAK perlu dilacak</strong>. 
          Ini sangat penting agar file-file yang tidak perlu tidak ikut ter-upload ke GitHub.
        </p>

        <SectionTitle>Kenapa Perlu .gitignore?</SectionTitle>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li><strong>File sensitif:</strong> password, API key, file .env yang berisi rahasia</li>
          <li><strong>File besar:</strong> folder node_modules (bisa ratusan MB), build output</li>
          <li><strong>File sistem:</strong> .DS_Store (Mac), Thumbs.db (Windows)</li>
          <li><strong>File temporary:</strong> log, cache, file backup editor</li>
        </ul>

        <SectionTitle>Cara Membuat .gitignore</SectionTitle>
        <p className="text-gray-700">Buat file bernama <code>.gitignore</code> (dengan titik di depan) di ROOT folder proyek Anda:</p>
        <CodeBlock title=".gitignore — Contoh untuk proyek Node.js/React">{`# Dependencies
node_modules/
package-lock.json

# Build output
dist/
build/
.next/

# Environment variables (RAHASIA!)
.env
.env.local
.env.production

# OS files
.DS_Store
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo

# Log files
*.log
npm-debug.log*

# Cache
.cache/
.temp/`}</CodeBlock>

        <SectionTitle>Aturan Penulisan .gitignore</SectionTitle>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200 rounded overflow-hidden">
            <thead><tr className="bg-gray-100"><th className="p-3 text-left border-b">Pola</th><th className="p-3 text-left border-b">Artinya</th><th className="p-3 text-left border-b">Contoh</th></tr></thead>
            <tbody className="divide-y">
              <tr><td className="p-3 font-mono">file.txt</td><td className="p-3">Mengabaikan file spesifik</td><td className="p-3">Mengabaikan file.txt</td></tr>
              <tr><td className="p-3 font-mono">*.log</td><td className="p-3">Mengabaikan semua file berekstensi .log</td><td className="p-3">error.log, debug.log</td></tr>
              <tr><td className="p-3 font-mono">folder/</td><td className="p-3">Mengabaikan seluruh folder</td><td className="p-3">node_modules/</td></tr>
              <tr><td className="p-3 font-mono">!penting.log</td><td className="p-3">JANGAN abaikan (pengecualian)</td><td className="p-3">Tetap lacak penting.log</td></tr>
              <tr><td className="p-3 font-mono"># komentar</td><td className="p-3">Komentar, diabaikan Git</td><td className="p-3"># ini catatan saya</td></tr>
              <tr><td className="p-3 font-mono">**/logs</td><td className="p-3">Semua folder bernama "logs"</td><td className="p-3">src/logs, app/logs</td></tr>
            </tbody>
          </table>
        </div>

        <InfoBox type="danger" title="Penting: .gitignore hanya berlaku untuk file BARU">
          Jika file sudah pernah di-commit ke Git sebelumnya, menambahkannya ke .gitignore saja TIDAK CUKUP. 
          Anda harus menghapusnya dari cache Git terlebih dahulu:
          <div className="mt-2">
            <code className="bg-red-100 px-2 py-1 rounded text-red-800">git rm --cached namafile</code><br/>
            <code className="bg-red-100 px-2 py-1 rounded text-red-800 mt-1 inline-block">git rm -r --cached node_modules/</code>
          </div>
        </InfoBox>

        <InfoBox type="tip" title="Template .gitignore">
          GitHub menyediakan template .gitignore untuk berbagai bahasa/framework di <strong>github.com/github/gitignore</strong>. 
          Anda juga bisa menggunakan website <strong>gitignore.io</strong> untuk men-generate .gitignore secara otomatis.
        </InfoBox>
      </div>
    )
  },

  // ===== BAB 12: GIT STASH =====
  {
    id: 'stash',
    title: '12. Git Stash (Simpan Sementara)',
    icon: <ArchiveIcon className="w-4 h-4" />,
    category: 'Lanjutan',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">📦 Git Stash (Simpan Sementara)</h2>
        <p className="text-gray-700 leading-relaxed">
          Pernahkah Anda sedang mengerjakan fitur, tiba-tiba diminta memperbaiki bug mendesak di branch lain? 
          Anda belum mau commit kode yang belum selesai, tapi juga tidak mau kehilangan perubahan. 
          <strong>Git Stash</strong> adalah solusinya!
        </p>

        <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
          <h4 className="font-bold text-purple-800 mb-2">🎯 Analogi</h4>
          <p className="text-gray-700 text-sm">
            Stash itu seperti "laci rahasia" tempat Anda menyimpan pekerjaan yang belum selesai. 
            Anda bisa bersih-bersih meja (working directory), mengerjakan hal lain, lalu membuka laci dan melanjutkan pekerjaan tadi.
          </p>
        </div>

        <SectionTitle>Perintah Git Stash</SectionTitle>
        <CodeBlock>{`# Simpan perubahan ke stash (laci)
$ git stash
# Atau dengan pesan deskripsi:
$ git stash push -m "sedang mengerjakan halaman profil"

# Lihat daftar semua stash
$ git stash list
# Output:
# stash@{0}: On main: sedang mengerjakan halaman profil
# stash@{1}: WIP on main: abc1234 commit sebelumnya

# Ambil kembali stash terakhir DAN hapus dari daftar
$ git stash pop

# Ambil kembali stash terakhir TANPA menghapus dari daftar
$ git stash apply

# Ambil stash spesifik
$ git stash apply stash@{1}

# Hapus stash tertentu
$ git stash drop stash@{0}

# Hapus SEMUA stash
$ git stash clear

# Lihat isi stash tanpa mengaplikasikan
$ git stash show stash@{0}
$ git stash show -p stash@{0}  # lebih detail`}</CodeBlock>

        <SectionTitle>Contoh Penggunaan Stash</SectionTitle>
        <CodeBlock title="Skenario: Diminta fix bug saat sedang coding fitur">{`# Anda sedang coding fitur profil di branch fitur-profil
# ... edit file ...

# Tiba-tiba ada bug urgent yang harus diperbaiki!
# Simpan dulu pekerjaan Anda:
$ git stash push -m "profil belum selesai"

# Pindah ke main untuk fix bug
$ git switch main
$ git pull origin main

# Fix bug...
$ git add .
$ git commit -m "fix: memperbaiki bug kritis pada checkout"
$ git push origin main

# Kembali ke fitur profil
$ git switch fitur-profil

# Ambil kembali pekerjaan dari stash
$ git stash pop

# Lanjutkan coding!`}</CodeBlock>

        <InfoBox type="tip" title="Tips">
          Gunakan <code>git stash push -m "deskripsi"</code> agar Anda ingat apa isi stash tersebut. 
          Jika Anda punya banyak stash tanpa deskripsi, akan sulit menemukan yang mana yang Anda butuhkan.
        </InfoBox>
      </div>
    )
  },

  // ===== BAB 13: RESET & REVERT =====
  {
    id: 'reset-revert',
    title: '13. Git Reset & Revert',
    icon: <UndoIcon className="w-4 h-4" />,
    category: 'Lanjutan',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">⏪ Git Reset & Revert (Membatalkan Perubahan)</h2>
        <p className="text-gray-700 leading-relaxed">
          Semua orang pernah membuat kesalahan. Git menyediakan beberapa cara untuk "membatalkan" atau "memutar ulang" perubahan yang sudah dibuat.
        </p>

        <SectionTitle>git restore — Membatalkan Editan (Belum di-add)</SectionTitle>
        <CodeBlock>{`# Membatalkan perubahan pada file tertentu (kembali ke versi commit terakhir)
$ git restore index.html

# Membatalkan SEMUA perubahan yang belum di-staging
$ git restore .

# Mengeluarkan file dari staging area (kebalikan git add)
$ git restore --staged index.html
$ git restore --staged .`}</CodeBlock>

        <SectionTitle>git reset — Membatalkan Commit</SectionTitle>
        <CodeBlock>{`# SOFT reset: membatalkan commit tapi perubahan tetap di staging
$ git reset --soft HEAD~1

# MIXED reset (default): membatalkan commit, perubahan kembali ke working directory
$ git reset HEAD~1
$ git reset --mixed HEAD~1

# HARD reset: membatalkan commit DAN MENGHAPUS semua perubahan
$ git reset --hard HEAD~1

# Reset ke commit tertentu
$ git reset --hard abc1234`}</CodeBlock>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200 rounded overflow-hidden">
            <thead><tr className="bg-gray-100"><th className="p-3 text-left border-b">Mode</th><th className="p-3 text-left border-b">Commit</th><th className="p-3 text-left border-b">Staging</th><th className="p-3 text-left border-b">Working Dir</th><th className="p-3 text-left border-b">Resiko</th></tr></thead>
            <tbody className="divide-y">
              <tr><td className="p-3 font-mono text-green-600">--soft</td><td className="p-3">Dibatalkan</td><td className="p-3">Tetap ada</td><td className="p-3">Tetap ada</td><td className="p-3 text-green-600">Aman</td></tr>
              <tr><td className="p-3 font-mono text-yellow-600">--mixed</td><td className="p-3">Dibatalkan</td><td className="p-3">Dihapus</td><td className="p-3">Tetap ada</td><td className="p-3 text-yellow-600">Sedang</td></tr>
              <tr><td className="p-3 font-mono text-red-600">--hard</td><td className="p-3">Dibatalkan</td><td className="p-3">Dihapus</td><td className="p-3">Dihapus!</td><td className="p-3 text-red-600">Bahaya!</td></tr>
            </tbody>
          </table>
        </div>

        <InfoBox type="danger" title="⚠️ HATI-HATI dengan --hard!">
          <code>git reset --hard</code> akan <strong>menghapus semua perubahan secara permanen</strong>. Tidak bisa di-undo!
          Gunakan hanya jika Anda benar-benar yakin ingin membuang semua perubahan.
        </InfoBox>

        <SectionTitle>git revert — Membatalkan Commit dengan Aman</SectionTitle>
        <p className="text-gray-700 leading-relaxed">
          Berbeda dengan <code>reset</code> yang menghapus commit, <code>revert</code> membuat <strong>commit baru yang membalikkan perubahan</strong>. 
          Ini lebih aman karena history tetap utuh.
        </p>
        <CodeBlock>{`# Revert commit terakhir
$ git revert HEAD

# Revert commit tertentu
$ git revert abc1234

# Revert tanpa auto-commit (bisa diedit dulu)
$ git revert --no-commit abc1234`}</CodeBlock>

        <InfoBox type="tip" title="Kapan pakai Reset vs Revert?">
          <strong>Reset</strong> → Untuk commit yang BELUM di-push ke GitHub (masih lokal saja).<br/>
          <strong>Revert</strong> → Untuk commit yang SUDAH di-push ke GitHub (agar history tetap rapi dan tidak membingungkan tim).
        </InfoBox>
      </div>
    )
  },

  // ===== BAB 14: GIT TAG =====
  {
    id: 'tag',
    title: '14. Git Tag (Versi Rilis)',
    icon: <TagIcon className="w-4 h-4" />,
    category: 'Lanjutan',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">🏷️ Git Tag (Menandai Versi Rilis)</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Tag</strong> digunakan untuk menandai titik penting dalam history, biasanya untuk menandai versi rilis (release). 
          Misalnya: v1.0.0, v2.1.3, dll.
        </p>

        <SectionTitle>Membuat Tag</SectionTitle>
        <CodeBlock>{`# Membuat tag ringan (lightweight)
$ git tag v1.0.0

# Membuat tag beranotasi (disarankan, lebih lengkap)
$ git tag -a v1.0.0 -m "Rilis pertama: fitur login dan register"

# Membuat tag di commit tertentu
$ git tag -a v0.9.0 -m "Beta release" abc1234`}</CodeBlock>

        <SectionTitle>Mengelola Tag</SectionTitle>
        <CodeBlock>{`# Melihat semua tag
$ git tag

# Melihat detail tag
$ git show v1.0.0

# Push tag ke GitHub
$ git push origin v1.0.0

# Push SEMUA tag ke GitHub
$ git push origin --tags

# Menghapus tag lokal
$ git tag -d v1.0.0

# Menghapus tag di remote/GitHub
$ git push origin --delete v1.0.0`}</CodeBlock>

        <InfoBox type="info" title="Semantic Versioning">
          Standar penamaan versi: <code>vMAJOR.MINOR.PATCH</code><br/>
          • <strong>MAJOR</strong> (v2.0.0): Perubahan besar, tidak kompatibel dengan versi sebelumnya<br/>
          • <strong>MINOR</strong> (v1.1.0): Fitur baru, tetap kompatibel<br/>
          • <strong>PATCH</strong> (v1.0.1): Perbaikan bug kecil
        </InfoBox>
      </div>
    )
  },

  // ===== BAB 15: SSH KEY =====
  {
    id: 'ssh',
    title: '15. Setup SSH Key',
    icon: <KeyIcon className="w-4 h-4" />,
    category: 'Lanjutan',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">🔑 Setup SSH Key untuk GitHub</h2>
        <p className="text-gray-700 leading-relaxed">
          SSH Key memungkinkan Anda terhubung ke GitHub <strong>tanpa harus mengetik username dan password setiap kali push/pull</strong>. 
          Ini lebih aman dan praktis.
        </p>

        <SectionTitle>Langkah 1: Cek SSH Key yang Sudah Ada</SectionTitle>
        <CodeBlock>{`$ ls -al ~/.ssh
# Jika muncul file id_rsa.pub atau id_ed25519.pub, Anda sudah punya SSH key`}</CodeBlock>

        <SectionTitle>Langkah 2: Generate SSH Key Baru</SectionTitle>
        <CodeBlock>{`# Generate SSH key (ganti email dengan email GitHub Anda)
$ ssh-keygen -t ed25519 -C "email.anda@gmail.com"

# Jika komputer Anda tidak mendukung ed25519:
$ ssh-keygen -t rsa -b 4096 -C "email.anda@gmail.com"

# Tekan Enter 3x (gunakan default path dan tanpa passphrase)`}</CodeBlock>

        <SectionTitle>Langkah 3: Tambahkan SSH Key ke SSH Agent</SectionTitle>
        <CodeBlock>{`# Mulai SSH agent
$ eval "$(ssh-agent -s)"

# Tambahkan key
$ ssh-add ~/.ssh/id_ed25519`}</CodeBlock>

        <SectionTitle>Langkah 4: Copy SSH Key</SectionTitle>
        <CodeBlock>{`# Mac
$ pbcopy < ~/.ssh/id_ed25519.pub

# Windows (Git Bash)
$ clip < ~/.ssh/id_ed25519.pub

# Linux
$ cat ~/.ssh/id_ed25519.pub
# Lalu copy outputnya secara manual`}</CodeBlock>

        <SectionTitle>Langkah 5: Tambahkan ke GitHub</SectionTitle>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
          <li>Buka <strong>github.com</strong> → klik foto profil → <strong>Settings</strong></li>
          <li>Di sidebar kiri, klik <strong>"SSH and GPG keys"</strong></li>
          <li>Klik <strong>"New SSH key"</strong></li>
          <li>Beri judul (misal: "Laptop Kerja") dan paste key yang sudah di-copy</li>
          <li>Klik <strong>"Add SSH key"</strong></li>
        </ol>

        <SectionTitle>Langkah 6: Test Koneksi</SectionTitle>
        <CodeBlock>{`$ ssh -T git@github.com
# Output: Hi username! You've successfully authenticated`}</CodeBlock>

        <InfoBox type="success" title="Berhasil!">
          Sekarang Anda bisa clone, push, dan pull menggunakan URL SSH (<code>git@github.com:username/repo.git</code>) tanpa perlu memasukkan password lagi!
        </InfoBox>

        <SectionTitle>Mengubah Remote dari HTTPS ke SSH</SectionTitle>
        <CodeBlock>{`# Cek remote saat ini
$ git remote -v

# Ubah ke SSH
$ git remote set-url origin git@github.com:username/nama-repo.git`}</CodeBlock>
      </div>
    )
  },

  // ===== BAB 16: PULL REQUEST =====
  {
    id: 'pull-request',
    title: '16. Pull Request di GitHub',
    icon: <UsersIcon className="w-4 h-4" />,
    category: 'GitHub',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">🤝 Pull Request (PR) di GitHub</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Pull Request (PR)</strong> adalah fitur GitHub yang memungkinkan Anda "meminta izin" untuk menggabungkan 
          perubahan dari satu branch ke branch lain. PR sangat penting untuk kolaborasi tim karena memungkinkan orang lain 
          me-review kode Anda sebelum di-merge.
        </p>

        <SectionTitle>Cara Membuat Pull Request</SectionTitle>
        <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-4">
          <li>
            <strong>Push branch Anda ke GitHub:</strong>
            <CodeBlock>{`$ git push origin fitur-login`}</CodeBlock>
          </li>
          <li>Buka repository di <strong>github.com</strong></li>
          <li>Anda akan melihat banner kuning <strong>"Compare & pull request"</strong> — klik tombol itu</li>
          <li>
            <strong>Isi detail PR:</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm">
              <li>Title: Judul singkat dan jelas (misal: "Menambahkan halaman login")</li>
              <li>Description: Jelaskan apa yang Anda ubah, kenapa, dan bagaimana cara testingnya</li>
              <li>Reviewers: Pilih teman tim yang akan me-review kode Anda</li>
            </ul>
          </li>
          <li>Klik <strong>"Create pull request"</strong></li>
          <li>Setelah di-review dan disetujui, klik <strong>"Merge pull request"</strong></li>
          <li>Klik <strong>"Delete branch"</strong> untuk membersihkan branch yang sudah di-merge</li>
        </ol>

        <InfoBox type="tip" title="Best Practice Pull Request">
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Buat PR kecil dan fokus — jangan campur banyak fitur dalam 1 PR</li>
            <li>Tulis deskripsi yang jelas dengan screenshot jika ada perubahan visual</li>
            <li>Minta review dari minimal 1-2 orang sebelum merge</li>
            <li>Pastikan semua test lulus sebelum merge</li>
            <li>Hapus branch setelah di-merge agar tidak berantakan</li>
          </ul>
        </InfoBox>

        <SectionTitle>Fork & Pull Request (Kontribusi ke Proyek Orang Lain)</SectionTitle>
        <p className="text-gray-700 leading-relaxed">
          Jika Anda ingin berkontribusi ke proyek open source milik orang lain yang bukan milik Anda:
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
          <li><strong>Fork</strong>: Klik tombol "Fork" di repository orang lain → ini membuat salinan di akun GitHub Anda</li>
          <li><strong>Clone</strong> fork Anda ke lokal: <code>git clone https://github.com/ANDA/repo.git</code></li>
          <li><strong>Buat branch baru</strong>, kerjakan perubahan, commit</li>
          <li><strong>Push</strong> ke fork Anda di GitHub</li>
          <li>Buat <strong>Pull Request</strong> dari fork Anda ke repository asli</li>
          <li>Pemilik repository asli akan me-review dan memutuskan apakah menerima PR Anda</li>
        </ol>
      </div>
    )
  },

  // ===== BAB 17: GITHUB PAGES =====
  {
    id: 'github-pages',
    title: '17. GitHub Pages (Deploy Web)',
    icon: <GlobeIcon className="w-4 h-4" />,
    category: 'GitHub',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-amber-500 pb-3">🌐 GitHub Pages — Deploy Website Gratis!</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>GitHub Pages</strong> adalah layanan hosting gratis dari GitHub untuk website statis. 
          Anda bisa meng-hosting website pribadi, portofolio, dokumentasi, atau proyek seperti Kitab Git ini secara gratis!
        </p>

        <SectionTitle>Cara 1: Website HTML/CSS/JS Biasa (Tanpa Framework)</SectionTitle>
        <p className="text-gray-700">Jika website Anda hanya berisi file HTML, CSS, dan JavaScript biasa:</p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
          <li>Pastikan ada file <code>index.html</code> di root folder proyek</li>
          <li>Push semua file ke GitHub</li>
          <li>Buka repository di GitHub → <strong>Settings</strong> → <strong>Pages</strong></li>
          <li>Di bagian "Source", pilih branch <strong>main</strong> dan folder <strong>/ (root)</strong></li>
          <li>Klik <strong>Save</strong></li>
          <li>Tunggu beberapa menit, website Anda akan live di: <code>https://username.github.io/nama-repo/</code></li>
        </ol>

        <SectionTitle>Cara 2: Website React/Vite (Framework)</SectionTitle>
        <InfoBox type="danger" title="⚠️ INILAH PENYEBAB WEB BLANK PUTIH!">
          Jika Anda membuat website dengan React, Vite, Vue, atau framework modern lainnya, 
          Anda <strong>TIDAK BISA</strong> langsung push source code mentah ke GitHub Pages. 
          Browser tidak mengerti file <code>.tsx</code>, <code>.jsx</code>, atau <code>.vue</code>.
          Anda WAJIB mem-build terlebih dahulu!
        </InfoBox>

        <p className="text-gray-700 font-bold mt-4">Langkah-langkah Deploy React/Vite ke GitHub Pages:</p>

        <div className="space-y-4 mt-4">
          <div className="border rounded-lg p-4 bg-white">
            <p className="font-bold text-gray-800">Langkah 1: Atur base di vite.config.ts</p>
            <CodeBlock title="vite.config.ts">{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',   // ← WAJIB untuk GitHub Pages!
  plugins: [react()],
})`}</CodeBlock>
          </div>

          <div className="border rounded-lg p-4 bg-white">
            <p className="font-bold text-gray-800">Langkah 2: Build proyek</p>
            <CodeBlock>{`$ npm run build`}</CodeBlock>
            <p className="text-gray-600 text-sm mt-2">Perintah ini akan menghasilkan folder <code>dist/</code> yang berisi file HTML, CSS, dan JS yang sudah siap di-hosting.</p>
          </div>

          <div className="border rounded-lg p-4 bg-white">
            <p className="font-bold text-gray-800">Langkah 3: Upload folder dist ke GitHub Pages</p>
            <p className="text-gray-700 text-sm mb-3">Ada beberapa cara:</p>
            
            <p className="font-semibold text-gray-700 text-sm mt-3">Cara A: Push isi folder dist ke branch main</p>
            <CodeBlock>{`# Copy isi folder dist ke repository GitHub Pages Anda
# Pastikan file index.html ada di ROOT repository`}</CodeBlock>

            <p className="font-semibold text-gray-700 text-sm mt-3">Cara B: Gunakan gh-pages (otomatis)</p>
            <CodeBlock>{`# Install package gh-pages
$ npm install -D gh-pages

# Tambahkan script di package.json:
# "deploy": "gh-pages -d dist"

# Build lalu deploy
$ npm run build
$ npx gh-pages -d dist`}</CodeBlock>

            <p className="font-semibold text-gray-700 text-sm mt-3">Cara C: Manual — push folder dist saja</p>
            <CodeBlock>{`# 1. Build proyek
$ npm run build

# 2. Masuk ke folder dist
$ cd dist

# 3. Inisialisasi git baru di sana
$ git init
$ git add .
$ git commit -m "deploy"

# 4. Push ke branch gh-pages
$ git push -f https://github.com/username/nama-repo.git main:gh-pages

# 5. Di GitHub → Settings → Pages → pilih branch gh-pages`}</CodeBlock>
          </div>

          <div className="border rounded-lg p-4 bg-white">
            <p className="font-bold text-gray-800">Langkah 4: Atur GitHub Pages Source</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4 text-sm">
              <li>Buka repository di GitHub</li>
              <li>Klik <strong>Settings</strong> → <strong>Pages</strong></li>
              <li>Di "Source", pilih branch <strong>gh-pages</strong> (atau <strong>main</strong> tergantung cara deploy Anda)</li>
              <li>Folder: <strong>/ (root)</strong></li>
              <li>Klik <strong>Save</strong></li>
            </ol>
          </div>
        </div>

        <InfoBox type="success" title="Website Anda Live!">
          Setelah beberapa menit, website Anda akan muncul di:<br/>
          <code className="text-lg">https://username.github.io/nama-repo/</code><br/><br/>
          Jika masih blank putih, coba hard-refresh browser (Ctrl+Shift+R) atau tunggu beberapa menit lagi karena GitHub butuh waktu untuk memproses.
        </InfoBox>
      </div>
    )
  },

  // ===== BAB 18: GIT LOG LANJUTAN =====
  {
    id: 'git-log',
    title: '18. Git Log & History Lanjutan',
    icon: <ClockIcon className="w-4 h-4" />,
    category: 'GitHub',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">📜 Git Log & History Lanjutan</h2>
        <p className="text-gray-700 leading-relaxed">
          Menguasai <code>git log</code> membantu Anda memahami perjalanan proyek — siapa mengubah apa, kapan, dan kenapa.
        </p>

        <SectionTitle>Berbagai Format git log</SectionTitle>
        <CodeBlock>{`# Log standar (detail lengkap)
$ git log

# Log ringkas (1 baris per commit)
$ git log --oneline

# Log dengan grafik visual branch
$ git log --oneline --graph --all --decorate

# Log 10 commit terakhir
$ git log -10

# Log dengan statistik file yang berubah
$ git log --stat

# Log dengan diff (perubahan detail)
$ git log -p

# Log oleh author tertentu
$ git log --author="Budi"

# Log berdasarkan tanggal
$ git log --since="2024-01-01" --until="2024-12-31"

# Log berdasarkan pesan commit
$ git log --grep="fix"

# Log file tertentu
$ git log -- index.html

# Format custom
$ git log --pretty=format:"%h - %an, %ar : %s"
# Output: abc1234 - Budi, 2 hours ago : fix login bug`}</CodeBlock>

        <SectionTitle>Perintah Investigasi Lainnya</SectionTitle>
        <CodeBlock>{`# Melihat siapa yang mengedit setiap baris di file (blame)
$ git blame index.html

# Melihat detail commit tertentu
$ git show abc1234

# Melihat perubahan pada commit tertentu
$ git show abc1234 --stat

# Mencari commit yang menyebabkan bug (bisect)
$ git bisect start
$ git bisect bad          # commit saat ini bermasalah
$ git bisect good abc1234 # commit ini masih bagus
# Git akan membantu Anda menemukan commit penyebab bug!`}</CodeBlock>

        <InfoBox type="tip" title="Alias Favorit">
          Anda bisa membuat shortcut (alias) untuk perintah log yang sering dipakai:
          <CodeBlock>{`$ git config --global alias.lg "log --oneline --graph --all --decorate"
# Sekarang cukup ketik:
$ git lg`}</CodeBlock>
        </InfoBox>
      </div>
    )
  },

  // ===== BAB 19: TIPS & TRIK =====
  {
    id: 'tips',
    title: '19. Tips & Trik Git',
    icon: <LightbulbIcon className="w-4 h-4" />,
    category: 'Bonus',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">💡 Tips & Trik Git untuk Produktivitas</h2>

        <SectionTitle>1. Git Alias (Shortcut Perintah)</SectionTitle>
        <CodeBlock>{`# Buat alias agar tidak perlu mengetik perintah panjang
$ git config --global alias.s "status"
$ git config --global alias.co "checkout"
$ git config --global alias.br "branch"
$ git config --global alias.cm "commit -m"
$ git config --global alias.lg "log --oneline --graph --all"
$ git config --global alias.last "log -1 HEAD"

# Penggunaan:
$ git s          # sama dengan git status
$ git co main    # sama dengan git checkout main
$ git cm "fix"   # sama dengan git commit -m "fix"
$ git lg         # log visual yang cantik`}</CodeBlock>

        <SectionTitle>2. Mengubah Pesan Commit Terakhir</SectionTitle>
        <CodeBlock>{`# Salah ketik pesan commit? Ubah dengan amend
$ git commit --amend -m "pesan yang benar"

# Menambahkan file yang lupa di-add ke commit terakhir
$ git add file-yang-lupa.txt
$ git commit --amend --no-edit`}</CodeBlock>
        <InfoBox type="warning">Jangan gunakan <code>--amend</code> pada commit yang sudah di-push ke GitHub, kecuali Anda satu-satunya yang bekerja di branch itu.</InfoBox>

        <SectionTitle>3. Melihat Perbedaan Sebelum Commit</SectionTitle>
        <CodeBlock>{`# Lihat perubahan yang belum di-staging
$ git diff

# Lihat perubahan yang sudah di-staging
$ git diff --staged

# Lihat perubahan dibanding commit tertentu
$ git diff abc1234`}</CodeBlock>

        <SectionTitle>4. Cherry Pick (Mengambil Commit Tertentu)</SectionTitle>
        <CodeBlock>{`# Mengambil 1 commit spesifik dari branch lain
$ git cherry-pick abc1234

# Berguna ketika Anda hanya butuh 1 commit dari branch fitur,
# tanpa harus merge seluruh branch`}</CodeBlock>

        <SectionTitle>5. Membersihkan File yang Tidak Dilacak</SectionTitle>
        <CodeBlock>{`# Lihat file apa yang akan dihapus (dry run)
$ git clean -n

# Hapus file yang tidak dilacak
$ git clean -f

# Hapus file dan folder yang tidak dilacak
$ git clean -fd`}</CodeBlock>

        <SectionTitle>6. Temporary Ignore File</SectionTitle>
        <CodeBlock>{`# Mengabaikan perubahan file sementara (tanpa mengedit .gitignore)
$ git update-index --assume-unchanged config.local.js

# Mengembalikan tracking
$ git update-index --no-assume-unchanged config.local.js`}</CodeBlock>

        <SectionTitle>7. Shortcut Terminal yang Berguna</SectionTitle>
        <CodeBlock>{`# Commit semua perubahan dalam 1 baris
$ git add . && git commit -m "update" && git push

# Lihat branch mana yang sudah di-merge
$ git branch --merged

# Lihat branch yang belum di-merge
$ git branch --no-merged

# Menghapus semua branch yang sudah di-merge (kecuali main)
$ git branch --merged | grep -v main | xargs git branch -d`}</CodeBlock>
      </div>
    )
  },

  // ===== BAB 20: SOLUSI ERROR =====
  {
    id: 'error',
    title: '20. Solusi Error Umum',
    icon: <AlertIcon className="w-4 h-4" />,
    category: 'Bonus',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-red-500 pb-3">🚨 Solusi Error Umum Git</h2>
        <p className="text-gray-700 leading-relaxed">Kumpulan error yang paling sering dialami pemula beserta solusinya. Bookmark bab ini!</p>

        {/* ERROR 1 */}
        <div className="border border-red-200 bg-red-50 rounded-lg p-5 space-y-3">
          <h3 className="text-lg font-bold text-red-800">❌ Error 1: "Updates were rejected" (Push Ditolak)</h3>
          <div className="bg-red-100 rounded p-3 font-mono text-xs text-red-800">
            error: failed to push some refs to 'https://github.com/...'<br/>
            hint: Updates were rejected because the remote contains work that you do not have locally.
          </div>
          <p className="text-sm text-gray-700"><strong>Penyebab:</strong> Ada commit di GitHub yang belum ada di lokal Anda.</p>
          <p className="text-sm text-gray-700"><strong>Solusi:</strong></p>
          <CodeBlock>{`$ git pull origin main
# Selesaikan conflict jika ada
$ git push origin main`}</CodeBlock>
        </div>

        {/* ERROR 2 */}
        <div className="border border-red-200 bg-red-50 rounded-lg p-5 space-y-3">
          <h3 className="text-lg font-bold text-red-800">❌ Error 2: "fatal: not a git repository"</h3>
          <div className="bg-red-100 rounded p-3 font-mono text-xs text-red-800">
            fatal: not a git repository (or any of the parent directories): .git
          </div>
          <p className="text-sm text-gray-700"><strong>Penyebab:</strong> Anda menjalankan perintah Git di folder yang bukan repository Git.</p>
          <p className="text-sm text-gray-700"><strong>Solusi:</strong></p>
          <CodeBlock>{`# Pastikan Anda di folder yang benar
$ cd nama-folder-proyek

# Atau inisialisasi Git jika belum
$ git init`}</CodeBlock>
        </div>

        {/* ERROR 3 */}
        <div className="border border-red-200 bg-red-50 rounded-lg p-5 space-y-3">
          <h3 className="text-lg font-bold text-red-800">❌ Error 3: "Permission denied (publickey)"</h3>
          <div className="bg-red-100 rounded p-3 font-mono text-xs text-red-800">
            Permission denied (publickey).<br/>
            fatal: Could not read from remote repository.
          </div>
          <p className="text-sm text-gray-700"><strong>Penyebab:</strong> SSH key belum di-setup atau sudah expired.</p>
          <p className="text-sm text-gray-700"><strong>Solusi 1:</strong> Setup SSH key (lihat Bab 15)</p>
          <p className="text-sm text-gray-700"><strong>Solusi 2:</strong> Gunakan HTTPS sebagai gantinya:</p>
          <CodeBlock>{`$ git remote set-url origin https://github.com/username/repo.git`}</CodeBlock>
        </div>

        {/* ERROR 4 */}
        <div className="border border-red-200 bg-red-50 rounded-lg p-5 space-y-3">
          <h3 className="text-lg font-bold text-red-800">❌ Error 4: "Your branch is behind"</h3>
          <div className="bg-red-100 rounded p-3 font-mono text-xs text-red-800">
            Your branch is behind 'origin/main' by 3 commits
          </div>
          <p className="text-sm text-gray-700"><strong>Penyebab:</strong> Lokal Anda ketinggalan update dari GitHub.</p>
          <CodeBlock>{`$ git pull origin main`}</CodeBlock>
        </div>

        {/* ERROR 5 */}
        <div className="border border-red-200 bg-red-50 rounded-lg p-5 space-y-3">
          <h3 className="text-lg font-bold text-red-800">❌ Error 5: "Merge Conflict"</h3>
          <div className="bg-red-100 rounded p-3 font-mono text-xs text-red-800">
            CONFLICT (content): Merge conflict in index.html<br/>
            Automatic merge failed; fix conflicts and then commit the result.
          </div>
          <p className="text-sm text-gray-700"><strong>Penyebab:</strong> Dua orang mengedit baris yang sama.</p>
          <p className="text-sm text-gray-700"><strong>Solusi:</strong> Buka file conflict → pilih kode yang benar → hapus tanda conflict → save:</p>
          <CodeBlock>{`$ git add .
$ git commit -m "fix: resolve merge conflict"
$ git push origin main`}</CodeBlock>
        </div>

        {/* ERROR 6 */}
        <div className="border border-red-200 bg-red-50 rounded-lg p-5 space-y-3">
          <h3 className="text-lg font-bold text-red-800">❌ Error 6: "nothing to commit, working tree clean"</h3>
          <p className="text-sm text-gray-700"><strong>Penyebab:</strong> Tidak ada perubahan yang perlu di-commit. Semua file sudah di-commit.</p>
          <p className="text-sm text-gray-700"><strong>Solusi:</strong> Ini BUKAN error. Ini artinya semua sudah tersimpan. Pastikan Anda sudah save file di editor sebelum <code>git add</code>.</p>
        </div>

        {/* ERROR 7 */}
        <div className="border border-orange-200 bg-orange-50 rounded-lg p-5 space-y-3">
          <h3 className="text-lg font-bold text-orange-800">⚠️ Error 7: GitHub Pages Blank Putih</h3>
          <p className="text-sm text-gray-700"><strong>Penyebab (React/Vite):</strong> Anda push source code mentah, bukan hasil build.</p>
          <p className="text-sm text-gray-700"><strong>Solusi:</strong></p>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1 ml-4">
            <li>Tambahkan <code>base: './'</code> di vite.config.ts</li>
            <li>Jalankan <code>npm run build</code></li>
            <li>Upload ISI folder <code>dist/</code> ke GitHub (bukan source code-nya)</li>
            <li>Atur GitHub Pages source ke branch/folder yang berisi file index.html hasil build</li>
          </ol>
        </div>

        {/* ERROR 8 */}
        <div className="border border-red-200 bg-red-50 rounded-lg p-5 space-y-3">
          <h3 className="text-lg font-bold text-red-800">❌ Error 8: "fatal: remote origin already exists"</h3>
          <div className="bg-red-100 rounded p-3 font-mono text-xs text-red-800">
            fatal: remote origin already exists.
          </div>
          <p className="text-sm text-gray-700"><strong>Penyebab:</strong> Anda mencoba menambah remote "origin" yang sudah ada.</p>
          <CodeBlock>{`# Hapus dulu, lalu tambah lagi
$ git remote remove origin
$ git remote add origin https://github.com/username/repo.git

# Atau langsung ubah URL-nya
$ git remote set-url origin https://github.com/username/repo.git`}</CodeBlock>
        </div>
      </div>
    )
  },

  // ===== BAB 21: GLOSARIUM =====
  {
    id: 'glosarium',
    title: '21. Glosarium & Istilah Git',
    icon: <BookmarkIcon className="w-4 h-4" />,
    category: 'Bonus',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3">📚 Glosarium — Kamus Istilah Git</h2>
        <p className="text-gray-700 leading-relaxed">Referensi cepat untuk semua istilah Git yang sering Anda temui.</p>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200 rounded overflow-hidden">
            <thead><tr className="bg-gray-100"><th className="p-3 text-left border-b font-semibold w-1/4">Istilah</th><th className="p-3 text-left border-b font-semibold">Penjelasan</th></tr></thead>
            <tbody className="divide-y">
              <tr><td className="p-3 font-mono font-bold text-blue-700">Repository (Repo)</td><td className="p-3">Folder proyek yang dilacak oleh Git. Berisi semua file dan riwayat perubahan.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Commit</td><td className="p-3">Snapshot/checkpoint dari perubahan yang disimpan ke history Git. Setiap commit punya ID unik (hash).</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Branch</td><td className="p-3">Cabang pengembangan. Memungkinkan Anda bekerja di fitur berbeda tanpa mengganggu kode utama.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Merge</td><td className="p-3">Menggabungkan perubahan dari satu branch ke branch lain.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Clone</td><td className="p-3">Menyalin seluruh repository dari remote (GitHub) ke komputer lokal.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Fork</td><td className="p-3">Membuat salinan repository orang lain di akun GitHub Anda.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Pull Request (PR)</td><td className="p-3">Permintaan untuk menggabungkan perubahan dari satu branch ke branch lain di GitHub.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Remote</td><td className="p-3">Repository yang tersimpan di server (internet), biasanya di GitHub.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Origin</td><td className="p-3">Nama default untuk remote repository Anda di GitHub.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">HEAD</td><td className="p-3">Pointer yang menunjuk ke commit terakhir di branch yang sedang aktif.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Staging Area</td><td className="p-3">Area persiapan/antrian. File yang sudah di-add tapi belum di-commit.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Working Directory</td><td className="p-3">Folder kerja Anda yang sebenarnya di komputer.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Stash</td><td className="p-3">Menyimpan perubahan sementara tanpa commit, bisa diambil kembali nanti.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Rebase</td><td className="p-3">Memindahkan base branch Anda ke titik terbaru dari branch tujuan. Membuat history lebih linear.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Tag</td><td className="p-3">Penanda untuk commit penting, biasanya untuk versi rilis (v1.0.0).</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Checkout</td><td className="p-3">Berpindah ke branch atau commit tertentu.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Fetch</td><td className="p-3">Mendownload data dari remote tanpa menggabungkan ke branch lokal (lebih aman dari pull).</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Diff</td><td className="p-3">Menampilkan perbedaan antara dua versi file.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">.gitignore</td><td className="p-3">File yang berisi daftar file/folder yang diabaikan (tidak dilacak) oleh Git.</td></tr>
              <tr><td className="p-3 font-mono font-bold text-blue-700">Conflict</td><td className="p-3">Terjadi saat Git tidak bisa menggabungkan perubahan secara otomatis karena dua perubahan di baris yang sama.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
];

// ============================================================
// MAIN APP COMPONENT
// ============================================================
function App() {
  const [activeChapter, setActiveChapter] = useState(chapters[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);

  const currentIndex = chapters.findIndex(c => c.id === activeChapter);
  const currentChapter = chapters[currentIndex] || chapters[0];

  // Group chapters by category
  const categories = [...new Set(chapters.map(c => c.category))];

  const filteredChapters = chapters.filter(c =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigateTo = (id: string) => {
    setActiveChapter(id);
    setIsMobileMenuOpen(false);
    contentRef.current?.scrollTo(0, 0);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans text-gray-800">
      
      {/* MOBILE HEADER */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex justify-between items-center sticky top-0 z-30 shadow-lg">
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="bg-blue-600 p-1.5 rounded">
            <BookIcon className="w-5 h-5" />
          </div>
          Kitab Git & GitHub
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-slate-800 rounded-lg transition"
        >
          {isMobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* SIDEBAR */}
      <aside className={`
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        fixed md:sticky top-0 left-0 h-screen w-80 bg-slate-900 text-slate-300
        transition-transform duration-300 ease-in-out z-20
        flex flex-col border-r border-slate-800 overflow-hidden
      `}>
        {/* Sidebar Header */}
        <div className="p-5 hidden md:flex items-center gap-3 border-b border-slate-800 shrink-0">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-2.5 rounded-xl text-white shadow-lg shadow-blue-900/30">
            <BookIcon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white leading-tight">Kitab Git & GitHub</h1>
            <p className="text-xs text-slate-500 mt-0.5">Panduan Lengkap untuk Pemula</p>
          </div>
        </div>

        {/* Search */}
        <div className="p-3 border-b border-slate-800 shrink-0">
          <div className="relative">
            <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Cari materi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 text-slate-200 text-sm rounded-lg pl-9 pr-3 py-2.5 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-slate-700"
            />
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 overflow-y-auto p-3">
          {searchQuery ? (
            <div className="space-y-1">
              {filteredChapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => navigateTo(chapter.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm rounded-lg transition-all text-left
                    ${activeChapter === chapter.id
                      ? 'bg-blue-600 text-white font-medium shadow-md'
                      : 'hover:bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                >
                  <span className={activeChapter === chapter.id ? 'text-blue-200' : 'text-slate-500'}>{chapter.icon}</span>
                  <span className="truncate">{chapter.title}</span>
                </button>
              ))}
              {filteredChapters.length === 0 && (
                <p className="text-slate-500 text-sm px-3 py-6 text-center">Tidak ditemukan</p>
              )}
            </div>
          ) : (
            categories.map(category => (
              <div key={category} className="mb-4">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2 mt-2">
                  {category}
                </div>
                <div className="space-y-0.5">
                  {chapters.filter(c => c.category === category).map((chapter) => (
                    <button
                      key={chapter.id}
                      onClick={() => navigateTo(chapter.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm rounded-lg transition-all text-left
                        ${activeChapter === chapter.id
                          ? 'bg-blue-600 text-white font-medium shadow-md shadow-blue-900/30'
                          : 'hover:bg-slate-800/70 text-slate-400 hover:text-slate-200'
                        }`}
                    >
                      <span className={`shrink-0 ${activeChapter === chapter.id ? 'text-blue-200' : 'text-slate-500'}`}>{chapter.icon}</span>
                      <span className="truncate">{chapter.title}</span>
                      {chapter.id === 'edit-push' && (
                        <span className="ml-auto text-[9px] bg-amber-500 text-white px-1.5 py-0.5 rounded font-bold shrink-0">HOT</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800 shrink-0">
          <div className="flex items-center gap-2 text-slate-500">
            <GithubIcon className="w-4 h-4" />
            <span className="text-xs">Kitab Git & GitHub v3.0</span>
          </div>
          <p className="text-[10px] text-slate-600 mt-1">Dibuat untuk para pembelajar Git 🚀</p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main ref={contentRef} className="flex-1 min-h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pb-32">
          
          {/* Breadcrumb */}
          <div className="text-sm text-gray-400 mb-6 flex items-center gap-1.5 flex-wrap">
            <span className="hover:text-blue-600 cursor-pointer transition" onClick={() => navigateTo('pengenalan')}>Kitab Git</span>
            <ChevronRightIcon className="w-3 h-3" />
            <span className="text-gray-500 font-medium">{currentChapter.category}</span>
            <ChevronRightIcon className="w-3 h-3" />
            <span className="text-gray-700 font-medium">{currentChapter.title}</span>
          </div>

          {/* Chapter Content */}
          <article className="animate-fadeIn" key={currentChapter.id}>
            {currentChapter.content}
          </article>

          {/* Prev/Next Navigation */}
          <div className="mt-16 pt-8 border-t-2 border-gray-100 flex flex-col sm:flex-row justify-between items-stretch gap-4">
            {currentIndex > 0 ? (
              <button
                onClick={() => navigateTo(chapters[currentIndex - 1].id)}
                className="flex items-center gap-3 px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition group text-left flex-1"
              >
                <ArrowLeftIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500 shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 group-hover:text-blue-500">Sebelumnya</p>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-blue-700">{chapters[currentIndex - 1].title}</p>
                </div>
              </button>
            ) : <div className="flex-1" />}
            
            {currentIndex < chapters.length - 1 ? (
              <button
                onClick={() => navigateTo(chapters[currentIndex + 1].id)}
                className="flex items-center justify-end gap-3 px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition group text-right flex-1"
              >
                <div>
                  <p className="text-xs text-gray-400 group-hover:text-blue-500">Selanjutnya</p>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-blue-700">{chapters[currentIndex + 1].title}</p>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500 shrink-0" />
              </button>
            ) : <div className="flex-1" />}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-xs text-gray-400 space-y-1">
            <p>📖 Kitab Git & GitHub — Panduan Lengkap untuk Pemula</p>
            <p>Teruslah berlatih! Jangan takut salah, karena Git bisa memutar waktu. 🚀</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
