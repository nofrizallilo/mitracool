import { useState, useEffect } from 'react';
import { Wind, Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Technology', href: '#technology' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-carbon-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-carbon-800 border border-carbon-700 group-hover:bg-eco-700/30 transition-all duration-300" />
            <Wind className="w-4 h-4 text-eco-400 relative z-10" strokeWidth={1.5} />
          </div>
          <div>
            <span className="font-display font-bold text-carbon-900 text-2xl tracking-tight">Mitra</span>
            <span className="font-display font-bold text-eco-600 text-2xl tracking-tight"> Cool</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-carbon-700 hover:text-eco-700 transition-colors duration-200 rounded-lg hover:bg-carbon-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/*<span className="font-blueprint text-xs text-carbon-600 tracking-wider">SYS.ONLINE</span>*/}
          <a href="#contact" className="btn-primary">
            Get a Quote
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg border border-carbon-200 text-carbon-700 hover:text-eco-700 hover:border-carbon-300 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-4 space-y-1 border-t border-carbon-200 mt-3 bg-white/95">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-carbon-700 hover:text-eco-700 hover:bg-carbon-100 rounded-xl transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a href="#contact" className="btn-primary w-full justify-center">
              Get a Quote <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
