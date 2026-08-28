import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import ImageWithSkeleton from "./ImageWithSkeleton";
import "./BarangayEcosystemSection.css";

interface BarangayEcosystemSectionProps {
  onExploreBarangays?: () => void;
}

interface BarangaySlide {
  url: string;
  caption: string;
}

export const BarangayEcosystemSection: React.FC<BarangayEcosystemSectionProps> = ({
  onExploreBarangays,
}) => {
  // Balanced array of responsive, fast-loading real heritage images themed around the local 15 barangays
  const slides: BarangaySlide[] = [
    {
      url: "/HERITAGES/friendship-park-abueva/Blood Compact Shrine (31)-1.webp",
      caption: "Barangay Bool • Historic Sandugo Blood Compact Shrine Monument",
    },
    {
      url: "/HERITAGES/cathedral-st-joseph-worker-historic/Cathedral of St. Joseph the Worker 1.webp",
      caption: "Barangay Poblacion II • Cathedral of St. Joseph the Worker",
    },
    {
      url: "/HERITAGES/nm-bohol-area-museum-historic/NM Bohol Area Museum 1jpg.webp",
      caption: "Barangay Poblacion III • National Museum Bohol (Former Capitol)",
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Auto-slide effect cycling exactly every 4 seconds as requested
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="barangay-eco-section text-left" id="barangay-eco-layout-root">
      {/* Radiant ambient background accent glow elements */}
      <div className="absolute top-[-25%] right-[-10%] w-[380px] h-[380px] rounded-full bg-[#10b981]/10 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[-30%] left-[-15%] w-[420px] h-[420px] rounded-full bg-[#bc923a]/10 blur-[130px] pointer-events-none" />

      <div className="barangay-eco-container">
        
        {/* Left Column Content: Large, bold, uppercase heading and copy */}
        <motion.div 
          className="barangay-eco-content flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="barangay-eco-heading" id="barangay-eco-title">
            EXPLORE OUR <br className="hidden sm:inline" />
            BARANGAYS
          </h2>
          
          <p className="barangay-eco-description" id="barangay-eco-copy">
            Explore the local sub cultures and cherished landmarks of our 15 unique barangays, from the historic coastlines of Bool to the lively, bustling trade hubs of Cogon.
          </p>
          
          <div className="hidden lg:block">
            <motion.button 
              onClick={onExploreBarangays}
              className="barangay-eco-btn"
              id="barangay-eco-cta-btn"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <span>EXPLORE LOCAL COMMUNITIES</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: Sleek Modern Media Slideshow (No wood frame, clean and elegant) */}
        <motion.div 
          className="w-full max-w-[500px] lg:max-w-[680px] aspect-ratio-container relative overflow-hidden group border border-white/10 shadow-2xl rounded-2xl"
          id="barangay-eco-slideshow-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          {/* Subtle corner notches for high-tech premium view finder feel */}
          <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-white/45 z-20 pointer-events-none" />
          <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-white/45 z-20 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-white/45 z-20 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-white/45 z-20 pointer-events-none" />

          {/* Aspect 16:9 Slide Display Viewport */}
          <div className="barangay-slideshow-viewport overflow-hidden relative">
            {slides.map((slide, idx) => (
              <ImageWithSkeleton
                key={slide.url}
                src={slide.url}
                alt={slide.caption}
                containerClassName={`barangay-slide ${idx === activeIndex ? "active" : ""}`}
                className="w-full h-full object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
                referrerPolicy="no-referrer"
              />
            ))}

            {/* Premium Slate/Dark Overlay Shade */}
            <div className="barangay-slideshow-overlay" />


          </div>
        </motion.div>

        {/* Mobile and Tablet Button below the images */}
        <motion.div 
          className="w-full flex justify-center lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button 
            onClick={onExploreBarangays}
            className="barangay-eco-btn"
            id="barangay-eco-cta-btn-mobile"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <span>EXPLORE LOCAL COMMUNITIES</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
