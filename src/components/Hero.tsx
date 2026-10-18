import { useEffect, useRef } from 'react';
import { ArrowRight, Award, Wind, Activity, Cpu, ChevronDown } from 'lucide-react';

const HVAC_IMG = 'https://images.pexels.com/photos/37913513/pexels-photo-37913513.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const OFFICE_IMG = 'https://images.pexels.com/photos/946310/pexels-photo-946310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const SERVER_IMG = 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col" ref={containerRef}>
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-100 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-eco-700/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 flex-1 flex flex-col justify-center">
        {/* Top label */}
        <div className="animate-on-scroll flex items-center gap-4 mb-10">
          <span className="section-label text-base">Est. 2001</span>
          {/*<div className="h-px w-12 bg-eco-700/50" />
          <span className="font-blueprint text-xs text-carbon-600 tracking-wider">SYS.REF::CORP-2026</span>*/}
        </div>

        {/* Hero headline */}
        <div className="animate-on-scroll mb-6" style={{ transitionDelay: '0.1s' }}>
          <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-balance max-w-5xl">
            Bring Inovation to{' '}
            {/*<span className="text-eco-600">Climate</span>*/}
            <br />
            <span className="text-eco-600">People's Lives</span>
            <br />
            {/*<span className="text-carbon-600">People's Life</span>*/}
          </h1>
        </div>

        <div className="animate-on-scroll mb-12" style={{ transitionDelay: '0.2s' }}>
          <p className="text-carbon-400 text-lg max-w-xl leading-relaxed">
            Solusi HVAC kelas industri yang menjamin performa, efisiensi, dan daya tahan untuk berbagai sektor kritikal Anda.
          </p>
        </div>

        <div className="animate-on-scroll flex flex-wrap items-center gap-4 mb-16" style={{ transitionDelay: '0.3s' }}>
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#projects" className="btn-outline text-base px-8 py-4">
            View Our Work
          </a>
        </div>

        {/* Bento Grid Cards */}
        <div className="animate-on-scroll grid grid-cols-12 gap-3 lg:gap-4" style={{ transitionDelay: '0.4s' }}>
          {/* Main image card */}
          <div className="col-span-12 lg:col-span-7 bento-card h-72 lg:flex-1 overflow-hidden group">
            <img
              src={HVAC_IMG}
              alt="Industrial HVAC cooling system"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
            />
            {/*<div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-blueprint text-xs text-eco-500 tracking-wider mb-1">// COOLING_SYSTEM.v4</p>
              <p className="text-white font-display font-semibold text-lg">Industrial Cooling Arrays</p>
            </div>*/}
          </div>

          {/* Stats column */}
          {/*</div><div className="col-span-6 lg:col-span-3 flex flex-col gap-3">
            <div className="bento-card flex-1 p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="tag-eco">Efficiency</span>
                <Activity className="w-4 h-4 text-eco-600" strokeWidth={1.5} />
              </div>
              <div>
                <div className="stat-number text-4xl">98.4%</div>
                <p className="text-carbon-500 text-xs mt-1 font-mono">System Uptime SLA</p>
              </div>
            </div>
            <div className="bento-card flex-1 p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="tag-blueprint">COP Ratio</span>
                <Cpu className="w-4 h-4 text-blueprint-500" strokeWidth={1.5} />
              </div>
              <div>
                <div className="stat-number text-4xl text-blueprint-300">6.2x</div>
                <p className="text-carbon-500 text-xs mt-1 font-mono">Avg. COP Performance</p>
              </div>
            </div>
          </div>*/}

          {/* Right column */}
          <div className="col-span-6 lg:col-span-5 flex flex-col gap-3">
            {/*<div className="bento-card h-36 lg:h-40 overflow-hidden group relative">
              <img
                src={OFFICE_IMG}
                alt="Corporate building"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/80 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <p className="font-blueprint text-xs text-carbon-500 tracking-wider">// COMMERCIAL.SECTOR</p>
                <p className="text-white text-sm font-display font-medium">Corporate HQ Solutions</p>
              </div>
            </div>*/}

            <div className="bento-card p-5 flex items-center gap-4 h-28 lg:flex-1">
              {/*<div className="w-10 h-10 rounded-xl bg-carbon-800 border border-carbon-700 flex items-center justify-center flex-shrink-0">*/}
              <Wind className="w-10 h-10 text-eco-400" strokeWidth={1.5} />
              <div>
                <div className="stat-number text-3xl text-white">50+</div>
                <p className="text-carbon-500 text-xs font-mono mt-0.5">Proyek Selesai</p>
              </div>
            </div>

            <div className="bento-card p-5 flex items-center gap-4 h-28 lg:flex-1">
              <Award className="w-10 h-10 text-copper-400 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <div className="font-display font-bold text-white text-3xl">25+</div>
                <p className="text-carbon-500 text-xs font-mono">Tahun Beroperasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative flex justify-center mt-8">
        <a href="#services" className="flex flex-col items-center gap-2 text-carbon-600 hover:text-eco-500 transition-colors group">
          <span className="font-blueprint text-xs tracking-widest">SCROLL</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
