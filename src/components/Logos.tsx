const CLIENTS = [
  'Cvent Software',
  'Alameda County',
  'City of Berkeley',
  'Swissnex SF',
  "St. Anthony's",
  'PulsePoint Design',
  'EPES Chile',
  'Imagination Supply Co.',
];

export function Logos() {
  return (
    <section className="relative py-12 bg-ink-900 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-mono tracking-[0.25em] uppercase text-ink-400 mb-8 reveal">
          Trusted by organizations across the Bay Area & beyond
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ink-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ink-900 to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap">
            {[...CLIENTS, ...CLIENTS].map((client, index) => (
              <span
                key={index}
                className="mx-8 text-xl font-display font-semibold text-ink-400 hover:text-ink-200 transition-colors duration-300"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
