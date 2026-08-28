import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Sparkles, 
  CheckCircle, 
  Compass,
  FileText,
  Navigation,
  Globe,
  Award,
  BookOpen
} from "lucide-react";
import { DetailedHeritage } from "../data/heritageDetails";

interface HeritageDetailViewProps {
  heritage: DetailedHeritage;
  onBack: () => void;
}

export default function HeritageDetailView({ heritage, onBack }: HeritageDetailViewProps) {
  const [activeImage, setActiveImage] = useState<string>(heritage.mainImage);
  const [activeTab, setActiveTab] = useState<"history" | "trivia" | "visit">("history");

  // Sync active image when landmark changes
  useEffect(() => {
    setActiveImage(heritage.mainImage);
  }, [heritage]);

  return (
    <div className="w-full relative min-h-screen text-left text-[#05461a] bg-[#fbf9f4] pb-24" id="heritage-detail-view-container">
      {/* Exquisite layered background: fine linen paper texture overlay at subtle opacity over the scrapbook container */}
      <div 
        className="absolute inset-0 bg-cover pointer-events-none opacity-40 z-0 bg-repeat" 
        style={{ 
          backgroundImage: "url('/FILLERS/lemoonboots-scrapbook-1287354-1.webp')",
          backgroundPosition: "center 30%",
        }}
      />
      
      {/* Top ambient luxury lighting overlay */}
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-[#efe9d9]/30 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-22">
        
        {/* Step 1: Premium Cohesive Horizontal Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#05461a]/10 pb-4 sm:pb-5 mb-6 sm:mb-8" id="detail-top-navigation-bar">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white border border-[#05461a]/15 text-[#05461a] hover:bg-[#05461a]/5 hover:border-[#05461a]/30 transition-all font-sans text-[10px] sm:text-[11px] font-black uppercase tracking-widest cursor-pointer active:scale-95 shadow-xs min-h-[40px] sm:min-h-[44px]"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#05461a] group-hover:-translate-x-1 transition-transform" /> 
            Back to Exploration
          </button>

          <div className="hidden lg:flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 bg-[#05461a]/10 text-[#05461a] border border-[#05461a]/25 rounded-full font-sans text-[10px] sm:text-xs uppercase tracking-wider font-extrabold badge-tag-custom shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#05461a] animate-spin-slow" /> {heritage.category}
            </span>
          </div>
        </div>

        {/* Step 2: Centered Editorial Title block with dynamic ornaments and watermarks */}
        <div className="flex flex-col items-center text-center mb-8 max-w-4xl mx-auto" id="curated-title-deck">
          <h1 className="font-sans font-bold text-[#05461a] text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4 drop-shadow-sm select-none">
            {heritage.title}
          </h1>

          {/* Clean Elegant Tagline */}
          <p className="font-sans text-[#bc923a] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed max-w-3xl px-4 italic mb-5">
            "{heritage.tagline}"
          </p>

          {/* Beautiful Green Ornamental Divider Asset */}
          <div className="w-full max-w-[280px] sm:max-w-[400px] flex justify-center mt-2">
            <img 
              src="/FILLERS/divider2-1.png" 
              alt="Lace Divider" 
              className="w-full h-auto max-h-[14px] opacity-92 object-contain"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>

        {/* Step 3: High-Fidelity 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start" id="main-layout-modular-grid">
          
          {/* LEFT COLUMN: Visual Archives Stage (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6" id="exhibition-visual-archives">
            
            {/* The Luxury Classical Wooden Scrapbook Frame */}
            <div className="relative p-3 sm:p-4 rounded-none bg-gradient-to-br from-[#4e2f17] via-[#241308] to-[#391e0a] shadow-[inset_1.5px_1.5px_3px_rgba(255,255,255,0.2),inset_-1.5px_-1.5px_3px_rgba(0,0,0,0.75),6px_8px_24px_rgba(0,0,0,0.35)] border border-[#140a04] w-full">
              {/* Gold/brass fillet inset inlay line */}
              <div className="absolute inset-[3px] border border-[#bc923a]/30 pointer-events-none z-20" />
              <div className="absolute inset-[4px] border border-[#bc923a]/15 pointer-events-none z-20" />
              
              {/* Antique natural mat board inner insert */}
              <div className="bg-[#f2e7c9] p-4 border border-[#140a04]/50 z-10 relative shadow-[inset_1px_1px_4px_rgba(0,0,0,0.35)] w-full">
                {/* Image panel slot */}
                <div className="relative h-[260px] sm:h-[420px] w-full overflow-hidden border border-[#241308]/40 flex items-center justify-center bg-[#170c05]/10">
                  <ImageWithSkeleton
                    key={activeImage}
                    src={activeImage}
                    alt={heritage.title}
                    className="w-full h-full object-cover filter contrast-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle antique parchment color filter */}
                  <div className="absolute inset-0 bg-[#e89d1b]/2 mix-blend-color-burn pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Curated Exhibits Thumbnail Drawer selector */}
            <div className="bg-white/80 backdrop-blur-sm border border-emerald-900/10 p-5 rounded-2xl shadow-sm">
              <span className="text-[10px] font-jakarta text-stone-500 uppercase tracking-widest font-extrabold block mb-3.5">
                EXHIBITION PLATES ({heritage.images.length} ARCHIVES LOADED)
              </span>
              <div className="flex gap-4 overflow-x-auto pb-1 no-scrollbar justify-start">
                {heritage.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer group ${
                      activeImage === img 
                        ? "border-[#05461a] scale-[1.03] shadow-md" 
                        : "border-stone-200/80 opacity-70 hover:opacity-100 hover:border-stone-400"
                    }`}
                  >
                    <ImageWithSkeleton 
                      src={img} 
                      alt={`Angle angle ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                      referrerPolicy="no-referrer" 
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    {activeImage === img && (
                      <div className="absolute bottom-1 right-1 bg-[#05461a] text-white p-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Curriculum Vitae Ledger (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6" id="parchment-ledger-column">
            
            {/* Elegant GPS & Geography Anchor Board */}
            <div className="p-6 rounded-2xl bg-[#05461a]/5 border border-emerald-900/10 backdrop-blur-sm shadow-sm relative overflow-hidden" id="geographic-anchor-board">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#bc923a]/10 to-transparent rounded-full blur-xl pointer-events-none" />
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5 mb-1 text-stone-500">
                    <Calendar className="w-3.5 h-3.5 text-[#05461a]/70" />
                    <span className="font-jakarta text-[9px] uppercase tracking-widest font-extrabold">FOUNDED</span>
                  </div>
                  <span className="text-[#05461a] text-base font-sans font-bold">{heritage.yearEstablished}</span>
                </div>

                <div className="flex flex-col text-left border-l border-[#05461a]/10 pl-4">
                  <div className="flex items-center gap-1.5 mb-1 text-stone-500">
                    <MapPin className="w-3.5 h-3.5 text-[#05461a]/70" />
                    <span className="font-jakarta text-[9px] uppercase tracking-widest font-extrabold">DISTRICT</span>
                  </div>
                  <span className="text-[#05461a] text-[13px] font-sans font-bold truncate">{heritage.district}</span>
                </div>
              </div>
            </div>

            {/* Seamless, Highly Interactive Document Portfolio Journal */}
            <div className="bg-white rounded-2xl border border-emerald-950/10 overflow-hidden shadow-sm flex flex-col font-medium" id="heritage-document-portfolio">
              
              {/* Portfolio Tabs Header with thick elegant bottom bars */}
              <div className="flex border-b border-stone-200 bg-stone-50" id="details-tabs-row">
                <button
                  onClick={() => setActiveTab("history")}
                  className={`flex-1 py-4 text-[10px] sm:text-xs font-jakarta tracking-widest uppercase font-black border-b-[3px] transition-all cursor-pointer ${
                    activeTab === "history" 
                      ? "border-[#05461a] text-[#05461a] bg-[#05461a]/5" 
                      : "border-transparent text-gray-400 hover:text-[#05461a]"
                  }`}
                >
                  Chronicles
                </button>
                <button
                  onClick={() => setActiveTab("trivia")}
                  className={`flex-1 py-4 text-[10px] sm:text-xs font-jakarta tracking-widest uppercase font-black border-b-[3px] transition-all cursor-pointer ${
                    activeTab === "trivia" 
                      ? "border-[#05461a] text-[#05461a] bg-[#05461a]/5" 
                      : "border-transparent text-gray-400 hover:text-[#05461a]"
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab("visit")}
                  className={`flex-1 py-4 text-[10px] sm:text-xs font-jakarta tracking-widest uppercase font-black border-b-[3px] transition-all cursor-pointer ${
                    activeTab === "visit" 
                      ? "border-[#05461a] text-[#05461a] bg-[#05461a]/5" 
                      : "border-transparent text-gray-400 hover:text-[#05461a]"
                  }`}
                >
                  Guide
                </button>
              </div>

              {/* Portfolio Paper Text Content */}
              <div className="p-6 sm:p-7 text-left min-h-[300px] flex flex-col justify-start">
                
                {activeTab === "history" && (
                  <div className="space-y-4.5 animate-fade-in font-sans">
                    <h4 className="font-sans font-bold text-[#05461a] text-lg sm:text-xl flex items-center gap-2 mb-1.5">
                      <BookOpen className="w-5 h-5 text-[#bc923a]" /> Chronicles Summary
                    </h4>
                    
                    {/* Beautiful, vintage big-style initial letter paragraph */}
                    <p className="text-stone-900 text-sm leading-relaxed font-sans font-normal">
                      {heritage.description}
                    </p>
                    <p className="text-stone-800 text-xs sm:text-sm leading-relaxed font-sans font-normal border-l-2 border-[#bc923a] pl-3 py-1 bg-stone-50/50">
                      {heritage.longHistory}
                    </p>
                  </div>
                )}

                {activeTab === "trivia" && (
                  <div className="space-y-5 animate-fade-in font-sans">
                    <h4 className="font-sans font-bold text-[#05461a] text-lg sm:text-xl flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-5 h-5 text-[#bc923a]" /> Architectural Assets
                    </h4>
                    
                    {/* Grid of clean asset items */}
                    <div className="grid grid-cols-1 gap-3.5">
                      {heritage.facts.map((fact, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-stone-50 hover:bg-[#05461a]/5 border border-stone-200/60 transition-colors text-left flex flex-col">
                          <span className="text-[9px] font-jakarta text-stone-500 font-extrabold uppercase tracking-wider">{fact.label}</span>
                          <span className="text-[#05461a] text-xs sm:text-[13px] font-sans font-bold mt-0.5">{fact.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 mt-4 font-sans">
                      <span className="text-[10px] font-jakarta text-stone-500 uppercase tracking-widest block font-extrabold">HERITAGE VALOR HIGHLIGHTS</span>
                      <ul className="space-y-2 pl-0.5 text-xs text-stone-800 font-medium">
                        {heritage.heritageHighlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle className="w-4 h-4 text-[#05461a] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "visit" && (
                  <div className="space-y-5 animate-fade-in font-sans">
                    <div>
                      <h4 className="font-sans font-bold text-[#05461a] text-lg sm:text-xl flex items-center gap-2 mb-1">
                        Visiting Manners
                      </h4>
                      <p className="text-stone-500 text-[10px] font-jakarta tracking-wide uppercase font-extrabold block">Please observe proper stewardship on physical visits</p>
                    </div>

                    <div className="bg-amber-50/40 border border-[#bc923a]/15 p-4 rounded-xl text-xs text-stone-800 space-y-2.5 font-medium font-sans">
                      {heritage.culturalGuidelines.map((g, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start">
                          <span className="text-[#bc923a] font-mono text-xs font-bold">0{idx + 1}.</span>
                          <span>{g}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-stone-100 pt-4 font-sans mt-2">
                      <span className="text-[10px] font-jakarta text-stone-500 uppercase tracking-widest block font-extrabold mb-1">PLANNING INSIGHTS</span>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium italic">
                        "{heritage.travelTips}"
                      </p>
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
