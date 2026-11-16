import { useState, useEffect, useRef } from 'react';
import { Film, Users, Award, Clock } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { icon: Film, value: 200, suffix: '+', label: 'Projects Delivered' },
  { icon: Users, value: 50, suffix: '+', label: 'Organizations Served' },
  { icon: Award, value: 15, suffix: '+', label: 'Years of Storytelling' },
  { icon: Clock, value: 100, suffix: '%', label: 'Client Satisfaction' },
];

function useCounter(targetValue: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutCubic * targetValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetValue, duration, start]);

  return count;
}

function StatCard({ stat, start, index }: { stat: StatItem; start: boolean; index: number }) {
  const count = useCounter(stat.value, 2000, start);
  const Icon = stat.icon;

  return (
    <div
      className="group relative text-center p-8 rounded-2xl glass hover:border-brand-500/30 transition-all duration-500 hover:-translate-y-2 stagger-child"
      data-reveal-delay={index * 120}
    >
      <div className="inline-flex w-14 h-14 rounded-xl bg-brand-500/10 items-center justify-center mb-4 transition-all duration-300 group-hover:bg-brand-500/20 group-hover:scale-110">
        <Icon className="w-7 h-7 text-brand-400" />
      </div>
      <div className="font-display text-5xl lg:text-6xl font-bold text-white">
        {count}
        <span className="text-gradient-brand">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-base font-medium text-ink-300">{stat.label}</div>
    </div>
  );
}

export function Stats() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/20 via-transparent to-accent-900/10" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} start={inView} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
