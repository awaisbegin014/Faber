import { Camera, Heart, PenLine, Quote } from 'lucide-react';

const ABOUT_IMG_MAIN =
  'https://images.pexels.com/photos/13811051/pexels-photo-13811051.jpeg?auto=compress&cs=tinysrgb&w=1200';
const ABOUT_IMG_INSET =
  'https://images.pexels.com/photos/8089650/pexels-photo-8089650.jpeg?auto=compress&cs=tinysrgb&w=600';

const ABOUT_VALUES = [
  {
    icon: Camera,
    title: 'Documentary DNA',
    desc: "We approach every project with a documentarian's eye — finding real stories, not manufacturing them.",
  },
  {
    icon: Heart,
    title: 'Authentic Voices',
    desc: 'We create space for genuine voices to emerge, putting people at ease so their truth comes through.',
  },
  {
    icon: PenLine,
    title: 'Story First',
    desc: "Technical excellence in service of narrative. We wrestle with your story until it's perfect.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-ink-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative reveal-left">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={ABOUT_IMG_MAIN}
                alt="Filmmaker capturing footage outdoors"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
            </div>

            <div className="absolute -bottom-10 -right-6 w-56 h-56 rounded-2xl overflow-hidden border-4 border-ink-900 shadow-2xl hidden sm:block animate-float">
              <img
                src={ABOUT_IMG_INSET}
                alt="Director on set with cinematic lighting"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-6 -left-6 glass rounded-2xl px-6 py-4 hidden sm:block">
              <div className="text-3xl font-display font-bold text-gradient-brand">15+</div>
              <div className="text-xs text-ink-300 mt-1">Years Storytelling</div>
            </div>
          </div>

          <div className="reveal-right">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-brand-400">
              Our Story
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              Rooted in Oakland.
              <br />
              <span className="text-gradient-brand">Built for story.</span>
            </h2>

            <p className="mt-6 text-lg text-ink-300 leading-relaxed">
              Faber Productions is an Oakland-based video production company rooted in
              documentary-style storytelling. Founded by Chris Faber — a writer, thinker, and
              storyteller with the soul of a poet and the eye of an artist — we believe
              authentic voices and real stories create the deepest emotional connection.
            </p>

            <p className="mt-4 text-ink-400 leading-relaxed">
              We help companies attract talent, public agencies engage communities, and
              nonprofits build support for their missions. From the first conversation to the
              final cut, we listen deeply, craft carefully, and deliver work that moves people.
            </p>

            <blockquote className="mt-8 pl-6 border-l-2 border-brand-500">
              <Quote className="w-6 h-6 text-brand-500/40 mb-2" />
              <p className="font-display italic text-lg text-ink-200 leading-relaxed">
                "What you get with Chris is not just a video editor, but a
                writer-thinker-creator-storyteller extraordinaire, who will wrestle with your
                project until it is perfect."
              </p>
              <cite className="mt-2 block text-sm text-ink-400 not-italic">
                — Florencia Prada, Swissnex San Francisco
              </cite>
            </blockquote>

            <div className="mt-8 space-y-4">
              {ABOUT_VALUES.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="flex items-start gap-4 stagger-child"
                    data-reveal-delay="100"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{val.title}</h4>
                      <p className="text-sm text-ink-400 mt-1">{val.desc}</p>
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
