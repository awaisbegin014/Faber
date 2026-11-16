import { Building2, Landmark, Heart, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Building2,
    title: 'Business & Brand',
    desc: 'Tell your brand story with documentary-style videos that attract talent, engage customers, and differentiate your company in a crowded market.',
    image:
      'https://images.pexels.com/photos/1181738/pexels-photo-1181738.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#contact',
    cta: 'Tell your brand story',
    tags: ['Brand Films', 'Recruitment', 'Product Launch', 'Customer Stories'],
  },
  {
    icon: Landmark,
    title: 'Public Sector',
    desc: 'Build public trust with video that engages communities, explains complex programs, and makes government services accessible to everyone.',
    image:
      'https://images.pexels.com/photos/7691694/pexels-photo-7691694.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#contact',
    cta: 'Build public trust',
    tags: [
      'Community Engagement',
      'Program Highlights',
      'Public Meetings',
      'Civic Education',
    ],
  },
  {
    icon: Heart,
    title: 'Nonprofits',
    desc: 'Move your mission forward with compelling stories that build support, drive donations, and inspire volunteers to join your cause.',
    image:
      'https://images.pexels.com/photos/6647027/pexels-photo-6647027.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#contact',
    cta: 'Move your mission forward',
    tags: [
      'Impact Stories',
      'Fundraising',
      'Volunteer Recruitment',
      'Event Coverage',
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-ink-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16 reveal">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-brand-400">
            What We Do
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Video that moves
            <br />
            <span className="text-gradient-brand">people to action</span>
          </h2>
          <p className="mt-6 text-lg text-ink-300 leading-relaxed">
            We craft documentary-style videos rooted in authentic storytelling. Whether you're a
            business, public agency, or nonprofit, we help you connect with your audience on a
            human level.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative rounded-2xl overflow-hidden bg-ink-900 border border-white/5 hover:border-brand-500/30 transition-all duration-500 hover:-translate-y-2 reveal"
                data-reveal-delay={index * 150}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl glass flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-400" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-ink-300 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-ink-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group/cta"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                  </a>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
