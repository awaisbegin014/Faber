import { Video, Facebook, Instagram, Youtube, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const FOOTER_LINKS = {
  Services: [
    { label: 'Business & Brand', href: '#services' },
    { label: 'Public Sector', href: '#services' },
    { label: 'Nonprofits', href: '#services' },
    { label: 'Spanish-Language', href: '#spanish' },
  ],
  Company: [
    { label: 'Our Story', href: '#about' },
    { label: 'Our Process', href: '#process' },
    { label: 'Recent Work', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  Connect: [
    { label: 'Start a Project', href: '#contact' },
    { label: 'Call 510-761-5118', href: 'tel:5107615118' },
    { label: 'Email Us', href: 'mailto:inquiries@faberproductions.com' },
  ],
};

const SOCIALS = [
  {
    icon: Facebook,
    href: 'https://www.facebook.com/faberproductions',
    label: 'Facebook',
  },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="relative bg-ink-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <Video className="w-5 h-5 text-white" strokeWidth={2.5} />
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
            <p className="text-ink-400 text-base leading-relaxed max-w-sm">
              Oakland-based video production company rooted in documentary-style storytelling.
              Authentic voices and real stories for businesses, public agencies, and nonprofits.
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-ink-950 border border-white/5 flex items-center justify-center text-ink-400 hover:text-white hover:bg-brand-500 hover:border-brand-500 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-base font-semibold text-white mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base text-ink-400 hover:text-brand-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="flex flex-wrap gap-6 text-base text-ink-400">
            <a
              href="tel:5107615118"
              className="flex items-center gap-2 hover:text-brand-400 transition-colors"
            >
              <Phone className="w-4 h-4" /> 510-761-5118
            </a>
            <a
              href="mailto:inquiries@faberproductions.com"
              className="flex items-center gap-2 hover:text-brand-400 transition-colors"
            >
              <Mail className="w-4 h-4" /> inquiries@faberproductions.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Oakland, CA
            </span>
          </div>

          <a
            href="#"
            className="w-10 h-10 rounded-lg bg-ink-950 border border-white/5 flex items-center justify-center text-ink-400 hover:text-white hover:bg-brand-500 hover:border-brand-500 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-8 text-center text-sm text-ink-500">
          © {new Date().getFullYear()} Faber Productions. All rights reserved. Bay Area Video
          Production.
        </div>
      </div>
    </footer>
  );
}
