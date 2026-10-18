import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const offices = [
  {
    city: 'Bandung',
    country: 'Indonesia',
    address: 'Jl. Indramayu No. 45, Antapani, Bandung 40291',
    phone: '022 7217 849',
    code: '',
  },
  /*{
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    address: 'KL Sentral, Lot 3.01, Block B, Nu Sentral',
    phone: '+60 3 2776 8800',
    code: 'KUL.REG',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '1 Harbourfront Ave, Keppel Bay Tower, #15-01',
    phone: '+65 6800 8800',
    code: 'SGP.REG',
  },*/
];

const projectTypes = [
  'Commercial HVAC',
  'Industrial Process Cooling',
  'Data Center Thermal',
  'Eco-Efficient Retrofit',
  'Maintenance Contract',
  'Commissioning & TAB',
  'Feasibility Study',
];

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  capacity: string;
  message: string;
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: '', email: '', company: '', projectType: '', capacity: '', message: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = 'w-full bg-carbon-900/60 border border-carbon-800 text-white placeholder-carbon-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-eco-700 focus:bg-carbon-800/60 transition-all duration-200 font-sans';
  const labelClass = 'block text-xs font-mono text-carbon-500 mb-1.5 tracking-wide';

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#f5f9ff]" ref={sectionRef}>
      <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f9ff] via-[#f7fbff] to-[#f5f9ff] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="animate-on-scroll mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="section-label">Get In Touch</span>
            {/*<div className="h-px w-8 bg-eco-700/50" />
            <span className="font-blueprint text-xs text-carbon-600">CONTACT.MODULE::OPEN</span>*/}
          </div>
          <h2 className="heading-display text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
            Start Your Next<br />
            <span className="text-eco-400">HVACR Project</span>
          </h2>
        </div>

        <div className="animate-on-scroll grid grid-cols-12 gap-3 lg:gap-4" style={{ transitionDelay: '0.1s' }}>
          {/* Form */}
          <div className="col-span-12 lg:col-span-7 bento-card p-7 lg:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-96 text-center">
                <div className="w-16 h-16 rounded-full bg-eco-700/20 border border-eco-700/40 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-eco-400" strokeWidth={1.5} />
                </div>
                <h3 className="heading-display text-2xl text-white mb-3">Inquiry Received</h3>
                <p className="text-carbon-400 text-sm max-w-sm leading-relaxed mb-6">
                  Thank you for reaching out. Our engineering team will review your project requirements and contact you within 1 business day.
                </p>
                <span className="font-blueprint text-xs text-eco-600 tracking-wider">// TICKET.CREATED.SUCCESS</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-blueprint text-xs text-eco-600 tracking-wider">Form Pengajuan Proyek</span>
                  <div className="h-px flex-1 bg-carbon-800" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Nama Lengkap *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Lilo" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Email Kantor *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="lilo@company.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Perusahaan / Organisasi *</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} required placeholder="PT. Example Corporation" className={inputClass} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Jenis Proyek</label>
                    <select name="projectType" value={form.projectType} onChange={handleChange} className={inputClass}>
                      <option value="">Pilih jenis...</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Kapasitas Estimasi (TR / kW)</label>
                    <input type="text" name="capacity" value={form.capacity} onChange={handleChange} placeholder="e.g. 5,000 TR" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Ringkasan Umum Proyek *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tuliskan ringkasan proyek, lokasi, dan kebutuhan teknis lainnya..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      Submit Project Inquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-3">
            {/* Quick contact */}
            <div className="bento-card p-6">
              <p className="section-label mb-5">Kontak</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-carbon-800 border border-carbon-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {/*<div className="w-8 h-8 rounded-lg bg-eco-700/20 border border-eco-700/30 flex items-center justify-center flex-shrink-0 mt-0.5">*/}  
                    <Phone className="w-3.5 h-3.5 text-eco-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-carbon-500 mb-0.5">Telepon</p>
                    <a href="tel:0227217849" className="text-white text-sm hover:text-eco-400 transition-colors">022 7217 849</a>
                    {/*<p className="text-carbon-600 text-xs font-mono">24/7 Emergency Line</p>*/}
                    <br />
                    <a href="tel:+62817227207" className="text-white text-sm hover:text-eco-400 transition-colors">+62 817 227 207 (Hery)</a>
                    <br />
                    <a href="tel:+6285221273277" className="text-white text-sm hover:text-eco-400 transition-colors">+62 852 2127 3277 (Imam)</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-carbon-800 border border-carbon-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-3.5 h-3.5 text-eco-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-carbon-500 mb-0.5">Email</p>
                    <a href="mailto:projects@aircore.systems" className="text-white text-sm hover:text-eco-400 transition-colors">mitracool@ymail.com</a>
                    {/*<p className="text-carbon-600 text-xs font-mono">Replied within 24hrs</p>*/}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-carbon-800 border border-carbon-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-eco-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-carbon-500 mb-0.5">Jam Kerja</p>
                    <p className="text-white text-sm">Senin – Jumat, 08:00 – 17:00 WIB</p>
                    {/*<p className="text-carbon-600 text-xs font-mono">Emergency: 24/7</p>*/}
                  </div>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div className="bento-card p-6 flex-1">
              <p className="section-label mb-5">Kantor</p>
              <div className="space-y-4">
                {offices.map((office) => (
                  <div key={office.code} className="flex gap-3 pb-4 border-b border-carbon-800/60 last:border-0 last:pb-0">
                    <div className="w-8 h-8 rounded-lg bg-carbon-800 border border-carbon-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-eco-400" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-white text-sm font-medium">{office.city}</span>
                        <span className="font-blueprint text-xs text-carbon-600">{office.code}</span>
                      </div>
                      <p className="text-carbon-500 text-xs mb-1">{office.address}</p>
                      <p className="text-carbon-400 text-xs font-mono">{office.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
