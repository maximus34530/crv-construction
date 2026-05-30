'use client';

import { useState, useEffect, useRef } from 'react';
import { Bebas_Neue, Inter } from 'next/font/google';
import {
  ShieldCheck,
  Star,
  Users,
  Building2,
  MapPin,
  HardHat,
  Hammer,
  Wrench,
  Phone,
  ChevronDown,
  Check,
  X,
  Home,
  Layers,
  Ruler,
  Building,
  ArrowRight,
  Quote
} from 'lucide-react';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function Page() {
  const [heroPhone, setHeroPhone] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    projectType: '',
    description: '',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false, false]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stepRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => { const n = [...prev]; n[i] = true; return n; });
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(ref);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Hero capture:', { phone: heroPhone });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead form:', formData);
  };

  const faqs = [
    {
      q: 'Do you handle both residential and commercial projects?',
      a: 'Yes — CRV Construction works across both. Whether it\'s a custom home build, a kitchen remodel, or a commercial office fit-out, we have the crew, licensing, and experience to handle it properly from start to finish.',
    },
    {
      q: 'How do I get a quote and what does it cost?',
      a: 'Your initial on-site estimate is completely free. We visit your property, assess the scope, and provide a written itemized quote with no hidden fees. What we quote is what you pay.',
    },
    {
      q: 'Are you licensed and insured in Texas?',
      a: 'Absolutely. CRV Construction is fully licensed and insured in the state of Texas. We pull all required permits for every project and ensure full code compliance — protecting you and your property.',
    },
    {
      q: 'How long does a typical project take?',
      a: 'Timeline depends on project scope. A bathroom remodel may take 2–3 weeks; a custom home build typically runs 6–12 months. We provide a detailed timeline with your written quote and keep you updated throughout construction.',
    },
    {
      q: 'Will I be dealing with subcontractors I\'ve never met?',
      a: 'You\'ll always have a direct CRV point of contact managing your project. We coordinate all subcontractors, vet them ourselves, and you never get passed around or left wondering who\'s responsible.',
    },
    {
      q: 'What areas do you serve?',
      a: 'We\'re based in McAllen, TX and serve the greater Rio Grande Valley — including Edinburg, Mission, Pharr, Harlingen, and surrounding communities. If you\'re in the Valley, we can come to you.',
    },
  ];

  const testimonials = [
    {
      metric: '4.9★ — 219 Reviews',
      quote: 'CRV built our commercial office space on time and within budget. Their team was professional, communicated every step of the way, and the quality of the finish exceeded what we expected. Will not use anyone else.',
      attribution: 'Roberto M. — McAllen, TX Business Owner',
    },
    {
      metric: 'Custom Home Build',
      quote: 'We had our dream home in our heads for years. CRV turned it into reality. They listened, advised us on materials, and delivered a home we\'re incredibly proud of. The craftsmanship is exceptional.',
      attribution: 'Marisela & Jorge T. — McAllen, TX',
    },
    {
      metric: 'Kitchen Remodel',
      quote: 'From the initial quote to final walkthrough, CRV was transparent and fair. The kitchen remodel came in exactly at the price they quoted. No surprises. That alone makes them worth every penny.',
      attribution: 'Linda C. — Edinburg, TX',
    },
    {
      metric: 'Commercial Build-Out',
      quote: 'I\'ve worked with a lot of contractors over the years for my business properties. CRV is the first team that felt like a true partner — accountable, skilled, and they actually show up when they say they will.',
      attribution: 'David R. — Mission, TX',
    },
    {
      metric: 'Residential Addition',
      quote: 'We needed a room addition and were nervous about the process. CRV made it seamless. The crew was respectful of our home, cleaned up every day, and the result looks like it was always part of the house.',
      attribution: 'Ana P. — Pharr, TX',
    },
    {
      metric: 'Bathroom Renovation',
      quote: 'Best investment we\'ve made in this home. CRV\'s team knew exactly what they were doing, finished ahead of schedule, and the quality is beautiful. 5 stars doesn\'t feel like enough.',
      attribution: 'Carlos V. — McAllen, TX',
    },
  ];

  const offerings = [
    {
      title: 'General Contracting',
      hook: 'Full-scope project management — commercial and residential',
      icon: <HardHat size={32} />,
      highlighted: false,
      features: [
        'New construction from ground up',
        'Full permitting and code compliance',
        'Subcontractor coordination and oversight',
        'Budget tracking and timeline management',
        'Commercial and residential expertise',
        'Single point of contact throughout',
      ],
      cta: 'Request a Quote',
    },
    {
      title: 'Custom Construction',
      hook: 'Your vision, built exactly as you imagined it',
      icon: <Hammer size={32} />,
      highlighted: true,
      features: [
        'Fully custom residential home builds',
        'Design-build collaboration from day one',
        'Premium material selection guidance',
        'Turnkey delivery — move-in ready',
        'Detailed milestone updates throughout',
        'Final walkthrough with satisfaction sign-off',
      ],
      cta: 'Start My Custom Build',
    },
    {
      title: 'Remodeling & Renovation',
      hook: 'Transform what exists into what you need',
      icon: <Wrench size={32} />,
      highlighted: false,
      features: [
        'Kitchen and bathroom remodels',
        'Commercial interior fit-outs',
        'Structural additions and expansions',
        'Flooring, finish, and fixture upgrades',
        'Minimal disruption scheduling',
        'Licensed crews, insured work',
      ],
      cta: 'Get Remodel Quote',
    },
  ];

  const galleryItems = [
    { icon: <Building size={48} />, label: 'Custom Home Build', large: true, gradient: 'from-[#3a2a0a] via-[#1A1916] to-[#0F0F0D]' },
    { icon: <Building2 size={48} />, label: 'Commercial Fit-Out', large: true, gradient: 'from-[#2a1f08] via-[#1A1916] to-[#0F0F0D]' },
    { icon: <Hammer size={36} />, label: 'Kitchen Remodel', large: false, gradient: 'from-[#301e07] via-[#1A1916] to-[#0F0F0D]' },
    { icon: <Layers size={36} />, label: 'Office Construction', large: false, gradient: 'from-[#1A1916] via-[#261b07] to-[#0F0F0D]' },
    { icon: <Ruler size={36} />, label: 'Residential Addition', large: false, gradient: 'from-[#1A1916] via-[#2a1f08] to-[#0F0F0D]' },
    { icon: <Wrench size={36} />, label: 'Bathroom Renovation', large: false, gradient: 'from-[#1A1916] via-[#1e1506] to-[#0F0F0D]' },
  ];

  const comparisonRows = [
    ['Single point of contact throughout', 'Multiple handoffs'],
    ['4.9-star verified reputation', 'Unverified claims'],
    ['Residential + commercial expertise', 'Residential only'],
    ['Written quotes with no hidden fees', 'Verbal estimates'],
    ['Licensed & insured in Texas', 'Verify yourself'],
    ['Local McAllen team', 'Out-of-area subs'],
  ];

  return (
    <div className={`${bebasNeue.variable} ${inter.variable} bg-[#0F0F0D] text-[#F5F0E8] font-inter min-h-screen overflow-x-hidden`}>
      <style>{`
        .font-bebas { font-family: var(--font-bebas), sans-serif; }
        .font-inter { font-family: var(--font-inter), sans-serif; }
        .dot-grid {
          background-image: radial-gradient(circle, #2E2C28 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .shimmer-btn {
          position: relative;
          overflow: hidden;
        }
        .shimmer-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
          transition: left 0.5s ease;
        }
        .shimmer-btn:hover::after {
          left: 150%;
        }
        .step-glow {
          transition: text-shadow 0.6s ease;
        }
        .step-glow.active {
          text-shadow: 0 0 30px rgba(212,135,30,0.7), 0 0 60px rgba(212,135,30,0.3);
        }
        .gallery-cell {
          position: relative;
          overflow: hidden;
        }
        .gallery-cell .overlay {
          position: absolute;
          inset: 0;
          background: rgba(212,135,30,0.15);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gallery-cell:hover .overlay {
          opacity: 1;
        }
        .gallery-cell:hover {
          transform: scale(1.03);
          transition: transform 0.3s ease;
        }
        .testimonial-card {
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
          border-color: #D4871E !important;
        }
        .rule-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, #D4871E 20%, #D4871E 80%, transparent);
          position: relative;
        }
        .rule-line::before, .rule-line::after {
          content: '';
          position: absolute;
          top: -3px;
          width: 8px;
          height: 8px;
          background: #D4871E;
          border-radius: 50%;
        }
        .rule-line::before { left: 15%; }
        .rule-line::after { right: 15%; }
        @media (max-width: 768px) {
          .comparison-scroll { overflow-x: auto; }
        }
      `}</style>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0D]/95 backdrop-blur-sm border-b border-[#2E2C28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="font-bebas text-2xl tracking-wider">
            <span className="text-[#D4871E]">CRV</span>
            <span className="text-[#F5F0E8] ml-1">Construction</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#A09880]">
            <a href="#offerings" className="hover:text-[#D4871E] transition-colors">Services</a>
            <a href="#process" className="hover:text-[#D4871E] transition-colors">Process</a>
            <a href="#social_proof" className="hover:text-[#D4871E] transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-[#D4871E] transition-colors">FAQ</a>
          </nav>
          <a
            href="#lead_form"
            className="shimmer-btn bg-[#D4871E] text-[#0F0F0D] font-semibold text-sm px-5 py-2 rounded-md hover:bg-[#e8982a] transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </header>

      <main className="pt-16">

        {/* HERO */}
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
          {/* Amber orb top-right */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{background: 'radial-gradient(circle at 70% 30%, rgba(212,135,30,0.18) 0%, transparent 70%)'}} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
              {/* Left copy */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#1A1916] border border-[#2E2C28] rounded-full px-4 py-1.5 mb-6">
                  <Star size={14} className="text-[#D4871E] fill-[#D4871E]" />
                  <span className="text-xs text-[#A09880] font-medium">4.9 / 5.0 — 219 Verified Reviews</span>
                </div>
                <h1 className="font-bebas text-[56px] sm:text-[72px] lg:text-[80px] leading-none tracking-wide mb-6">
                  Built Right.<br />
                  Built to Last.<br />
                  <span className="text-[#D4871E]">Built in McAllen.</span>
                </h1>
                <p className="text-[#A09880] text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
                  General contracting, remodeling, and custom builds — residential and commercial — delivered with 4.9-star precision.
                </p>
                {/* Inline phone capture */}
                <form onSubmit={handleHeroSubmit} className="flex flex-col sm:flex-row gap-3 mb-8 max-w-lg">
                  <input
                    type="tel"
                    value={heroPhone}
                    onChange={e => setHeroPhone(e.target.value)}
                    placeholder="Your phone number"
                    className="flex-1 bg-[#1A1916] border border-[#2E2C28] rounded-md px-4 py-3 text-[#F5F0E8] placeholder-[#A09880] focus:outline-none focus:border-[#D4871E] transition-colors text-sm"
                  />
                  <button
                    type="submit"
                    className="shimmer-btn bg-[#D4871E] text-[#0F0F0D] font-bold px-6 py-3 rounded-md hover:bg-[#e8982a] transition-colors text-sm whitespace-nowrap"
                  >
                    Request Free Estimate
                  </button>
                </form>
                {/* Trust pills */}
                <div className="flex flex-wrap gap-2">
                  {[
                    '⭐ 4.9 / 5.0 — 219 Reviews',
                    'Licensed & Insured in Texas',
                    'Residential + Commercial',
                    'McAllen & Rio Grande Valley',
                  ].map(pill => (
                    <span key={pill} className="bg-[#1A1916] border border-[#2E2C28] text-[#A09880] text-xs px-3 py-1.5 rounded-full">{pill}</span>
                  ))}
                </div>
              </div>
              {/* Right visual */}
              <div className="relative hidden lg:block">
                <div className="relative rounded-md overflow-hidden" style={{height: '520px'}}>
                  {/* Blueprint dot grid bg */}
                  <div className="absolute inset-0 dot-grid opacity-30" />
                  {/* Building facade panels */}
                  <div className="absolute inset-0 flex flex-col gap-3 p-6">
                    <div className="flex-1 rounded-md bg-[#1A1916] border border-[#2E2C28] relative overflow-hidden">
                      <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, #1A1916 0%, #231f17 100%)'}} />
                      {/* Window grid */}
                      <div className="absolute inset-0 grid grid-cols-4 gap-2 p-4">
                        {Array.from({length: 8}).map((_, i) => (
                          <div key={i} className="rounded-sm border border-[#D4871E]/30 bg-[#D4871E]/5" />
                        ))}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4871E]/60" />
                    </div>
                    <div className="h-28 rounded-md bg-[#231e14] border border-[#3a2e1a] relative overflow-hidden">
                      <div className="absolute inset-0 grid grid-cols-6 gap-2 p-3">
                        {Array.from({length: 6}).map((_, i) => (
                          <div key={i} className="rounded-sm border border-[#D4871E]/40 bg-[#D4871E]/8" />
                        ))}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4871E]/80" />
                    </div>
                    <div className="h-20 rounded-md bg-[#1f1a10] border border-[#2E2C28] relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-around px-4">
                        {Array.from({length: 5}).map((_, i) => (
                          <div key={i} className="w-8 h-10 rounded-sm border border-[#D4871E]/50 bg-[#D4871E]/10" />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 bg-[#D4871E] text-[#0F0F0D] rounded-md px-4 py-3 flex items-center gap-3 shadow-2xl">
                    <div>
                      <div className="font-bebas text-2xl leading-none">4.9★</div>
                      <div className="text-xs font-bold leading-none mt-0.5">219 Reviews</div>
                    </div>
                    <div className="w-px h-8 bg-[#0F0F0D]/30" />
                    <div className="text-xs font-semibold">Google<br />Verified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Measurement rule divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rule-line" />
        </div>

        {/* TRUST BAR */}
        <section id="trust_bar" className="bg-[#1A1916] border-y border-[#2E2C28] py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-y-4 divide-x-0 md:divide-x divide-[#2E2C28]">
              {[
                { icon: <ShieldCheck size={18} />, text: 'Licensed & Insured TX' },
                { icon: <Star size={18} />, text: '4.9 Stars Avg Rating' },
                { icon: <Users size={18} />, text: '219 Verified Reviews' },
                { icon: <Building2 size={18} />, text: 'Residential & Commercial' },
                { icon: <MapPin size={18} />, text: 'McAllen, TX — Local Builders' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-5 py-1">
                  <span className="text-[#D4871E]">{item.icon}</span>
                  <span className="text-[#A09880] text-sm font-medium whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section id="metrics" className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-20" />
          {/* Amber orb */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(212,135,30,0.1) 0%, transparent 70%)'}} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide mb-3">Numbers That Build Confidence</h2>
              <p className="text-[#A09880] text-lg max-w-xl mx-auto">Every project is a reputation on the line. Here's what ours looks like.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: '219+', label: 'Verified 5-Star Reviews' },
                { num: '4.9★', label: 'Average Client Rating' },
                { num: '15+', label: 'Years Building in South Texas' },
                { num: '500+', label: 'Projects Delivered' },
              ].map((m, i) => (
                <div key={i} className="bg-[#1A1916] border border-[#2E2C28] rounded-md p-6 relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#D4871E]" />
                  <div className="absolute inset-0 dot-grid opacity-30" />
                  <div className="relative">
                    <div className="font-bebas text-[56px] sm:text-[64px] leading-none text-[#D4871E] mb-2">{m.num}</div>
                    <div className="text-[#A09880] text-sm leading-snug">{m.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rule-line" />
        </div>

        {/* OFFERINGS */}
        <section id="offerings" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide mb-3">What We Build</h2>
              <p className="text-[#A09880] text-lg max-w-xl mx-auto">One contractor. Every scope. No subcontracted surprises.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offerings.map((o, i) => (
                <div
                  key={i}
                  className={`relative rounded-md p-7 flex flex-col ${
                    o.highlighted
                      ? 'bg-[#1A1916] border-2 border-[#D4871E] shadow-[0_0_40px_rgba(212,135,30,0.15)]'
                      : 'bg-[#1A1916] border border-[#2E2C28]'
                  }`}
                >
                  {o.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4871E] text-[#0F0F0D] text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <div className={`mb-4 ${o.highlighted ? 'text-[#D4871E]' : 'text-[#A09880]'}`}>{o.icon}</div>
                  <h3 className="font-bebas text-3xl tracking-wide mb-1">{o.title}</h3>
                  <p className="text-[#A09880] text-sm mb-5 leading-snug">{o.hook}</p>
                  <ul className="flex-1 space-y-2.5 mb-6">
                    {o.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-sm text-[#F5F0E8]">
                        <Check size={15} className="text-[#D4871E] mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#lead_form"
                    className={`shimmer-btn text-center font-semibold text-sm py-3 px-5 rounded-md transition-colors ${
                      o.highlighted
                        ? 'bg-[#D4871E] text-[#0F0F0D] hover:bg-[#e8982a]'
                        : 'bg-transparent border border-[#D4871E] text-[#D4871E] hover:bg-[#D4871E]/10'
                    }`}
                  >
                    {o.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rule-line" />
        </div>

        {/* PROCESS */}
        <section id="process" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at 0% 50%, rgba(212,135,30,0.07) 0%, transparent 60%)'}} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide mb-3">How We Build With You</h2>
              <p className="text-[#A09880] text-lg max-w-xl mx-auto">A transparent process that keeps you informed from blueprint to final walkthrough.</p>
            </div>
            {/* Desktop horizontal */}
            <div className="hidden md:block relative">
              {/* Connecting line */}
              <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-[#D4871E]/40" />
              <div className="grid grid-cols-4 gap-6">
                {[
                  { num: '01', title: 'Free On-Site Estimate', desc: 'We visit your property, assess scope, and deliver a detailed written quote at no cost.' },
                  { num: '02', title: 'Design & Planning', desc: 'We align on materials, timeline, and budget before a single nail is driven.' },
                  { num: '03', title: 'Construction & Updates', desc: 'Our crew builds while you receive regular progress check-ins.' },
                  { num: '04', title: 'Final Walkthrough & Handoff', desc: "You inspect every detail. We don't leave until you're satisfied." },
                ].map((step, i) => (
                  <div
                    key={i}
                    ref={el => { stepRefs.current[i] = el; }}
                    className="text-center"
                  >
                    <div className={`font-bebas text-[80px] leading-none text-[#D4871E] step-glow ${visibleSteps[i] ? 'active' : ''}`}>
                      {step.num}
                    </div>
                    <h3 className="font-bebas text-xl tracking-wide mb-2 mt-1">{step.title}</h3>
                    <p className="text-[#A09880] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Mobile vertical */}
            <div className="md:hidden relative pl-12">
              <div className="absolute left-4 top-0 bottom-0 w-px border-l-2 border-dashed border-[#D4871E]/40" />
              <div className="space-y-10">
                {[
                  { num: '01', title: 'Free On-Site Estimate', desc: 'We visit your property, assess scope, and deliver a detailed written quote at no cost.' },
                  { num: '02', title: 'Design & Planning', desc: 'We align on materials, timeline, and budget before a single nail is driven.' },
                  { num: '03', title: 'Construction & Updates', desc: 'Our crew builds while you receive regular progress check-ins.' },
                  { num: '04', title: 'Final Walkthrough & Handoff', desc: "You inspect every detail. We don't leave until you're satisfied." },
                ].map((step, i) => (
                  <div
                    key={i}
                    ref={el => { stepRefs.current[i] = el; }}
                    className="relative"
                  >
                    <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-[#D4871E] flex items-center justify-center">
                      <span className="font-bebas text-sm text-[#0F0F0D]">{step.num}</span>
                    </div>
                    <div className={`font-bebas text-[56px] leading-none text-[#D4871E] step-glow ${visibleSteps[i] ? 'active' : ''}`}>{step.num}</div>
                    <h3 className="font-bebas text-xl tracking-wide mb-1">{step.title}</h3>
                    <p className="text-[#A09880] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rule-line" />
        </div>

        {/* SOCIAL PROOF */}
        <section id="social_proof" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-15" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            {/* Rating header */}
            <div className="text-center mb-12">
              <div className="font-bebas text-[80px] sm:text-[100px] leading-none text-[#D4871E] mb-2">4.9★</div>
              <div className="flex justify-center gap-1 mb-3">
                {Array.from({length: 5}).map((_, i) => (
                  <Star key={i} size={24} className="text-[#D4871E] fill-[#D4871E]" />
                ))}
              </div>
              <div className="text-[#A09880] text-lg">219 Google Reviews</div>
              <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide mt-4 mb-2">What McAllen Is Saying</h2>
              <p className="text-[#A09880]">219 reviews. 4.9 stars. Real clients. Real projects.</p>
            </div>
            {/* Masonry grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="testimonial-card break-inside-avoid bg-[#1A1916] border border-[#2E2C28] rounded-md p-6 relative"
                  style={{borderLeft: '3px solid #2E2C28'}}
                  onMouseEnter={e => (e.currentTarget.style.borderLeftColor = '#D4871E')}
                  onMouseLeave={e => (e.currentTarget.style.borderLeftColor = '#2E2C28')}
                >
                  <Quote size={28} className="text-[#D4871E] mb-3" />
                  <div className="text-xs text-[#D4871E] font-semibold mb-2 uppercase tracking-wider">{t.metric}</div>
                  <p className="text-[#F5F0E8] text-sm leading-relaxed mb-4">{t.quote}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({length: 5}).map((_, si) => (
                        <Star key={si} size={12} className="text-[#D4871E] fill-[#D4871E]" />
                      ))}
                    </div>
                    <span className="text-[#A09880] text-xs">{t.attribution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rule-line" />
        </div>

        {/* PHYSICAL PROOF / GALLERY */}
        <section id="physical_proof" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide mb-3">Built By CRV</h2>
              <p className="text-[#A09880] text-lg max-w-xl mx-auto">From slab to roofline — a portfolio of work that speaks for itself.</p>
            </div>
            {/* Gallery grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3" style={{gridTemplateRows: 'repeat(2, 200px)'}}>
              {/* Large cell 1 */}
              <div
                className={`gallery-cell rounded-md row-span-2 bg-gradient-to-br ${galleryItems[0].gradient} border border-[#2E2C28] cursor-pointer`}
                style={{minHeight: '200px'}}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-[#D4871E]/60">{galleryItems[0].icon}</div>
                  <div className="font-bebas text-lg tracking-wider mt-3 text-[#A09880]">{galleryItems[0].label}</div>
                </div>
                <div className="overlay rounded-md">
                  <div className="font-bebas text-2xl text-[#0F0F0D] bg-[#D4871E] px-4 py-2 rounded-md">{galleryItems[0].label}</div>
                </div>
              </div>
              {/* Large cell 2 */}
              <div
                className={`gallery-cell rounded-md row-span-2 bg-gradient-to-br ${galleryItems[1].gradient} border border-[#2E2C28] cursor-pointer col-start-2`}
                style={{minHeight: '200px'}}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-[#D4871E]/60">{galleryItems[1].icon}</div>
                  <div className="font-bebas text-lg tracking-wider mt-3 text-[#A09880]">{galleryItems[1].label}</div>
                </div>
                <div className="overlay rounded-md">
                  <div className="font-bebas text-2xl text-[#0F0F0D] bg-[#D4871E] px-4 py-2 rounded-md">{galleryItems[1].label}</div>
                </div>
              </div>
              {/* Small cells */}
              {galleryItems.slice(2).map((item, i) => (
                <div
                  key={i}
                  className={`gallery-cell rounded-md bg-gradient-to-br ${item.gradient} border border-[#2E2C28] cursor-pointer`}
                  style={{height: '200px'}}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-[#D4871E]/60">{item.icon}</div>
                    <div className="font-bebas text-base tracking-wider mt-2 text-[#A09880]">{item.label}</div>
                  </div>
                  <div className="overlay rounded-md">
                    <div className="font-bebas text-xl text-[#0F0F0D] bg-[#D4871E] px-3 py-1.5 rounded-md text-center">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href="#lead_form" className="shimmer-btn inline-flex items-center gap-2 bg-[#D4871E] text-[#0F0F0D] font-bold px-8 py-3 rounded-md hover:bg-[#e8982a] transition-colors">
                Start Your Project <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rule-line" />
        </div>

        {/* COMPARISON */}
        <section id="comparison" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at 100% 100%, rgba(212,135,30,0.08) 0%, transparent 60%)'}} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide mb-3">CRV vs. The Other Guys</h2>
              <p className="text-[#A09880] text-lg">Not all contractors are built equal. Here's the difference.</p>
            </div>
            <div className="comparison-scroll">
              <div className="min-w-[540px] bg-[#1A1916] border border-[#2E2C28] rounded-md overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-[2fr_1fr_1fr]">
                  <div className="p-4 border-b border-r border-[#2E2C28]" />
                  <div className="p-4 border-b border-r border-[#2E2C28] text-center">
                    <div className="font-bebas text-xl text-[#D4871E] flex items-center justify-center gap-2">
                      <Check size={16} /> CRV Construction
                    </div>
                  </div>
                  <div className="p-4 border-b border-[#2E2C28] text-center">
                    <div className="font-bebas text-xl text-[#A09880] flex items-center justify-center gap-2">
                      <X size={16} /> Typical Contractor
                    </div>
                  </div>
                </div>
                {comparisonRows.map((row, i) => (
                  <div key={i} className={`grid grid-cols-[2fr_1fr_1fr] ${i % 2 === 0 ? 'bg-[#1A1916]' : 'bg-[#1f1d19]'}`}>
                    <div className="p-4 border-r border-[#2E2C28] text-sm text-[#F5F0E8] flex items-center">{row[0]}</div>
                    <div className="p-4 border-r border-[#2E2C28] flex items-center justify-center">
                      <div className="flex items-center gap-1.5 text-sm text-[#D4871E] font-medium">
                        <Check size={16} className="text-[#D4871E]" />
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-center">
                      <X size={16} className="text-[#A09880]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="#lead_form" className="shimmer-btn inline-flex items-center gap-2 bg-[#D4871E] text-[#0F0F0D] font-bold px-8 py-3 rounded-md hover:bg-[#e8982a] transition-colors">
                Choose CRV <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rule-line" />
        </div>

        {/* FAQ */}
        <section id="faq" className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide mb-3">Straight Answers to Real Questions</h2>
              <p className="text-[#A09880] text-lg">No runaround. Here's what our clients actually ask before signing.</p>
            </div>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`bg-[#1A1916] border rounded-md overflow-hidden transition-all ${
                    openFaq === i ? 'border-[#D4871E]' : 'border-[#2E2C28]'
                  }`}
                  style={openFaq === i ? {borderLeft: '3px solid #D4871E'} : {borderLeft: '3px solid #2E2C28'}}
                >
                  <button
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium text-[#F5F0E8] text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-[#D4871E] shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-[#A09880] text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rule-line" />
        </div>

        {/* GUARANTEE */}
        <section id="guarantee" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at 50% 50%, rgba(212,135,30,0.07) 0%, transparent 70%)'}} />
          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <div className="bg-[#1A1916] border-2 border-[#D4871E] rounded-md p-10 shadow-[0_0_60px_rgba(212,135,30,0.12)]">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 rounded-full bg-[#D4871E]/15 border border-[#D4871E] flex items-center justify-center">
                  <ShieldCheck size={32} className="text-[#D4871E]" />
                </div>
              </div>
              <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide mb-2">The CRV Quality Guarantee</h2>
              <p className="text-[#A09880] mb-8">We don't just build structures — we build trust.</p>
              <div className="space-y-5 text-left mb-8">
                {[
                  'We show up on schedule — or we communicate before we don't.',
                  'Written quotes — what we say is what you pay. No hidden fees.',
                  'Final walkthrough sign-off — you approve before we close out.',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#D4871E] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-[#0F0F0D]" />
                    </div>
                    <p className="text-[#F5F0E8] text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <a
                href="#lead_form"
                className="shimmer-btn inline-flex items-center gap-2 bg-[#D4871E] text-[#0F0F0D] font-bold px-8 py-3.5 rounded-md hover:bg-[#e8982a] transition-colors"
              >
                Hold Us To It — Get a Quote <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rule-line" />
        </div>

        {/* LEAD FORM */}
        <section id="lead_form" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-15" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide mb-3">Get Your Free On-Site Estimate</h2>
              <p className="text-[#A09880] text-lg">Tell us about your project. We'll come to you — no commitment required.</p>
              <p className="text-[#D4871E] text-sm mt-2 font-medium">We schedule estimates on a first-come basis — get yours locked in.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
              {/* Form */}
              <div className="bg-[#1A1916] border border-[#2E2C28] rounded-md p-8">
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#A09880] uppercase tracking-wider mb-2">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={e => setFormData({...formData, firstName: e.target.value})}
                        placeholder="Your first name"
                        className="w-full bg-[#0F0F0D] border border-[#2E2C28] rounded-md px-4 py-3 text-[#F5F0E8] placeholder-[#A09880]/60 focus:outline-none focus:border-[#D4871E] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#A09880] uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        placeholder="(956) 000-0000"
                        className="w-full bg-[#0F0F0D] border border-[#2E2C28] rounded-md px-4 py-3 text-[#F5F0E8] placeholder-[#A09880]/60 focus:outline-none focus:border-[#D4871E] transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#A09880] uppercase tracking-wider mb-2">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={e => setFormData({...formData, projectType: e.target.value})}
                      className="w-full bg-[#0F0F0D] border border-[#2E2C28] rounded-md px-4 py-3 text-[#F5F0E8] focus:outline-none focus:border-[#D4871E] transition-colors text-sm appearance-none"
                    >
                      <option value="" disabled>Select project type</option>
                      <option value="General Contracting">General Contracting</option>
                      <option value="Remodeling">Remodeling</option>
                      <option value="Custom Build">Custom Build</option>
                      <option value="Other">Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#A09880] uppercase tracking-wider mb-2">Tell Us About Your Project</label>
                    <textarea
                      value={formData.description}
                      onChange={e => setFormData({...formData, description: e.target.value})}
                      placeholder="Brief description of your project, timeline, and location..."
                      rows={4}
                      className="w-full bg-[#0F0F0D] border border-[#2E2C28] rounded-md px-4 py-3 text-[#F5F0E8] placeholder-[#A09880]/60 focus:outline-none focus:border-[#D4871E] transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="shimmer-btn w-full bg-[#D4871E] text-[#0F0F0D] font-bold py-4 rounded-md hover:bg-[#e8982a] transition-colors text-base"
                  >
                    Send My Project Details
                  </button>
                  <p className="text-[#A09880] text-xs text-center leading-relaxed">
                    No commitment required. We'll reach out within 1 business day to schedule your free on-site visit.
                  </p>
                </form>
              </div>
              {/* Right contact info */}
              <div className="space-y-5">
                <div className="bg-[#1A1916] border border-[#2E2C28] rounded-md p-6">
                  <h3 className="font-bebas text-2xl tracking-wide mb-5 text-[#D4871E]">Reach Us Directly</h3>
                  <div className="space-y-4">
                    <a href="tel:9564670455" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-md bg-[#D4871E]/15 border border-[#D4871E]/30 flex items-center justify-center">
                        <Phone size={18} className="text-[#D4871E]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#A09880] uppercase tracking-wider">Phone</div>
                        <div className="text-[#F5F0E8] font-semibold group-hover:text-[#D4871E] transition-colors">(956) 467-0455</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-md bg-[#D4871E]/15 border border-[#D4871E]/30 flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-[#D4871E]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#A09880] uppercase tracking-wider">Address</div>
                        <div className="text-[#F5F0E8] text-sm leading-snug">2212 Primrose Ave W C<br />McAllen, TX 78504</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Rating box */}
                <div className="bg-[#1A1916] border-2 border-[#D4871E] rounded-md p-6 text-center">
                  <div className="font-bebas text-5xl text-[#D4871E] mb-1">4.9★</div>
                  <div className="flex justify-center gap-1 mb-2">
                    {Array.from({length: 5}).map((_, i) => (
                      <Star key={i} size={16} className="text-[#D4871E] fill-[#D4871E]" />
                    ))}
                  </div>
                  <div className="text-[#A09880] text-sm">219 Verified Google Reviews</div>
                  <div className="mt-3 text-xs text-[#F5F0E8] font-medium">McAllen's Most Trusted Contractor</div>
                </div>
                <div className="bg-[#1A1916] border border-[#2E2C28] rounded-md p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck size={18} className="text-[#D4871E]" />
                    <span className="text-sm font-semibold text-[#F5F0E8]">Licensed & Insured in Texas</span>
                  </div>
                  <p className="text-[#A09880] text-xs leading-relaxed">All permits pulled. All work code-compliant. Your property is protected from day one to final sign-off.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0F0F0D] border-t border-[#2E2C28] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="font-bebas text-3xl tracking-wider mb-3">
                <span className="text-[#D4871E]">CRV</span>
                <span className="text-[#F5F0E8] ml-1">Construction</span>
              </div>
              <p className="text-[#A09880] text-sm leading-relaxed max-w-xs">
                McAllen's trusted general contractor for residential and commercial builds since day one.
              </p>
              <div className="flex items-center gap-1.5 mt-4">
                {Array.from({length: 5}).map((_, i) => (
                  <Star key={i} size={14} className="text-[#D4871E] fill-[#D4871E]" />
                ))}
                <span className="text-[#A09880] text-xs ml-1">4.9 / 219 reviews</span>
              </div>
            </div>
            {/* Services */}
            <div>
              <h4 className="font-bebas text-xl tracking-wide text-[#F5F0E8] mb-4">Services</h4>
              <ul className="space-y-2">
                {['General Contracting', 'Custom Home Builds', 'Remodeling & Renovation', 'Commercial Construction'].map(s => (
                  <li key={s}><a href="#offerings" className="text-[#A09880] text-sm hover:text-[#D4871E] transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            {/* Service Area */}
            <div>
              <h4 className="font-bebas text-xl tracking-wide text-[#F5F0E8] mb-4">Service Area</h4>
              <ul className="space-y-2">
                {['McAllen', 'Edinburg', 'Mission', 'Pharr', 'Harlingen', 'Rio Grande Valley'].map(a => (
                  <li key={a} className="text-[#A09880] text-sm">{a}</li>
                ))}
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h4 className="font-bebas text-xl tracking-wide text-[#F5F0E8] mb-4">Contact</h4>
              <div className="space-y-3">
                <a href="tel:9564670455" className="flex items-center gap-2 text-[#A09880] text-sm hover:text-[#D4871E] transition-colors">
                  <Phone size={14} className="text-[#D4871E]" />
                  (956) 467-0455
                </a>
                <div className="flex items-start gap-2 text-[#A09880] text-sm">
                  <MapPin size={14} className="text-[#D4871E] mt-0.5 shrink-0" />
                  <span>2212 Primrose Ave W C<br />McAllen, TX 78504</span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="border-t border-[#2E2C28] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[#A09880] text-xs">© {new Date().getFullYear()} CRV Construction. All rights reserved.</p>
            <div className="flex items-center gap-2 bg-[#1A1916] border border-[#2E2C28] rounded-full px-4 py-1.5">
              <ShieldCheck size={13} className="text-[#D4871E]" />
              <span className="text-[#A09880] text-xs">Licensed & Insured in Texas</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
