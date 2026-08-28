import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Download, 
  Sparkles, 
  Check
} from "lucide-react";

interface DownloadableItem {
  id: string;
  title: string;
  description: string;
  category: "Guides" | "Maps" | "Heritage" | "Data";
  fileSize: string;
  fileType: "PDF" | "XLSX" | "ZIP" | "GPX";
  downloadsCount: number;
  fileName: string;
  content?: string;
  realFileUrl?: string;
}

const downloadablesList: DownloadableItem[] = [
  {
    id: "dot-accredited-2026",
    title: "THRIVE Association Directory",
    description: "The official registry of the THRIVE (Tagbilaran Health, Retail Business, Integration Vitality & Entrepreneur's) Association, listing certified retail and health businesses.",
    category: "Data",
    fileSize: "1.2 MB",
    fileType: "PDF",
    downloadsCount: 1420,
    fileName: "THRIVE (Tagbilaran Health, Retail Business, Intigration Vitality & Entrepreneur’s) Association (1) (1).pdf",
    realFileUrl: "https://drive.google.com/file/d/1LEZ9AqX0vw2UY0hoUmpgIN84mGnnOzkY/view?usp=drive_link",
    content: "THRIVE Association document contents"
  },
  {
    id: "heritage-walking-trail",
    title: "Tagbilaran Wellness and Spa Alliance",
    description: "The official wellness and beauty guild index of accredited massage clinics, therapeutic spas, and local wellness retreats in Tagbilaran.",
    category: "Data",
    fileSize: "840 KB",
    fileType: "PDF",
    downloadsCount: 3840,
    fileName: "TAGBILARAN WELLNESS AND SPA ALLIANCE (1) (1).pdf",
    realFileUrl: "https://drive.google.com/file/d/1NnUQJqw7vqyPTgdy61sUOqAYKNqwkOU0/view?usp=drive_link",
    content: "Wellness and Spa Alliance guide"
  },
  {
    id: "saulog-festival-pamphlet",
    title: "Tagbilaran City Souvenir & Pasalubong Association (TCSPA)",
    description: "Curated registry of accredited souvenir centers, traditional Boholano handicraft makers, and local food processing partners under the TCSPA banner.",
    category: "Guides",
    fileSize: "920 KB",
    fileType: "PDF",
    downloadsCount: 2190,
    fileName: "TAGBILARAN CITY SOUVENIR AND PASALUBONG ASSOCIATION (TCSPA) (1) (1).pdf",
    realFileUrl: "https://drive.google.com/file/d/1aG7xbzzdOmP5K_ckaQHL3g01ucVb1IDH/view?usp=drive_link",
    content: "TCSPA souvenir register"
  },
  {
    id: "tagbilaran-eco-tourism-portfolio",
    title: "Tagbilaran Accommodation & Restaurant Alliance (TARA)",
    description: "A comprehensive guide to accredited accommodation sites, hotels, guesthouses, and culinary dining centers registered under the local TARA tourism network.",
    category: "Guides",
    fileSize: "1.4 MB",
    fileType: "PDF",
    downloadsCount: 935,
    fileName: "TAGBILARAN ACCOMMODATION AND RESTAURANT ALLIANCE (TARA) (1) (1).pdf",
    realFileUrl: "https://drive.google.com/file/d/1SdaUVAY8q5mG7C4swv8wwiU4WAj45U6D/view?usp=drive_link",
    content: "TARA Directory contents"
  },
  {
    id: "cultural-heritage-inventory-2026",
    title: "Innovative Tagbilaran Alliance Group (ITAG)",
    description: "The membership register of the Tagbilaran Tourism Alliance (ITAG), promoting creative tourism initiatives and collaborative destination management.",
    category: "Heritage",
    fileSize: "1.1 MB",
    fileType: "PDF",
    downloadsCount: 712,
    fileName: "INNOVATIVE TAGBILARAN ALLIANCE GROUP)TAGBILARAN TOURISM ALLIANCE (ITAG) (1) (1).pdf",
    realFileUrl: "https://drive.google.com/file/d/1sS3HVySAaHrBcGGqNpm-Sq0-jEnd4Gwr/view?usp=drive_link",
    content: "ITAG directory registry"
  },
  {
    id: "gpx-walking-coordinates",
    title: "Tagbilaran Accredited Event Organizers",
    description: "Verified directory listing of accredited event managers, cultural planners, wedding coordinators, and specialized event coordinators in Tagbilaran City.",
    category: "Data",
    fileSize: "680 KB",
    fileType: "PDF",
    downloadsCount: 540,
    fileName: "EVENT ORGANIZERS 2026 (1).pdf",
    realFileUrl: "https://drive.google.com/file/d/1DWEz64Kx7tBIGCGXNebr_vO8OC8vukpR/view?usp=drive_link",
    content: "Event Organizers directory content"
  },
  {
    id: "dot-accredited-establishments-sheet",
    title: "DOT Accredited Establishments Directory",
    description: "The official master registry tracking all accredited hotels, accommodation sites, restaurants, and active tourism-related enterprises in Tagbilaran.",
    category: "Data",
    fileSize: "Live Spreadsheet",
    fileType: "XLSX",
    downloadsCount: 1680,
    fileName: "DOT Accredited Establishments Tagbilaran.xlsx",
    realFileUrl: "https://docs.google.com/spreadsheets/d/1Fl5WHcU3r_Mpb5TtKpGKlNOm8pqIyDMd/edit?usp=drive_link&ouid=101867745396794951272&rtpof=true&sd=true",
    content: "DOT Accredited Establishments Master List"
  }
];

export default function Downloadables() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

  const handleDownload = (item: DownloadableItem) => {
    setDownloadingId(item.id);
    setDownloadSuccessId(null);

    if (item.realFileUrl) {
      if (item.realFileUrl.startsWith("https://docs.google.com") || item.realFileUrl.startsWith("https://")) {
        // Since it's an external Google Drive/Docs link, we open it in a new tab for the user to view/download.
        const link = document.createElement("a");
        link.href = item.realFileUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setDownloadingId(null);
        setDownloadSuccessId(item.id);

        setTimeout(() => {
          setDownloadSuccessId(null);
        }, 3000);
        return;
      }

      fetch(item.realFileUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to download: Server returned status ${response.status}`);
          }
          return response.blob();
        })
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", item.fileName);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);

          setDownloadingId(null);
          setDownloadSuccessId(item.id);

          setTimeout(() => {
            setDownloadSuccessId(null);
          }, 3000);
        })
        .catch((error) => {
          console.error("Binary download failed:", error);
          alert(`Could not download file: ${error.message || "Server error"}. Please check if the file exists on the server.`);
          setDownloadingId(null);
        });
    } else {
      const blob = new Blob([item.content || ""], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", item.fileName);
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloadingId(null);
      setDownloadSuccessId(item.id);

      setTimeout(() => {
        setDownloadSuccessId(null);
      }, 3000);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-[#05461a] relative overflow-hidden" id="downloadables-page">
      {/* Background ambient lighting */}
      <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none z-0" />
      
      {/* Visual Header Banner aligned elegantly */}
      <div className="max-w-4xl mb-16 mx-auto text-center flex flex-col items-center justify-center relative z-10" id="downloadables-header">

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-sans text-4xl sm:text-6xl font-black tracking-tight text-[#006400] mb-5 text-center leading-[1.1]"
        >
          Publications & <br />
          <span className="text-[#bc923a]">Resource Files</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-medium text-center max-w-2xl"
        >
          Equip yourself with official pamphlets, walking coordinates, cultural heritage portfolios, and offline guides carefully prepared for high-fidelity cultural excursions in Tagbilaran.
        </motion.p>
      </div>

      {/* Grid of beautifully designed modern cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full" id="download-cards-grid">
        <AnimatePresence mode="popLayout">
          {downloadablesList.map((item, idx) => {
            const isDownloading = downloadingId === item.id;
            const isSuccess = downloadSuccessId === item.id;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white hover:bg-white rounded-3xl p-6 border border-stone-200/60 hover:border-[#bc923a]/40 shadow-sm hover:shadow-[0_20px_50px_rgba(5,70,26,0.06)] transition-all duration-300 flex flex-col justify-between h-[230px] group relative overflow-hidden text-left"
              >
                {/* Micro mesh accent bg on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-50/0 via-transparent to-stone-50/0 group-hover:from-stone-50 group-hover:to-emerald-500/5 pointer-events-none transition-all duration-500" />
                
                {/* Thin golden linear fillet at the top of card on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#bc923a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  <div className="flex items-center gap-1 text-[10px] text-stone-400 font-mono font-bold uppercase tracking-wider mb-2">
                    <span>{item.fileType} • {item.fileSize}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-[#05461a] font-sans font-extrabold text-base sm:text-lg tracking-tight group-hover:text-[#006400] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 text-xs mt-2 line-clamp-2 leading-relaxed font-sans font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Card Action footer bar */}
                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-end">
                  <button
                    onClick={() => handleDownload(item)}
                    disabled={isDownloading}
                    className={`px-4 py-2 rounded-xl text-[10px] font-mono font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 cursor-pointer border ${
                      isSuccess
                        ? "bg-[#38B000] border-[#38B000] text-white hover:bg-[#2d8c00] shadow-[0_0_12px_rgba(56,176,0,0.4)]"
                        : isDownloading
                        ? "bg-stone-50 text-stone-500 border-stone-200 cursor-wait"
                        : "bg-[#05461a] text-white border-[#05461a] hover:bg-[#004d00] hover:border-[#004d00] hover:shadow-[0_0_15px_rgba(5,70,26,0.3)] hover:scale-105 active:scale-95"
                    }`}
                  >
                    {isSuccess ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        SAVED
                      </>
                    ) : isDownloading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-3 h-3 border border-stone-600 border-t-transparent rounded-full"
                        />
                        SAVING
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        DOWNLOAD
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Decorative footer signature within scope limits */}
      <div className="mt-16 text-center border-t border-stone-100 pt-8" id="downloadable-disclaimer">
        <p className="text-[10px] font-mono text-stone-400 font-bold max-w-xl mx-auto uppercase tracking-wider leading-relaxed">
          The materials published above reflect verified official data from Tagbilaran's cultural assets and DOT registrars.
        </p>
      </div>

    </div>
  );
}
