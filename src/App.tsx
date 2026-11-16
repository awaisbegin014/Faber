import { useScrollReveal } from './hooks/useScrollReveal';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Logos } from './components/Logos';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Stats } from './components/Stats';
import { SpanishServices } from './components/SpanishServices';
import { WhyFaber } from './components/WhyFaber';
import { Testimonials } from './components/Testimonials';
import { Capabilities } from './components/Capabilities';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-ink-950 text-white selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Logos />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <Stats />
        <SpanishServices />
        <WhyFaber />
        <Testimonials />
        <Capabilities />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
