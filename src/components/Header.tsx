import { useState, useEffect } from 'react';
import { Video, Phone, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Our Story', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Recent Work', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/90 backdrop-blur-lg border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                <Video className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute inset-0 rounded-lg bg-brand-500/40 blur-lg -z-10" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-lg tracking-wide">
                FABER
              </span>
              <span className="text-[10px] text-brand-400 font-mono tracking-[0.2em] uppercase">
                Productions
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-ink-200 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:5107615118"
              className="flex items-center gap-2 text-base text-ink-200 hover:text-brand-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              510-761-5118
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/30 hover:-translate-y-0.5"
            >
              Start a Project
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />
        <nav className="relative flex flex-col items-center justify-center h-full gap-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-display font-semibold text-white hover:text-brand-400 transition-colors duration-300 ${
                mobileMenuOpen ? 'animate-fade-up' : ''
              }`}
              style={{
                animationDelay: `${i * 80}ms`,
                opacity: mobileMenuOpen ? undefined : 0,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-brand-500 text-white font-semibold rounded-lg"
          >
            Start a Project
          </a>
        </nav>
      </div>
    </>
  );
}
