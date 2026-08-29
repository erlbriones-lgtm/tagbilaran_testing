import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Compass, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const logoUrl = "/webp/TagbilaranLogo.webp";

interface NavbarProps {
  activeView: "home" | "growth" | "heritage" | "shops" | "downloadables" | "barangay" | "saulog" | "travel" | "about" | "contact";
  setActiveView: (view: "home" | "growth" | "heritage" | "shops" | "downloadables" | "barangay" | "saulog" | "travel" | "about" | "contact") => void;
}

export default function Navbar({ activeView, setActiveView }: NavbarProps) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.overflowX = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.overflowX = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.overflowX = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.overflowX = "";
    };
  }, [isOpen]);

  const handleNavClick = (view: "home" | "growth" | "heritage" | "shops" | "downloadables" | "barangay" | "saulog" | "travel" | "about" | "contact") => {
    setActiveView(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPathForView = (view: string) => {
    if (view === "home") return "/";
    return `/${view}`;
  };

  return (
    <>
      <motion.header
        id="main-nav-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-[80] transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-r from-[#2ee59d]/95 via-[#38B000]/95 to-[#006400]/95 backdrop-blur-md border-b border-[#32e875]/40 py-1.5 sm:py-2 shadow-lg"
            : "bg-gradient-to-r from-[#2ee59d]/85 via-[#38B000]/80 to-[#006400]/85 backdrop-blur-sm border-b border-[#32e875]/25 py-2 sm:py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between relative w-full h-8 sm:h-9">
          
          {/* Desktop Symmetrical Navigation and Logo */}
          <div className="hidden xl:flex items-center justify-between w-full max-w-5xl mx-auto font-jakarta tracking-wide font-extrabold text-[12px] xl:text-[13px]" id="desktop-navbar-container">
            <Link
              to="/"
              className={`font-jakarta tracking-wide font-extrabold transition-all duration-300 hover:cursor-pointer pb-1 border-b-2 hover:text-[#FFD54F] hover:drop-shadow-[0_0_8px_rgba(255,213,79,0.5)] ${
                activeView === "home"
                  ? "text-[#FFD54F] border-[#FFD54F] drop-shadow-[0_0_8px_rgba(255,213,79,0.4)]"
                  : "text-white/90 hover:text-[#FFD54F] border-transparent"
              }`}
              id="link-home"
            >
              HOME
            </Link>

            <Link
              to="/growth"
              className={`font-jakarta tracking-wide font-extrabold transition-all duration-300 hover:cursor-pointer pb-1 border-b-2 hover:text-[#FFD54F] hover:drop-shadow-[0_0_8px_rgba(255,213,79,0.5)] ${
                activeView === "growth"
                  ? "text-[#FFD54F] border-[#FFD54F] drop-shadow-[0_0_8px_rgba(255,213,79,0.4)]"
                  : "text-white/90 hover:text-[#FFD54F] border-transparent"
              }`}
              id="link-growth"
            >
              GROWTH
            </Link>
            
            <Link
              to="/heritage"
              className={`font-jakarta tracking-wide font-extrabold transition-all duration-300 hover:cursor-pointer pb-1 border-b-2 hover:text-[#FFD54F] hover:drop-shadow-[0_0_8px_rgba(255,213,79,0.5)] ${
                activeView === "heritage"
                  ? "text-[#FFD54F] border-[#FFD54F] drop-shadow-[0_0_8px_rgba(255,213,79,0.4)]"
                  : "text-white/90 hover:text-[#FFD54F] border-transparent"
              }`}
              id="link-heritage"
            >
              HERITAGE
            </Link>
            
            <Link
              to="/barangay"
              className={`font-jakarta tracking-wide font-extrabold transition-all duration-300 hover:cursor-pointer pb-1 border-b-2 hover:text-[#FFD54F] hover:drop-shadow-[0_0_8px_rgba(255,213,79,0.5)] ${
                activeView === "barangay"
                  ? "text-[#FFD54F] border-[#FFD54F] drop-shadow-[0_0_8px_rgba(255,213,79,0.4)]"
                  : "text-white/90 hover:text-[#FFD54F] border-transparent"
              }`}
              id="link-barangay"
            >
              BARANGAY
            </Link>

            <Link
              to="/saulog"
              className={`font-jakarta tracking-wide font-extrabold transition-all duration-300 hover:cursor-pointer pb-1 border-b-2 hover:text-[#FFD54F] hover:drop-shadow-[0_0_8px_rgba(255,213,79,0.5)] ${
                activeView === "saulog"
                  ? "text-[#FFD54F] border-[#FFD54F] drop-shadow-[0_0_8px_rgba(255,213,79,0.4)]"
                  : "text-white/90 hover:text-[#FFD54F] border-transparent"
              }`}
              id="link-saulog"
            >
              SAULOG
            </Link>

            {/* Centered Logo element */}
            <Link 
              to="/"
              className="flex items-center justify-center cursor-pointer group select-none relative z-50 mx-2"
              id="nav-logo-centered"
            >
              {!logoFailed ? (
                <img 
                  src={logoUrl} 
                  alt="Tagbilaran Official Seal" 
                  onError={() => setLogoFailed(true)}
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(255,213,79,0.6)]" 
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 flex items-center justify-center border border-white/25 text-[#FFD54F] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5 animate-[spin_10s_linear_infinite]" />
                </div>
              )}
            </Link>

            <Link
              to="/shops"
              className={`font-jakarta tracking-wide font-extrabold transition-all duration-300 hover:cursor-pointer pb-1 border-b-2 hover:text-[#FFD54F] hover:drop-shadow-[0_0_8px_rgba(255,213,79,0.5)] ${
                activeView === "shops"
                  ? "text-[#FFD54F] border-[#FFD54F] drop-shadow-[0_0_8px_rgba(255,213,79,0.4)]"
                  : "text-white/90 hover:text-[#FFD54F] border-transparent"
              }`}
              id="link-shops"
            >
              SHOPS
            </Link>

            <Link
              to="/downloadables"
              className={`font-jakarta tracking-wide font-extrabold transition-all duration-300 hover:cursor-pointer pb-1 border-b-2 hover:text-[#FFD54F] hover:drop-shadow-[0_0_8px_rgba(255,213,79,0.5)] ${
                activeView === "downloadables"
                  ? "text-[#FFD54F] border-[#FFD54F] drop-shadow-[0_0_8px_rgba(255,213,79,0.4)]"
                  : "text-white/90 hover:text-[#FFD54F] border-transparent"
              }`}
              id="link-downloadables"
            >
              ASSETS
            </Link>

            <Link
              to="/travel"
              className={`font-jakarta tracking-wide font-extrabold transition-all duration-300 hover:cursor-pointer pb-1 border-b-2 hover:text-[#FFD54F] hover:drop-shadow-[0_0_8px_rgba(255,213,79,0.5)] ${
                activeView === "travel"
                  ? "text-[#FFD54F] border-[#FFD54F] drop-shadow-[0_0_8px_rgba(255,213,79,0.4)]"
                  : "text-white/90 hover:text-[#FFD54F] border-transparent"
              }`}
              id="link-travel"
            >
              TRAVEL
            </Link>

            <Link
              to="/about"
              className={`font-jakarta tracking-wide font-extrabold transition-all duration-300 hover:cursor-pointer pb-1 border-b-2 hover:text-[#FFD54F] hover:drop-shadow-[0_0_8px_rgba(255,213,79,0.5)] ${
                activeView === "about"
                  ? "text-[#FFD54F] border-[#FFD54F] drop-shadow-[0_0_8px_rgba(255,213,79,0.4)]"
                  : "text-white/90 hover:text-[#FFD54F] border-transparent"
              }`}
              id="link-about"
            >
              ABOUT
            </Link>

            <Link
              to="/contact"
              className={`font-jakarta tracking-wide font-extrabold transition-all duration-300 hover:cursor-pointer pb-1 border-b-2 hover:text-[#FFD54F] hover:drop-shadow-[0_0_8px_rgba(255,213,79,0.5)] ${
                activeView === "contact"
                  ? "text-[#FFD54F] border-[#FFD54F] drop-shadow-[0_0_8px_rgba(255,213,79,0.4)]"
                  : "text-white/90 hover:text-[#FFD54F] border-transparent"
              }`}
              id="link-contact"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Layout (centered logo with burger on the right) */}
          <div className="flex xl:hidden items-center justify-between w-full h-full relative z-[81]">
            {/* Left spacing placeholder to visually balance the menu button on the right */}
            <div className="w-8" />

            {/* Centered Logo for Mobile */}
            <Link 
              to="/"
              className="flex items-center justify-center cursor-pointer group select-none"
              id="nav-logo-mobile"
            >
              {!logoFailed ? (
                <img 
                  src={logoUrl} 
                  alt="Tagbilaran Official Seal" 
                  onError={() => setLogoFailed(true)}
                  className="w-7 sm:w-8 h-7 sm:h-8 object-contain drop-shadow-md" 
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/25 text-[#FFD54F]">
                  <Compass className="w-4 h-4 animate-[spin_10s_linear_infinite]" />
                </div>
              )}
            </Link>

            {/* Mobile Burger Toggle UI */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center p-1 sm:p-1.5 rounded-lg text-white hover:text-[#FFD54F] hover:bg-white/10 active:scale-95 transition-all cursor-pointer h-8 w-8 border border-white/10"
              aria-label="Toggle Navigation Menu"
              id="nav-mobile-toggle"
            >
              {isOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Floating Animated Mobile Sidebar Overlay for Premium touch experience */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay clicking which closes the menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[78] bg-black/40 backdrop-blur-xs xl:hidden"
            />

            {/* Slide-out Sidebar Drawer covering exactly the width of what the navigation items occupy, narrow and aligned */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="fixed inset-y-0 right-0 z-[79] w-[115px] sm:w-[135px] h-full bg-gradient-to-b from-[#2ee59d]/98 via-[#38B000]/98 to-[#006400]/98 backdrop-blur-2xl flex flex-col justify-start overflow-y-auto overflow-x-hidden overscroll-contain pl-5 sm:pl-6 pr-1 pt-18 pb-12 xl:hidden border-l border-white/10 shadow-2xl"
              id="mobile-drawer-overlay"
            >
              {/* Soft decorative background circles matching brand layout */}
              <div className="absolute top-[-10%] right-[-10%] w-80 h-80 rounded-full bg-[#FFD54F]/10 blur-[90px] pointer-events-none animate-pulse-slow" />
              <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 rounded-full bg-[#147917]/25 blur-[100px] pointer-events-none animate-pulse-slow" />
              
              <nav className="flex flex-col gap-4 sm:gap-5 items-start text-left relative z-10 w-full" id="mobile-nav-links">
                {[
                  { label: "HOME VIEW PORTAL", id: "home", view: "home" },
                  { label: "GROWTH & BUILDINGS", id: "growth", view: "growth" },
                  { label: "HERITAGE COLLECTIVE", id: "heritage", view: "heritage" },
                  { label: "BARANGAY DIRECTORY", id: "barangay", view: "barangay" },
                  { label: "SAULOG SHOWDOWN Arena", id: "saulog", view: "saulog" },
                  { label: "SHOPS & DIRECTORY", id: "shops", view: "shops" },
                  { label: "RESOURCE DIRECTORY", id: "assets", view: "downloadables" },
                  { label: "EXPLORE & TRAVEL GUIDE", id: "travel", view: "travel" },
                  { label: "THE CIVIC & EXECUTIVE HEART", id: "about", view: "about" },
                  { label: "CONTACT OFFICIALS", id: "contact", view: "contact" }
                ].map((link, lIdx) => (
                  <motion.div
                    key={link.id}
                    initial={{ x: 25, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: lIdx * 0.05 }}
                  >
                    <Link
                      to={getPathForView(link.view)}
                      onClick={() => setIsOpen(false)}
                      className={`text-left w-full font-jakarta text-sm sm:text-base font-black tracking-wide uppercase transition-all py-1 cursor-pointer hover:translate-x-[4px] flex items-center justify-start gap-3 group hover:text-[#FFD54F] ${
                        activeView === link.view ? "text-[#FFD54F]" : "text-white/80"
                      }`}
                    >
                      <span>{link.id.toUpperCase()}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
