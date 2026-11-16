import { Ear, UsersRound, Lightbulb, Clock4, ShieldCheck, Sparkles } from 'lucide-react';

const WHY_POINTS = [
  {
    icon: Ear,
    title: 'We Listen First',
    desc: "We don't follow a generic checklist. We take the time to genuinely understand who you are and what you want before the cameras roll.",
  },
  {
    icon: UsersRound,
    title: 'Collaborative Process',
    desc: 'We create space for all voices at the table. Our approach is steady, solutions-focused, and honors the collective decisions that emerge.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Problem-Solving',
    desc: 'Complex project with many stakeholders? We find the balance between viewpoints and interpret them on film in ways that amaze.',
  },
  {
    icon: Clock4,
    title: 'Reliable Under Pressure',
    desc: 'Tight deadline? Lost your previous producer? We jump in mid-project with no hesitation and turn it around 180 degrees.',
  },
  {
    icon: ShieldCheck,
    title: 'Technical Excellence',
    desc: 'Cinematic production quality with meticulous attention to every frame. The kind of polish that makes viewers stop scrolling.',
  },
  {
    icon: Sparkles,
    title: 'Storytelling DNA',
    desc: "Not just editors — we're writers, thinkers, and storytellers. We craft narrative arcs that resonate and drive action.",
  },
];

export function WhyFaber() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink-950 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-brand-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-brand-400">
            Why Faber
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            What sets us
            <span className="text-gradient-brand"> apart</span>
          </h2>
          <p className="mt-6 text-lg text-ink-300">
            We're not a production factory. Every project gets the full weight of our craft, care,
            and creative energy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="group relative p-7 rounded-2xl bg-ink-900 border border-white/5 hover:border-brand-500/30 transition-all duration-500 hover:-translate-y-2 reveal"
                data-reveal-delay={index * 100}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-700/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:from-brand-500 group-hover:to-brand-700 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-brand-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{point.title}</h3>
                  <p className="text-ink-300 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
