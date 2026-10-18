import { useEffect, useRef } from 'react';
import {
  Building2, Factory, Server, Leaf, Settings, Shield,
  ArrowUpRight, Thermometer, Wind, Droplets, Zap
} from 'lucide-react';

const services = [
  {
    id: '',
    icon: Building2,
    title: 'HVAC Komersial',
    desc: 'Solusi tata udara total untuk gedung perkantoran, pusat perbelanjaan, dan kawasan terpadu. Menghadirkan kenyamanan optimal, memenuhi standar regulasi, dan hemat energi.',
    tags: ['Air Conditioning'],
    accent: 'eco',
    size: 'large',
  },
  {
    id: '',
    icon: Factory,
    title: 'Sistem Pendingin Proses Industri',
    desc: 'Sistem pengondisian udara (heavy-duty process cooling) dan ventilasi bagi pabrik manufaktur. Menghadirkan performa optimal, memenuhi standar regulasi, dan hemat energi.',
    tags: ['Process Cooling', 'Cold Storage', 'Freezer Room', 'Air Blast Freezer', 'Chiller Room'],
    accent: 'copper',
    size: 'medium',
  },
  /*{
    id: '',
    icon: Server,
    title: 'Data Center Thermal',
    desc: 'Mission-critical precision cooling for hyperscale and colocation data centers. N+1 redundancy, PUE optimization, and 24/7 monitoring.',
    tags: ['Precision Cooling', 'CRAC Units', 'Free Cooling'],
    accent: 'blueprint',
    size: 'medium',
  },*/
  {
    id: '',
    icon: Leaf,
    title: 'Peningkatan Sistem / Modernisasi',
    desc: 'Modernisasi sistem lama dengan ke yang lebih efisien, pemasangan kendali pintar, dan transisi refrigeran ramah Lingkungan.',
    tags: ['R-32 Retrofit', 'BMS Integration', 'ESG Reporting'],
    accent: 'eco',
    size: 'small',
  },
  {
    id: '',
    icon: Settings,
    title: 'Perbaikan',
    desc: 'Layanan Pengujian, Penyetelan, dan Perbaikan yang memastikan setiap sistem beroperasi sesuai spesifikasi desain.',
    tags: ['Pengujian', 'Kalibrasi', 'Penggantian'],
    accent: 'carbon',
    size: 'small',
  },
  {
    id: '',
    icon: Shield,
    title: 'Pemeliharaan & Dukungan',
    desc: 'Program pemeliharaan preventif dengan respons darurat 24/7. Maksimalkan waktu operasional dan perpanjang siklus hidup peralatan.',
    tags: ['Dukungan 24/7', 'Pembersihan', 'Pengecekan'],
    accent: 'carbon',
    size: 'small',
  },
];

const accentMap = {
  eco: {
    tag: 'tag-eco',
    icon: 'bg-eco-700/20 border-eco-700/40 text-eco-400',
    id: 'text-eco-700',
    border: 'hover:border-eco-700/50',
  },
  copper: {
    tag: 'tag-copper',
    icon: 'bg-copper-700/20 border-copper-700/30 text-copper-400',
    id: 'text-copper-700',
    border: 'hover:border-copper-700/40',
  },
  blueprint: {
    tag: 'tag-blueprint',
    icon: 'bg-blueprint-700/20 border-blueprint-700/30 text-blueprint-400',
    id: 'text-blueprint-600',
    border: 'hover:border-blueprint-700/40',
  },
  carbon: {
    tag: 'tag-carbon',
    icon: 'bg-carbon-700/30 border-carbon-600/30 text-carbon-400',
    id: 'text-carbon-600',
    border: 'hover:border-carbon-600/50',
  },
};

const highlights = [
  { icon: Thermometer, value: '±0.3°C', label: 'Temp Accuracy' },
  { icon: Wind, value: '2,400+', label: 'Projects Done' },
  { icon: Droplets, value: '40%', label: 'Energy Saved' },
  { icon: Zap, value: '6.2x', label: 'COP Ratio' },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#f5f9ff]" ref={sectionRef}>
      <div className="absolute inset-0 blueprint-grid-fine opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f9ff] via-[#f7fbff] to-[#f5f9ff] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="animate-on-scroll mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="section-label">Our Services</span>
            {/*<div className="h-px w-8 bg-eco-700/50" />
            <span className="font-blueprint text-xs text-carbon-600">SVC.MODULE::06</span>*/}
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
            <h2 className="heading-display text-4xl lg:text-5xl xl:text-6xl text-white max-w-xl leading-tight">
              End-to-End<br />
              <span className="text-eco-400">Climate Engineering</span>
            </h2>
            <p className="text-carbon-400 max-w-sm leading-relaxed text-sm">
              Dari perencanaan kapasitas awal hingga komisioning dan perawatan berkala — tim multi-disiplin kami siap menangani seluruh rangkaian siklus proyek HVAC Anda.
            </p>
          </div>
        </div>

        {/* Bento Grid Services */}
        <div className="animate-on-scroll grid grid-cols-12 gap-3 lg:gap-4 mb-8" style={{ transitionDelay: '0.1s' }}>
          {/* Large card */}
          {services.slice(0).map((svc) => {
            const accent = accentMap[svc.accent as keyof typeof accentMap];
            const Icon = svc.icon;
            return (
              <div key={svc.id} className={`col-span-12 lg:col-span-4 bento-card ${accent.border} p-7 flex flex-col justify-between min-h-72 group cursor-pointer`}>
                <div>
                  <div className="flex items-start justify-between mb-6">
                    {/*<div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${accent.icon}`}>*/}
                      <Icon className="w-8 h-8 text-eco-600" strokeWidth={1.5} />
                    {/*</div>*/}
                    {/*<div className="flex items-center gap-3">
                      <span className={`font-blueprint text-xs ${accent.id}`}>{svc.id}</span>
                      <ArrowUpRight className="w-4 h-4 text-carbon-700 group-hover:text-eco-500 transition-colors" />
                    </div>*/}
                  </div>
                  <h3 className="heading-display text-2xl text-white mb-3">{svc.title}</h3>
                  <p className="text-carbon-400 text-sm leading-relaxed">{svc.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {svc.tags.map((t) => (
                    <span key={t} className={accent.tag}>{t}</span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Medium cards */}
          {/*{services.slice(1, 3).map((svc) => {
            const accent = accentMap[svc.accent as keyof typeof accentMap];
            const Icon = svc.icon;
            return (
              <div key={svc.id} className={`col-span-12 sm:col-span-6 lg:col-span-3.5 bento-card ${accent.border} p-6 flex flex-col justify-between min-h-56 group cursor-pointer`}
                style={{ gridColumn: 'span 3.5 / span 3.5' }}>
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${accent.icon}`}>
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`font-blueprint text-xs ${accent.id}`}>{svc.id}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-carbon-700 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="heading-display text-xl text-white mb-2">{svc.title}</h3>
                  <p className="text-carbon-400 text-xs leading-relaxed">{svc.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {svc.tags.map((t) => (
                    <span key={t} className={accent.tag}>{t}</span>
                  ))}
                </div>
              </div>
            );
          })}*/}

          {/* Small cards row */}
          {/*{services.slice(3).map((svc) => {
            const accent = accentMap[svc.accent as keyof typeof accentMap];
            const Icon = svc.icon;
            return (
              <div key={svc.id} className={`col-span-12 sm:col-span-6 lg:col-span-4 bento-card ${accent.border} p-5 flex flex-col justify-between group cursor-pointer`}>
                <div className="flex items-start gap-4">
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${accent.icon}`}>
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="heading-display text-base text-white">{svc.title}</h3>
                      <ArrowUpRight className="w-3.5 h-3.5 text-carbon-700 group-hover:text-white transition-colors flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-carbon-500 text-xs leading-relaxed mb-3">{svc.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.map((t) => (
                        <span key={t} className={accent.tag}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}*/}
        </div>

        {/* Bottom highlight bar */}
        {/*<div className="animate-on-scroll grid grid-cols-2 lg:grid-cols-4 gap-3" style={{ transitionDelay: '0.2s' }}>
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.label} className="bento-card p-5 flex items-center gap-4">
                <Icon className="w-5 h-5 text-eco-600 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="font-display font-bold text-white text-2xl">{h.value}</div>
                  <div className="text-carbon-500 text-xs font-mono">{h.label}</div>
                </div>
              </div>
            );
          })}
        </div>*/}
      </div>
    </section>
  );
}
