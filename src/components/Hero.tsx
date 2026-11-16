import { ArrowRight, Play, Award, Film } from 'lucide-react';

const HERO_BG =
  'https://images.pexels.com/photos/38038519/pexels-photo-38038519.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="Professional video production camera"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/70 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/50" />
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 right-10 w-2 h-2 rounded-full bg-brand-500 animate-float opacity-60" />
      <div
        className="absolute top-1/3 right-20 w-1.5 h-1.5 rounded-full bg-gold-400 animate-float opacity-50"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute bottom-1/4 right-16 w-1 h-1 rounded-full bg-white animate-float opacity-40"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full">
        <div className="flex justify-start">
          <div className="max-w-3xl text-left">
            <h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.06] text-white animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              Bay Area
              <br />
              <span className="text-gradient-brand">Video Production</span>
            </h1>

            <p
              className="mt-6 text-lg sm:text-xl text-ink-200 leading-relaxed max-w-2xl animate-fade-up font-normal"
              style={{ animationDelay: '0.25s', opacity: 0 }}
            >
              Documentary-style video for businesses, public agencies, and nonprofits. Authentic
              voices and real stories that create emotional connection.
            </p>

            <div
              className="mt-8 flex flex-wrap gap-4 justify-start animate-fade-up"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-brand-500 hover:bg-brand-600 text-white text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-1"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 px-7 py-3.5 glass hover:bg-white/10 text-white text-base font-semibold rounded-xl transition-all duration-300"
              >
                <Play className="w-5 h-5 text-brand-400 group-hover:scale-110 transition-transform" />
                Watch Our Work
              </a>
            </div>

            <div
              className="mt-10 flex items-center gap-6 justify-start animate-fade-up"
              style={{ animationDelay: '0.55s', opacity: 0 }}
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-400" />
                <span className="text-sm text-ink-300">Award-Winning Storytelling</span>
              </div>
              <div className="flex items-center gap-2">
                <Film className="w-5 h-5 text-brand-400" />
                <span className="text-sm text-ink-300">200+ Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll mouse indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-ink-400/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-brand-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
