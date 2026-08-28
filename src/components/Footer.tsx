import { Compass } from "lucide-react";

interface FooterProps {
  setActiveView: (view: "home" | "growth" | "heritage" | "shops" | "downloadables" | "barangay" | "saulog" | "travel" | "about" | "contact") => void;
}

export default function Footer({ setActiveView }: FooterProps) {
  return (
    <footer 
      className="relative z-10 px-6 sm:px-12 pb-12 pt-16 bg-[#031d09] text-white transition-all duration-300"
      id="main-app-footer"
    >
      {/* Decorative Top Divider Image (Edge to Edge) */}
      <div className="absolute top-0 left-0 right-0 w-full flex justify-center -translate-y-1/2 pointer-events-none z-20">
        <img 
          src="/FILLERS/GreenDivider.png" 
          alt="Top Footer Divider" 
          className="w-full h-5 md:h-6 object-fill"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Main Footer Links & Brand Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-12" id="footer-main-grid">
          
          {/* Column 1: Brand & Municipal Mission */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-left" id="footer-col-brand">
            {/* Logos above the header (non-enclosed) */}
            <div className="flex flex-wrap items-center gap-4.5 mb-2 select-none" id="footer-logos-row">
              <img 
                src="/FILLERS/cropped-Tagbilaran-LOGO.png" 
                alt="City Government of Tagbilaran Seal" 
                className="h-[44px] w-auto object-contain filter brightness-110 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,213,79,0.5)] cursor-pointer"
                referrerPolicy="no-referrer" 
                loading="lazy"
              />
              <img 
                src="/FILLERS/TAGB-CTO.png" 
                alt="City Tourism Office Logo" 
                className="h-[48px] w-auto object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(50,232,117,0.5)] cursor-pointer"
                referrerPolicy="no-referrer" 
                loading="lazy"
              />
              <img 
                src="/FILLERS/Department_of_Tourism_(DOT).svg.png" 
                alt="Department of Tourism Logo" 
                className="h-[40px] w-auto object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,213,79,0.5)] cursor-pointer"
                referrerPolicy="no-referrer" 
                loading="lazy"
              />
              <img 
                src="/FILLERS/BeholdBohol.png" 
                alt="Behold Bohol Logo" 
                className="h-[52px] w-auto object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(50,232,117,0.5)] cursor-pointer"
                referrerPolicy="no-referrer" 
                loading="lazy"
              />
            </div>

            <div className="flex items-center">
              <span className="font-sans font-black text-lg tracking-wider text-white uppercase">
                TAGBILARAN <span className="text-[#FFD54F]">TOURISM</span>
              </span>
            </div>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              The official digital tourism gateway of the City Government of Tagbilaran, Bohol. Explore our ancient covenants, living traditions, sandugo legacy, and pioneering creative communities.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-3 text-left flex flex-col gap-4" id="footer-col-navigation">
            <h4 className="text-[#70E000] font-sans font-bold text-xs uppercase tracking-widest">
              Explore
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-white/75 font-sans">
              <button 
                onClick={() => setActiveView("home")}
                className="hover:text-[#FFD54F] transition-colors text-left uppercase tracking-wider font-semibold"
              >
                Home Dashboard
              </button>
              <button 
                onClick={() => setActiveView("growth")}
                className="hover:text-[#FFD54F] transition-colors text-left uppercase tracking-wider font-semibold"
              >
                Urban Growth &amp; Buildings
              </button>
              <button 
                onClick={() => setActiveView("heritage")}
                className="hover:text-[#FFD54F] transition-colors text-left uppercase tracking-wider font-semibold"
              >
                Cultural Heritage
              </button>
              <button 
                onClick={() => setActiveView("saulog")}
                className="hover:text-[#FFD54F] transition-colors text-left uppercase tracking-wider font-semibold"
              >
                Saulog Festival
              </button>
              <button 
                onClick={() => setActiveView("barangay")}
                className="hover:text-[#FFD54F] transition-colors text-left uppercase tracking-wider font-semibold"
              >
                Barangays
              </button>
              <button 
                onClick={() => setActiveView("downloadables")}
                className="hover:text-[#FFD54F] transition-colors text-left uppercase tracking-wider font-semibold"
              >
                Resources &amp; Maps
              </button>
              <button 
                onClick={() => setActiveView("contact")}
                className="hover:text-[#FFD54F] transition-colors text-left uppercase tracking-wider font-semibold"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Column 3: Location & Hours */}
          <div className="lg:col-span-4 text-left flex flex-col gap-4" id="footer-col-location">
            <h4 className="text-[#70E000] font-sans font-bold text-xs uppercase tracking-widest">
              Location &amp; Hours
            </h4>
            <div className="space-y-4 text-xs text-white/70">
              <div className="flex flex-col">
                <span className="font-sans font-bold text-white uppercase tracking-wider mb-1">
                  Tagbilaran City Hall
                </span>
                <p className="text-white/60 leading-relaxed">
                  J.A Clarin Street cor. E. Calceta Street,<br />
                   Barangay Cogon, Tagbilaran City 6300 Bohol
                </p>
              </div>

              <div className="flex flex-col">
                <span className="font-sans font-bold text-white uppercase tracking-wider mb-1">
                  Office Hours
                </span>
                <p className="text-white/60 font-mono">Mon – Fri: 8:00 AM – 5:00 PM PST</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="max-w-7xl mx-auto">
        {/* Elegant horizontal border divider line */}
        <div className="w-full h-[1px] bg-white/10 my-8" />

        {/* Bottom Legal & Credits Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs font-sans text-white/50 gap-4" id="footer-bottom-row">
          <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-1 text-center md:text-left">
            <span>
              © {new Date().getFullYear()} City Government of Tagbilaran. All rights reserved.
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-white/40">
              City Mayor's Office Strategic Communications (StratCom) • Tagbilaran City Tourism Office
            </span>
          </div>
        </div>

        {/* Short Disclaimer Sentence */}
        <p className="mt-4 text-[10px] sm:text-[11px] font-sans text-white/35 leading-relaxed text-center md:text-left max-w-5xl" id="footer-disclaimer">
          Disclaimer: All portal content, archival media, and Sikatuna AI companion suggestions are provided solely for informational and educational purposes. 
          Outbound links to third-party booking or external ticket platforms redirect users to systems not operated by this platform; 
          the city government is not responsible for pricing, availability, or transactions completed on those external services.
        </p>

      </div>
    </footer>
  );
}
