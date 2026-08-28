import { Compass } from "lucide-react";
import ImageWithSkeleton from "./ImageWithSkeleton";

interface MarqueeCardProps {
  id: string;
  title: string;
  category: string;
  district: string;
  image: string;
  desc: string;
}

const row1Cards: MarqueeCardProps[] = [
  {
    id: "plaza-rizal-historic",
    title: "Plaza Rizal",
    category: "Heritage Park",
    district: "Downtown",
    image: "/HERITAGES/plaza-rizal-historic/Plaza Rizal 1.webp",
    desc: "A soothing public square in the heart of downtown, serving as a sanctuary for city birds."
  },
  {
    id: "nm-bohol-area-museum-historic",
    title: "NM Bohol Area Museum",
    category: "Museum",
    district: "Old Capitol",
    image: "/HERITAGES/nm-bohol-area-museum-historic/NM Bohol Area Museum 2.webp",
    desc: "A spectacular 1860 stone and lime tribunal showcasing deep native prehistoric history."
  },
  {
    id: "cathedral-st-joseph-worker-historic",
    title: "Cathedral of St. Joseph the Worker",
    category: "Spanish Church",
    district: "Poblacion",
    image: "/HERITAGES/cathedral-st-joseph-worker-historic/Cathedral of St. Joseph the Worker 1.webp",
    desc: "Centuries old limestone cathedral decorated with breathtaking local ceiling frescoes."
  },
  {
    id: "garden-cafe",
    title: "Garden Cafe",
    category: "Cultural Cafe",
    district: "Poblacion",
    image: "/HERITAGES/garden-cafe/Garden Cafe 1.webp",
    desc: "A social enterprise serving great food and supporting the deaf community since development."
  },
  {
    id: "reyes-house",
    title: "Reyes House",
    category: "Ancestral House",
    district: "Poblacion",
    image: "/HERITAGES/reyes-house/Reyes House 1-1.webp",
    desc: "A mute revolutionary witness to the 1900 secrets of anti-colonial resistance fighters."
  },
  {
    id: "friendship-park-abueva",
    title: "Friendship Park",
    category: "Monument",
    district: "Barangay Bool",
    image: "/HERITAGES/friendship-park-abueva/Blood Compact Shrine (31)-1.webp",
    desc: "Napoleon Abueva's supreme Sandugo bronze composition marking international diplomacy."
  },
  {
    id: "cpg-heritage-house",
    title: "CPG Heritage House",
    category: "President's Home",
    district: "Poblacion",
    image: "/HERITAGES/cpg-heritage-house/Carlos P. Garcia Heritage House 1.webp",
    desc: "The personal estate of President Carlos P. Garcia housing historic chessboards."
  }
];

const row2Cards: MarqueeCardProps[] = [
  {
    id: "balili-house-oasis-lodge",
    title: "Balili House / Oasis Lodge",
    category: "Heritage Lodge",
    district: "Poblacion",
    image: "/HERITAGES/balili-house-oasis-lodge/Balili Heritage House (1)-1.webp",
    desc: "A majestic 1930s chalet masterfully preserved through adaptive civic accommodation."
  },
  {
    id: "capt-francisco-salazar-monument",
    title: "Capt. Salazar Monument",
    category: "WWII Memorial",
    district: "Barangay Ubujan",
    image: "/HERITAGES/capt-francisco-salazar-monument/Capt. Francisco Salazar Monument 1.webp",
    desc: "Bas-relief tribute honoring the bravery of Salazar and 200 volunteer guerilla warriors."
  },
  {
    id: "casa-rocha",
    title: "Casa Rocha",
    category: "Heritage House",
    district: "Sitio Ubos",
    image: "/HERITAGES/casa-rocha/Casa Rocha 1.webp",
    desc: "One of the oldest surviving ancestral houses and classic bahay na tisa."
  },
  {
    id: "rocha-suarez-house",
    title: "Rocha Suarez House",
    category: "Ancestral House",
    district: "Sitio Ubos",
    image: "/HERITAGES/rocha-suarez-house/rocha-suarez 1-1.webp",
    desc: "A grand Spanish colonial era ancestral home preserving Sitio Ubos heritage."
  },
  {
    id: "beldia-house",
    title: "Beldia House",
    category: "Historic House",
    district: "Sitio Ubos",
    image: "/HERITAGES/beldia-house/Beldia House.webp",
    desc: "Pre war residential architecture representing unique wood and stone style."
  },
  {
    id: "dalareich-chocolate-house",
    title: "Dalareich Chocolate House",
    category: "Chocolate Heritage",
    district: "Poblacion District",
    image: "/HERITAGES/dalareich-chocolate-house/Dalareich Chocolate House 1.webp",
    desc: "A cultural hub celebrating Bohol's rich bean to cup cacao traditions."
  },
  {
    id: "cultural-show",
    title: "Cultural Show",
    category: "Cultural Performance",
    district: "Saulog Stage",
    image: "/HERITAGES/cultural-show/IMG_0696.webp",
    desc: "A live showcase of traditional folk dancers and local performing arts."
  }
];

interface HeritageMarqueeProps {
  onCardClick?: (id: string) => void;
}

export default function HeritageMarquee({ onCardClick }: HeritageMarqueeProps) {
  return (
    <section 
      id="infinite-heritage-marquee" 
      className="w-full pt-28 pb-20 relative text-[#05461a] overflow-visible flex flex-col gap-12 bg-white"
    >
      {/* Background Image Container with Vertical Rotation (Up to Down) at 70% Opacity */}
      <div 
        className="absolute inset-0 bg-cover pointer-events-none opacity-70" 
        style={{ 
          backgroundImage: "url('/FILLERS/lemoonboots-scrapbook-1287354-1.webp')",
          backgroundPosition: "center 70%",
          transform: "scaleY(-1)"
        }}
      />

      <div className="relative z-10 w-full flex flex-col gap-12">
        {/* Header Info */}
        <div className="text-center px-6 max-w-4xl mx-auto flex flex-col items-center select-none">
          <h3 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-normal leading-none text-[#05461a] mb-4 text-center">
            Explore Our Heritage
          </h3>
          <p className="text-[#05461a] text-sm sm:text-base leading-relaxed font-comic font-medium max-w-xl text-center">
            Discover Tagbilaran's living history, ancient stone chapels, and colonial treasures. <span className="text-[#2E7D32] hover:underline cursor-pointer font-bold">Click any card below</span> to unlock high-definition archives, local chronicles, and traveler planning resources.
          </p>
        </div>

        {/* Marquee Wrapper with Pause On Hover capability */}
        <div className="w-full flex flex-col gap-4 sm:gap-6 select-none relative hover-pause" id="marquee-rows-container">
          
          {/* Row 1: Scrolling Left */}
          <div className="w-full overflow-hidden relative py-2" id="marquee-row-1-wrapper">

            <div className="flex w-max flex-nowrap gap-4 sm:gap-6 animate-marquee-left" id="marquee-row-1">
              {/* Duplicated once for seamless endless scroll */}
              {[...row1Cards, ...row1Cards].map((card, idx) => (
                <div 
                  key={`row1-${idx}`}
                  onClick={() => onCardClick?.(card.id)}
                  className="w-[145px] sm:w-[165px] md:w-[195px] lg:w-[300px] shrink-0 p-1.5 sm:p-2 md:p-2 lg:p-[12px] rounded-none bg-gradient-to-br from-[#5c3a21] via-[#2c1a0e] to-[#422512] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.15),inset_-2px_-2px_4px_rgba(0,0,0,0.6),6px_6px_20px_rgba(0,0,0,0.65)] hover:shadow-[inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.7),12px_12px_30px_rgba(0,0,0,0.85)] border border-[#1b0e06] transition-all duration-300 transform hover:scale-[1.03] cursor-pointer flex flex-col text-left group relative"
                >
                  {/* Gold/brass fillet inset inlay line */}
                  <div className="absolute inset-[3px] border border-[#bc923a]/40 pointer-events-none z-10" />
                  
                  {/* Antique mat board inner insert */}
                  <div className="flex-1 bg-[#f4ebd0] p-1.5 sm:p-2 md:p-2.5 lg:p-4 flex flex-col border border-[#1b0e06]/60 z-10 relative shadow-[inset_1px_1px_3px_rgba(0,0,0,0.3)]">
                    {/* Image slot */}
                    <div className="h-[80px] sm:h-[90px] md:h-[105px] lg:h-[165px] w-full overflow-hidden relative border border-[#2c1a0e]/30 mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-4">
                      <ImageWithSkeleton 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.1] contrast-[1.05]"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>

                    {/* Content area */}
                    <div className="flex-1 flex flex-col justify-between text-[#2c1a0e]">
                      <div>
                        <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-jakarta font-bold tracking-widest text-[#845f20] uppercase block mb-1 sm:mb-1.5">
                          {card.category}
                        </span>
                        <h4 className="font-jakarta font-bold text-[10px] sm:text-[11px] md:text-xs lg:text-base text-[#2c1a0e] group-hover:text-[#845f20] transition-colors leading-snug line-clamp-2">
                           {card.title}
                        </h4>
                        <p className="text-[#4e3922] text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs leading-relaxed mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 line-clamp-3 font-medium font-comic">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="w-full overflow-hidden relative py-2" id="marquee-row-2-wrapper">

            <div className="flex w-max flex-nowrap gap-4 sm:gap-6 animate-marquee-right" id="marquee-row-2">
              {/* Duplicated once for seamless endless scroll */}
              {[...row2Cards, ...row2Cards].map((card, idx) => (
                <div 
                  key={`row2-${idx}`}
                  onClick={() => onCardClick?.(card.id)}
                  className="w-[145px] sm:w-[165px] md:w-[195px] lg:w-[300px] shrink-0 p-1.5 sm:p-2 md:p-2 lg:p-[12px] rounded-none bg-gradient-to-br from-[#5c3a21] via-[#2c1a0e] to-[#422512] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.15),inset_-2px_-2px_4px_rgba(0,0,0,0.6),6px_6px_20px_rgba(0,0,0,0.65)] hover:shadow-[inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.7),12px_12px_30px_rgba(0,0,0,0.85)] border border-[#1b0e06] transition-all duration-300 transform hover:scale-[1.03] cursor-pointer flex flex-col text-left group relative"
                >
                  {/* Gold/brass fillet inset inlay line */}
                  <div className="absolute inset-[3px] border border-[#bc923a]/40 pointer-events-none z-10" />
                  
                  {/* Antique mat board inner insert */}
                  <div className="flex-1 bg-[#f4ebd0] p-1.5 sm:p-2 md:p-2.5 lg:p-4 flex flex-col border border-[#1b0e06]/60 z-10 relative shadow-[inset_1px_1px_3px_rgba(0,0,0,0.3)]">
                    {/* Image slot */}
                    <div className="h-[85px] sm:h-[95px] md:h-[110px] lg:h-[165px] w-full overflow-hidden relative border border-[#2c1a0e]/30 mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-4">
                      <ImageWithSkeleton 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.1] contrast-[1.05]"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>

                    {/* Content area */}
                    <div className="flex-1 flex flex-col justify-between text-[#2c1a0e]">
                      <div>
                        <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-jakarta font-bold tracking-widest text-[#845f20] uppercase block mb-1 sm:mb-1.5">
                          {card.category}
                        </span>
                        <h4 className="font-jakarta font-bold text-[10px] sm:text-[11px] md:text-xs lg:text-base text-[#2c1a0e] group-hover:text-[#845f20] transition-colors leading-snug line-clamp-2">
                          {card.title}
                        </h4>
                        <p className="text-[#4e3922] text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs leading-relaxed mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 line-clamp-3 font-medium font-comic">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Elegant full-width brown ornamental separator at the boundary of the textured container */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none select-none translate-y-1/2" id="brown-divider-edge">
        <img 
          src="/FILLERS/BrownDivider.png" 
          alt="Classical Brown Ornamental Separator" 
          className="w-full h-24 sm:h-36 md:h-44 lg:h-52 object-fill block"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>
    </section>
  );
}
