import { Camera, Mic, Lightbulb, Plane, Monitor, Video } from 'lucide-react';

const CAPABILITIES_IMG =
  'https://images.pexels.com/photos/39694481/pexels-photo-39694481.jpeg?auto=compress&cs=tinysrgb&w=1000';

const CAPABILITIES = [
  { icon: Camera, label: 'Cinematic Cameras', desc: '4K cinema-grade capture' },
  { icon: Mic, label: 'Professional Audio', desc: 'Studio-quality field recording' },
  { icon: Lightbulb, label: 'Cinematic Lighting', desc: 'Full grip & electric package' },
  { icon: Plane, label: 'Aerial Coverage', desc: 'Licensed drone cinematography' },
  { icon: Monitor, label: 'Color Grading', desc: 'DaVinci Resolve post-production' },
  { icon: Video, label: 'Multi-Cam Production', desc: 'Live event & interview setups' },
];

export function Capabilities() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative reveal-left order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={CAPABILITIES_IMG}
                alt="Professional video editing workstation with color grading"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Full Post-Production</div>
                  <div className="text-xs text-ink-400">Edit · Color · Sound · Delivery</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right order-1 lg:order-2">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-brand-400">
              Capabilities
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              Full-service
              <br />
              <span className="text-gradient-brand">production studio</span>
            </h2>
            <p className="mt-6 text-lg text-ink-300 leading-relaxed">
              From cinema cameras to color grading suites, we bring professional-grade equipment and
              expertise to every project — no matter the scale.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {CAPABILITIES.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.label}
                    className="group flex items-start gap-3 p-4 rounded-xl bg-ink-900 border border-white/5 hover:border-brand-500/20 transition-all duration-300 stagger-child"
                    data-reveal-delay={index * 80}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-500/20">
                      <Icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{cap.label}</h4>
                      <p className="text-xs text-ink-400 mt-0.5">{cap.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
