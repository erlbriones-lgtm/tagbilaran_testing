import React, { useState, useEffect, useRef } from "react";
import ImageWithSkeleton from "./ImageWithSkeleton";

interface ConfettiPiece {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: string;
  color: string;
  type: "rect" | "circle" | "ribbon" | "triangle";
  horizontalMovement: string;
}

interface FloatingEmoji {
  id: number;
  char: string;
  left: string;
  delay: string;
  duration: string;
  size: string;
}

export default function Saulog() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [floatingEmojis, setFloatingEmojis] = useState<FloatingEmoji[]>([]);
  
  // Web Audio Synthesizer for high-energy Visayan Street-Dance Festival Beats
  const [isVibeActive, setIsVibeActive] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const nextNoteTimeRef = useRef(0);
  const currentStepRef = useRef(0);
  const timerIdRef = useRef<number | null>(null);

  const tempo = 126; // High energy street dancing tempo (BPM)
  const secondsPerBeat = 60.0 / tempo;
  const sixteenthNoteDuration = secondsPerBeat / 4;

  useEffect(() => {
    // Colors inspired by the official Saulog cultural brand:
    // Emerald Green, Gold Yellow, Deep Festival Red, Sky Blue, and Vibrant Orange
    const saulogColors = [
      "#018A2B", // Emerald Green
      "#FFD700", // Gold Yellow
      "#D91E1E", // festival Red
      "#00AEEF", // Sky Blue
      "#FF5B00", // Vibrant Orange
      "#FFAA00", // Warm Yellow-Orange
      "#10B981"  // Bright Teal Green
    ];

    const types: ("rect" | "circle" | "ribbon" | "triangle")[] = ["rect", "circle", "ribbon", "triangle"];

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const confettiCount = isMobile ? 25 : 75;

    const pieces = Array.from({ length: confettiCount }).map((_, idx) => {
      const left = `${Math.random() * 100}%`;
      const delay = `${Math.random() * 8}s`;
      const duration = `${Math.random() * 6 + 6}s`; // Gentle 6s to 12s descent
      const size = `${Math.random() * 8 + 6}px`; // Sized between 6px and 14px
      const color = saulogColors[idx % saulogColors.length];
      const type = types[idx % types.length];
      const horizontalMovement = `${Math.random() * 60 - 30}px`; // Gentle sway

      return {
        id: idx,
        left,
        delay,
        duration,
        size,
        color,
        type,
        horizontalMovement
      };
    });

    setConfetti(pieces);
  }, []);

  // Set up floating celebration elements when Vibe is active
  useEffect(() => {
    if (isVibeActive) {
      const emojiOptions = ["🥁", "🎺", "🎷", "💃", "🌟", "🎉", "🔥", "👑"];
      const count = 18;
      const newEmojis = Array.from({ length: count }).map((_, idx) => ({
        id: Date.now() + idx,
        char: emojiOptions[idx % emojiOptions.length],
        left: `${10 + Math.random() * 80}%`,
        delay: `${Math.random() * 4}s`,
        duration: `${Math.random() * 3 + 4}s`,
        size: `${Math.random() * 14 + 18}px`
      }));
      setFloatingEmojis(newEmojis);
    } else {
      setFloatingEmojis([]);
    }
  }, [isVibeActive]);

  // Audio synthesis triggers
  const getAudioContext = (): AudioContext => {
    if (!audioContextRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      audioContextRef.current = new AudioCtx();
    }
    return audioContextRef.current;
  };

  const playKick = (ctx: AudioContext, time: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.setValueAtTime(160, time);
    osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.25);

    gain.gain.setValueAtTime(0.85, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.25);

    osc.start(time);
    osc.stop(time + 0.28);
  };

  const playSnare = (ctx: AudioContext, time: number) => {
    const bufferSize = ctx.sampleRate * 0.12;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1100;

    const gain = ctx.createGain();
    noiseSource.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    gain.gain.setValueAtTime(0.35, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.12);

    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.frequency.setValueAtTime(190, time);
    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    
    oscGain.gain.setValueAtTime(0.25, time);
    oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.08);

    noiseSource.start(time);
    noiseSource.stop(time + 0.12);
    osc.start(time);
    osc.stop(time + 0.08);
  };

  const playTom = (ctx: AudioContext, time: number, freq: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.setValueAtTime(freq, time);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.45, time + 0.14);

    gain.gain.setValueAtTime(0.45, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.14);

    osc.start(time);
    osc.stop(time + 0.15);
  };

  const playRimshot = (ctx: AudioContext, time: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.setValueAtTime(950, time);
    gain.gain.setValueAtTime(0.2, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.04);

    osc.start(time);
    osc.stop(time + 0.05);
  };

  const scheduleNextNote = () => {
    const ctx = getAudioContext();
    while (nextNoteTimeRef.current < ctx.currentTime + 0.1) {
      const time = nextNoteTimeRef.current;
      const step = currentStepRef.current;

      // Authentic syncopated Visayan Street Dancing Festival rhythm:
      // Step sequencer on 16th notes
      if (step === 0 || step === 4 || step === 8 || step === 10 || step === 12) {
        playKick(ctx, time);
      }
      
      if (step === 4 || step === 12) {
        playSnare(ctx, time);
      }

      if (step === 0 || step === 3 || step === 8 || step === 11) {
        playTom(ctx, time, 400); // High Tom accents
      }
      if (step === 2 || step === 6 || step === 10 || step === 14) {
        playTom(ctx, time, 290); // Mid Tom accents
      }
      
      if (step === 1 || step === 5 || step === 9 || step === 13 || step === 15) {
        playRimshot(ctx, time); // Fast woodblock / cowbell taps
      }

      nextNoteTimeRef.current += sixteenthNoteDuration;
      currentStepRef.current = (step + 1) % 16;
    }
  };

  const startVibeBeats = () => {
    try {
      const ctx = getAudioContext();
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      nextNoteTimeRef.current = ctx.currentTime;
      currentStepRef.current = 0;

      if (timerIdRef.current) {
        window.clearInterval(timerIdRef.current);
      }

      timerIdRef.current = window.setInterval(() => {
        scheduleNextNote();
      }, 25);
    } catch (err) {
      console.warn("Audio Context launch failed:", err);
    }
  };

  const stopVibeBeats = () => {
    if (timerIdRef.current) {
      window.clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
  };

  const handleToggleVibe = () => {
    if (isVibeActive) {
      stopVibeBeats();
      setIsVibeActive(false);
    } else {
      setIsVibeActive(true);
      startVibeBeats();
    }
  };

  useEffect(() => {
    return () => {
      if (timerIdRef.current) {
        window.clearInterval(timerIdRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <div className="w-full bg-white select-none relative overflow-hidden" id="saulog-view-root">
      
      {/* Falling Confetti Layer - Pointer events none so it doesn't block interactions */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden" id="saulog-confetti-container">
        {confetti.map((piece) => {
          const isCircle = piece.type === "circle";
          const isTriangle = piece.type === "triangle";
          
          let pieceStyle: React.CSSProperties = {
            position: "absolute",
            top: "-20px",
            left: piece.left,
            animationDelay: piece.delay,
            animationDuration: isVibeActive ? `${parseFloat(piece.duration) * 0.6}s` : piece.duration, // Falls faster in active vibe!
            willChange: "transform, opacity"
          };

          if (isTriangle) {
            pieceStyle = {
              ...pieceStyle,
              width: 0,
              height: 0,
              borderLeft: `${parseFloat(piece.size) / 2}px solid transparent`,
              borderRight: `${parseFloat(piece.size) / 2}px solid transparent`,
              borderBottom: `${piece.size} solid ${piece.color}`,
            };
          } else if (isCircle) {
            pieceStyle = {
              ...pieceStyle,
              width: piece.size,
              height: piece.size,
              backgroundColor: piece.color,
              borderRadius: "50%",
            };
          } else {
            pieceStyle = {
              ...pieceStyle,
              width: piece.size,
              height: `${parseFloat(piece.size) * (piece.type === "ribbon" ? 1.8 : 1.2)}px`,
              backgroundColor: piece.color,
              borderRadius: piece.type === "ribbon" ? "1px" : "2px"
            };
          }

          return (
            <div
              key={piece.id}
              style={pieceStyle}
              className="animate-saulog-fall"
            />
          );
        })}

        {/* Rising Celebration Emojis when Vibe is Active */}
        {floatingEmojis.map((emoji) => (
          <div
            key={emoji.id}
            style={{
              position: "absolute",
              bottom: "-50px",
              left: emoji.left,
              fontSize: emoji.size,
              animationDelay: emoji.delay,
              animationDuration: emoji.duration,
              willChange: "transform, opacity"
            }}
            className="animate-float-rise pointer-events-none text-center select-none z-30"
          >
            {emoji.char}
          </div>
        ))}
      </div>

      {/* Embedded CSS rules for high-performance GPU animations */}
      <style>{`
        @keyframes saulogFall {
          0% {
            transform: translateY(0vh) rotate(0deg) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(105vh) rotate(720deg) translateX(40px);
            opacity: 0;
          }
        }

        @keyframes floatRise {
          0% {
            transform: translateY(0) scale(0.4) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.95;
            transform: translateY(-50px) scale(1) rotate(10deg);
          }
          85% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(-105vh) scale(0.65) rotate(120deg);
            opacity: 0;
          }
        }

        .animate-saulog-fall {
          animation-name: saulogFall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        .animate-float-rise {
          animation-name: floatRise;
          animation-iteration-count: infinite;
          animation-timing-function: ease-out;
        }

        .pulse-glow-gold {
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
          animation: goldPulse 2s infinite ease-in-out;
        }

        @keyframes goldPulse {
          0%, 100% {
            box-shadow: 0 0 12px rgba(255, 215, 0, 0.4);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 25px rgba(255, 215, 0, 0.85);
            transform: scale(1.03);
          }
        }
      `}</style>

      {/* Saulog Hero Section */}
      <div
        className="relative min-h-[30vh] sm:min-h-[45vh] md:min-h-[60vh] flex items-center justify-center bg-[#0d210c] overflow-hidden"
        id="saulog-hero"
      >
        <div id="saulog-bg-media" className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center bg-[#0d210c]">
          <ImageWithSkeleton
            src="/FILLERS/SAULOGBG.png"
            alt="Saulog Full Screen Background"
            className="absolute inset-0 w-full h-full object-cover"
            containerClassName="absolute inset-0 w-full h-full"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>

        <img
          src="/FILLERS/divider2-1.png"
          alt="Saulog curve separator"
          className="absolute bottom-[-1px] left-0 w-full overflow-hidden pointer-events-none z-10 h-[16px] sm:h-[24px] md:h-[32px] object-fill"
          id="saulog-bottom-separator"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>

      <div className="w-full bg-white flex flex-col items-center px-6 sm:px-12 py-16 sm:py-24" id="saulog-content-canvas">
        <div className="max-w-4xl text-center flex flex-col items-center" id="saulog-header-block">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-normal text-[#006400] uppercase text-center mb-2" id="saulog-heading-text">
            SAULOG TAGBILARAN
          </h2>
          <p className="font-sans text-xs sm:text-sm font-semibold tracking-widest text-[#006400] uppercase mb-8" id="saulog-subheading-text">
            ONE FAMILY, ONE CITY
          </p>

          <div className="space-y-8 text-[#006400]/90 text-sm sm:text-base md:text-lg leading-relaxed font-sans text-center font-normal max-w-3xl px-4" id="saulog-body-text-wrap">
            <p>
              Saulog Tagbilaran is the annual celebration of Tagbilaran City, the capital of Bohol, showcasing the rich culture, heritage, and community spirit of its people. The word <span className="font-sans italic font-semibold text-[#186a30]">"Saulog"</span> means to celebrate in Visayan, and this festival does exactly that, bringing together locals and visitors for a week of street dancing, cultural shows, concerts, trade fairs, and more.
            </p>
            <p>
              Saulog 2026 is set to be a bigger and more festive celebration than ever. Whether you're a proud Tagbilaranon or a visitor exploring Bohol, this is one event you don't want to miss. Check out the official website for the latest event schedules, updates, and announcements.
            </p>
          </div>



          <div className="mt-12 flex justify-center w-full" id="saulog-website-link-wrap">
            <a
              href="https://saulogtagbilaran.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFC400] hover:from-[#FFE135] hover:to-[#FFD700] text-[#05461a] font-sans text-sm sm:text-base font-black uppercase tracking-widest rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center border-2 border-transparent hover:border-[#05461a]/20"
              id="saulog-cta-button"
            >
              <span>🌐 Visit the Official Saulog Tagbilaran Website</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
