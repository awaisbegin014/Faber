import { Languages, MessageSquare, Globe, ArrowRight } from 'lucide-react';

const SPANISH_IMG =
  'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=1000';

const SPANISH_FEATURES = [
  {
    icon: MessageSquare,
    title: 'Bilingual Production',
    desc: 'Creative direction, interviews, and scripting in Spanish — no translators needed.',
  },
  {
    icon: Globe,
    title: 'Cultural Fluency',
    desc: 'Deep understanding of Latin American cultures and community contexts.',
  },
  {
    icon: Languages,
    title: 'Full-Service In-House',
    desc: 'From pre-production planning to final delivery, all in Spanish.',
  },
];

export function SpanishServices() {
  return (
    <section id="spanish" className="relative py-24 lg:py-32 bg-ink-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6">
              <Languages className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium text-accent-300">Servicios en Español</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              ¿Necesita español?
            </h2>
            <p className="mt-2 font-display text-2xl text-ink-300 italic">
              We've got you covered.
            </p>

            <p className="mt-6 text-lg text-ink-300 leading-relaxed">
              Full-service Spanish-language video production in-house — with a creative director
              fluent in the language. From bilingual documentaries to community engagement videos,
              we communicate directly with everyone, immediately putting people at ease.
            </p>

            <div className="mt-8 space-y-5">
              {SPANISH_FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 stagger-child"
                    data-reveal-delay={index * 120}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                      <Icon className="w-6 h-6 text-accent-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg">{feature.title}</h4>
                      <p className="text-sm text-ink-400 mt-1">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 bg-accent-500 hover:bg-accent-600 text-ink-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-1 group"
            >
              Hablemos de su proyecto
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative reveal-right">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={SPANISH_IMG}
                alt="Diverse team collaboration during video production"
                className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-accent-400 flex-shrink-0" />
                  <div>
                    <p className="font-display text-lg font-bold text-white">
                      Chile · Mexico · Bay Area
                    </p>
                    <p className="text-sm text-ink-300">
                      Bilingual projects across borders and cultures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
