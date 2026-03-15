import { useState } from 'react';
import { 
  Book, Terminal, Github,
  Menu, CheckCircle, Lightbulb, Play, Search,
  Globe, Code
} from 'lucide-react';

function CodeBlock({ code, lang, title }: { code: string; lang?: string; title?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-slate-700/50 bg-[#0d1117] my-4 shadow-lg">
      {title && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-slate-700/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-xs font-medium text-slate-400 ml-2">{title}</span>
          </div>
          <div className="flex items-center gap-2">
            {lang && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-700/50 text-slate-400">
                {lang}
              </span>
            )}
            <button
              onClick={handleCopy}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white transition-all duration-200 flex items-center gap-1"
            >
              {copied ? (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                  Copy
                </>
              )}
            </button>
          </div>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-[#e6edf3] font-mono">
          {code.split("\n").map((line, i) => {
            const isComment = line.trimStart().startsWith("#");
            const isOutput = line.trimStart().startsWith("# Output");
            return (
              <div key={i} className={`${isComment ? "text-[#8b949e]" : ""} ${isOutput ? "text-green-400/70" : ""}`}>
                <span className="select-none text-slate-600 text-xs mr-4 inline-block w-5 text-right">{i + 1}</span>
                {line || " "}
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
}

function ContentRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "text":
      return (
        <div className="prose prose-slate max-w-none my-3">
          {block.value.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return <h3 key={i} className="text-xl font-bold text-slate-800 mt-8 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full inline-block" />
                {line.replace("## ", "")}
              </h3>;
            }
            const formatted = line
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-semibold">$1</strong>')
              .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-orange-100 text-orange-700 rounded text-sm font-mono">$1</code>');
            return <p key={i} className="text-slate-600 leading-relaxed text-[15px]" dangerouslySetInnerHTML={{ __html: formatted }} />;
          })}
        </div>
      );

    case "code":
      return <CodeBlock code={block.value} lang={block.lang} title={block.title} />;

    case "warning":
      return (
        <div className="my-4 rounded-xl border border-amber-200/80 bg-gradient-to-r from-amber-50 to-yellow-50 p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0 mt-0.5">⚠️</span>
            <div>
              {block.title && <h4 className="font-bold text-amber-900 mb-1.5">{block.title}</h4>}
              {block.value.split("\n").map((line, i) => {
                const formatted = line
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/`(.*?)`/g, '<code class="px-1 py-0.5 bg-amber-200/50 text-amber-900 rounded text-sm font-mono">$1</code>');
                return <p key={i} className="text-amber-800 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: formatted }} />;
              })}
            </div>
          </div>
        </div>
      );

    case "tip":
      return (
        <div className="my-4 rounded-xl border border-emerald-200/80 bg-gradient-to-r from-emerald-50 to-green-50 p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0 mt-0.5">💡</span>
            <div>
              {block.title && <h4 className="font-bold text-emerald-900 mb-1.5">{block.title}</h4>}
              {block.value.split("\n").map((line, i) => {
                const formatted = line
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/`(.*?)`/g, '<code class="px-1 py-0.5 bg-emerald-200/50 text-emerald-900 rounded text-sm font-mono">$1</code>');
                return <p key={i} className="text-emerald-800 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: formatted }} />;
              })}
            </div>
          </div>
        </div>
      );

    case "info":
      return (
        <div className="my-4 rounded-xl border border-blue-200/80 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0 mt-0.5">ℹ️</span>
            <div>
              {block.title && <h4 className="font-bold text-blue-900 mb-1.5">{block.title}</h4>}
              {block.value.split("\n").map((line, i) => {
                const formatted = line
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/`(.*?)`/g, '<code class="px-1 py-0.5 bg-blue-200/50 text-blue-900 rounded text-sm font-mono">$1</code>');
                return <p key={i} className="text-blue-800 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: formatted }} />;
              })}
            </div>
          </div>
        </div>
      );

    case "steps":
      return (
        <div className="my-4 rounded-xl border border-violet-200/80 bg-gradient-to-r from-violet-50 to-purple-50 p-5 shadow-sm">
          {block.title && <h4 className="font-bold text-violet-900 mb-3 flex items-center gap-2">
            <span className="text-lg">📝</span> {block.title}
          </h4>}
          <div className="space-y-2">
            {block.value.split("\n").map((line, i) => {
              const formatted = line
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/`(.*?)`/g, '<code class="px-1 py-0.5 bg-violet-200/50 text-violet-900 rounded text-sm font-mono">$1</code>');
              return (
                <div key={i} className="flex items-start gap-2 text-violet-800 text-sm leading-relaxed">
                  <span dangerouslySetInnerHTML={{ __html: formatted }} />
                </div>
              );
            })}
          </div>
        </div>
      );

    case "table":
      const rows = block.value.split("\n");
      const headers = rows[0].split("|");
      const data = rows.slice(1).map((r) => r.split("|"));
      return (
        <div className="my-4 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
          {block.title && (
            <div className="px-4 py-2.5 bg-gradient-to-r from-slate-100 to-slate-50 border-b border-slate-200">
              <h4 className="font-bold text-slate-700 text-sm">{block.title}</h4>
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50">
                  {headers.map((h, i) => (
                    <th key={i} className="px-4 py-3 text-left font-semibold text-slate-700 border-b border-slate-200">
                      {h.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"} hover:bg-orange-50/50 transition-colors`}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-2.5 border-b border-slate-100 text-slate-600">
                        {j === 0 ? (
                          <code className="px-1.5 py-0.5 bg-slate-100 text-orange-600 rounded text-xs font-mono font-medium">{cell.trim()}</code>
                        ) : (
                          cell.trim()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export function App() {
  const [activeSection, setActiveSection] = useState("pengenalan");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      setScrollProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
    };
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredSections = searchQuery
    ? sections.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.content.some((c) => c.value.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : sections;

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setSidebarOpen(false);
    if (contentRef.current) contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentIndex = sections.findIndex((s) => s.id === activeSection);
  const currentSection = sections.find((s) => s.id === activeSection);
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden font-sans">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 transition-all duration-200 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-80 bg-white border-r border-slate-200 flex flex-col transform transition-transform duration-300 ease-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-5 border-b border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
              <span className="text-2xl">📖</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight">Kitab Git</h1>
              <p className="text-xs text-slate-400">Panduan Lengkap Git & GitHub</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="p-3 border-b border-slate-100">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Cari perintah atau topik..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400 placeholder:text-slate-400 transition-all"
            />
          </div>
        </div>

        {/* Progress info */}
        <div className="px-4 py-2 bg-slate-50/50 border-b border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Daftar Isi</span>
            <span className="text-[11px] font-medium text-orange-500">{sections.length} Bab</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-2 scrollbar-thin">
          {filteredSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-all duration-200 border-l-3 ${
                activeSection === section.id
                  ? "bg-orange-50 border-l-[3px] border-orange-500 text-orange-700"
                  : "border-l-[3px] border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-800"
              }`}
            >
              <span className="text-xl w-8 text-center flex-shrink-0">{section.icon}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    activeSection === section.id ? "bg-orange-200/50 text-orange-600" : "bg-slate-100 text-slate-400"
                  }`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`text-sm font-semibold truncate ${activeSection === section.id ? "text-orange-700" : ""}`}>
                    {section.title}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5 truncate ml-7">{section.subtitle}</p>
              </div>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50/50">
          <a
            href="https://github.com/tujuhtigapuluh/kitab-git-github"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub Repository</span>
          </a>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 bg-white/80 backdrop-blur-lg border-b border-slate-200 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-20 mt-1">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="hidden sm:inline">📖 Kitab Git</span>
              <span className="hidden sm:inline text-slate-300">/</span>
              <span className="font-medium text-slate-700">{currentSection?.icon} {currentSection?.title}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="hidden sm:inline">Bab {currentIndex + 1} dari {sections.length}</span>
            <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
              <div
                className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / sections.length) * 100}%` }}
              />
            </div>
          </div>
        </header>

        {/* Content */}
        <div ref={contentRef} className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Section header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl sm:text-5xl">{currentSection?.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 font-medium">
                      Bab {currentIndex + 1}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{currentSection?.title}</h2>
                  <p className="text-slate-500 mt-1">{currentSection?.subtitle}</p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-orange-300 via-red-300 to-transparent" />
            </div>

            {/* Content blocks */}
            <div className="space-y-2">
              {currentSection?.content.map((block, i) => (
                <ContentRenderer key={i} block={block} />
              ))}
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevSection ? (
                  <button
                    onClick={() => handleNavClick(prevSection.id)}
                    className="group text-left p-4 rounded-xl border border-slate-200 hover:border-orange-300 hover:bg-orange-50/50 transition-all duration-200"
                  >
                    <span className="text-xs font-medium text-slate-400 group-hover:text-orange-500 transition-colors flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                      Sebelumnya
                    </span>
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-orange-700 transition-colors mt-1 flex items-center gap-2">
                      <span>{prevSection.icon}</span> {prevSection.title}
                    </span>
                  </button>
                ) : <div />}
                {nextSection && (
                  <button
                    onClick={() => handleNavClick(nextSection.id)}
                    className="group text-right p-4 rounded-xl border border-slate-200 hover:border-orange-300 hover:bg-orange-50/50 transition-all duration-200 sm:col-start-2"
                  >
                    <span className="text-xs font-medium text-slate-400 group-hover:text-orange-500 transition-colors flex items-center gap-1 justify-end">
                      Selanjutnya
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-orange-700 transition-colors mt-1 flex items-center gap-2 justify-end">
                      {nextSection.title} <span>{nextSection.icon}</span>
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-12 pt-6 border-t border-slate-100 text-center pb-8">
              <p className="text-sm text-slate-400">
                📖 <strong className="text-slate-500">Kitab Git & GitHub</strong> — Panduan Lengkap Bahasa Indonesia
              </p>
              <p className="text-xs text-slate-300 mt-1">
                Made with ❤️ by <a href="https://github.com/tujuhtigapuluh" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500 transition-colors">tujuhtigapuluh</a>
              </p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
