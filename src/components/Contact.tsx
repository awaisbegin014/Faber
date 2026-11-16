import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, CircleCheck, Send } from 'lucide-react';

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '510-761-5118',
    href: 'tel:5107615118',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'inquiries@faberproductions.com',
    href: 'mailto:inquiries@faberproductions.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Oakland, California',
    href: '#',
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-ink-950 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="reveal-left">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-brand-400">
              Get In Touch
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              Let's tell your
              <br />
              <span className="text-gradient-brand">story together</span>
            </h2>
            <p className="mt-6 text-lg text-ink-300 leading-relaxed">
              Tell us about your project, your goals, and your timeline. We'll get back to you
              within 24 hours to schedule a consultation.
            </p>

            <div className="mt-10 space-y-4">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-ink-900 border border-white/5 hover:border-brand-500/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-500/20 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-brand-400" />
                    </div>
                    <div>
                      <div className="text-xs text-ink-400 uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-white font-semibold">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="reveal-right">
            <div className="p-8 rounded-2xl bg-ink-900 border border-white/5">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12 animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center mb-6">
                    <CircleCheck className="w-9 h-9 text-accent-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-ink-300 max-w-sm">
                    Thank you for reaching out. We'll get back to you within 24 hours to discuss
                    your project.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-ink-200 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg bg-ink-950 border border-white/10 text-white placeholder-ink-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-200 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Company or agency"
                        className="w-full px-4 py-3 rounded-lg bg-ink-950 border border-white/10 text-white placeholder-ink-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-ink-200 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-ink-950 border border-white/10 text-white placeholder-ink-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-200 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="(510) 000-0000"
                        className="w-full px-4 py-3 rounded-lg bg-ink-950 border border-white/10 text-white placeholder-ink-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink-200 mb-2">
                      Project Type
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-lg bg-ink-950 border border-white/10 text-white focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      <option value="business">Business & Brand</option>
                      <option value="public">Public Sector</option>
                      <option value="nonprofit">Nonprofit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink-200 mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="What story do you want to tell?"
                      className="w-full px-4 py-3 rounded-lg bg-ink-950 border border-white/10 text-white placeholder-ink-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/30"
                  >
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
