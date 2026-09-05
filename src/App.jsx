import './App.css'

const navItems = ['Beranda', 'Tentang Kami', 'Project Industri', 'Project Pendidikan', 'Proses', 'Kontak']

const members = [
  {
    name: 'Ajeng Megumi Wardana',
    role: 'UI/UX Designer',
    initials: 'AM',
    color: 'persona-one',
  },
  {
    name: 'Alfian Irvan Ardianto',
    role: 'UI/UX Designer',
    initials: 'AI',
    color: 'persona-two',
  },
  {
    name: 'Firda Aulia Putri Damayanti',
    role: 'UI/UX Designer',
    initials: 'FD',
    color: 'persona-three',
  },
  {
    name: 'Galih Shacha Rakasiwi',
    role: 'UI/UX Designer',
    initials: 'GR',
    color: 'persona-four',
  },
]

const industryProjects = [
  {
    title: 'Sistem Manajemen Produksi',
    description: 'Perancangan UI/UX untuk sistem manajemen produksi industri dan monitoring real-time.',
    tag: 'Web Application',
    accent: 'accent-one',
  },
  {
    title: 'E-Commerce B2B',
    description: 'Desain aplikasi mobile untuk transaksi bisnis antar perusahaan dengan pengalaman yang lebih cepat.',
    tag: 'Mobile Application',
    accent: 'accent-two',
  },
  {
    title: 'Logistik Tracking System',
    description: 'Dashboard berbasis web untuk memantau distribusi, pengiriman, dan status logistik secara visual.',
    tag: 'Web Application',
    accent: 'accent-three',
  },
  {
    title: 'Web Application',
    description: 'Solusi dashboard untuk pengelolaan dan pengambilan keputusan berbasis data operasional.',
    tag: 'Web Application',
    accent: 'accent-four',
  },
]

const educationProjects = [
  {
    title: 'E-Learning Platform',
    description: 'Platform pembelajaran digital dengan fokus pada kenyamanan belajar dan tata letak materi yang mudah diikuti.',
    tag: 'Web Application',
    accent: 'accent-one',
  },
  {
    title: 'Portal Akademik',
    description: 'Sistem sekolah dan kampus yang memudahkan akses informasi akademik dan kegiatan mahasiswa.',
    tag: 'Portal Web',
    accent: 'accent-two',
  },
  {
    title: 'Digital Library',
    description: 'Aplikasi perpustakaan digital untuk pencarian, peminjaman, dan akses bahan belajar online.',
    tag: 'Mobile Application',
    accent: 'accent-three',
  },
  {
    title: 'Web Application',
    description: 'Platform kursus online sederhana yang membantu mahasiswa mengakses materi dan tugas dengan mudah.',
    tag: 'Mobile Application',
    accent: 'accent-four',
  },
]

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.16 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" fill="currentColor" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.98h4.5V24h-4.5V8.98zM8.98 8.98h4.32v2.06h.06c.6-1.14 2.06-2.34 4.24-2.34 4.54 0 5.38 2.98 5.38 6.86V24h-4.5v-7.33c0-1.75-.03-4-2.44-4-2.44 0-2.82 1.91-2.82 3.88V24h-4.5V8.98z" fill="currentColor" />
    </svg>
  )
}

function App() {
  return (
    <div className="portfolio-page">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">M</div>
          <div className="brand-copy">
            <strong>PORTOFOLIO UI/UX DESIGN</strong>
            <span>KELOMPOK 4</span>
          </div>
        </div>

        <nav className="main-nav" aria-label="main navigation">
          {navItems.map((item) => (
            <a key={item} href="#" className={item === 'Beranda' ? 'active' : ''}>
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-cta">
          Hubungi Kami
        </a>
      </header>

      <main className="page-shell">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="mini-label">Selamat Datang Di</p>
            <h1 className="hero-title">PORTOFOLIO UI/UX DESIGN - KELOMPOK 4</h1>
            <p className="hero-text">
              Kami adalah tim mahasiswa UI/UX yang fokus pada pengembangan digital yang inovatif,
              berdaya guna, dan mudah dipahami oleh pengguna.
            </p>
            <div className="hero-actions">
              <button type="button" className="primary-button">
                Lihat Project Kami →
              </button>
              <button type="button" className="secondary-button">
                Tentang Kami
              </button>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-window">
              <div className="window-topbar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="window-body">
                <div className="mock-header" />
                <div className="mock-hero" />
                <div className="mock-grid">
                  <div className="mock-box tall" />
                  <div className="mock-box small" />
                  <div className="mock-box small" />
                </div>
              </div>
            </div>
            <div className="floating-blob blob-one" />
            <div className="floating-blob blob-two" />
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-heading">
            <span className="label-tag">Tentang Kami</span>
            <h2>Kenalan Yuk, Kami Kelompok 4!</h2>
          </div>

          <div className="about-content">
            <div className="about-copy">
              <p>
                Kami adalah mahasiswa yang memiliki ketertarikan pada desain digital, pengalaman
                pengguna, dan teknologi. Setiap anggota membawa ide, kreativitas, serta semangat agar
                setiap produk yang dibuat dapat memberi manfaat nyata bagi pengguna.
              </p>
              <button type="button" className="secondary-button light">
                Lebih Lanjut →
              </button>
            </div>

            <div className="member-grid">
              {members.map((member) => (
                <article key={member.name} className="member-card">
                  <div className={`avatar ${member.color}`}>{member.initials}</div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <div className="social-row">
                    <span className="social-badge">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 8a3 3 0 116 0 3 3 0 11-6 0zm-4 8a4 4 0 018 0v1H5zm14 0v1h-8v-1a4 4 0 014-4 4 4 0 014 4z" fill="currentColor"/>
                      </svg>
                    </span>
                    <span className="social-badge">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-2.3 6.7c.02.2.02.4.02.6 0 6.1-4.64 13.1-13.1 13.1-2.6 0-5.02-.76-7.06-2.08.37.04.72.06 1.1.06 2.16 0 4.15-.73 5.73-1.97a4.62 4.62 0 01-4.31-3.2c.64.1 1.3.08 1.94-.05A4.62 4.62 0 012.5 8.4a4.64 4.64 0 006.22 4.54A9.3 9.3 0 013 6.9a13.13 13.13 0 0010.8 5.4c-.1-.42-.15-.86-.15-1.3a4.62 4.62 0 018-3.16z" fill="currentColor"/>
                      </svg>
                    </span>
                    <span className="social-badge">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6.94 7.5A1.56 1.56 0 115.38 6a1.56 1.56 0 011.56 1.5zm-1.44 2.13h2.88V18H5.5zm4.94 0h2.76v1.12h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.44 1.9 3.44 4.37V18h-2.88v-16c0-1.15-.02-2.64-1.61-2.64-1.61 0-1.86 1.26-1.86 2.55V18h-2.88v-8.37z" fill="currentColor"/>
                      </svg>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="project-section" id="industry">
          <div className="section-heading project-header">
            <span className="label-tag">Project Industri</span>
            <a href="#" className="text-link">Lihat Semua Project →</a>
          </div>

          <div className="project-grid">
            {industryProjects.map((project) => (
              <article key={project.title} className="project-card">
                <div className={`project-preview ${project.accent}`}>
                  <div className="preview-window" />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-meta">
                  <span className="meta-tag">{project.tag}</span>
                  <button type="button" className="small-button">
                    Lihat Detail →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="project-section" id="education">
          <div className="section-heading project-header">
            <span className="label-tag">Project Pendidikan</span>
            <a href="#" className="text-link">Lihat Semua Project →</a>
          </div>

          <div className="project-grid">
            {educationProjects.map((project) => (
              <article key={project.title} className="project-card">
                <div className={`project-preview ${project.accent}`}>
                  <div className="preview-window preview-window-alt" />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-meta">
                  <span className="meta-tag">{project.tag}</span>
                  <button type="button" className="small-button">
                    Lihat Detail →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-brand">
          <div className="brand-wrap footer-brand-wrap">
            <div className="brand-mark">M</div>
            <div className="brand-copy footer-copy">
              <strong>PORTOFOLIO UI/UX DESIGN</strong>
              <span>KELOMPOK 4</span>
            </div>
          </div>
          <p>
            Menyediakan pengalaman digital yang bermanfaat dan berdampak bagi para pengguna.
          </p>
          <div className="social-row footer-social">
            <span className="social-badge">
              <GitHubIcon />
            </span>
            <span className="social-badge">
              <LinkedInIcon />
            </span>
          </div>
        </div>

        <div className="footer-links">
          <h4>Navigasi</h4>
          <a href="#">Beranda</a>
          <a href="#about">Tentang Kami</a>
          <a href="#industry">Project Industri</a>
          <a href="#education">Project Pendidikan</a>
          <a href="#">Proses</a>
        </div>

        <div className="footer-links">
          <h4>LAINNYA</h4>
          <a href="#">Kontak Kami</a>
          <a href="#">Blog</a>
          <a href="#">Karier</a>
        </div>

        <div className="footer-links">
          <h4>KONTAK</h4>
          <a href="mailto:kelompok4.uiux@gmail.com">kelompok4.uiux@gmail.com</a>
          <a href="#">Malang, Indonesia</a>
        </div>
      </footer>
    </div>
  )
}

export default App
