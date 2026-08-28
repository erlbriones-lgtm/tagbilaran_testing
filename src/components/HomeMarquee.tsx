import React from "react";

// Customized high-fidelity vector icons with subtle fill overlays for extra visual craft
const CompassSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill="currentColor" fillOpacity="0.3" />
  </svg>
);

const GlobeSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="currentColor" fillOpacity="0.15" />
  </svg>
);

const LeafSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z" fill="currentColor" fillOpacity="0.25" />
    <path d="M19 2L9.8 13" />
  </svg>
);

const AnchorSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5V21" />
    <path d="M5 12H2" />
    <path d="M22 12H19" />
    <circle cx="12" cy="5" r="3" fill="currentColor" fillOpacity="0.3" />
    <path d="M12 21a8 8 0 0 1-8-8" />
    <path d="M12 21a8 8 0 0 0 8-8" />
    <path d="M18 11l2 2" />
    <path d="M6 11l-2 2" />
  </svg>
);

const HeartSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="currentColor" fillOpacity="0.3" />
  </svg>
);

const SparklesSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.64 5.64l2.83 2.83M15.53 15.53l2.83 2.83M5.64 18.36l2.83-2.83M15.53 8.47l2.83-2.83" />
    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.3" />
  </svg>
);

const AuthenticSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.25" />
    <path d="M9 11l2 2 4-4" />
  </svg>
);

export default function HomeMarquee() {
  // Action items describing what Tagbilaran City is
  const items = [
    { text: "GATEWAY", icon: CompassSvg },
    { text: "HERITAGE", icon: GlobeSvg },
    { text: "PEACEFUL", icon: LeafSvg },
    { text: "COASTAL", icon: AnchorSvg },
    { text: "HEART", icon: HeartSvg },
    { text: "VIBRANT", icon: SparklesSvg },
    { text: "AUTHENTIC", icon: AuthenticSvg },
  ];

  // Repeat the array to ensure perfect seamless coverage in the marquee
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div 
      className="w-full bg-[#007200] border-y border-emerald-400/20 py-4 md:py-5 overflow-hidden select-none relative z-30 shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center" 
      id="discord-style-marquee"
    >
      {/* Infinite scrolling ribbon */}
      <div className="flex w-max flex-nowrap items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 animate-marquee-left">
        {repeatedItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <React.Fragment key={`marquee-item-${idx}`}>
              {/* Extra-bold, wide sans-serif typography matching Discord's Ginto Nord style */}
              <span 
                className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-widest font-moderniz select-none shrink-0"
                style={{ textRendering: "optimizeLegibility" }}
              >
                {item.text}
              </span>
              
              {/* Perfectly sized vector icon acting as the centered spacer */}
              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFD54F] shrink-0 transform rotate-12" />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

