import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface HeroProps {
  onSwitchToHeritage: () => void;
  weatherDescription?: string;
  temperature?: number;
}

export default function Hero({ onSwitchToHeritage, weatherDescription, temperature }: HeroProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);

  const attemptUnmute = () => {
    if (videoRef.current && !hasInteracted) {
      try {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {
          // If play fails, keep muted
          setIsMuted(true);
        });
        setIsMuted(false);
        setHasInteracted(true);
      } catch (e) {
        setIsMuted(true);
      }
    }
  };

  const muteVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  useEffect(() => {
    // Try to unmute immediately
    attemptUnmute();

    // Try again after video loads
    const handleLoadedData = () => {
      attemptUnmute();
    };

    // Try again after a delay
    const timeoutId = setTimeout(attemptUnmute, 500);

    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', handleLoadedData);
    }

    // Add global click handler to unmute on first interaction
    const handleGlobalClick = () => {
      if (!hasInteracted) {
        attemptUnmute();
      }
    };

    document.addEventListener('click', handleGlobalClick, { once: true });

    // Scroll detection to mute when hero section is out of view
    const handleScroll = () => {
      if (heroSectionRef.current) {
        const rect = heroSectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isVisible && !isMuted) {
          muteVideo();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      if (video) {
        video.removeEventListener('loadeddata', handleLoadedData);
      }
      document.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasInteracted, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };
  return (
    <section
      id="gateway-hero"
      ref={heroSectionRef}
      className="relative min-h-[42vh] sm:min-h-[48vh] md:min-h-[56vh] lg:min-h-[75vh] xl:min-h-[82vh] flex items-center justify-center bg-transparent px-4 sm:px-8 md:px-12 lg:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-10 sm:pb-12 md:pb-14 lg:pb-20 select-none animate-fade-in"
    >
      {/* 
        PREMIUM FULL-SCREEN VIDEO BACKDROP
        An immersive video background showcasing Tagbilaran tourism
      */}
      <div 
        id="hero-background-media" 
        className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#0c180b] via-[#142813] to-[#0d1b0c]"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter saturate-[1.15] brightness-[0.45] contrast-[1.05]"
          style={{ objectPosition: "center 30%" }}
        >
          <source src="/WEBM/final tagbilaran tourism.webm" type="video/webm" />
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

        {/* Mute Button - Bottom Right */}
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 group"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
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

