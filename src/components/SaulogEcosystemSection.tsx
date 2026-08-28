import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import ImageWithSkeleton from "./ImageWithSkeleton";
import "./SaulogEcosystemSection.css";

interface SaulogEcosystemSectionProps {
  onExploreSaulog?: () => void;
}

interface SaulogSlide {
  url: string;
  caption: string;
  tag: string;
}

export const SaulogEcosystemSection: React.FC<SaulogEcosystemSectionProps> = ({
  onExploreSaulog,
}) => {
  // Vibrant, colorful festival-themed high-resolution image slides from the local assets
  const slides: SaulogSlide[] = [
    {
      url: "/SAULOG/11211.webp",
      caption: "Vibrant local street dancers bringing grand cultural sequences to life",
      tag: "STREET DANCING CHAMPIONSHIP",
    },
    {
      url: "/SAULOG/sljhitof.webp",
      caption: "Spectacular performance showing Boholano faith and color",
      tag: "CULTURAL SHOWCASE",
    },
    {
      url: "/SAULOG/43434.webp",
      caption: "Dazzling parade floats and beautiful traditional costumes displaying local artistry",
      tag: "SAULOG FESTIVAL SHOWDOWN",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Smooth slide auto-advance cycling every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="saulog-eco-section text-left" id="saulog-eco-layout-root">
      {/* Energetic ambient heatwaves/halos representing festival fires & celebration */}
      <div className="absolute top-[-20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#e0115f]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#ffd54f]/12 blur-[120px] pointer-events-none" />

      <div className="saulog-eco-container">
        
        {/* Left Column Content: Large, bold, all-caps styled with dynamic festival impact */}
        <motion.div 
          className="saulog-eco-content flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="saulog-eco-heading" id="saulog-eco-title">
            SAULOG <br className="hidden sm:inline" />
            TAGBILARAN
          </h2>
          
          <p className="saulog-eco-description" id="saulog-eco-copy">
            Experience Saulog Tagbilaran, a high energy celebration of Boholano faith and culture. Enjoy synchronized street dancing, vibrant costumes, and rhythmic community drumming.
          </p>
          
          <div className="hidden lg:block">
            <motion.button 
              onClick={onExploreSaulog}
              className="saulog-eco-btn"
              id="saulog-eco-cta-btn"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <span>EXPERIENCE SAULOG</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: High-End Sleek Showcase Slideshow */}
        <motion.div 
          className="w-full max-w-[500px] lg:max-w-[680px] saulog-aspect-ratio-holder relative overflow-hidden group border border-white/10 shadow-2xl rounded-2xl"
          id="saulog-eco-slideshow-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          {/* Elegant active festive corner markers */}
          <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-[#ffd54f]/60 z-20 pointer-events-none" />
          <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-[#ffd54f]/60 z-20 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-[#ffd54f]/60 z-20 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-[#ffd54f]/60 z-20 pointer-events-none" />

          {/* Core Viewport */}
          <div className="saulog-slideshow-viewport overflow-hidden relative">
            {slides.map((slide, idx) => (
              <ImageWithSkeleton
                key={slide.url}
                src={slide.url}
                alt={slide.caption}
                containerClassName={`saulog-slide ${idx === activeIndex ? "active" : ""}`}
                className="w-full h-full object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
                referrerPolicy="no-referrer"
              />
            ))}

            {/* Radiant dark fiesta backdrop gradient overlay */}
            <div className="saulog-slideshow-overlay" />
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
            onClick={onExploreSaulog}
            className="saulog-eco-btn"
            id="saulog-eco-cta-btn-mobile"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <span>EXPERIENCE SAULOG</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
