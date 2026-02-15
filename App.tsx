import React from 'react';
import { 
  Globe, 
  Target, 
  Megaphone, 
  UserCheck, 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Calendar, 
  FileText, 
  Search 
} from 'lucide-react';

// --- Reusable Components ---

const Button = ({ children, variant = 'primary', className = '' }: { children?: React.ReactNode, variant?: 'primary' | 'secondary', className?: string }) => {
  const baseStyles = "px-8 py-4 rounded-lg font-extrabold flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md";
  const variants = {
    // Ensuring high contrast: Dark navy text on bright yellow background
    primary: "bg-accent text-navy hover:bg-yellow-500",
    secondary: "bg-white text-navy border border-gray-200 hover:border-accent"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeading = ({ children, className = '' }: { children?: React.ReactNode, className?: string }) => (
  <h2 className={`text-3xl md:text-5xl font-black text-center text-navy mb-16 tracking-tight ${className}`}>
    {children}
  </h2>
);

// --- Page Sections ---

const Hero = () => (
  <section className="bg-navy text-white pt-24 pb-32 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <div className="flex flex-wrap justify-center gap-2 mb-8 text-xs font-bold tracking-widest uppercase text-gray-400">
        <span>Cisco</span>
        <span>•</span>
        <span>ASER Experience</span>
        <span>•</span>
        <span>Expo & Global Event Coverage</span>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
        Get Featured in Global Tier-1 <br className="hidden md:block" />
        Media Without PR Agency <br className="hidden md:block" />
        Retainers
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed tracking-wide font-medium">
        Strategic press release distribution and media placement across global publications — helping founders, startups, and brands build authority fast.
      </p>
      <div className="flex justify-center">
        <Button>
          Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  </section>
);

const Logos = () => {
  // Ordered as per the layout
  const row1 = ["Forbes", "TechCrunch", "Yahoo Finance", "Business Insider", "Bloomberg"];
  const row2 = ["Reuters", "Associated Press", "MarketWatch"];
  
  return (
    <section className="py-20 bg-gray-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-black text-navy text-center mb-16 tracking-tight">
          Trusted Distribution Across Leading Global Media Platforms
        </h3>
        
        {/* Row 1: 5 Columns on Large */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mb-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {row1.map(p => (
            <div key={p} className="text-center font-bold text-lg md:text-xl text-gray-700 hover:text-navy cursor-default">
              {p}
            </div>
          ))}
        </div>
        
        {/* Row 2: Centered group for the remaining 3 */}
        <div className="flex flex-wrap justify-center gap-x-12 md:gap-x-20 gap-y-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {row2.map(p => (
            <div key={p} className="text-center font-bold text-lg md:text-xl text-gray-700 hover:text-navy cursor-default">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
      <div className="relative group">
        <div className="w-full aspect-square bg-navy flex items-center justify-center text-accent text-7xl font-bold rounded-2xl shadow-2xl overflow-hidden">
          <span className="group-hover:scale-110 transition-transform duration-500">AG</span>
        </div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      <div>
        <h2 className="text-4xl font-black text-navy mb-2 tracking-tight">Meet Ankit Gautam</h2>
        <p className="text-lg font-bold text-gray-500 mb-8 uppercase tracking-widest">
          Global Press Release & Media Placement Specialist
        </p>
        <div className="space-y-6 text-slate-900 leading-relaxed tracking-wide text-lg font-medium">
          <p>
            With extensive experience in global PR distribution, I help startups and established brands achieve strategic media visibility across international digital channels.
          </p>
          <p>
            My background includes work with major technology companies like Cisco and ASER, where I developed a deep understanding of corporate communications and media strategy.
          </p>
          <p>
            Through attendance at multiple international expos and direct connections with founders worldwide, I've built a comprehensive network for media placement and brand amplification.
          </p>
          <p>
            My approach focuses on strategic positioning over volume, ensuring every press release and media placement serves your broader business objectives.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {['Cisco', 'ASER', 'Global PR Networks', 'International Expos'].map(tag => (
            <span key={tag} className="px-5 py-2.5 bg-slate-100 text-navy font-black text-xs uppercase tracking-wider rounded-full border border-slate-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const serviceList = [
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Global Press Release Distribution",
      desc: "Strategic distribution across 300+ global media channels with targeted placement in your industry verticals."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Tier-1 Media Placement Strategy",
      desc: "Secure coverage in top-tier publications through relationship-driven pitching and newsworthy angle development."
    },
    {
      icon: <Megaphone className="w-8 h-8 text-accent" />,
      title: "Event & Expo Media Amplification",
      desc: "Turn conference appearances and product launches into sustained media visibility and thought leadership."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-accent" />,
      title: "Founder Branding & Authority Building",
      desc: "Position executives as industry experts through strategic media presence and consistent messaging."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>Strategic Media Visibility Services</SectionHeading>
        <div className="grid md:grid-cols-2 gap-8">
          {serviceList.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-navy p-4 rounded-xl inline-block mb-6 shadow-md">
                {s.icon}
              </div>
              <h3 className="text-2xl font-black text-navy mb-4 tracking-tight">{s.title}</h3>
              <p className="text-slate-800 mb-8 leading-relaxed tracking-wide font-medium">{s.desc}</p>
              <a href="#" className="inline-flex items-center text-navy font-black hover:text-accent transition-colors uppercase text-sm tracking-wider">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const cases = [
    {
      client: "SaaS Founder - Project Management Platform",
      challenge: "New product launch needed global visibility to attract early adopters and investors.",
      result: "Featured across 50+ high-authority publications including major tech and business outlets. 300% increase in website traffic and 5 investor meetings within 30 days.",
      stats: [
        { label: "PLACEMENTS", val: "50+" },
        { label: "REACH", val: "15M+" },
        { label: "TRAFFIC", val: "+300%" }
      ]
    },
    {
      client: "EdTech Startup - Learning Platform",
      challenge: "Post-expo visibility needed to capitalize on event momentum and establish market presence.",
      result: "Secured coverage in education technology publications and mainstream business media. Generated qualified B2B leads and partnership inquiries.",
      stats: [
        { label: "PLACEMENTS", val: "35+" },
        { label: "REACH", val: "8M+" },
        { label: "LEADS", val: "120+" }
      ]
    },
    {
      client: "FinTech Company - Payment Solutions",
      challenge: "Entering new markets required credibility and brand recognition in financial services sector.",
      result: "Strategic placement in finance and technology media created trust signals for enterprise prospects. Contributed to 2 major partnership agreements.",
      stats: [
        { label: "PLACEMENTS", val: "40+" },
        { label: "REACH", val: "12M+" },
        { label: "PARTNERSHIPS", val: "2" }
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>Real Media Visibility. Real Outcomes.</SectionHeading>
        <div className="space-y-16">
          {cases.map((c, i) => (
            <div key={i} className="border-2 border-slate-100 rounded-[2.5rem] p-8 md:p-14 bg-white shadow-xl">
              <h3 className="text-3xl font-black text-navy mb-12 tracking-tight">{c.client}</h3>
              <div className="grid md:grid-cols-2 gap-16 mb-12">
                <div>
                  <p className="text-sm font-black text-navy uppercase tracking-widest mb-4 opacity-80">CHALLENGE</p>
                  <p className="text-slate-950 leading-relaxed tracking-wide font-semibold text-xl">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-black text-navy uppercase tracking-widest mb-4 opacity-80">RESULT</p>
                  <p className="text-slate-950 leading-relaxed tracking-wide font-semibold text-xl">{c.result}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-12 border-t border-slate-100">
                {c.stats.map((s, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl md:text-5xl font-black text-navy mb-2">{s.val}</div>
                    <div className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24 flex justify-start pl-4 md:pl-0">
          <Button>Book Your Strategy Call <ArrowRight className="ml-2 w-5 h-5" /></Button>
        </div>
      </div>
    </section>
  );
};

const ExpoEvents = () => {
  const events = [
    { year: '2024', name: 'Web Summit Lisbon', desc: 'Provided media coverage and press release distribution for attending startups', help: 'Helped 15+ founders achieve event-related media visibility' },
    { year: '2024', name: 'TechCrunch Disrupt', desc: 'Connected with founders and facilitated post-event media amplification', help: 'Secured coverage for multiple participating companies' },
    { year: '2023', name: 'CES Las Vegas', desc: 'Media strategy consulting for technology product launches', help: 'Coordinated press releases timing with event announcements' },
    { year: '2023', name: 'SXSW Austin', desc: 'PR support for emerging startups in interactive and music tech', help: 'Generated sustained media coverage beyond event dates' }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>Global Expo & Event Experience</SectionHeading>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((e, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all">
              <div className="inline-block px-4 py-1.5 bg-accent/30 text-navy text-xs font-black rounded-lg mb-6 uppercase tracking-wider">
                {e.year}
              </div>
              <h3 className="text-2xl font-black text-navy mb-4 tracking-tight">{e.name}</h3>
              <p className="text-slate-700 mb-6 leading-relaxed tracking-wide font-medium">{e.desc}</p>
              <p className="text-slate-500 text-sm font-semibold italic border-l-4 border-accent pl-6 py-1 bg-slate-50 rounded-r-xl leading-relaxed tracking-wide">
                {e.help}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { num: '01', icon: <Calendar className="w-6 h-6" />, title: 'Book Strategy Call', desc: 'We discuss your goals, target audience, and media objectives to determine the right approach.' },
    { num: '02', icon: <FileText className="w-6 h-6" />, title: 'Media Planning', desc: 'I develop your media strategy, craft compelling angles, and identify optimal outlets for placement.' },
    { num: '03', icon: <Megaphone className="w-6 h-6" />, title: 'Distribution', desc: 'Strategic press release distribution and direct pitching to targeted media networks for coverage.' },
    { num: '04', icon: <Search className="w-6 h-6" />, title: 'Amplification', desc: 'Comprehensive coverage reports with links, metrics, and guidance on amplifying results across channels.' }
  ];

  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>How It Works</SectionHeading>
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="text-8xl font-black text-slate-100 absolute -top-12 -left-4 -z-10 group-hover:text-accent/10 transition-colors">
                {s.num}
              </div>
              <div className="bg-navy w-14 h-14 rounded-2xl flex items-center justify-center text-accent mb-8 shadow-xl">
                {s.icon}
              </div>
              <h3 className="text-xl font-black text-navy mb-4 tracking-tight">{s.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed tracking-wide">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="bg-navy py-32 px-4 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Ready to Get Your Brand Featured?</h2>
      <p className="text-xl md:text-2xl text-gray-400 mb-16 font-medium leading-relaxed tracking-wide">Let's map the right media strategy for your goals.</p>
      <div className="flex flex-col items-center">
        <Button className="w-full md:w-auto mb-8 px-12 py-5 text-xl">
          Schedule Consultation <ArrowRight className="ml-3 w-6 h-6" />
        </Button>
        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest leading-relaxed">Serious inquiries only — focused strategy discussions.</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-navy border-t border-white/5 pt-24 pb-12 px-4 text-white">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 mb-20">
      <div>
        <h3 className="text-2xl font-black mb-6 tracking-tight">Ankit Gautam</h3>
        <p className="text-gray-400 leading-relaxed tracking-wide font-medium max-w-sm">
          Ankit Gautam specializes in global press release distribution and media placement, helping startups and brands achieve strategic visibility in tier-1 publications.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Connect</h4>
        <div className="space-y-6">
          <a href="#" className="flex items-center text-gray-400 hover:text-white transition-all font-bold group">
            <Mail className="w-5 h-5 mr-4 text-accent group-hover:scale-110 transition-transform" /> Email
          </a>
          <a href="#" className="flex items-center text-gray-400 hover:text-white transition-all font-bold group">
            <Linkedin className="w-5 h-5 mr-4 text-accent group-hover:scale-110 transition-transform" /> LinkedIn
          </a>
          <a href="#" className="flex items-center text-gray-400 hover:text-white transition-all font-bold group">
            <Calendar className="w-5 h-5 mr-4 text-accent group-hover:scale-110 transition-transform" /> Schedule Call
          </a>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto pt-10 border-t border-white/5 text-center text-xs font-bold text-gray-600 uppercase tracking-widest">
      © {new Date().getFullYear()} Ankit Gautam. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Logos />
      <About />
      <Services />
      <Results />
      <ExpoEvents />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </div>
  );
}
