import React, { useState, useEffect } from "react";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Sparkles, 
  CheckCircle, 
  Compass,
  ExternalLink,
  BookOpen
} from "lucide-react";
import { GrowthAreaArea, GrowthProject } from "./Growth";

interface GrowthDetailViewProps {
  area: GrowthAreaArea;
  projects: GrowthProject[];
  onBack: () => void;
}

export default function GrowthDetailView({ area, projects, onBack }: GrowthDetailViewProps) {
  const [activeProject, setActiveProject] = useState<GrowthProject>(projects[0] || {
    id: "default",
    title: area.subtitle,
    category: "Commercial",
    location: area.description,
    growthAreaId: area.id,
    year: "Active Corridor",
    description: area.keyFocus,
    image: "/FILLERS/SAULOGBG.png",
    features: area.keyProjects,
    impactStat: { value: "5 Corridors", label: "Strategic Vision" },
    mapsUrl: "https://maps.google.com"
  });

  const [activeImage, setActiveImage] = useState<string>(activeProject?.image || "/FILLERS/SAULOGBG.png");
  const [activeTab, setActiveTab] = useState<"chronicles" | "features" | "guide">("chronicles");

  useEffect(() => {
    if (projects.length > 0) {
      setActiveProject(projects[0]);
      setActiveImage(projects[0].image);
    }
  }, [area, projects]);

  return (
    <div className="w-full relative min-h-screen text-left text-[#05461a] bg-[#fbf9f4] pb-16 sm:pb-24" id="growth-detail-view-container">
      {/* Exquisite layered background: fine linen paper texture overlay at subtle opacity */}
      <div 
        className="absolute inset-0 bg-cover pointer-events-none opacity-40 z-0 bg-repeat" 
        style={{ 
          backgroundImage: "url('/FILLERS/lemoonboots-scrapbook-1287354-1.webp')",
          backgroundPosition: "center 30%",
        }}
      />
      
      {/* Top ambient luxury lighting overlay */}
      <div className="absolute top-0 inset-x-0 h-[300px] sm:h-[400px] bg-gradient-to-b from-[#efe9d9]/30 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-12 pt-16 sm:pt-20 lg:pt-22">
        
        {/* Step 1: Premium Cohesive Horizontal Navigation Bar - Responsive Flex Wrap */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#05461a]/10 pb-4 mb-5 sm:mb-8" id="growth-top-navigation-bar">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white border border-[#05461a]/15 text-[#05461a] hover:bg-[#05461a]/5 hover:border-[#05461a]/30 transition-all font-sans text-[10px] sm:text-[11px] font-black uppercase tracking-widest cursor-pointer active:scale-95 shadow-xs min-h-[40px] sm:min-h-[44px]"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#05461a] group-hover:-translate-x-1 transition-transform" /> 
            Back to Exploration
          </button>

          <div className="flex items-center gap-2">
            <span 
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-stone-900 border border-black/10 rounded-full font-sans text-[10px] sm:text-xs uppercase tracking-wider font-black shadow-xs max-w-full truncate"
              style={{ backgroundColor: area.color }}
            >
              <Compass className="w-3.5 h-3.5 text-stone-900 shrink-0 animate-spin-slow" /> 
              <span className="truncate">{area.title} • {area.badge}</span>
            </span>
          </div>
        </div>

        {/* Step 2: Centered Editorial Title block with dynamic ornaments */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-10 max-w-4xl mx-auto px-2" id="growth-title-deck">
          <h1 className="font-sans font-black text-[#05461a] text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-3 sm:mb-4 drop-shadow-xs select-none uppercase">
            {area.subtitle}
          </h1>

          {/* Clean Elegant Tagline */}
          <p className="font-sans text-[#bc923a] text-base sm:text-xl md:text-2xl font-normal leading-relaxed max-w-3xl px-2 italic mb-4 sm:mb-5">
            "{area.keyFocus}"
          </p>

          {/* Green Ornamental Divider Asset */}
          <div className="w-full max-w-[220px] sm:max-w-[360px] flex justify-center mt-1">
            <img 
              src="/FILLERS/divider2-1.png" 
              alt="Lace Divider" 
              className="w-full h-auto max-h-[12px] sm:max-h-[14px] opacity-90 object-contain"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>

        {/* Step 3: High-Fidelity 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start" id="growth-layout-grid">
          
          {/* LEFT COLUMN: Visual Archives Stage (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6" id="growth-visual-archives">
            
            {/* The Luxury Classical Wooden Scrapbook Frame */}
            <div className="relative p-2.5 sm:p-4 rounded-none bg-gradient-to-br from-[#4e2f17] via-[#241308] to-[#391e0a] shadow-[inset_1.5px_1.5px_3px_rgba(255,255,255,0.2),inset_-1.5px_-1.5px_3px_rgba(0,0,0,0.75),6px_8px_24px_rgba(0,0,0,0.35)] border border-[#140a04] w-full">
              {/* Gold/brass fillet inset inlay line */}
              <div className="absolute inset-[3px] border border-[#bc923a]/30 pointer-events-none z-20" />
              <div className="absolute inset-[4px] border border-[#bc923a]/15 pointer-events-none z-20" />
              
              {/* Antique natural mat board inner insert */}
              <div className="bg-[#f2e7c9] p-2.5 sm:p-4 border border-[#140a04]/50 z-10 relative shadow-[inset_1px_1px_4px_rgba(0,0,0,0.35)] w-full">
                {/* Image panel slot */}
                <div className="relative h-[220px] xs:h-[260px] sm:h-[360px] md:h-[420px] w-full overflow-hidden border border-[#241308]/40 flex items-center justify-center bg-[#170c05]/10 rounded-sm">
                  <ImageWithSkeleton
                    key={activeImage}
                    src={activeImage}
                    alt={activeProject.title}
                    className="w-full h-full object-cover filter contrast-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle antique parchment color filter */}
                  <div className="absolute inset-0 bg-[#e89d1b]/2 mix-blend-color-burn pointer-events-none" />

                  {/* Active Project Title Overlay Badge */}
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 bg-black/80 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl text-white text-left border border-white/20">
                    <span className="text-[9px] sm:text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                      {activeProject.category} • {activeProject.location}
                    </span>
                    <h3 className="font-sans font-bold text-xs sm:text-base text-white leading-snug truncate">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Curated Exhibits Thumbnail Drawer selector */}
            <div className="bg-white/90 backdrop-blur-sm border border-emerald-900/10 p-3.5 sm:p-5 rounded-2xl shadow-xs">
              <span className="text-[10px] font-sans text-stone-500 uppercase tracking-widest font-extrabold block mb-2.5 sm:mb-3.5">
                FLAGSHIP BUILDINGS &amp; LANDMARKS ({projects.length} EXHIBITS)
              </span>
              <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 no-scrollbar justify-start touch-pan-x">
                {projects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      setActiveProject(proj);
                      setActiveImage(proj.image);
                    }}
                    className={`relative w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer group text-left ${
                      activeProject.id === proj.id 
                        ? "border-[#05461a] scale-[1.02] shadow-md ring-2 ring-emerald-600/30" 
                        : "border-stone-200/80 opacity-75 hover:opacity-100 hover:border-stone-400"
                    }`}
                  >
                    <ImageWithSkeleton 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                      referrerPolicy="no-referrer" 
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[8px] sm:text-[9px] font-bold text-white leading-tight line-clamp-2">
                      {proj.title}
                    </span>
                    {activeProject.id === proj.id && (
                      <div className="absolute top-1 right-1 bg-[#05461a] text-white p-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Curriculum Vitae Ledger (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6" id="growth-parchment-ledger">
            
            {/* Elegant GPS & Geography Anchor Board */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#05461a]/5 border border-emerald-900/10 backdrop-blur-sm shadow-xs relative overflow-hidden">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5 mb-1 text-stone-500">
                    <Calendar className="w-3.5 h-3.5 text-[#05461a]/70 shrink-0" />
                    <span className="font-sans text-[9px] uppercase tracking-widest font-extrabold">STATUS</span>
                  </div>
                  <span className="text-[#05461a] text-xs sm:text-base font-sans font-bold truncate">{area.badge} Zone</span>
                </div>

                <div className="flex flex-col text-left border-l border-[#05461a]/10 pl-3 sm:pl-4">
                  <div className="flex items-center gap-1.5 mb-1 text-stone-500">
                    <MapPin className="w-3.5 h-3.5 text-[#05461a]/70 shrink-0" />
                    <span className="font-sans text-[9px] uppercase tracking-widest font-extrabold">DISTRICT</span>
                  </div>
                  <span className="text-[#05461a] text-xs sm:text-[13px] font-sans font-bold truncate">{area.description}</span>
                </div>
              </div>
            </div>

            {/* Document Portfolio Journal */}
            <div className="bg-white rounded-2xl border border-emerald-950/10 overflow-hidden shadow-xs flex flex-col font-medium">
              
              {/* Portfolio Tabs Header */}
              <div className="flex border-b border-stone-200 bg-stone-50">
                <button
                  onClick={() => setActiveTab("chronicles")}
                  className={`flex-1 py-3.5 sm:py-4 min-h-[44px] text-[10px] sm:text-xs font-sans tracking-widest uppercase font-black border-b-[3px] transition-all cursor-pointer ${
                    activeTab === "chronicles" 
                      ? "border-[#05461a] text-[#05461a] bg-[#05461a]/5" 
                      : "border-transparent text-gray-400 hover:text-[#05461a]"
                  }`}
                >
                  Chronicles
                </button>
                <button
                  onClick={() => setActiveTab("features")}
                  className={`flex-1 py-3.5 sm:py-4 min-h-[44px] text-[10px] sm:text-xs font-sans tracking-widest uppercase font-black border-b-[3px] transition-all cursor-pointer ${
                    activeTab === "features" 
                      ? "border-[#05461a] text-[#05461a] bg-[#05461a]/5" 
                      : "border-transparent text-gray-400 hover:text-[#05461a]"
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab("guide")}
                  className={`flex-1 py-3.5 sm:py-4 min-h-[44px] text-[10px] sm:text-xs font-sans tracking-widest uppercase font-black border-b-[3px] transition-all cursor-pointer ${
                    activeTab === "guide" 
                      ? "border-[#05461a] text-[#05461a] bg-[#05461a]/5" 
                      : "border-transparent text-gray-400 hover:text-[#05461a]"
                  }`}
                >
                  Guide
                </button>
              </div>

              {/* Portfolio Text Content */}
              <div className="p-4 sm:p-7 text-left min-h-[260px] sm:min-h-[300px] flex flex-col justify-start">
                
                {activeTab === "chronicles" && (
                  <div className="space-y-4 animate-fade-in font-sans">
                    <h4 className="font-sans font-bold text-[#05461a] text-base sm:text-xl flex items-center gap-2 mb-1">
                      <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#bc923a] shrink-0" /> Chronicles Summary
                    </h4>
                    
                    <p className="text-stone-900 text-xs sm:text-sm leading-relaxed font-sans font-normal">
                      {area.subtitle} represents one of Tagbilaran City's five core strategic growth corridors, covering {area.description}. Designed under Tagbilaran's sustainable urban development masterplan, this corridor integrates commercial vitality, civic spaces, and community well-being.
                    </p>

                    {activeProject && (
                      <div className="border-l-2 border-[#bc923a] pl-3 py-2 bg-stone-50/80 rounded-r-xl my-2 sm:my-3">
                        <span className="text-[9px] sm:text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Featured Development</span>
                        <h5 className="font-sans font-bold text-[#05461a] text-xs sm:text-sm mt-0.5">{activeProject.title}</h5>
                        <p className="text-stone-700 text-xs leading-relaxed mt-1">{activeProject.description}</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "features" && (
                  <div className="space-y-3.5 animate-fade-in font-sans">
                    <h4 className="font-sans font-bold text-[#05461a] text-base sm:text-xl flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#bc923a] shrink-0" /> Key Corridor Features
                    </h4>
                    
                    <div className="space-y-2.5">
                      {projects.map((proj) => (
                        <div 
                          key={proj.id}
                          onClick={() => {
                            setActiveProject(proj);
                            setActiveImage(proj.image);
                          }}
                          className={`p-3 sm:p-3.5 rounded-xl border transition-all cursor-pointer text-left active:scale-[0.99] ${
                            activeProject.id === proj.id
                              ? "bg-emerald-50/80 border-emerald-300 shadow-xs"
                              : "bg-stone-50 hover:bg-stone-100 border-stone-200/70"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h5 className="font-bold text-xs sm:text-sm text-[#05461a]">{proj.title}</h5>
                            <span className="text-[9px] sm:text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                              {proj.impactStat.value}
                            </span>
                          </div>
                          <p className="text-stone-600 text-[11px] sm:text-xs line-clamp-2 mb-2">{proj.description}</p>
                          
                          <div className="flex items-center justify-between pt-1 gap-2 flex-wrap">
                            <div className="flex flex-wrap gap-1">
                              {proj.features.slice(0, 2).map((feat, fIdx) => (
                                <span key={fIdx} className="text-[9px] sm:text-[10px] bg-white text-stone-700 border border-stone-200 px-2 py-0.5 rounded-md font-medium">
                                  {feat}
                                </span>
                              ))}
                            </div>

                            <a
                              href={proj.mapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-emerald-800 hover:text-emerald-950 px-2 py-1 bg-emerald-100/60 rounded-md"
                            >
                              <span>Map</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "guide" && (
                  <div className="space-y-4 animate-fade-in font-sans">
                    <div>
                      <h4 className="font-sans font-bold text-[#05461a] text-base sm:text-xl flex items-center gap-2 mb-1">
                        Corridor Access &amp; Focus
                      </h4>
                      <p className="text-stone-500 text-[10px] font-sans tracking-wide uppercase font-extrabold block">
                        Barangays: {area.description}
                      </p>
                    </div>

                    <div className="bg-amber-50/40 border border-[#bc923a]/15 p-3.5 sm:p-4 rounded-xl text-xs text-stone-800 space-y-2 font-medium font-sans">
                      <span className="text-[9px] sm:text-[10px] font-sans text-stone-500 uppercase tracking-widest block font-extrabold mb-1">KEY URBAN FOCUS</span>
                      <p className="text-xs leading-relaxed text-stone-800 font-medium">
                        {area.keyFocus}
                      </p>
                    </div>

                    <div className="border-t border-stone-100 pt-3.5 font-sans mt-2">
                      <span className="text-[9px] sm:text-[10px] font-sans text-stone-500 uppercase tracking-widest block font-extrabold mb-2">PLANNED INFRASTRUCTURE</span>
                      <ul className="space-y-2 text-xs text-stone-700">
                        {area.keyProjects.map((kp, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#05461a] shrink-0" />
                            <span className="text-xs">{kp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
