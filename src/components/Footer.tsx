import { Wind, ArrowUpRight, Linkedin, Twitter, Youtube } from 'lucide-react';

const services = [
  'HVAC Komersial', 'Sistem Pendingin Proses Industri', 'Peningkatan Sistem / Modernisasi',
  'Perbaikan', 'Pemeliharaan & Dukungan',
];

const company = [
  { label: 'About Us', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Technology', href: '#technology' },
  { label: 'Careers', href: '#' },
  { label: 'News & Updates', href: '#' },
  { label: 'Contact', href: '#contact' },
];

const certLogos = [
  'ISO 9001', 'ISO 14001',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-carbon-200 bg-[#f5f9ff]">
      <div className="absolute inset-0 blueprint-grid-fine opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f9ff] via-[#f7fbff] to-[#f5f9ff] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top CTA band */}
        <div className="py-16 lg:py-20 border-b border-carbon-800/60">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <span className="section-label mb-4 block">Ready to Start?</span>
              <h2 className="heading-display text-3xl lg:text-4xl text-white leading-tight">
                Let's Build a Precision<br />
                <span className="text-eco-400">Climate System Together</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary text-base px-8 py-4">
                Start a Project <ArrowUpRight className="w-5 h-5" />
              </a>
              <a href="tel:0227217849" className="btn-outline text-base px-8 py-4">
                Call Us Now
              </a>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-carbon-800 border border-carbon-700 group-hover:bg-eco-700/30 transition-all" />
                <Wind className="w-4 h-4 text-eco-400 relative z-10" strokeWidth={1.5} />
              </div>
              <div>
                <span className="font-display font-bold text-white text-2xl tracking-tight">Mitra</span>
                <span className="font-display font-bold text-eco-500 text-2xl tracking-tight"> Cool</span>
              </div>
            </a>
            <p className="text-carbon-500 text-sm leading-relaxed mb-6 max-w-xs">
              Solusi HVAC kelas industri yang menjamin performa, efisiensi, dan daya tahan untuk berbagai sektor kritikal Anda.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {certLogos.map((cert) => (
                <span key={cert} className="tag-carbon">{cert}</span>
              ))}
            </div>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-carbon-800 flex items-center justify-center text-carbon-500 hover:text-white hover:border-eco-700 transition-all"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="font-display font-semibold text-white text-sm mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc}>
                  <a href="#services" className="text-carbon-500 text-sm hover:text-eco-400 transition-colors leading-snug block">
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-display font-semibold text-white text-sm mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-carbon-500 text-sm hover:text-eco-400 transition-colors leading-snug block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* System status */}
          {/*<div className="col-span-2 lg:col-span-3">
            <h4 className="font-display font-semibold text-white text-sm mb-5">System Status</h4>
            <div className="bento-card p-4 space-y-3">
              {[
                { label: 'Project Portal', status: 'ONLINE', ok: true },
                { label: 'Support Hotline', status: 'ACTIVE 24/7', ok: true },
                { label: 'IoT Monitoring', status: 'RUNNING', ok: true },
                { label: 'Emergency Response', status: 'STANDBY', ok: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-carbon-500 text-xs font-mono">{item.label}</span>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.ok ? 'bg-eco-500 animate-pulse' : 'bg-copper-500'}`} />
                    <span className={`font-blueprint text-xs ${item.ok ? 'text-eco-500' : 'text-copper-400'}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-xl bg-carbon-900/40 border border-carbon-800">
              <p className="font-blueprint text-xs text-carbon-600 mb-1">// LAST.UPDATED</p>
              <p className="font-blueprint text-xs text-eco-700">SYS.TIME :: {year}-10-12 08:00 WIB</p>
            </div>
          </div>*/}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-carbon-800/60 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-carbon-600 text-xs font-mono text-center">
            © {year} Mitracool Jaya Utama.
          </p>
          {/*<div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'ESG Report'].map((item) => (
              <a key={item} href="#" className="text-carbon-600 text-xs hover:text-eco-500 transition-colors font-mono">
                {item}
              </a>
            ))}
          </div>*/}
        </div>
      </div>
    </footer>
  );
}
