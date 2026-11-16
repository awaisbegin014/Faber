import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      '5+++ Stars!! We recently hired Faber Productions for a video project in San Francisco. He met with us several times leading up to the event to talk about the story, and spent time understanding our project goals. The end result was incredible. We used the video to help showcase our products at our annual customer conference.',
    author: 'Brook Gracey',
    org: 'Cvent Software Technologies',
  },
  {
    quote:
      'With so many partners and stakeholders, there were bound to be many different viewpoints. What we received was far beyond our expectations. Chris proved himself to be a skilled listener who was not only able to hear the numerous needs of his clients, but also find the balance between all those viewpoints. Every one of our partners and collaborators was blown away.',
    author: 'Janice Chin',
    org: 'Alameda County Behavioral Health',
  },
  {
    quote:
      'Chris brought tremendous creative energy to our bilingual video about the work of EPES in Chile. Because he is bilingual, he was able to communicate directly with everyone, immediately putting people at ease. He is a natural storyteller, and we loved the way he wove our many stories into a narrative audiences could easily understand and enjoy.',
    author: 'Karen Anderson',
    org: 'Co-Founder, EPES (Educación Popular en Salud)',
  },
  {
    quote:
      'Chris managed to bring out the best in our high school interns when it was their turn to be in front of the camera and understood the importance of highlighting their valuable contributions. He brings great professionalism and passion to his work.',
    author: 'Nina Goldman',
    org: 'Director, Youth Equity Partnership, City of Berkeley',
  },
  {
    quote:
      "Chris is an amazing videographer and visual storyteller. He was genuinely interested in getting to know us and didn't follow some generic checklist to understand our requirements. He produced a beautiful, compelling video about our brand.",
    author: 'Kirti Patel',
    org: 'Imagination Supply Company',
  },
  {
    quote:
      'Faber Productions jumped mid-way into a big, complex video project and turned it around 180 degrees. What you get with Chris is not just a video editor, but a writer-thinker-creator-storyteller extraordinaire, who will wrestle with your project until it is perfect.',
    author: 'Florencia Prada',
    org: 'Swissnex San Francisco',
  },
  {
    quote:
      'Chris was incredibly patient, taking the time to listen to our needs. He and his team worked with a variety of staff and community members with various backgrounds; all expressed their appreciation for the team\'s high level of professionalism and expertise.',
    author: 'Tanya Bustamante',
    org: 'Deputy Director, City of Berkeley',
  },
  {
    quote:
      "Only an artist could do what Chris does with such genius and perfection. I'm absolutely stunned by what he gave to this — what you all have created for my book with the book trailer.",
    author: 'BJ Hoff',
    org: 'Author, American Anthem',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextTestimonial, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const active = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 bg-ink-900 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Quote className="absolute top-20 right-10 w-64 h-64 text-white/[0.02]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-brand-400">
            Client Voices
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Don't take our
            <span className="text-gradient-brand"> word for it</span>
          </h2>
        </div>

        <div className="relative reveal-scale">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-gold-400" fill="currentColor" />
            ))}
          </div>

          <blockquote key={currentIndex} className="text-center animate-fade-in">
            <p className="font-display text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed italic">
              "{active.quote}"
            </p>
            <div className="mt-8">
              <div className="font-semibold text-white text-lg">{active.author}</div>
              <div className="text-sm text-brand-400 mt-1">{active.org}</div>
            </div>
          </blockquote>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevTestimonial}
              className="w-11 h-11 rounded-full glass hover:bg-brand-500 hover:border-brand-500 flex items-center justify-center transition-all duration-300 text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === currentIndex
                      ? 'w-8 h-2 bg-brand-500'
                      : 'w-2 h-2 bg-ink-600 hover:bg-ink-500'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-11 h-11 rounded-full glass hover:bg-brand-500 hover:border-brand-500 flex items-center justify-center transition-all duration-300 text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
