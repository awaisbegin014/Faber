import { Sparkles, ArrowRight, Phone, Mail } from 'lucide-react';

const CTA_BG =
  'https://images.pexels.com/photos/2510431/pexels-photo-2510431.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function CtaBanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={CTA_BG}
          alt="Cinematic lighting on a film set"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal-scale">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
          <Sparkles className="w-4 h-4 text-brand-400" />
          <span className="text-sm font-medium text-ink-200">
            Let's Create Something Meaningful
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
          Have a project
          <br />
          <span className="text-gradient-brand">in mind?</span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-ink-200 max-w-2xl mx-auto leading-relaxed">
          Whether you're a business, public agency, or nonprofit — we'd love to hear your story and
          help you tell it in a way that moves people to action.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-1"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="tel:5107615118"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 glass hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300"
          >
            <Phone className="w-5 h-5 text-brand-400" />
            510-761-5118
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-ink-300">
          <Mail className="w-4 h-4 text-brand-400" />
          <a
            href="mailto:inquiries@faberproductions.com"
            className="text-sm hover:text-white transition-colors"
          >
            inquiries@faberproductions.com
          </a>
        </div>
      </div>
    </section>
  );
}
