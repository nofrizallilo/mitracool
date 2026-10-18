import { useEffect, useRef } from 'react';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';

const OFFICE_IMG = 'https://images.pexels.com/photos/946310/pexels-photo-946310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GLASS_IMG = 'https://images.pexels.com/photos/1313534/pexels-photo-1313534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const SERVER_IMG = 'https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const BUILDING_IMG = 'https://images.pexels.com/photos/532562/pexels-photo-532562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const SOLAR_IMG = 'https://images.pexels.com/photos/35454187/pexels-photo-35454187.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const projects = [
  {
    id: 'PRJ-001',
    title: 'PT. Dilamo',
    client: 'PT. Dilamo',
    location: 'Bandung, Indonesia',
    year: '2025',
    type: 'Industrial',
    scope: 'Cold Storage',
    capacity: '18,000 TR',
    image: OFFICE_IMG,
    tag: 'tag-eco',
    tagLabel: 'Completed',
    featured: true,
  },
  {
    id: 'PRJ-002',
    title: 'Rumah Potong Hewan Kupang',
    client: 'Rumah Potong Hewan Kupang',
    location: 'Kupang, Indonesia',
    year: '2025',
    type: 'Industrial',
    scope: 'ABF, Cold Storage, Process Cooling',
    capacity: '18,000 TR',
    image: SERVER_IMG,
    tag: 'tag-blueprint',
    tagLabel: 'Completed',
    featured: true,
  },
  {
    id: 'PRJ-003',
    title: 'Pabrik Pengolahan Ikan Muncar',
    client: 'Pabrik Pengolahan Ikan Muncar',
    location: 'Banyuwangi, Indonesia',
    year: '2024',
    type: 'Industrial',
    scope: 'Cold Storage',
    capacity: '8,500 TR',
    image: GLASS_IMG,
    tag: 'tag-carbon',
    tagLabel: 'Completed',
    featured: false,
  },
  {
    id: 'PRJ-004',
    title: 'PT. Permata Sejati',
    client: 'Samsung SDI',
    location: 'Bandung, Indonesia',
    year: '2024',
    type: 'Industrial',
    scope: 'Process Cooling + ATEX Zones',
    capacity: '12,000 TR',
    image: SOLAR_IMG,
    tag: 'tag-copper',
    tagLabel: 'Delivered',
    featured: false,
  },
  {
    id: 'PRJ-005',
    title: 'Pabrik Es Balok Sulawesi',
    client: 'CapitaLand',
    location: 'Sulawesi, Indonesia',
    year: '2024',
    type: 'Retrofit',
    scope: 'R-32 Conversion + IoT BMS',
    capacity: '5,200 TR',
    image: BUILDING_IMG,
    tag: 'tag-eco',
    tagLabel: 'Completed',
    featured: false,
  },
  {
    title: 'PT. WOW',
    location: 'Bandung, Indonesia',
    year: '2024',
  },
  {
    title: 'Pertamina Balongan',
    location: 'Balongan, Indonesia',
    year: '2024',
  },
  {
    title: 'PT. Biofarma',
    location: 'Bandung, Indonesia',
    year: '2024',
  },
  {
    title: 'RSCM',
    location: 'Jakarta, Indonesia',
    year: '2024',
  },
  {
    title: 'Divjat Pindat',
    location: 'Bandung, Indonesia',
    year: '2024',
  },
  {
    title: 'BRI Tower',
    location: 'Bandung, Indonesia',
    year: '2024',
  },
  {
    title: 'PT. Metro Garmin',
    location: 'Bandung, Indonesia',
    year: '2024',
  },
  {
    title: 'PT. SMPL',
    location: 'Balongan, Indonesia',
    year: '2024',
  },
  {
    title: 'RS. Limijati',
    location: 'Bandung, Indonesia',
    year: '2024',
  },
  {
    title: 'PT. Chocomory',
    location: 'Bandung, Indonesia',
    year: '2024',
  },
];

export default function Projects() {
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

  const [featured1, featured2] = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-[#f5f9ff]" ref={sectionRef}>
      <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f9ff] via-[#f7fbff] to-[#f5f9ff] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="animate-on-scroll flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="section-label">Selected Work</span>
              {/*<div className="h-px w-8 bg-eco-700/50" />
              <span className="font-blueprint text-xs text-carbon-600">PRJ.COUNT::2400+</span>*/}
            </div>
            <h2 className="heading-display text-4xl lg:text-5xl text-white leading-tight">
              Projects That Define<br />
              <span className="text-eco-400">Our Standard</span>
            </h2>
          </div>
          <a href="#contact" className="btn-outline self-start lg:self-auto">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Featured Projects */}
        <div className="animate-on-scroll grid grid-cols-12 gap-3 lg:gap-4 mb-4" style={{ transitionDelay: '0.1s' }}>
          {/* Large featured */}
          <div className="col-span-12 lg:col-span-6 bento-card h-80 lg:h-[420px] overflow-hidden group cursor-pointer">
            <img
              src={featured1.image}
              alt={featured1.title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/20 to-transparent" />
            <div className="absolute inset-0 blueprint-grid opacity-20" />
            {/*<div className="absolute top-5 right-5">
              <ArrowUpRight className="w-5 h-5 text-carbon-600 group-hover:text-eco-400 transition-colors" />
            </div>*/}
            <div className="absolute bottom-6 left-6 right-6">
              {/*<div className="flex items-center gap-3 mb-3">
                <span className={`tag ${featured1.tag}`}>{featured1.tagLabel}</span>
                <span className="tag-carbon">{featured1.type}</span>
                <span className="font-blueprint text-xs text-carbon-600">{featured1.id}</span>
              </div>*/}
              <h3 className="heading-display text-2xl text-white mb-2 project-image-title">{featured1.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-white project-image-title">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" /> {featured1.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" /> {featured1.year}
                </span>
                {/*<span className="font-mono">{featured1.capacity}</span>*/}
              </div>
            </div>
          </div>

          {/* Second featured */}
          <div className="col-span-12 lg:col-span-6 bento-card h-80 lg:h-[420px] overflow-hidden group cursor-pointer">
            <img
              src={featured2.image}
              alt={featured2.title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/30 to-transparent" />
            <div className="absolute inset-0 blueprint-grid opacity-15" />
            {/*<div className="absolute top-5 right-5">
              <ArrowUpRight className="w-5 h-5 text-carbon-600 group-hover:text-blueprint-400 transition-colors" />
            </div>*/}
            <div className="absolute bottom-6 left-6 right-6">
              {/*<div className="flex items-center gap-2 mb-3">
                <span className={`tag ${featured2.tag}`}>{featured2.tagLabel}</span>
                <span className="tag-carbon">{featured2.type}</span>
              </div>*/}
              <h3 className="heading-display text-xl text-white mb-2 project-image-title">{featured2.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-white project-image-title">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" /> {featured2.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" /> {featured2.year}
                </span>
                {/*<span className="font-mono">{featured2.capacity}</span>*/}
              </div>
            </div>
          </div>
        </div>

        {/* Rest of projects */}
        <div className="animate-on-scroll grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4" style={{ transitionDelay: '0.2s' }}>
          {rest.map((project) => (
            <div key={project.id} className="bento-card overflow-hidden group cursor-pointer">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                />
                {/*<div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <ArrowUpRight className="w-4 h-4 text-carbon-700 group-hover:text-white transition-colors" />
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className={`tag text-xs ${project.tag}`}>{project.type}</span>
                </div>*/}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  {/*<span className="font-blueprint text-xs text-carbon-600">{project.id}</span>
                  <span className="font-blueprint text-xs text-carbon-600">{project.year}</span>*/}
                </div>
                <h3 className="heading-display text-base text-white mb-1">{project.title}</h3>
                {/*<p className="text-carbon-500 text-xs font-mono mb-2">{project.client}</p>*/}
                <div className="flex items-center gap-1.5 text-carbon-500 text-xs">
                  <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" /> {project.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" /> {project.year}
                </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
