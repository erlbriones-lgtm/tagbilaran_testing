import { motion } from "motion/react";
import { useRef, useEffect } from "react";

interface HeroProps {
  onSwitchToHeritage: () => void;
  weatherDescription?: string;
  temperature?: number;
}

export default function Hero({ onSwitchToHeritage, weatherDescription, temperature }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play with audio immediately
      video.muted = false;
      video.play().catch((e) => {
        console.log('Autoplay with audio failed, trying muted:', e);
        // If that fails, try muted
        video.muted = true;
        video.play().catch((e2) => {
          console.log('Autoplay muted failed:', e2);
        });
      });
    }
  }, []);
  return (
    <section
      id="gateway-hero"
      className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] xl:min-h-[95vh] flex items-center justify-center bg-transparent px-4 sm:px-8 md:px-12 lg:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-10 sm:pb-12 md:pb-14 lg:pb-20 select-none animate-fade-in"
    >
      {/* 
        PREMIUM FULL-SCREEN VIDEO BACKDROP
        An immersive video background showcasing Tagbilaran tourism
      */}
      <div 
        id="hero-background-media" 
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#0c180b] via-[#142813] to-[#0d1b0c]"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter saturate-[1.15] brightness-[0.8] contrast-[1.05]"
          style={{ objectPosition: "center bottom" }}
        >
          <source src="/WEBM/tagb (2).webm" type="video/webm" />
        </video>
        
        {/* Soft edge gradients and atmospheric overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#152614]/50 via-transparent to-[#152614]/65 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#32e875]/12 to-transparent z-25 pointer-events-none" />
        
        {/* Floating atmospheric sunbeam of color to enrich scene */}
        <div className="absolute top-1/4 right-[25%] w-96 h-96 rounded-full bg-[#FFD54F]/5 blur-[120px] mix-blend-screen pointer-events-none z-15 animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-[20%] w-80 h-80 rounded-full bg-[#32e875]/8 blur-[100px] mix-blend-screen pointer-events-none z-15 animate-float-slow" />
        
        {/* Subtle floating light motes / golden embers */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-[#FFD54F]/40 blur-[1px] animate-float-slow pointer-events-none z-20" />
        <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 rounded-full bg-[#32e875]/40 blur-[1px] animate-float-reverse pointer-events-none z-20" />
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 rounded-full bg-white/30 blur-[1px] animate-float-slow pointer-events-none z-20" />
      </div>

      {/* 
        PREMIUM DYNAMIC IMAGE SEPARATOR
        Uses public/FILLERS/divider2-1.png as the separator,
        carefully styled to be perfectly proportioned and seamless.
      */}
      <img 
        src="/FILLERS/divider2-1.png"
        alt="Heritage Separator Curve"
        className="absolute bottom-[-2px] left-0 w-full overflow-hidden pointer-events-none z-32 h-[11px] sm:h-[16px] md:h-[21px] lg:h-[28px] object-fill select-none"
        id="hero-bottom-artwork-separator"
        referrerPolicy="no-referrer"
        loading="lazy"
      />

      {/* FOREGROUND MAIN TEXT CONTENT - Center-aligned and full width on ultra wide displays */}
      <div className="relative z-40 w-full max-w-none flex flex-col items-center justify-center text-center mx-auto px-4" id="hero-main-content">
        {/* Primary Page Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-[7.8vw] sm:text-[8vw] md:text-[7.2vw] lg:text-[9.5vw] xl:text-[9vw] 2xl:text-[12.5rem] font-black -tracking-[0.01em] text-white leading-none block uppercase text-center w-full whitespace-nowrap relative -left-[0.8%] sm:-left-[1.2%] md:-left-[1.5%] lg:-left-[1.8%] xl:-left-[2%]"
          style={{ fontFamily: "'Cranio', sans-serif" }}
          id="hero-main-headline"
        >
          <span className="inline-block transform scale-y-[1.12] origin-center text-center w-full">
            TAGBILARAN CITY
          </span>
        </motion.h1>

        {/* Subtitle with elegant Moderniz font inside hero */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="font-moderniz text-xs sm:text-sm md:text-base lg:text-xl font-semibold tracking-widest text-[#32e875] max-w-4xl mx-auto mt-2.5 sm:mt-3 md:mt-3.5 lg:mt-4 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.98)] text-center block w-full uppercase"
          id="hero-subtitle"
        >
          CITY OF PEACE AND FRIENDSHIP
        </motion.p>
      </div>
    </section>
  );
}

