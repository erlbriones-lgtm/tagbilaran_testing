import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ImageWithSkeleton from "./ImageWithSkeleton";

interface TravelItem {
  src: string;
  title: string;
  type: string;
  desc: string;
  tip?: string;
}

const transportAssets: TravelItem[] = [
  {
    src: "/Travel/ceres2.webp",
    title: "Bus",
    type: "Intercity Transit",
    desc: "The backbone of Boholano provincial land transit. Operating from the Dao Integrated Bus Terminal in Tagbilaran, these prominent yellow coaches connect the capital with almost every municipality in Bohol, providing reliable, regular, and affordable travel to destinations like Carmen (Chocolate Hills), Tubigon, and Jagna."
  },
  {
    src: "/Travel/Pa.webp",
    title: "Bohol Panglao Airport",
    type: "Aviation Gateway",
    desc: "Known as the first 'eco-airport' in the Philippines, Bohol Panglao International Airport acts as the state of the art aviation gateway welcoming global and domestic passengers directly to the golden sand beaches of Panglao Island and the scenic countryside of Bohol. It features high efficiency solar roofs and sustainable waste management systems."
  },
  {
    src: "/Travel/TRICYCLE.webp",
    title: "Tricycle",
    type: "Local Vehicle",
    desc: "The quintessential three wheeled passenger vehicle of Bohol. Affectionately nicknamed 'Bao bao' (the Visayan word for turtle) due to its rounded hood, these agile tuk-tuks are perfect for navigating the buzzing streets of Tagbilaran and taking relaxed countryside rides. Nimble, charming, and highly accessible."
  },
  {
    src: "/Travel/TAGBILARAN PORT.webp",
    title: "Port of Tagbilaran",
    type: "Maritime Hub",
    desc: "Bohol's primary maritime corridor. Located in the heart of Tagbilaran City, this bustling seaport coordinates daily high speed fast crafts, passenger ferries, and heavy roll on roll off (RORO) cargo vessels linking the island directly to Cebu City, Dumaguete, Siquijor, and Manila."
  },
  {
    src: "/Travel/Tubigon Pantalan.webp",
    title: "Port of Tubigon",
    type: "Maritime Hub",
    desc: "The busiest commuter port in northern Bohol. Known for having the shortest sea crossing time connecting Bohol to Cebu City, Port of Tubigon acts as a() rapid transit artery supported by a constant fleet of container ships and direct vans routing to Tagbilaran City."
  },
  {
    src: "/Travel/Port of Loon.webp",
    title: "Port of Loon",
    type: "Maritime Hub",
    desc: "A beautiful coastal sea portal located along the historic western shoreline of Loon municipality. It facilitates community pump-boats, local outrigger craft, and regional passenger transport links connecting western Bohol to neighboring islands."
  }
];

export default function Travel() {
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState("");

  const handleExternalClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    setPendingUrl(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setPendingUrl("");
  };

  const proceedRedirect = () => {
    if (pendingUrl) {
      window.open(pendingUrl, "_blank", "noopener,noreferrer");
    }
    closeModal();
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  // Disable/enable page scrolling
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  // Extract clean hostname for high-fidelity professional presentation
  const getDomainName = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.hostname.replace(/^www\./, "");
    } catch (e) {
      return "booking.barkota.com";
    }
  };

  return (
    <div className="w-full bg-white pt-32 pb-24 px-6 sm:px-12 select-none min-h-screen font-sans relative overflow-hidden" id="travel-view-container">
      {/* Soft Background Ambient Light Glows */}
      <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-emerald-100/60 blur-[120px] pointer-events-none z-0 animate-pulse-glow" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-emerald-100/50 blur-[130px] pointer-events-none z-0 animate-float-slow" />
      
      {/* Luxurious Header Hero exactly matching the official brand styling */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10" id="travel-header-intro">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl font-black tracking-widest text-[#006400] uppercase mb-6 leading-none">
            TRAVEL & PORTALS
          </h1>
          <p className="text-[#006400]/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-sans font-bold text-center">
            Navigate the roads, deep coastal bays, and high-speed waterways of Bohol. Discover our signature local transport and municipal sea channels linking Tagbilaran with Visayan islands, accompanied by majestic sightseeing inspirations.
          </p>
        </motion.div>
      </div>

      {/* SECTION 1: TRANSPORT & SEAPORT CORES WITH HIGHLIGHTED DESCRIPTIONS AND TIPS */}
      <section className="max-w-6xl mx-auto" id="transportports-section">
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-24">
          {transportAssets.map((item, index) => {
            const isReversed = index % 2 !== 0; // Alternating layouts
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className={`flex flex-col md:flex-row ${
                  isReversed ? "md:flex-row-reverse" : ""
                } gap-8 md:gap-16 items-center`}
                id={`vehicle-card-${index}`}
              >
                {/* Image side with professional and elegant visual styling */}
                <div 
                  className="w-full md:w-1/2 aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-3xl shadow-md border border-emerald-100 bg-emerald-50/10 relative group"
                >
                  <ImageWithSkeleton
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.045]"
                    containerClassName="w-full h-full"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#006400]/5" />
                </div>

                {/* Text metadata side with elegant typography and custom styled advice tips */}
                <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                  <div className="mb-4">
                    <h3 
                      className="font-sans text-2xl sm:text-3xl font-black text-[#006400] leading-tight uppercase tracking-wider mb-4"
                    >
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-[#006400]/80 font-bold leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    {item.title === "Bohol Panglao Airport" && (
                      <div className="mb-6 p-4 sm:p-5 bg-emerald-50/50 border border-emerald-100/50 rounded-2xl" id="airport-flight-inquiry-box">
                        <h4 className="font-sans text-xs sm:text-sm font-black text-[#006400] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          ✈️ Flight & Ticket Inquiries
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-[#006400]/80 leading-relaxed mb-3 font-semibold">
                          For travelers inquiring about flight bookings, ticket pricing, and cheap departures from Bohol Panglao International Airport, you may compare rates and check schedules via the secure online booking assistant.
                        </p>
                        <a 
                          href="https://www.skyscanner.com.ph/flights-from/tag/cheap-flights-from-bohol-panglao-international-airport.html"
                          onClick={(e) => handleExternalClick(e, "https://www.skyscanner.com.ph/flights-from/tag/cheap-flights-from-bohol-panglao-international-airport.html")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs sm:text-sm font-black text-[#38B000] hover:text-[#006400] underline uppercase tracking-wider transition-colors"
                          id="airport-skyscanner-link"
                        >
                          Click Here to search flights & book tickets
                        </a>
                      </div>
                    )}
                    {item.title === "Port of Tagbilaran" && (
                      <div className="mb-6 p-4 sm:p-5 bg-emerald-50/50 border border-emerald-100/50 rounded-2xl" id="tagbilaran-ferry-inquiry-box">
                        <h4 className="font-sans text-xs sm:text-sm font-black text-[#006400] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          🚢 Ferry & Sea Ticket Inquiries
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-[#006400]/80 leading-relaxed mb-4 font-semibold">
                          For tourist inquiries regarding ferry bookings, passenger fast craft tickets, and schedules connecting Cebu, Dumaguete, Siquijor, or Manila via the Port of Tagbilaran, please check schedules and secure your tickets online from the verified providers below:
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
                          <a 
                            href="https://booking.barkota.com/booking"
                            onClick={(e) => handleExternalClick(e, "https://booking.barkota.com/booking")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs sm:text-sm font-black text-[#38B000] hover:text-[#006400] underline uppercase tracking-wider transition-colors"
                            id="tagbilaran-barkota-link"
                          >
                            Barkota Ticket Booking
                          </a>
                          <a 
                            href="https://www.oceanjet.net/"
                            onClick={(e) => handleExternalClick(e, "https://www.oceanjet.net/")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs sm:text-sm font-black text-[#38B000] hover:text-[#006400] underline uppercase tracking-wider transition-colors"
                            id="tagbilaran-oceanjet-link"
                          >
                            OceanJet Fast Craft
                          </a>
                          <a 
                            href="https://2go.com.ph/travel/explore/ports-and-destinations/tagbilaran/"
                            onClick={(e) => handleExternalClick(e, "https://2go.com.ph/travel/explore/ports-and-destinations/tagbilaran/")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs sm:text-sm font-black text-[#38B000] hover:text-[#006400] underline uppercase tracking-wider transition-colors"
                            id="tagbilaran-2go-link"
                          >
                            2GO Travel Portal
                          </a>
                        </div>
                      </div>
                    )}
                    {item.title === "Port of Tubigon" && (
                      <div className="mb-6 p-4 sm:p-5 bg-emerald-50/50 border border-emerald-100/50 rounded-2xl" id="tubigon-ferry-inquiry-box">
                        <h4 className="font-sans text-xs sm:text-sm font-black text-[#006400] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          🚢 Ferry & Sea Ticket Inquiries
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-[#006400]/80 leading-relaxed mb-3 font-semibold">
                          For travelers inquiring about maritime voyages, ferry ticket reservations, and schedules connecting Cebu and Bohol via the Port of Tubigon, you may view schedules and book tickets securely online.
                        </p>
                        <a 
                          href="https://booking.barkota.com/booking"
                          onClick={(e) => handleExternalClick(e, "https://booking.barkota.com/booking")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs sm:text-sm font-black text-[#38B000] hover:text-[#006400] underline uppercase tracking-wider transition-colors"
                          id="tubigon-barkota-link"
                        >
                          Click Here to check schedules & book tickets
                        </a>
                      </div>
                    )}
                    {item.title === "Port of Loon" && (
                      <div className="mb-6 p-4 sm:p-5 bg-emerald-50/50 border border-emerald-100/50 rounded-2xl" id="loon-ferry-inquiry-box">
                        <h4 className="font-sans text-xs sm:text-sm font-black text-[#006400] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          🚢 Ferry & Sea Ticket Inquiries
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-[#006400]/80 leading-relaxed mb-3 font-semibold">
                          For tourist inquiries regarding ferry bookings, passenger ticket reservations, and schedules operating via the Port of Loon, please check details and secure your tickets online:
                        </p>
                        <a 
                          href="https://liteferries.com.ph/"
                          onClick={(e) => handleExternalClick(e, "https://liteferries.com.ph/")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs sm:text-sm font-black text-[#38B000] hover:text-[#006400] underline uppercase tracking-wider transition-colors"
                          id="loon-liteferries-link"
                        >
                          Lite Ferries Ticket Portal
                        </a>
                      </div>
                    )}
                  </div>
                  {item.tip && (
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      className="p-4.5 bg-emerald-50/45 border border-emerald-100/50 rounded-2xl text-start font-sans text-xs sm:text-sm font-semibold text-[#006400]/85 shadow-sm relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#38B000]" />
                      {item.tip}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* EXTERNAL REDIRECTION DISCLAIMER MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Smooth Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/65 backdrop-blur-xs cursor-pointer"
            />
            
            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="relative bg-[#FAF8F3] w-full max-w-[460px] rounded-[24px] overflow-hidden shadow-2xl border border-stone-200/40 z-10 text-left"
              id="redirection-disclaimer-modal"
            >
              {/* Thick green top accent */}
              <div className="h-3 w-full bg-[#045E1B]" />
              
              <div className="p-7 sm:p-8 flex flex-col items-start">
                
                {/* Title - Dark green */}
                <h3 className="text-[#045E1B] font-sans text-[20px] sm:text-[22px] font-black tracking-wide uppercase mb-0.5 leading-tight">
                  EXTERNAL REDIRECTION
                </h3>
                
                {/* Subtitle - Vibrant Red */}
                <span className="text-[#D00000] font-sans text-xs sm:text-sm font-black tracking-wider uppercase mb-5 block">
                  LEAVING OFFICIAL PORTAL
                </span>
                
                {/* Body Text */}
                <p className="text-stone-700 text-[13px] sm:text-[14px] leading-relaxed mb-5 font-medium font-sans">
                  You are now leaving our tourism website. You will be redirected to the secure third-party portal at <span className="text-[#045E1B] underline font-bold">{getDomainName(pendingUrl)}</span> to manage your travel bookings.
                </p>
                
                {/* Notice Box - Light green notice box with rounded corners */}
                <div className="w-full bg-[#EEF4EB] border border-[#D5E1CE] p-4 rounded-xl text-[#2A5235] text-[12px] sm:text-[13px] text-left mb-6 font-semibold leading-relaxed">
                  Note: We do not endorse or take responsibility for the terms, privacy policy, and ticketing procedures of external service providers.
                </div>
                
                {/* Buttons - Right-aligned as shown in reference */}
                <div className="flex justify-end w-full gap-3 mt-1">
                  <button
                    onClick={closeModal}
                    className="py-2.5 px-6 sm:px-7 rounded-xl border border-[#045E1B] hover:bg-[#045E1B]/5 text-[#045E1B] text-xs sm:text-sm font-black tracking-wider uppercase transition-all active:scale-95 cursor-pointer"
                  >
                    CANCEL
                  </button>
                  <button
                    onClick={proceedRedirect}
                    className="py-2.5 px-6 sm:px-8 rounded-xl bg-[#045E1B] hover:bg-[#034d16] text-white text-xs sm:text-sm font-black tracking-wider uppercase transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    PROCEED
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

