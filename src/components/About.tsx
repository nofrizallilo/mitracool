import { useEffect, useRef } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const TECH_IMG = 'https://images.pexels.com/photos/34054460/pexels-photo-34054460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const BUILDING_IMG = 'https://images.pexels.com/photos/37320179/pexels-photo-37320179.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const values = [
  'Keandalan teknik presisi tanpa kompromi',
  'Manajemen dan pelaporan proyek yang transparan',
  'Fokus pada performa jangka panjang, bukan sekadar instalasi',
  'Pendekatan desain yang mengutamakan efisiensi dan ramah lingkungan',
  'Kualitas pekerjaan dengan standar internasional',
];

const timeline = [
  { year: '2001', event: 'Berdiri dengan nama PT. Mitracool Sarana Utama' },
  { year: '2005', event: 'Perusahaan berganti nama menjadi PT. Mitracool Jaya Utama' },
  { year: '2013', event: '---' }, //Launched Data Center Thermal division
  { year: '2018', event: '---' }, //Expanded into Southeast Asia with regional office in Singapore
  { year: '2022', event: '---' }, //Launched Eco-Efficient Retrofits division
  { year: '2026', event: '---' }, //Serving 8 countries with 340+ certified engineers
];

const team = [
  { name: 'Yuliendra Sari', role: 'Direktur', code: '', img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=350&w=350' },
  { name: '---', role: 'Kepala Divisi Teknik', code: '', img: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&h=350&w=350' },
  { name: '---', role: 'Kepala Divisi Retail', code: '', img: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&h=350&w=350' },
  { name: '---', role: 'Kepala Divisi Umum', code: '', img: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&h=350&w=350' },
];

export default function About() {
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
    <section id="about" className="relative py-24 lg:py-32 bg-[#f5f9ff]" ref={sectionRef}>
      <div className="absolute inset-0 blueprint-grid-fine opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f9ff] via-[#f7fbff] to-[#f5f9ff] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="animate-on-scroll mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="section-label">Who We Are</span>
            {/*<div className="h-px w-8 bg-eco-700/50" />
            <span className="font-blueprint text-xs text-carbon-600">CORP.PROFILE::EST.2003</span>*/}
          </div>
          <h2 className="heading-display text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
            Built on Engineering.<br />
            <span className="text-eco-400">Driven by Performance.</span>
          </h2>
        </div>

        {/* Main bento layout */}
        <div className="animate-on-scroll grid grid-cols-12 gap-3 lg:gap-4 mb-4" style={{ transitionDelay: '0.1s' }}>
          {/* About text card */}
          <div className="col-span-12 lg:col-span-5 bento-card p-8 flex flex-col justify-between">
            <div>
              <p className="text-carbon-400 text-sm leading-relaxed mb-6">
                PT MITRACOOL JAYA UTAMA adalah perusahaan yang bergerak di bidang pengadaan barang dan jasa. Berdiri sejak tahun 2001 dengan nama PT Mitracool Sarana Utama, perusahaan kemudian berganti nama menjadi PT Mitracool Jaya Utama pada tahun 2005.
              </p>
              <p className="text-carbon-400 text-sm leading-relaxed mb-6">
                Kami menyediakan layanan pembuatan mesin pendingin, mesin pemanas, humidifier, dan dehumidifier. Kami juga melayani pembuatan mesin kustom (customize), desain & instalasi AC, desain & instalasi Clean Room, instalasi pemipaan dan elektrikal, serta pembuatan sistem kontrol. Selain itu, kami juga bergerak dalam pengadaan suku cadang seperti kompresor, kondensor, evaporator, beserta aksesori dan peralatan teknik lainnya.
              </p>
              <p className="text-carbon-400 text-sm leading-relaxed mb-6">
                Sebagai wujud layanan purna jual, kami didukung oleh tenaga teknis yang andal pada divisi servis dan pemeliharaan (maintenance) yang siap membantu pelanggan dalam melakukan perawatan maupun perbaikan.
              </p>
              <div className="space-y-3">
                {values.map((v) => (
                  <div key={v} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-eco-500 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-carbon-300 text-sm">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <a href="#contact" className="btn-primary">
                Work With Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Image card */}
          <div className="col-span-12 lg:col-span-4 bento-card overflow-hidden group corner-mark min-h-72">
            <img
              src={TECH_IMG}
              alt="HVAC engineer at work"
              className="w-full h-full object-cover opacity-75 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
            />
            {/*<div className="absolute inset-0 bg-gradient-to-t from-carbon-950/80 via-carbon-950/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-blueprint text-xs text-eco-600 tracking-wider mb-1">// FIELD.ENGINEERING</p>
              <p className="text-white font-display font-medium">Precision Installation & Commissioning</p>
            </div>*/}
          </div>

          {/* Timeline card */}
          <div className="col-span-12 lg:col-span-3 bento-card p-6 flex flex-col">
            <p className="section-label mb-5">Linimasa Perusahaan</p>
            <div className="flex-1 space-y-4 relative">
              <div className="absolute left-[5px] top-0 bottom-0 w-px bg-gradient-to-b from-eco-700/60 via-carbon-700/40 to-transparent" />
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-4 relative pl-5">
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border border-eco-600 bg-carbon-950 flex-shrink-0" />
                  <div>
                    <div className="font-blueprint text-xs text-eco-500 mb-0.5">{item.year}</div>
                    <p className="text-carbon-400 text-xs leading-snug">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership row */}
        <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">Kepemimpinan</span>
            <div className="h-px flex-1 bg-gradient-to-r from-carbon-800 to-transparent" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {team.map((member) => (
              <div key={member.code} className="bento-card overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top opacity-75 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/20 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="font-blueprint text-xs text-carbon-600">{member.code}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-display font-semibold text-white text-sm mb-0.5">{member.name}</h4>
                  <p className="text-carbon-500 text-xs font-mono">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
