import { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';

const CATEGORIES = ['All', 'Business & Brand', 'Public Sector', 'Nonprofit'];

const PORTFOLIO_ITEMS = [
  {
    title: 'Tech Company Product Showcase',
    category: 'Business & Brand',
    client: 'Cvent Software Technologies',
    image:
      'https://images.pexels.com/photos/2443272/pexels-photo-2443272.jpeg?auto=compress&cs=tinysrgb&w=900',
    desc: 'A product showcase video used at an annual customer conference to drive engagement.',
  },
  {
    title: "Marketing Video for St. Anthony's",
    category: 'Nonprofit',
    client: "St. Anthony's Foundation",
    image:
      'https://images.pexels.com/photos/6646926/pexels-photo-6646926.jpeg?auto=compress&cs=tinysrgb&w=900',
    desc: "Capturing the joy and impact of a beloved nonprofit's daily work in the community.",
  },
  {
    title: 'Sports App Launch Video',
    category: 'Business & Brand',
    client: 'Band App',
    image:
      'https://images.pexels.com/photos/8520581/pexels-photo-8520581.jpeg?auto=compress&cs=tinysrgb&w=900',
    desc: 'Dynamic, high-energy launch video for a mobile sports application.',
  },
  {
    title: 'Berkeley YouthWorks Program',
    category: 'Public Sector',
    client: 'City of Berkeley',
    image:
      'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=900',
    desc: 'Highlighting youth internship programs and their impact on the Berkeley community.',
  },
  {
    title: 'Bilingual Health Documentary',
    category: 'Nonprofit',
    client: 'EPES Chile',
    image:
      'https://images.pexels.com/photos/8100067/pexels-photo-8100067.jpeg?auto=compress&cs=tinysrgb&w=900',
    desc: 'A bilingual documentary about community health work in Chile, produced in Spanish and English.',
  },
  {
    title: 'Public Health Campaign',
    category: 'Public Sector',
    client: 'Alameda County Public Health',
    image:
      'https://images.pexels.com/photos/7433825/pexels-photo-7433825.jpeg?auto=compress&cs=tinysrgb&w=900',
    desc: 'Collaborative video work with multiple community partners on public health messaging.',
  },
];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-ink-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 reveal">
          <div className="max-w-2xl">
            <span className="text-sm font-mono tracking-[0.25em] uppercase text-brand-400">
              Recent Work
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Stories we've
              <br />
              <span className="text-gradient-brand">brought to life</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 text-base font-medium rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-brand-500 text-white'
                    : 'bg-white/5 text-ink-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <article
              key={item.title}
              className="group relative rounded-2xl overflow-hidden bg-ink-950 cursor-pointer reveal-scale"
              data-reveal-delay={index * 100}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse-ring opacity-0 group-hover:opacity-100" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass">
                  <span className="text-xs font-medium text-brand-400">{item.category}</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p className="text-sm text-ink-400 mb-1">{item.client}</p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-base text-ink-300 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-4 glass hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 group"
          >
            Have a project in mind? Let's talk.
            <ArrowRight className="w-5 h-5 text-brand-400 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
