import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Award, Globe, Users } from 'lucide-react';

const SERVER_IMG = 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const CIRCUIT_IMG = 'https://drive.google.com/file/d/1MuA6vwKNJwHlOzBO44gWvRHYoqSLVGiD/view?usp=sharing';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  icon: React.ElementType;
}

const stats: StatItem[] = [
  { value: 25, suffix: '+', label: 'Tahun Beroperasi', sub: 'Sejak 2001', icon: Award },
  { value: 50, suffix: '+', label: 'Proyek Terselesaikan', sub: 'Seluruh Indonesia', icon: Globe },
  { value: 20, suffix: '+', label: 'Pekerja Terlatih', sub: 'Bersertifikat', icon: Users },
  /*{ value: 98, suffix: '.4%', label: 'Uptime SLA', sub: 'Guaranteed performance', icon: TrendingUp },*/
];

const certifications = [
  'ISO 9001:2015', 'ISO 14001:2015', /*'OHSAS 18001', 'LEED AP',
  'ASHRAE Member', 'AIRAH Certified', 'BCA Green Mark', 'SIRIM QAS',*/
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({ item, started }: { item: StatItem; started: boolean }) {
  const count = useCountUp(item.value, 2000, started);
  const Icon = item.icon;

  return (
    <div className="bento-card p-6 lg:p-8 flex flex-col justify-between group hover:glow-eco">
      <div className="flex items-start justify-between mb-8">
        {/*<div className="w-10 h-10 rounded-xl bg-eco-100 border border-eco-200 flex items-center justify-center">*/}
          <Icon className="w-8 h-8 text-eco-600" strokeWidth={1.5} />
        {/*</div>*/}
        {/*<div className="w-2 h-2 rounded-full bg-eco-500 animate-pulse" />*/}
      </div>
      <div>
        <div className="font-display font-bold text-carbon-900 text-5xl lg:text-6xl leading-none mb-2">
          {count.toLocaleString()}{item.suffix}
        </div>
        <div className="text-carbon-900 font-medium text-base mb-1">{item.label}</div>
        <div className="text-carbon-600 text-xs font-mono">{item.sub}</div>
      </div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="technology" className="relative py-24 lg:py-32 bg-[#f5f9ff]" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f9ff] via-[#f7fbff] to-[#f5f9ff] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="animate-on-scroll mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="section-label">By The Numbers</span>
            {/*<div className="h-px w-8 bg-eco-700/50" />
            <span className="font-blueprint text-xs text-carbon-600">STAT.MODULE::LIVE</span>*/}
          </div>
          <h2 className="heading-display text-4xl lg:text-5xl max-w-2xl leading-tight">
            Two Decades of<br />
            <span className="text-eco-400">Engineering Excellence</span>
          </h2>
        </div>

        {/* Stats Bento */}
        <div className="animate-on-scroll grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-6" style={{ transitionDelay: '0.1s' }}>
          {stats.map((item) => (
            <StatCard key={item.label} item={item} started={started} />
          ))}
        </div>

        {/* Bottom row: image + certifications */}
        <div className="animate-on-scroll grid grid-cols-12 gap-3 lg:gap-4" style={{ transitionDelay: '0.2s' }}>
          <div className="col-span-12 lg:col-span-7 bento-card h-64 overflow-hidden group bg-white">
            <img
              src={CIRCUIT_IMG}
              alt="Circuit board"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
            />
            {/*<div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/35 to-transparent" />
            <div className="absolute inset-0 blueprint-grid opacity-30" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-blueprint text-xs text-eco-600 tracking-wider mb-2">// DATACENTER.THERMAL.MGMT</p>
              <h3 className="text-carbon-900 font-display font-semibold text-xl mb-1">Precision Data Center Cooling</h3>
              <p className="text-carbon-700 text-sm">Maintaining PUE below 1.35 for hyperscale operations</p>
            </div>*/}
          </div>

          <div className="col-span-12 lg:col-span-5 bento-card p-6 flex flex-col justify-between bg-white">
            <div>
              <p className="section-label mb-4">Certifications & Standards</p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span key={cert} className="tag-carbon">{cert}</span>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-carbon-200">
              <p className="text-carbon-700 text-sm leading-relaxed">
                Setiap proyek memenuhi standar internasional untuk kualitas, tanggung jawab lingkungan, serta kesehatan dan keselamatan kerja. Para teknisi kami terus mendapatkan pelatihan berkala mengenai panduan terbaru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
