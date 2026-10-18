import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-carbon-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
