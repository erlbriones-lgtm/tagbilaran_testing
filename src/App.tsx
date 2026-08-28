import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  MapPin, 
  ChevronRight, 
  ChevronLeft,
  Send, 
  Compass, 
  BookOpen, 
  CheckCircle, 
  HelpCircle, 
  Clock, 
  Globe, 
  Award, 
  X, 
  RefreshCw,
  Terminal,
  Layers,
  Heart,
  Wifi,
  Battery,
  Signal,
  Phone,
  Eye,
  Target,
  Facebook
} from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Downloadables from "./components/Downloadables";
import HeritageMarquee from "./components/HeritageMarquee";
import Shops from "./components/Shops";
import HeritageDetailView from "./components/HeritageDetailView";
import { TagbilaranDashboard } from "./components/TagbilaranDashboard";
import Saulog from "./components/Saulog";
import Travel from "./components/Travel";
import Footer from "./components/Footer";
import { HeritageEcosystemSection } from "./components/HeritageEcosystemSection";
import { BarangayEcosystemSection } from "./components/BarangayEcosystemSection";
import { SaulogEcosystemSection } from "./components/SaulogEcosystemSection";
import Growth from "./components/Growth";
import Contact from "./components/Contact";
import HomeMarquee from "./components/HomeMarquee";
import PageSkeleton from "./components/PageSkeleton";

import { tagbilaranLandmarks, tagbilaranBarangays } from "./data";
import { detailedHeritageList } from "./data/heritageDetails";
import { Landmark, LocalStatusResponse, Barangay } from "./types";

interface MilestoneData {
  year: string;
  title: string;
  description: string;
  images: string[];
}

interface TimelineMilestoneProps {
  key?: string;
  milestone: MilestoneData;
  isEven: boolean;
  isMobile: boolean;
  isTablet: boolean;
}

const TimelineMilestone = React.memo(function TimelineMilestone({ milestone, isEven, isMobile, isTablet }: TimelineMilestoneProps) {
  const [isInViewCenter, setIsInViewCenter] = useState(false);

  return (
    <div 
      className={`relative flex flex-col md:flex-row items-center justify-between w-full md:max-w-5xl mx-auto px-4 md:px-6 lg:px-8 gap-8 md:gap-12 ${
         isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Dot Indicator */}
      <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-8 w-4 h-4 rounded-full bg-white border-4 border-emerald-600 shadow-md z-10" />

      {/* Sentinel to monitor intersection with the exact middle of the screen */}
      <motion.div
        onViewportEnter={() => setIsInViewCenter(true)}
        onViewportLeave={() => setIsInViewCenter(false)}
        viewport={{ once: false, margin: "-30% 0px -30% 0px" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-1 pointer-events-none z-0"
      />

      {/* Staggered card container */}
      <div className="w-full md:w-[45%] lg:w-[45%] text-left pl-14 md:pl-0">
        <div className="relative w-full">
          {/* Pop-Out Backdrop Photo 1 (Top Left) */}
          {milestone.images?.[0] && (
            <motion.img
              src={milestone.images[0]}
              alt={`${milestone.year} archival reference 1`}
              referrerPolicy="no-referrer"
              className={`absolute z-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-26 lg:h-26 xl:w-32 xl:h-32 object-cover rounded-2xl shadow-xl border-2 border-white pointer-events-none select-none block left-2 top-2 ${
                isEven 
                  ? "md:right-full md:left-auto md:mr-36" 
                  : "md:left-full md:right-auto md:ml-20"
              } lg:right-full lg:left-auto lg:mr-6 xl:mr-10 md:top-6 lg:top-1/4`}
              style={{ willChange: "transform, opacity" }}
              animate={isInViewCenter ? "visible" : "initial"}
              variants={{
                initial: { 
                  opacity: 0, 
                  scale: 0.1, 
                  rotate: -25, 
                  x: isMobile ? 10 : 30, 
                  y: 0, 
                  zIndex: 0 
                },
                visible: { 
                  opacity: 0.95, 
                  scale: 1.12, 
                  rotate: -12,
                  x: isMobile ? -6 : 0, 
                  y: isMobile ? -55 : (isTablet ? -20 : -135), 
                  zIndex: 30
                }
              }}
              transition={{ type: "spring", stiffness: 125, damping: 18, restDelta: 0.01 }}
            />
          )}

          {/* Pop-Out Backdrop Photo 2 (Top Right) */}
          {milestone.images?.[1] && (
            <motion.img
              src={milestone.images[1]}
              alt={`${milestone.title} history record 1`}
              referrerPolicy="no-referrer"
              className={`absolute z-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-26 lg:h-26 xl:w-32 xl:h-32 object-cover rounded-xl sm:rounded-2xl shadow-xl border-2 border-white pointer-events-none select-none block right-2 top-2 ${
                isEven 
                  ? "md:right-full md:left-auto md:mr-20" 
                  : "md:left-full md:right-auto md:ml-36"
              } lg:left-full lg:right-auto lg:ml-6 xl:ml-10 md:top-6 lg:top-1/4`}
              style={{ willChange: "transform, opacity" }}
              animate={isInViewCenter ? "visible" : "initial"}
              variants={{
                initial: { 
                  opacity: 0, 
                  scale: 0.1, 
                  rotate: 25, 
                  x: isMobile ? -10 : -30, 
                  y: 0, 
                  zIndex: 0 
                },
                visible: { 
                  opacity: 0.95, 
                  scale: 1.12, 
                  rotate: 10,
                  x: isMobile ? 6 : 0, 
                  y: isMobile ? -55 : (isTablet ? -25 : -135), 
                  zIndex: 30
                }
              }}
              transition={{ type: "spring", stiffness: 130, damping: 18, restDelta: 0.01 }}
            />
          )}

          <motion.div
            whileHover={{ y: -4, borderColor: "rgba(5,70,26,0.3)", boxShadow: "0 15px 30px rgba(5,70,26,0.06)" }}
            className="relative p-6 sm:p-7 rounded-2xl bg-[#FCFBF8] border border-stone-200/60 transition-all duration-300 shadow-sm overflow-hidden z-10 text-center flex flex-col items-center justify-center"
          >
            {/* Pure emerald-to-forest-green linear accent line at top */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500/20 via-[#05461a] to-emerald-500/20" />

            <div className="flex items-center gap-3 w-full mb-3 justify-center">
              <span className="h-px bg-emerald-600/20 flex-grow max-w-[40px]" />
              <span className="font-sans text-3xl font-black text-emerald-800 tracking-tighter leading-none">
                {milestone.year}
              </span>
              <span className="h-px bg-emerald-600/20 flex-grow max-w-[40px]" />
            </div>

            <h4 className="font-sans font-extrabold text-[#05461a] text-lg tracking-tight mb-2 leading-snug text-center">
              {milestone.title}
            </h4>
            <p className="text-stone-500 text-xs sm:text-sm leading-relaxed font-medium text-center">
              {milestone.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* TIMELINE image container placed in/beside the empty white area */}
      <div className="w-full md:w-[45%] lg:w-[45%] pl-14 md:pl-0 mt-4 md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-md hover:shadow-xl transition-all duration-300"
        >
          <img 
            src={milestone.year === "1767" ? "/TIMELINE/1765.webp" : `/TIMELINE/${milestone.year}.webp`}
            alt={`${milestone.title} timeline representation`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  );
});

export default function App() {
  // Navigation / Theme Styling Switch State
  const [activeView, setActiveView] = useState<"home" | "growth" | "heritage" | "shops" | "downloadables" | "barangay" | "saulog" | "travel" | "about" | "contact">("home");
  const [selectedDetailedHeritageId, setSelectedDetailedHeritageId] = useState<string | null>(null);
  const [mayorImageLoaded, setMayorImageLoaded] = useState(false);

  // Preload and cache checking for Mayor's portrait image to prevent flicker if cached
  useEffect(() => {
    const img = new Image();
    img.src = "/FILLERS/FRAMEMayor.webp";
    if (img.complete) {
      setMayorImageLoaded(true);
    } else {
      img.onload = () => setMayorImageLoaded(true);
    }
  }, []);

  // Elegant structural skeleton loader state
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [loadingView, setLoadingView] = useState<"home" | "growth" | "heritage" | "shops" | "downloadables" | "barangay" | "saulog" | "travel" | "about" | "contact" | null>(null);

  useEffect(() => {
    // When activeView changes, scroll to top and trigger custom shimmery skeleton load state for 600ms
    setIsPageLoading(true);
    setLoadingView(activeView);
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => {
      setIsPageLoading(false);
      setLoadingView(null);
    }, 600);
    return () => clearTimeout(timer);
  }, [activeView]);

  // Synchronize state changes -> URL address bar
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const validViews = ["home", "growth", "heritage", "shops", "downloadables", "barangay", "saulog", "travel", "about", "contact"];
    
    const currentView = params.get("view") || "home";
    const currentHeritageId = params.get("heritageId");
    
    if (activeView !== currentView || selectedDetailedHeritageId !== currentHeritageId) {
      if (activeView === "home") {
        params.delete("view");
      } else if (validViews.includes(activeView)) {
        params.set("view", activeView);
      }
      
      if (selectedDetailedHeritageId) {
        params.set("heritageId", selectedDetailedHeritageId);
      } else {
        params.delete("heritageId");
      }
      
      const newSearch = params.toString();
      const newUrl = `${window.location.pathname}${newSearch ? "?" + newSearch : ""}`;
      window.history.pushState(null, "", newUrl);
    }
  }, [activeView, selectedDetailedHeritageId]);

  // Synchronize URL -> state (on mount and back/forward browser actions)
  useEffect(() => {
    const handleUrlSync = () => {
      const params = new URLSearchParams(window.location.search);
      const viewParam = params.get("view") as any;
      const heritageParam = params.get("heritageId");
      const validViews = ["home", "growth", "heritage", "shops", "downloadables", "barangay", "saulog", "travel", "about", "contact"];
      
      if (viewParam && validViews.includes(viewParam)) {
        setActiveView(viewParam);
      } else {
        setActiveView("home");
      }
      
      setSelectedDetailedHeritageId(heritageParam);
    };

    handleUrlSync();

    window.addEventListener("popstate", handleUrlSync);
    return () => window.removeEventListener("popstate", handleUrlSync);
  }, []);

  const timelineScrollRef = useRef<HTMLDivElement>(null);

  // High-End Mouse Drag scroll state for timeline
  const [timelineDragging, setTimelineDragging] = useState(false);
  const [timelineStartX, setTimelineStartX] = useState(0);
  const [timelineScrollLeft, setTimelineScrollLeft] = useState(0);

  const handleTimelineMouseDown = (e: React.MouseEvent) => {
    if (!timelineScrollRef.current) return;
    setTimelineDragging(true);
    setTimelineStartX(e.pageX - timelineScrollRef.current.offsetLeft);
    setTimelineScrollLeft(timelineScrollRef.current.scrollLeft);
  };

  const handleTimelineMouseLeave = () => {
    setTimelineDragging(false);
  };

  const handleTimelineMouseUp = () => {
    setTimelineDragging(false);
  };

  const handleTimelineMouseMove = (e: React.MouseEvent) => {
    if (!timelineDragging || !timelineScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - timelineScrollRef.current.offsetLeft;
    // Walk scaling is 1.5 for immediate, natural response rate
    const walk = (x - timelineStartX) * 1.5;
    timelineScrollRef.current.scrollLeft = timelineScrollLeft - walk;
  };

  // Core App states
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeLandmark, setActiveLandmark] = useState<Landmark | null>(tagbilaranLandmarks[0]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  // Local temperature sync for dynamic Hero
  const [liveTemp, setLiveTemp] = useState<number>(31);
  const [liveWind, setLiveWind] = useState<string>("Gentle breeze");

  // Fetch local status metrics silently on load
  useEffect(() => {
    const checkLiveStats = async () => {
      try {
        const res = await fetch("/api/local-status");
        if (res.ok) {
          const data: LocalStatusResponse = await res.json();
          setLiveTemp(data.weather.temperature);
          setLiveWind(data.weather.condition);
        }
      } catch (e) {
        // Fallbacks already in place
      }
    };
    checkLiveStats();
  }, []);

  const categories = ["All", "Heritage"];

  const filteredLandmarks = selectedCategory === "All"
    ? tagbilaranLandmarks
    : tagbilaranLandmarks.filter(item => item.category === selectedCategory);

  const handleNextLandmark = () => {
    if (!activeLandmark || filteredLandmarks.length === 0) return;
    const currentIndex = filteredLandmarks.findIndex(l => l.id === activeLandmark.id);
    const nextIndex = (currentIndex + 1) % filteredLandmarks.length;
    setActiveLandmark(filteredLandmarks[nextIndex]);
  };

  const handlePrevLandmark = () => {
    if (!activeLandmark || filteredLandmarks.length === 0) return;
    const currentIndex = filteredLandmarks.findIndex(l => l.id === activeLandmark.id);
    const prevIndex = (currentIndex - 1 + filteredLandmarks.length) % filteredLandmarks.length;
    setActiveLandmark(filteredLandmarks[prevIndex]);
  };

  // Auto-slide effect for the Heritage Landmarks Slider
  useEffect(() => {
    if (activeView !== "home" || selectedDetailedHeritageId) return;

    const interval = setInterval(() => {
      handleNextLandmark();
    }, 15000); // Transitions every 15 seconds

    return () => clearInterval(interval);
  }, [activeView, selectedDetailedHeritageId, activeLandmark, filteredLandmarks]);

  // Exact vertical timeline events as seen/inspired by heritagetimeline.jpg
  const heritageMilestones = [
    {
      year: "1565",
      title: "Blood Compact Between Datu Sikatuna and Miguel Lopez de Legazpi",
      description: "A monumental event signifying foreign friendship and ancestral peace, establishing a sacred covenant sealed with blood in Bohol Barangay.",
      images: [
        "/webp/Blood%20Compact%20Shrine%20(2).webp",
        "/webp/Blood%20Compact%20Shrine%20(28).webp",
        "/webp/Blood%20Compact%20Shrine%20(31).webp",
        "/webp/Blood%20Compact%20Shrine%20(32).webp"
      ]
    },
    {
      year: "1595",
      title: "Construction of Baclayon Church",
      description: "Initiated by Jesuit missionaries, this limestone construction becomes one of the premier ancestral stone cathedrals in the Philippines.",
      images: [
        "/TIMELINE/baclayon church.webp",
        "/TIMELINE/baclayon church 1.webp"
      ]
    },
    {
      year: "1767",
      title: "Cathedral of St. Joseph the Worker Established",
      description: "Built in the civic heart of Tagbilaran, this majestic limestone and wood neoclassical cathedral becomes a fortress of heritage.",
      images: [
        "/HERITAGES/cathedral-st-joseph-worker-historic/Cathedral of St. Joseph the Worker 1.webp",
        "/HERITAGES/cathedral-st-joseph-worker-historic/Cathedral of St. Joseph the Worker 2.webp"
      ]
    },
    {
      year: "1966",
      title: "Charter Day of Tagbilaran City",
      description: "Presidential recognition as a chartered city, formalizing Tagbilaran as the administrative, cultural, and craft capital of Bohol.",
      images: [
        "/TIMELINE/charterday.webp",
        "/TIMELINE/CITY-HALL.webp"
      ]
    },
    {
      year: "2023",
      title: "Global Creative City Initiative nomination",
      description: "Nominated directly for Crafts and Folk Arts, showcasing classic terracotta clay potteries and ancestral Dampas hand weaving guilds.",
      images: [
        "/TIMELINE/tagb.webp",
        "/TIMELINE/sljhitof.webp"
      ]
    },
    {
      year: "2026",
      title: "Creative Tech Hub Launch",
      description: "Uniting physical artisanry with high performance digital spaces to empower the next wave of local sustainable designers.",
      images: [
        "/TIMELINE/mutya.webp",
        "/TIMELINE/maoyjpg.webp"
      ]
    }
  ];





  const getBackgroundStyle = () => {
    // Elegant, highly vibrant cohesive background overlay optimized for premium brightness:
    // Base is a rich linear-gradient from Cool Forest/Emerald Green (#32e875) to Pine Green (#05461a) at 95vh, and down to Cool Deep Spruce Green (#02200a).
    // On top, we overlay beautiful glowing radial circles using softer, extremely polished white and green gradients.
    const gradientCircles = "radial-gradient(circle at 10% 15%, rgba(255, 255, 255, 0.24) 0%, transparent 50%), radial-gradient(circle at 85% 30%, rgba(50, 232, 117, 0.42) 0%, transparent 65%), radial-gradient(circle at 20% 70%, rgba(5, 70, 26, 0.38) 0%, transparent 60%), radial-gradient(circle at 80% 85%, rgba(255, 255, 255, 0.18) 0%, transparent 50%), linear-gradient(to bottom, #32e875 0%, #05461a 95vh, #02200a 100%)";
    
    if (selectedDetailedHeritageId || activeView === "heritage" || activeView === "travel" || activeView === "downloadables" || activeView === "growth" || activeView === "contact") {
      return "#ffffff";
    }
    switch (activeView) {
      case "home":
        return "radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(50, 232, 117, 0.3) 0%, transparent 60%), linear-gradient(to bottom, #114216 0%, #032107 100%)";
      case "growth":
        return "#ffffff";
      case "heritage":
        return "#ffffff";
      case "shops":
        return "#ffffff";
      case "downloadables":
        return "#ffffff";
      case "barangay":
        return "#ffffff";
      case "saulog":
        return "#ffffff";
      case "travel":
        return "#ffffff";
      case "contact":
        return "#ffffff";
      case "about":
        return "radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.22) 0%, transparent 50%), radial-gradient(circle at 85% 35%, rgba(50, 232, 117, 0.42) 0%, transparent 60%), radial-gradient(circle at 20% 70%, rgba(5, 70, 26, 0.38) 0%, transparent 60%), radial-gradient(circle at 75% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%), linear-gradient(to bottom, #32e875 0%, #05461a 95vh, #02200a 100%)";
      default:
        return gradientCircles;
    }
  };

  const getFooterBackgroundStyle = () => {
    // All the footers should be the darkest color here (#02200a)
    return "#02200a";
  };

  const getFooterBorderColor = () => {
    // Subtle border using Dark Spruce for a gorgeous clean separation
    return "rgba(30, 68, 30, 0.4)";
  };

  return (
    <div 
      className={`min-h-screen transition-all duration-500 font-sans overflow-x-hidden relative ${(selectedDetailedHeritageId || activeView === "heritage" || activeView === "travel" || activeView === "barangay" || activeView === "saulog" || activeView === "shops" || activeView === "downloadables") ? "text-[#05461a] bg-white animate-fade-in" : "text-white"}`} 
      style={{ background: getBackgroundStyle() }}
      id="digital-tourism-root"
    >
      
      {/* Background Decorative atmosphere layers calibrated per view */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" id="ambient-layers-luminous">
        {activeView === "home" && !selectedDetailedHeritageId && (
          <>
            <div className="absolute top-[-5%] left-[-10%] w-[650px] h-[650px] rounded-full blur-[80px] animate-float-1 will-change-transform translate-z-0 pointer-events-none" style={{ background: "rgba(17, 152, 34, 0.32)" }} />
            <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[80px] animate-float-2 will-change-transform translate-z-0 pointer-events-none" style={{ background: "rgba(17, 152, 34, 0.3)" }} />
            <div className="absolute top-[40%] left-[20%] w-[500px] h-[500px] rounded-full blur-[70px] animate-float-1 will-change-transform translate-z-0 pointer-events-none" style={{ background: "rgba(42, 114, 33, 0.18)" }} />
          </>
        )}



        {activeView === "about" && !selectedDetailedHeritageId && (
          <>
            <div className="absolute top-[-5%] left-[-10%] w-[650px] h-[650px] rounded-full blur-[80px] animate-float-1 will-change-transform translate-z-0 pointer-events-none" style={{ background: "rgba(20, 121, 23, 0.22)" }} />
            <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[80px] animate-float-2 will-change-transform translate-z-0 pointer-events-none" style={{ background: "rgba(82, 199, 85, 0.2)" }} />
            <div className="absolute top-[40%] left-[20%] w-[500px] h-[500px] rounded-full blur-[70px] animate-float-1 will-change-transform translate-z-0 pointer-events-none" style={{ background: "rgba(51, 160, 54, 0.16)" }} />
          </>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px]" opacity="0.6" />
      </div>

      {/* Dynamic Header Navbar with matching view controls */}
      <Navbar 
        activeView={selectedDetailedHeritageId ? ("" as any) : activeView} 
        setActiveView={(view) => {
          setSelectedDetailedHeritageId(null);
          setActiveView(view);
        }} 
      />

      {/* Dynamic Main Views container */}
      <AnimatePresence mode="wait">
        {isPageLoading && loadingView ? (
          <motion.div
            key={`skeleton-${loadingView}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PageSkeleton view={loadingView} />
          </motion.div>
        ) : selectedDetailedHeritageId ? (
          <motion.div
            key="heritage-detail-view"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeritageDetailView 
              heritage={detailedHeritageList.find(h => h.id === selectedDetailedHeritageId) || detailedHeritageList[0]}
              onBack={() => {
                setSelectedDetailedHeritageId(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </motion.div>
        ) : activeView === "home" ? (
          <motion.div
            key="home-view"
            initial={{ opacity: 0, y: 40, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.99 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Immersive luxurious resort bedroom view from HOME.jpg */}
            <Hero 
              onSwitchToHeritage={() => setActiveView("heritage")}
              weatherDescription={liveWind}
              temperature={liveTemp}
            />

            {/* MAYOR'S MESSAGE SECTION */}
            <div className="w-full bg-[#004d00] py-10 sm:py-12 md:py-14 lg:py-24 relative overflow-hidden z-20 border-b border-emerald-500/10" id="home-mayors-message">
              
              {/* Decorative background glows */}
              <div className="absolute top-[-20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#FFD54F]/10 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-400/10 blur-[130px] pointer-events-none" />
              
              <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 md:px-10 lg:px-14 xl:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                  
                  {/* Mayor's picture framed and centered with balanced sizing */}
                  <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center justify-center z-10 relative">
                    {!mayorImageLoaded && (
                      <div className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[440px] aspect-[4/5] bg-emerald-950/45 border border-emerald-500/20 rounded-xl flex flex-col items-center justify-center animate-pulse relative overflow-hidden shadow-lg p-6 text-center mb-2">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-800/10 to-transparent" />
                        <Sparkles className="w-7 h-7 text-emerald-400/30 mb-2 animate-bounce" />
                        <div className="h-1.5 w-24 bg-emerald-800/40 rounded-full" />
                      </div>
                    )}
                    <motion.img 
                      src="/FILLERS/MJY.webp" 
                      alt="Mayor Jane Censoria Cajes-Yap portrait" 
                      referrerPolicy="no-referrer"
                      onLoad={() => setMayorImageLoaded(true)}
                      initial={{ opacity: 0, scale: 0.93, filter: "blur(8px)" }}
                      animate={mayorImageLoaded ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.65, ease: "easeOut" }}
                      className="max-h-[240px] sm:max-h-[290px] md:max-h-[340px] lg:max-h-[560px] xl:max-h-[600px] w-auto object-contain drop-shadow-2xl rounded-lg transition-transform duration-300"
                      style={{ display: mayorImageLoaded ? 'block' : 'none' }}
                    />
                  </div>

                  {/* Right side: The Message Content extended to the right */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="lg:col-span-7 xl:col-span-7 text-center lg:text-left space-y-3 sm:space-y-3.5 font-sans z-10 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] flex flex-col items-center lg:items-start w-full"
                  >
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#FFD54F]">
                      Office of the City Mayor
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase leading-tight sm:leading-none pt-1 sm:pt-2 whitespace-normal sm:whitespace-nowrap">
                      Message from the City Mayor
                    </h2>
                    <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#FFD54F] to-transparent lg:from-[#FFD54F] lg:to-transparent rounded-full" />
                    
                    <div className="text-white/90 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed space-y-2.5 sm:space-y-3 font-medium pt-1 sm:pt-2 w-full text-center lg:text-left max-w-2xl lg:max-w-none">
                      <p className="font-bold text-[#FFD54F] text-sm sm:text-base md:text-base lg:text-lg">
                        “Maayong pagbisita!”
                      </p>
                      <p>
                        Warmest greetings and a heartfelt welcome to the City of Tagbilaran, Bohol’s heartbeat and the “City of Peace and Friendship!”
                      </p>
                      <p>
                        As we strive to become a first-world SMART City, we remain deeply committed to sustainable tourism that honors our past while protecting our future.
                      </p>
                      <p>
                        Discover our Heritage Revival Trail solo or with your friends and family. Explore the heritage houses of Sitio Ubos after a stop at the National Museum - Bohol Area Museum, visit the historic St. Joseph the Worker Cathedral, and witness the living traditions of our local artisans accompanied by the music of our homegrown artists. Savor local snacks at the central public market or select your own fresh catch for a favorite local dish.
                      </p>
                      <p>
                        For those seeking the beauty of nature, explore our ecotourism wonders. Visit the Tagbilaran Mangrove Eco-Trail in Barangay Bool or unwind at Cabisea and other public beach resorts. These spaces are designed to be inclusive and accessible, ensuring that everyone—from children to seniors can participate in the life of our community
                      </p>
                      <p>
                        In Tagbilaran, every visit is an opportunity to support a greener and more resilient world. Whether you are exploring our historic landmarks or enjoying a family meal of our traditional delicacies, may you feel the sincere hospitality that defines our city.
                      </p>
                      <p className="font-semibold text-white">
                        Dayon kamo dinhi sa Tagbilaran. Grow your experience in our home!
                      </p>
                      <p className="font-bold text-[#FFD54F] italic text-sm sm:text-base md:text-base lg:text-lg">
                        “Asenso pa more!”
                      </p>
                    </div>

                    <div className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 border-t border-white/10 mt-3 sm:mt-4 md:mt-5 lg:mt-6 max-w-md w-full text-center lg:text-left mx-auto lg:mx-0">
                      <h4 className="font-sans text-sm sm:text-base md:text-lg lg:text-xl font-black text-[#FFD54F] uppercase tracking-wide">
                        Hon. Jane Censoria Cajes-Yap
                      </h4>
                      <p className="text-white/70 text-[10px] sm:text-xs md:text-xs lg:text-sm font-semibold uppercase tracking-wider mt-0.5">
                        City Mayor of Tagbilaran
                      </p>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>

            {/* Discord-style action marquee ribbon placed between Mayor's Message and Heritage Section */}
            <div className="-mt-8 sm:-mt-12 relative z-30">
              <HomeMarquee />
            </div>

            {/* NEW FULL-BLEED HERITAGE ECOSYSTEM SECTION (Aesthetic & Responsive layout matching Screenshot 2026-06-16 090251.jpg) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeritageEcosystemSection onExploreHeritage={() => {
                setActiveView("heritage");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }} />
            </motion.div>

            {/* NEW RESPONSIVE BARANGAY ECOSYSTEM SECTION (Focusing on local communities across 15 barangays) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <BarangayEcosystemSection onExploreBarangays={() => {
                setActiveView("barangay");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }} />
            </motion.div>

            {/* NEW RESPONSIVE SAULOG ECOSYSTEM SECTION (Focusing on local festival culture of Saulog Tagbilaran) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <SaulogEcosystemSection onExploreSaulog={() => {
                setActiveView("saulog");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }} />
            </motion.div>
          </motion.div>
        ) : activeView === "heritage" ? (
          /* HIGH-END INTERACTIVE HISTORIC AND CRAFTS GREEN SLIDER STYLE (inspired by displayher.jpg) */
          <motion.div
            key="heritage-view"
            initial={{ opacity: 0, y: 40, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.99 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="pb-16 w-full flex flex-col items-center"
          >
            {/* DUAL INFINITE MARQUEE CAROUSEL SHOWCASE */}
            <HeritageMarquee onCardClick={(id) => {
              setSelectedDetailedHeritageId(id);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />

            {/* HIGH-END INTERACTIVE TIMELINE PLACED DIRECTLY BELOW THE SLIDE DISPLAY */}
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 mt-16 mb-16 sm:mb-20" id="chronology-timeline">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h3 className="font-sans font-black text-3xl sm:text-4xl text-[#05461a] tracking-tight">
                  Tagbilaran Anchor Timeline
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm mt-3 leading-relaxed font-sans font-medium">
                  Deepen your connection with our long legacy of alliances, resistance, and creative growth by exploring key historical anchor events.
                </p>
              </div>

              {/* Vertical timeline body */}
              <div className="relative w-full text-left py-4" id="timeline-v-body">
                {/* Central Glowing Green Gradient Line */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#05461a] via-emerald-450 to-[#05461a] opacity-80 rounded-full" />

                {/* Loop and render timeline modules */}
                <div className="space-y-36 md:space-y-48 py-8">
                  {heritageMilestones.map((milestone, idx) => {
                     const isEven = idx % 2 === 0;
                     return (
                       <TimelineMilestone 
                         key={milestone.year}
                         milestone={milestone}
                         isEven={isEven}
                         isMobile={isMobile}
                         isTablet={isTablet}
                       />
                     );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        ) : activeView === "shops" ? (
          <motion.div
            key="shops-view"
            initial={{ opacity: 0, y: 40, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.99 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Shops />
          </motion.div>
        ) : activeView === "downloadables" ? (
          <motion.div
            key="downloadables-view"
            initial={{ opacity: 0, y: 40, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.99 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Downloadables />
          </motion.div>
        ) : activeView === "barangay" ? (
          <motion.div
            key="barangay-view"
            initial={{ opacity: 0, y: 40, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.99 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white text-[#05461a] pt-14 pb-0 w-full flex flex-col items-center select-none"
            id="barangay-view"
          >
            <TagbilaranDashboard />
          </motion.div>
        ) : activeView === "saulog" ? (
          <motion.div
            key="saulog-view"
            initial={{ opacity: 0, y: 40, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.99 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Saulog />
          </motion.div>
        ) : activeView === "travel" ? (
          <motion.div
            key="travel-view"
            initial={{ opacity: 0, y: 40, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.99 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Travel />
          </motion.div>
        ) : activeView === "growth" ? (
          <motion.div
            key="growth-view"
            initial={{ opacity: 0, y: 40, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.99 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Growth />
          </motion.div>
        ) : activeView === "contact" ? (
          <motion.div
            key="contact-view"
            initial={{ opacity: 0, y: 40, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.99 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Contact />
          </motion.div>
        ) : (
           /* LUXURIOUS ABOUT TAGBILARAN CITY VIEW */
           <motion.div
             key="about-view"
             initial={{ opacity: 0, y: 40, scale: 0.99 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, y: -40, scale: 0.99 }}
             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
             className="pt-32 pb-24 w-full flex flex-col items-center select-none"
             id="about-view"
           >
             {/* Elegant Top Badge & Hero Title */}
             <div className="max-w-4xl mx-auto text-center px-6 mb-16">
               
               <h1 className="font-sans font-black text-white text-4xl sm:text-6xl tracking-tight leading-none mb-6">
                 Tagbilaran <span className="inline-block text-white pr-3 text-accent-yellow em">City</span>
               </h1>
               <p className="text-white text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans font-medium">
                 Breathe in the living legacy of Bohol's premier creative gateway. From the historic 1565 sandugo covenant to our contemporary global creative nomination, Tagbilaran harmonizes raw heritage with forward-looking sustainable art.
               </p>
             </div>

                          {/* Tagbilaran's Left-aligned Half-size City Hall Photo with Right-aligned Vision & Mission */}
              <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                  
                  {/* Left Side: Photo Container */}
                  <motion.div
                    initial={{ opacity: 0, x: -32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-[320px] sm:h-[450px] lg:h-auto min-h-[300px] sm:min-h-[420px] relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-end"
                    id="about-cityhall-showcase"
                  >
                    <img
                      src="/webp/cityhall.jpg"
                      alt="Tagbilaran City Hall"
                      id="tagbilaran-cityhall-image"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                    />
                    {/* Subtle Overlay to contrast cityhall label */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent z-10 pointer-events-none" />
                    
                    <div className="relative z-20 p-6 sm:p-8 text-left">
                      
                      <h3 className="font-serif text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Tagbilaran City Hall
                      </h3>
                    </div>
                  </motion.div>

                  {/* Right Side: Vision & Mission (Clean layouts without backgrounds, borders, vertical accents, or icons) */}
                  <motion.div
                    initial={{ opacity: 0, x: 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-start py-4 h-full items-center lg:items-start"
                  >
                                      {/* Vision Section (Plus Jakarta Sans Typography) */}
                    <div 
                      className="text-center lg:text-left pb-6 w-full"
                      id="tagbilaran-vision-card-right"
                    >
                      <h4 className="font-jakarta text-xl sm:text-2xl font-black text-[#FFD54F] tracking-wider mb-2 uppercase" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        Vision
                      </h4>
                      <p className="font-jakarta text-xs sm:text-sm md:text-base text-white font-extrabold leading-relaxed uppercase tracking-wide text-center lg:text-left" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        "A highly urbanized, resilient and livable city by 2030."
                      </p>
                    </div>

                    {/* Mission Section (Plus Jakarta Sans Typography) */}
                    <div 
                      className="text-center lg:text-left w-full"
                      id="tagbilaran-mission-card-right"
                    >
                      <h4 className="font-jakarta text-xl sm:text-2xl font-black text-[#FFD54F] tracking-wider mb-2 uppercase" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        Mission
                      </h4>
                      <p className="font-jakarta text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-extrabold uppercase tracking-wide text-center lg:text-left" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        To enrich the eco cultural heritage, enhance sustainable and inclusive socio economic growth and build a resilient community anchored in responsive governance.
                      </p>
                      
                      {/* Modern compact links with icons aligned vertically */}
                      <div className="mt-8 flex flex-col gap-3 items-center lg:items-start" id="mission-external-links">
                        <a 
                          href="https://tagbilaran.gov.ph/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-jakarta text-xs font-black uppercase tracking-wider text-[#FFD54F] hover:text-[#70E000] transition-all shadow-xs"
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          <img 
                            src="/FILLERS/cropped-Tagbilaran-LOGO.png" 
                            alt="Tagbilaran Logo" 
                            className="w-5 h-5 object-contain" 
                            referrerPolicy="no-referrer"
                          />
                          <span>Official Website</span>
                        </a>
                        <a 
                          href="https://cgsotagbilaran.com/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-jakarta text-xs font-black uppercase tracking-wider text-[#FFD54F] hover:text-[#70E000] transition-all shadow-xs"
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          <img 
                            src="/FILLERS/CGSO_Logo.svg" 
                            alt="CGSO Tagbilaran Logo" 
                            className="w-5 h-5 object-contain" 
                            referrerPolicy="no-referrer"
                          />
                          <span>CGSO Website</span>
                        </a>
                        <a 
                          href="https://www.tagbilaranstrat.com/home" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-jakarta text-xs font-black uppercase tracking-wider text-[#FFD54F] hover:text-[#70E000] transition-all shadow-xs"
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          <img 
                            src="/FILLERS/STRATCOM.webp" 
                            alt="Stratcom Logo" 
                            className="w-5 h-5 object-contain rounded-sm" 
                            referrerPolicy="no-referrer"
                          />
                          <span>StratCom Website</span>
                        </a>
                        <a 
                          href="https://www.facebook.com/profile.php?id=61584065486594" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-jakarta text-xs font-black uppercase tracking-wider text-[#FFD54F] hover:text-[#70E000] transition-all shadow-xs"
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          <img 
                            src="/FILLERS/facebook.png" 
                            alt="Facebook Logo" 
                            className="w-5 h-5 object-contain" 
                            referrerPolicy="no-referrer"
                          />
                          <span>Tourism Facebook</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* HISTORICAL SETTING SECTION MOVED TO ABOUT PAGE */}
              <div className="w-full max-w-4xl mx-auto px-6 sm:px-12 mb-20" id="about-history-section">
                <div className="border-t border-white/10 pt-16 flex flex-col items-center">
                  {/* Beautiful History Capitalized Title */}
                  <h2 
                    className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-normal text-[#FFD54F] uppercase text-center"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Historical Setting
                  </h2>
                  
                  {/* Paragraphs with customized high-end editorial styling */}
                  <div className="mt-8 space-y-8 text-white/95 text-sm sm:text-base md:text-lg leading-relaxed font-sans text-justify font-normal max-w-3xl px-4">
                    <p>
                      For many years, little has been known of the City of Tagbilaran that nestles on a sea, protected from the southwest monsoon by the island of Panglao and from the cold stream of the north wind by the Maribojoc mountain range. This once unheralded town has been under the mantle of the Province of Bohol until it became a Chartered City on July 1, 1966 by virtue of Republic Act No. 4660, that she made a name of her own.
                    </p>

                    <div className="pt-6 border-t border-white/10">
                      <h3 
                        className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#FFD54F] uppercase text-center mb-4"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        Origin of the Name
                      </h3>
                      <p className="mt-2">
                        How the city got its name is still vague to many chroniclers. Tagbilaran as a settlement is known to have dated back as early as the 15th Century known as the “Bool Kingdom”.
                      </p>
                      <p className="mt-4">
                        On account of her peculiar geographic location, it has been bruited that the place was first named <span className="font-sans italic font-semibold text-[#FFD54F]">TINABILAN</span>, which means “screened”, as she is shielded on the southwest by Panglao Island. But tradition has it that the word “Tagbilaran” was derived from the word <span className="font-sans italic font-semibold text-[#FFD54F]">TAGUBILAAN</span>, a contraction from two local dialects <span className="font-sans italic font-semibold text-[#FFD54F]">TAGU</span> (to hide) and <span className="font-sans italic font-semibold text-[#FFD54F]">BILAAN</span> (a Muslim marauder tribe), which means a place hidden from the pillaging Muslims. How it finally evolved into her present name <span className="font-sans italic font-semibold text-[#FFD54F]">TAGBILARAN</span> must have been the work of the Spanish conquistadores.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <h3 
                        className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#FFD54F] uppercase text-center mb-4"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        Early Beginnings
                      </h3>
                      <p className="mt-2">
                        Tagbilaran started as a small settlement of natives who swore by the spirit of the Anito, a pagan god, in the vicinity of lower Mansasa. They were simple in their ways and peaceful, husky in build and generally tall. These are evidenced by bones and other artifacts excavated by self-styled archeologists along the shorelines, which they asserted to be the natives’ burial grounds. Early settlers have established trade relations with China, Malaysia and Indonesia.
                      </p>
                      <p className="mt-4">
                        During the later years of the Spanish era, a more advanced and civilized community was established at Sitio Ubos, the lower coastal portion at the back of the present Cathedral compound. All phases of activities, mercantile or otherwise, were confined to this little settlement by the sea. Most of their houses were made of local materials like bamboo, molave and nipa, except for a few which were made of limestones and bricks. As the population of the settlement grew, the upper portion of the coastal area was developed from what is now the Cathedral compound spreading towards the east and northeast directions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

<div className="w-full max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 hidden" id="about-stats-grid">
               {[
                 { label: "FOUNDED (SANDUGO)", value: "1565", desc: "First treaty of international friendship", icon: Heart },
                 { label: "GLOBAL NOMINATION", value: "Crafts", desc: "Crafts & folk arts candidate network", icon: Award },
                 { label: "DISTRICT COMMUNITIES", value: "15", desc: "Unique barangays forming the city code", icon: MapPin },
                 { label: "CIVIC HEART", value: "Capital", desc: "Administrative & commercial core of Bohol", icon: Globe },
               ].map((stat, sIdx) => {
                 const StatIcon = stat.icon;
                 return (
                   <motion.div
                     key={sIdx}
                     whileHover={{ scale: 1.02 }}
                     className="bg-[rgba(0,0,0,0.25)] border border-[rgba(255,255,255,0.15)] p-6 rounded-2xl shadow-lg backdrop-blur-md text-left group glass-panel-custom"
                   >
                     <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white mb-4 group-hover:bg-white/25 transition-colors">
                       <StatIcon className="w-5 h-5" />
                     </div>
                     <span className="font-mono text-[9px] text-[#FFD54F] uppercase tracking-widest block font-bold">
                       {stat.label}
                     </span>
                     <span className="font-display font-black text-2xl sm:text-3xl text-white block mt-1">
                       {stat.value}
                     </span>
                     <p className="text-xs text-white mt-1.5 leading-relaxed font-sans font-medium">
                       {stat.desc}
                     </p>
                   </motion.div>
                 );
               })}
             </div>
             {/* Deep Narrative section */}
             <div className="w-full max-w-3xl mx-auto px-6 sm:px-12 mb-20 text-center flex flex-col items-center" id="about-pillars" style={{ display: 'none' }}>
               
               {/* Text / Narrative centered */}
               <div className="flex flex-col justify-center text-center items-center">
                 
                 <h2 className="font-display font-black text-white text-3xl sm:text-4xl tracking-tight leading-tight mb-6 text-center">
                   Where Ancient Covenant Meets Digital Future
                 </h2>
                 <div className="space-y-6 text-white/90 text-xs sm:text-sm leading-relaxed font-sans text-center font-medium">
                   <p>
                     Tagbilaran is more than just a geographic capital; it is a spiritual anchor. In 1565, the blood compact between chieftain Sikatuna and explorer Legazpi set a permanent tone of peaceful diplomacy and horizontal alliance.
                   </p>
                   <p>
                     Today, that baseline of peace translates directly into standard-setting local safety, warm community-driven commerce, and a flourishing network of artists, potters, and developers. 
                   </p>
                   <p>
                     As a candidate for the <strong className="text-[#FFD54F]">Global Creative Cities Network</strong>, Tagbilaran represents Boholano craftsmanship—nurtured on the hillsides of Manga and inside the hand-weaving studios of Dampas—forged and celebrated for global eyes.
                   </p>
                 </div>

                 <div className="mt-8 flex justify-center">
                   <button
                     onClick={() => {
                       setActiveView("heritage");
                       window.scrollTo({ top: 0, behavior: "smooth" });
                     }}
                     className="hidden"
                   >
                     
                   </button>
                 </div>
               </div>
 
             </div>
 


            </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER: Full-featured modular footer */}
      <Footer 
        setActiveView={(view) => {
          setSelectedDetailedHeritageId(null);
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}
