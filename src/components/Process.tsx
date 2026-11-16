import { Search, PenTool, Camera, Scissors, Rocket } from 'lucide-react';

const PROCESS_STEPS = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Listening',
    desc: 'We meet with you multiple times before production, understanding your goals, your audience, and the story only you can tell. No generic checklists.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Story Development',
    desc: 'We craft a narrative arc that weaves your many stories into something audiences can easily understand and feel. Screenwriting expertise applied to every project.',
  },
  {
    number: '03',
    icon: Camera,
    title: 'Production',
    desc: 'On set, we create space for authentic voices. We bring out the best in everyone — from high school interns to executives — making people comfortable on camera.',
  },
  {
    number: '04',
    icon: Scissors,
    title: 'Editing & Craft',
    desc: 'We extract the most touching moments from hours of footage, molding them into a clear, emotional story with impact. We wrestle with it until it\'s perfect.',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Delivery & Impact',
    desc: 'You receive a polished video ready to move your audience to action — whether that\'s at a conference, on your website, or across social platforms.',
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-ink-950 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-brand-400">
            How We Work
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Our <span className="text-gradient-brand">Process</span>
          </h2>
          <p className="mt-6 text-lg text-ink-300">
            Every project follows a proven path from first conversation to final delivery — with
            story at the center of every step.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-500/30 to-transparent -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:[direction:rtl]'
                  }`}
                >
                  <div className={`reveal-${isEven ? 'left' : 'right'} lg:[direction:ltr]`}>
                    <div className="group relative p-8 rounded-2xl bg-ink-900 border border-white/5 hover:border-brand-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-brand-500/10">
                      <div className="flex items-start gap-5">
                        <div className="relative flex-shrink-0">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-ink-950 border-2 border-brand-500 flex items-center justify-center">
                            <span className="text-[10px] font-mono font-bold text-brand-400">
                              {step.number}
                            </span>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-display text-xl font-bold text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-ink-300 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-brand-500" />
                      <div className="absolute inset-0 rounded-full bg-brand-500 animate-pulse-ring" />
                    </div>
                  </div>

                  <div className="hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
