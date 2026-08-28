import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ExternalLink, Minimize2, Sparkles, MapPin, Milestone, BookOpen, Gift, Compass } from "lucide-react";
import { tagbilaranBarangays } from "../data";

// Explicit visual mapping matching real local scenic assets (using original trios)
const barangayImages: Record<string, string> = {
  "Barangay Bool": "/BB-IMAGE/bool1.webp",
  "Barangay Booy": "/BB-IMAGE/booyjpg.webp",
  "Barangay Cabawan": "/BB-IMAGE/cabawan.webp",
  "Barangay Cogon": "/BB-IMAGE/cogonbg.webp",
  "Barangay Dampas": "/BB-IMAGE/dampas.webp",
  "Barangay Dao": "/BB-IMAGE/daobg.webp",
  "Barangay Manga": "/BB-IMAGE/manga.webp",
  "Barangay Mansasa": "/BB-IMAGE/mansasa.webp",
  "Barangay Poblacion I": "/BB-IMAGE/poblacion 1.webp",
  "Barangay Poblacion II": "/BB-IMAGE/poblacion II.webp",
  "Barangay Poblacion III": "/BB-IMAGE/poblacion 3 final.webp",
  "Barangay San Isidro": "/BB-IMAGE/sa isidro.webp",
  "Barangay Taloto": "/BB-IMAGE/Tubig Dako in Taloto (1).webp",
  "Barangay Tiptip": "/BB-IMAGE/tiptip.webp",
  "Barangay Ubujan": "/BB-IMAGE/ubujan.webp"
};

const barangayMaps: Record<string, string> = {
  "Barangay Bool": "/MAP BARANGAY/BOOL.webp",
  "Barangay Booy": "/MAP BARANGAY/BOOY.webp",
  "Barangay Cabawan": "/MAP BARANGAY/CABAWAN.webp",
  "Barangay Cogon": "/MAP BARANGAY/COGON.webp",
  "Barangay Dampas": "/MAP BARANGAY/DAMPAS.webp",
  "Barangay Dao": "/MAP BARANGAY/DAO.webp",
  "Barangay Manga": "/MAP BARANGAY/MANGA.webp",
  "Barangay Mansasa": "/MAP BARANGAY/MANSASA.webp",
  "Barangay Poblacion I": "/MAP BARANGAY/P1.webp",
  "Barangay Poblacion II": "/MAP BARANGAY/P2.webp",
  "Barangay Poblacion III": "/MAP BARANGAY/P3.webp",
  "Barangay San Isidro": "/MAP BARANGAY/SAN ISIDRO.webp",
  "Barangay Taloto": "/MAP BARANGAY/TALOTO.webp",
  "Barangay Tiptip": "/MAP BARANGAY/TIPTIP.webp",
  "Barangay Ubujan": "/MAP BARANGAY/UBUJAN.webp"
};

const barangayLogos: Record<string, string> = {
  "Barangay Bool": "/B-LOGO/BOOL_Logo.webp",
  "Barangay Booy": "/B-LOGO/BOOY_Logo.webp",
  "Barangay Cabawan": "/B-LOGO/CABAWAN_Logo.webp",
  "Barangay Cogon": "/B-LOGO/COGON_Logo.webp",
  "Barangay Dampas": "/B-LOGO/DAMPAS_Logo.webp",
  "Barangay Dao": "/B-LOGO/DAO_Logo.webp",
  "Barangay Manga": "/B-LOGO/MANGA_Logo.webp",
  "Barangay Mansasa": "/B-LOGO/MANSASA_Logo.webp",
  "Barangay Poblacion I": "/B-LOGO/POBLACION_I_Logo.webp",
  "Barangay Poblacion II": "/B-LOGO/POBLACION_II_Logo.webp",
  "Barangay Poblacion III": "/B-LOGO/POBLACION_III_Logo.webp",
  "Barangay San Isidro": "/B-LOGO/SAN ISIDRO_Logo.webp",
  "Barangay Taloto": "/B-LOGO/TALOTO_Logo.webp",
  "Barangay Tiptip": "/B-LOGO/TIPTIP_Logo.webp",
  "Barangay Ubujan": "/B-LOGO/UBUJAN_Logo.webp"
};

const barangayLetterings: Record<string, string> = {
  "Barangay Bool": "/B-LETTER/BOOL.webp",
  "Barangay Booy": "/B-LETTER/BOOY.webp",
  "Barangay Cabawan": "/B-LETTER/CABAWAN.webp",
  "Barangay Cogon": "/B-LETTER/COGON.webp",
  "Barangay Dampas": "/B-LETTER/DAMPAS.webp",
  "Barangay Dao": "/B-LETTER/DAO.webp",
  "Barangay Manga": "/B-LETTER/MANGA.webp",
  "Barangay Mansasa": "/B-LETTER/MANSASA.webp",
  "Barangay Poblacion I": "/B-LETTER/POBLACION_I.webp",
  "Barangay Poblacion II": "/B-LETTER/POBLACION_II.webp",
  "Barangay Poblacion III": "/B-LETTER/POBLACION_III.webp",
  "Barangay San Isidro": "/B-LETTER/SAN ISIDRO.webp",
  "Barangay Taloto": "/B-LETTER/TALOTO.webp",
  "Barangay Tiptip": "/B-LETTER/TIPTIP.webp",
  "Barangay Ubujan": "/B-LETTER/UBUJAN.webp"
};

interface BarangayExtraDetails {
  origin: string;
  specialty: string;
  heritageHighlight: string;
  products: string[];
  productDesc: string;
  hotels: string[];
  otherSites: string[];
}

const barangayDetails: Record<string, BarangayExtraDetails> = {
  "Barangay Bool": {
    origin: "Named after the historic Bool (or 'Bo-ol') tree sub-species which once flourished along the coast. It was on these shores on March 16, 1565, that native Chieftain Datu Sikatuna and Spanish General Miguel López de Legazpi executed the legendary Blood Compact (Sandugo), forming the first international treaty of peace and global friendship.",
    specialty: "Houses the world-renowned bronze Sandugo monument sculpted by Boholano National Artist Napoleon Abueva. It commands spectacular coastal overlooks of the Mindanao Sea and serves as a peaceful hub for cross-cultural reflection.",
    heritageHighlight: "The sovereign birthplace of international diplomacy and peaceful East-West alliances.",
    products: ["Clay Commemorative Replicas", "Sandugo Souvenirs", "Commemorative Medallions", "Cliffside Native Wines"],
    productDesc: "Local artisans curate high-quality clay moldings of the Sandugo cup and miniature galleon models that celebrate history.",
    hotels: ["Ocean Suites Bohol Boutique Hotel", "Bohol Blood Compact Frontier Hotel", "Nipa Hut Village Resort"],
    otherSites: ["Blood Compact Monument (Sandugo)", "Abueva Shrine Park", "Tagbilaran East Road Coastal Ridge"]
  },
  "Barangay Booy": {
    origin: "Venerated through oral folklore, Booy's name stems from 'boyo' (the native betel nut leaf vine) which coastal travelers picked in great abundance along resting trails during pre-colonial maritime trade.",
    specialty: "Boasts a highly preserved mangrove protection zone, quiet seaside chapels, active fishing harbors, and premium shoreline views that catch beautiful Visayan sunrises.",
    heritageHighlight: "A serene coastal paradise balancing ecological conservation and local fisheries.",
    products: ["Cured Sea Salt (Asin Tibuok style)", "Sun-dried Skipjack Flakes", "Betel Nut Preparations", "Shell-built Necklaces"],
    productDesc: "Traditional fishing folk maintain custom marine preservation methods, drying sweet seafood and curing unique artisanal salt.",
    hotels: ["Panda Tea Garden Suites", "Booy Cozy Coastal Homestays"],
    otherSites: ["Booy Mangrove Preservation Boardwalk", "Our Lady of Lourdes Church", "Caingget Beach & Pier"]
  },
  "Barangay Cabawan": {
    origin: "Emerged from the word 'kabaw' (the water buffalo or carabao), identifying this rural upland terrain as the historic municipal grazing meadow where early farmers gathered to graze their herds.",
    specialty: "The lush countryside lung of Tagbilaran, offering wide rolling emerald ridges, family-led organic farms, quiet woodland paths, and incredible eco-tourism potential.",
    heritageHighlight: "Peaceful inland agro-forestry and traditional pastoral customs.",
    products: ["Wild Forest Honey", "Kesong Puti (Carabao Cheese)", "Handwoven Carabao Harnesses", "Splintered Bamboo Baskets"],
    productDesc: "Agro-forestry products flourish here with high-grade organic honeycomb harvesting and traditional wood-stove dairy crafting.",
    hotels: ["Cabawan Country Mountain Lodge", "Inland Farm Cabin Retreats"],
    otherSites: ["Cabawan Agro-Forestry Trails", "Emerald Mountain Viewpoint", "Local Organic Honey Farms"]
  },
  "Barangay Cogon": {
    origin: "Named after 'cogon grass' (Imperata cylindrica) which natively blanketed the high, flat plains of pre-war Tagbilaran prior to its commercial development as a core city district.",
    specialty: "The primary commercial nerve center of Tagbilaran, hosting key transport lanes, bustling shops, regional retail departments, and rich local food markets.",
    heritageHighlight: "A lively trade district driving Tagbilaran's busy economic growth.",
    products: ["Classic Sweet Calamay", "Gourmet Peanut Kisses", "Traditional Tablea Rolls", "Handwoven Abaca Purses"],
    productDesc: "Acts as the central market for Bohol's most famous delicacies, serving freshly packed calamay cooked inside polished coconuts.",
    hotels: ["The Executive Inn", "Skyline Hotel Suites", "L'Fisher Tagbilaran Guest House"],
    otherSites: ["Cogon Public Market Bazaar", "Tagbilaran Regional Health Center", "City Commerce Plaza"]
  },
  "Barangay Dampas": {
    origin: "Rooted in the Visayan term 'dampas', which described the laborious manual clearing of dense, thorny thickets undertaken by early settlers to build agricultural settlements.",
    specialty: "The historic craft capital keeping traditional loom weaving (hablon) and heavy steel blacksmithing alive, preserving incredible manual arts against automation.",
    heritageHighlight: "Preserving the fiery historical craft of handloom weaving and blacksmithing.",
    products: ["Tempered Steel Bolo Knives", "Loom-woven Hablon Textiles", "High-Carbon Cleavers", "Traditional Native Sacks"],
    productDesc: "Veteran metalworkers manually forge historic Boholano blades, and senior weavers operate massive traditional wooden frames.",
    hotels: ["St. Jude Tourist Inn", "Dampas Garden Restohouse", "Greenfields Oasis"],
    otherSites: ["Hablon Handweaving Heritage Center", "Dampas Antique Blacksmith Foundry", "Saint Jude Thaddeus Parish Church"]
  },
  "Barangay Dao": {
    origin: "Derived from the majestic, century-old 'Dao Tree' (Dracontomelon dao) which once stood tall at the primary crossroad, providing cooling shade for incoming inland travelers.",
    specialty: "Hosts the provincial transport focal point (Bohol Integrated Bus Terminal) and the sprawling Island City Mall, serving as the commercial core connecting all Bohol towns.",
    heritageHighlight: "The main regional transportation gateway and retail epicenter of Bohol.",
    products: ["Travel Memorabilia Packs", "Polished Native Woodcrafts", "Regional Food Samplers", "Traditional Carry-on Cases"],
    productDesc: "A bustling commerce gateway where travelers can conveniently pick up handmade souvenirs and Bohol-grown delicacies.",
    hotels: ["Dao Diamond Hotel & Restaurant", "Bohol Tropics Resort (Borders Junction)", "Hotel Sun Avenue Dao", "RedDoorz near Island City Mall"],
    otherSites: ["Island City Mall (ICM)", "Bohol Integrated Bus Terminal", "Dao Commercial Center", "Dao Barangay Hall & Multi-Purpose Plaza"]
  },
  "Barangay Manga": {
    origin: "Named after the wild, sturdy mango trees ('manga') that natively lined the marine coasts, providing shelter and shade to early fishers returning with their daily catch.",
    specialty: "Famed for its traditional wood-fired brick sheds and clay potteries (turning native mud into elegant earthenware). Holds a modern fish port and busy coastal trade.",
    heritageHighlight: "The premier terracotta pottery center and primary seaside fishing base.",
    products: ["Earthen Cooking Pots (Anglit)", "Terracotta Jars & Urns", "Fresh Catch Skipjack", "Hand-molded Tiles"],
    productDesc: "Artisans shape durable local clay on hand-powered kick-wheels, firing kitchen pottery inside ancient wood-stoved stone kilns.",
    hotels: ["Manga Seaside Pension", "North Marine Fisher Homestays"],
    otherSites: ["Manga Terracotta Pottery & Brick Kilns", "Manga Fishing Port & Dock", "Manga Public Plaza"]
  },
  "Barangay Mansasa": {
    origin: "Named from 'pansasa' or 'sasa' (wild thatch palms), reflecting the dense coastal nipa swamps where early residents harvested material to braid windproof thatched roofing panels.",
    specialty: "Features historic stone-built spring wells, colonial steps, and beautiful high cliffside vistas looking directly down into the Tagbilaran-Panglao strait.",
    heritageHighlight: "Natural cliffside spring chambers and breathtaking sunset straits vistas.",
    products: ["Braided Palm Thatch Panels", "Premium Virgin Coconut Oil", "Copra Charcoal Briquettes", "Fresh Coconut Husks"],
    productDesc: "Rich coconut groves power a highly preserved family tradition of slow-extracting cold-pressed virgin coconut oil.",
    hotels: ["La Veranda Beach Resort", "Cliffside Pension House", "Sunset Strait Lookout Lodge"],
    otherSites: ["Spanish Limestone Spring Well", "Mansasa Colonial Stone Steps", "Mansasa Forest Ridge Lookout"]
  },
  "Barangay Poblacion I": {
    origin: "The original Spanish settlement nucleus founded under the Jesuit mission of 1595, serving as the sovereign administrative, historical, and religious heart of the province.",
    specialty: "Home to the historic Cathedral of St. Joseph the Worker, City Plaza Rizal, and the historical Municipal City Hall buildings (displaying classical Spanish layouts).",
    heritageHighlight: "The sovereign administrative, religious, and historical focus of Tagbilaran.",
    products: ["High-Grade Cacao Tablea", "Artisanal Broas (Sponge Cookies)", "Scapulars & Wood Statuary", "Spanish Egg-Polvoron"],
    productDesc: "Local bakeries continue baking ancestral egg-heavy broas, and traditional roasters grind raw cacao seeds into dark morning tablets.",
    hotels: ["Keepsake Hotel", "The Meridian Hotel", "Tagbilaran Central Hotel"],
    otherSites: ["St. Joseph the Worker Cathedral", "Plaza Rizal", "Historic Municipal Hall", "Garden Cafe Ancestral Tarantilla"]
  },
  "Barangay Poblacion II": {
    origin: "Emerged as the progressive intellectual extension area during the late Spanish and pre-war American eras, hosting the city's first high schools and academies.",
    specialty: "Anchors the Bohol National Museum (previously the historic Provincial Capitol), beautiful university campus parks, and the main banking financial avenues.",
    heritageHighlight: "Museum archives, premium universities, and historical library collections.",
    products: ["Handcarved Wooden Chess Sets", "Bohol Historical Journals", "Fine Arts Prints", "Heritage Greeting Cards"],
    productDesc: "Local craft shops produce custom hand-carved chess sets, honoring former Philippine President Carlos P. Garcia's famous chessboard hobbies.",
    hotels: ["Kew Hotel Tagbilaran", "Sweet Home Boutique Hotel", "Tourist Star Hotel"],
    otherSites: ["National Museum Bohol (Old Capitol)", "Carlos P. Garcia Heritage House", "University of Bohol Campus"]
  },
  "Barangay Poblacion III": {
    origin: "The oldest maritime port base ('Sitio Ubos'), representing the historical lower harbor district where Spanish-Filipino-Chinese merchants built stone warehouses.",
    specialty: "Home to the main modern Tagbilaran Passenger seaport and blocks of original, magnificently preserved Spanish-colonial ancestral 'Bahay na Bato' houses.",
    heritageHighlight: "Vibrant maritime seaport gateway and ancestral timber architecture.",
    products: ["Ancestral House Miniatures", "Spiced Dried Flying Fish", "Seaweed Salad (Guso) Packs", "Scenic Postcards"],
    productDesc: "Portside craftsmen create beautiful wood-and-capiz miniatures of native ancestral houses, popular with global collectors.",
    hotels: ["Balili House Heritage Lodge", "Seaport Plaza Inn", "Sitio Ubos Harbor Suites"],
    otherSites: ["Tagbilaran Fast Craft Passenger Seaport", "Sitio Ubos Heritage Alley", "Casa Rocha (Important Cultural Property)", "Rocha-Suarez Ancestral House"]
  },
  "Barangay San Isidro": {
    origin: "Named in honor of San Isidro Labrador, the patron saint of farmers, marking the deep agrarian roots and heritage of its early inland farming families.",
    specialty: "Blessed with deep, rich red clay deposits. Home to beautiful ornamental plant nurseries, organic vegetable greenhouses, and family-owned agricultural centers.",
    heritageHighlight: "A green farming sanctuary rich in high-quality natural red clay.",
    products: ["Red Clay Flower Pots (Paso)", "Organic Herbal Plants", "Homegrown Dragon Fruits", "Handspun Red Vases"],
    productDesc: "Families harvest local red clay to craft rustic structural planters and garden elements distributed across Central Visayas.",
    hotels: ["San Isidro Farm Resorts", "Red Clay Garden Homestay"],
    otherSites: ["Red Clay Pottery Nurseries", "San Isidro Agricultural Greenhouses", "San Isidro Parish Church"]
  },
  "Barangay Taloto": {
    origin: "Named after the historic 'taloto' tree or 'talo' (natural bee wax), which early tribal groups gathered inside dense woodlands to trade with early global mariners.",
    specialty: "Houses the unique 'Tubig Dako' freshwater spring cave system, quiet coastal beaches, and vast mangrove preservation forests.",
    heritageHighlight: "Mysterious freshwater cave springs and lush coastal mangrove reserves.",
    products: ["Mangrove Blossom Honey", "Tuba (Fermented Coconut Wine)", "Nipa Hand-brooms", "Traditional Forest Balms"],
    productDesc: "Experienced tuba gatherers scale coconut crowns daily to ferment sweet, organic coconut sap into legendary native wine.",
    hotels: ["Waterfront Taloto Resort", "Taloto Coastal Lodging"],
    otherSites: ["Tubig Dako Freshwater Spring Cave", "Taloto Mangrove Reserve Forest", "Our Lady of Fatima Parish Church"]
  },
  "Barangay Tiptip": {
    origin: "Derived from 'tip-tip', the repetitive sound of masonry chisels tapping against limestone blocks. Historically, early craftsmen quarried lime blocks here to construct Bohol churches.",
    specialty: "Upland rolling trails, pristine limestone quarry sights, quiet rustic roads, and progressive suburban community growth.",
    heritageHighlight: "Historic limestone quarries and gorgeous panoramic upland walking routes.",
    products: ["Carved Limestone Sculptures", "Upland Honeycomb", "Pure Lime Dust Blocks", "Sweet Cassava Crackers"],
    productDesc: "Local stone artists chip beautiful limestone garden figurines, and home-bakers bake crunchy, sweet cassava chips.",
    hotels: ["Tiptip Hills Country Lodge", "Stone Quarry View Inn"],
    otherSites: ["Historic Limestone Quarries", "Tiptip High Panoramic Upland Trail", "Tiptip Local Stone Artists Guild"]
  },
  "Barangay Ubujan": {
    origin: "Named after 'ubod' or 'ubuj' (the edible heart of palm), highlighting the edible wild palm species harvested along the ridges by early revolutionary forces.",
    specialty: "Perched on spectacular cliffside ridges overlooking the ocean. Anchors the Holy Name University campus and wartime memorials celebrating guerrilla heroism.",
    heritageHighlight: "Scenic university ridges and historical World War II battlefield memorials.",
    products: ["Gourmet Pickled Palm Hearts", "Artisanal Highland Teas", "Wartime Heritage Medals", "Polished Shell Wall Arts"],
    productDesc: "Gourmet kitchens bottle sweet, spicy pickled palm hearts harvested ethically from non-threatened agricultural palm groves.",
    hotels: ["Belian Hotel", "Hotel Kimberly Bohol (Ubujan Area)", "Tr3s Pension House"],
    otherSites: ["Holy Name University Campus", "Captain Francisco Salazar Monument", "Ubujan Cliffside Viewpoint"]
  }
};


export const TagbilaranDashboard: React.FC = () => {
  const [selectedBarangayName, setSelectedBarangayName] = useState<string>("Barangay Bool");
  const [isDetailMode, setIsDetailMode] = useState<boolean>(false);

  // Auto scroll to top on change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isDetailMode]);

  const getLetteringSize = (name: string) => {
    if (name === "Barangay Dampas") {
      // Slightly larger lettering visually than standard, but layout height is standard to keep the button/row height identical.
      return "h-24 sm:h-36 md:h-40 lg:h-48 scale-[1.25] sm:scale-[1.35] md:scale-[1.4] lg:scale-[1.45] group-hover:scale-[1.55] origin-center";
    }
    if (name === "Barangay Cogon") {
      // Slightly reduced scale so it stays within standard proportions
      return "h-24 sm:h-36 md:h-40 lg:h-48 scale-[1.05] sm:scale-[1.1] md:scale-[1.15] lg:scale-[1.2] group-hover:scale-[1.3] origin-center";
    }

    const isSpecialBigger = [
      "Barangay Cabawan",
      "Barangay Manga",
      "Barangay Poblacion I",
      "Barangay Poblacion II",
      "Barangay Poblacion III"
    ].includes(name);

    if (isSpecialBigger) {
      return "h-24 sm:h-36 md:h-40 lg:h-48 scale-[1.2] sm:scale-[1.25] md:scale-[1.3] lg:scale-[1.35] group-hover:scale-[1.45] origin-center";
    }
    return "h-24 sm:h-36 md:h-40 lg:h-48 scale-100 group-hover:scale-110 origin-center";
  };

  const getLogoSize = (name: string) => {
    return "w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 scale-100 group-hover:scale-108 origin-center";
  };

  const getGridLogoSize = (name: string) => {
    return "w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 scale-100 group-hover:scale-110 transition-all duration-300 origin-center";
  };

  const getGridLetteringSize = (name: string) => {
    if (name === "Barangay Cogon") {
      return "h-10 sm:h-12 md:h-14 scale-[0.95] group-hover:scale-[1.05] transition-all duration-300 origin-center";
    }
    const isSpecialBigger = [
      "Barangay Cabawan",
      "Barangay Manga",
      "Barangay Poblacion I",
      "Barangay Poblacion II",
      "Barangay Poblacion III"
    ].includes(name);

    if (isSpecialBigger) {
      return "h-10 sm:h-12 md:h-14 scale-[1.1] group-hover:scale-[1.2] transition-all duration-300 origin-center";
    }
    return "h-10 sm:h-12 md:h-14 scale-100 group-hover:scale-110 transition-all duration-300 origin-center";
  };

  const activeBarangay = tagbilaranBarangays.find(b => b.name === selectedBarangayName) || tagbilaranBarangays[0];
  const activeImage = barangayImages[activeBarangay.name] || "/webp/Poblacion 1, Tagbilaran City (2).webp";

  return (
    <div className={`w-full relative min-h-screen select-none overflow-hidden pb-0 transition-colors duration-500 ${isDetailMode ? "bg-[#031d0a] text-white" : "bg-transparent text-[#05461a]"}`} id="barangay-dashboard-outer">
      
      {/* Elegant Shared Dynamic Blurred Background that updates when user hovers or is in full screen */}
      <AnimatePresence>
        {isDetailMode && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-b from-[#064a1b] via-[#0c2411] to-[#031c0a]"
          >
            <motion.img
              key={activeImage}
              src={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.60 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full object-cover filter blur-[15px] scale-105 will-change-transform translate-z-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-50/10 mix-blend-overlay" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isDetailMode ? (
          /* ================= FIRST VIEW: PORTAL SPLIT SYSTEM ================= */
          <motion.div
            key="split-portal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 mt-6 relative z-20 min-h-[72vh]"
            id="barangay-split-portal"
          >
            {/* Header section with elegant title & intro */}
            <div className="text-center max-w-3xl mx-auto mb-16 pt-10" id="barangay-portal-header">
              <h1 className="font-sans text-3xl sm:text-5xl font-black text-[#05461a] uppercase tracking-tight leading-none mb-4">
                THE 15 BARANGAYS
              </h1>
              <p className="font-sans text-xs sm:text-base text-[#05461a]/75 leading-relaxed font-semibold">
                Explore the historic roots, vibrant crafts, and local sub-cultures of Tagbilaran's unique communities. Click any barangay card to view its complete cultural identity, geographic map, and travel directory.
              </p>
            </div>

            {/* Themed Individual Boxes for 15 Barangays */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 pb-24" id="barangay-grid">
              {tagbilaranBarangays.map((brgy, idx) => {
                const logoImg = barangayLogos[brgy.name] || "/webp/TagbilaranLogo.webp";
                const letteringImg = barangayLetterings[brgy.name];

                return (
                  <motion.div
                    key={brgy.name}
                    initial={{ opacity: 0, y: 35, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: Math.min(idx * 0.035, 0.25) }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    onClick={() => {
                      setSelectedBarangayName(brgy.name);
                      setIsDetailMode(true);
                    }}
                    className="cursor-pointer group relative overflow-hidden bg-gradient-to-b from-[#083818] via-[#052b13] to-[#031f0d] border border-emerald-600/25 hover:border-emerald-500/60 rounded-[28px] p-6 sm:p-7 flex flex-col items-center justify-between min-h-[395px] sm:min-h-[420px] transition-all duration-500 shadow-2xl hover:shadow-[0_12px_30px_rgba(0,0,0,0.6),0_0_18px_rgba(16,185,129,0.2)] hover:-translate-y-1.5 hover:from-[#0a431d] hover:to-[#04240f]"
                    id={`barangay-box-${brgy.name.replace(/\s+/g, "-")}`}
                  >
                    {/* Soft Subtle Green Ambient Aura on Hover */}
                    <div className="absolute -top-16 -left-16 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Gentle Top Light Shimmer on Hover */}
                    <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Delicate Top Green Accent Bar */}
                    <div className="absolute top-0 inset-x-10 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Logo Container (centered) */}
                    <div className="flex-1 flex items-center justify-center w-full min-h-[195px] sm:min-h-[220px] pt-1.5 pb-1 relative z-10">
                      <img
                        src={logoImg}
                        alt={`${brgy.name} Logo`}
                        className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 object-contain drop-shadow-md select-none transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_4px_12px_rgba(16,185,129,0.35)]"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Lettering / Name Container (Natural colorful lettering) */}
                    <div className="w-full flex items-center justify-center my-1.5 min-h-[42px] relative z-10">
                      {letteringImg ? (
                        <img
                          src={letteringImg}
                          alt={`${brgy.name} Lettering`}
                          className="h-8 sm:h-9 md:h-10 w-auto max-w-[80%] object-contain select-none transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_2px_8px_rgba(16,185,129,0.35)]"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <h2 className="font-sans text-xl sm:text-2xl font-black text-white tracking-tight uppercase leading-none transition-all duration-300 group-hover:text-[#FFD54F]">
                          {brgy.name.replace("Barangay ", "")}
                        </h2>
                      )}
                    </div>

                    {/* Subtle Horizontal Separator */}
                    <div className="w-full h-px bg-white/10 my-3.5 group-hover:bg-emerald-400/30 transition-all duration-300 relative z-10" />

                    {/* Description Paragraph */}
                    <div className="w-full px-1 pb-1 relative z-10">
                      <p className="text-white/80 group-hover:text-white text-xs sm:text-[13px] leading-relaxed font-sans text-center font-normal line-clamp-3 transition-colors duration-300">
                        {brgy.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        ) : (
          /* ================= SECOND VIEW: CINEMATIC FULLSCREEN DETAIL ================= */
          <motion.div
            key="cinematic-fullscreen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55 }}
            className="w-full relative flex flex-col select-none"
            id="barangay-cinematic-view-container"
          >
            {/* Cinematic Section (takes responsive min-h with background, title and navigation) */}
            <div className="w-full min-h-[40vh] sm:min-h-[55vh] md:min-h-[82vh] relative flex flex-col justify-between items-center px-4 md:px-12 py-8 sm:py-12 text-center overflow-hidden" id="barangay-cinematic-hero">
              {/* Absolute Background image with custom forest-green / dark vignette cover */}
              <div className="absolute inset-0 z-0">
                <img
                  src={activeImage}
                  alt={activeBarangay.name}
                  className="w-full h-full object-cover transition-all duration-500 filter blur-md scale-102 will-change-transform translate-z-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064a1b]/90 via-[#0d6b2c]/60 to-black/55 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#064a1b]/90 to-transparent pointer-events-none" />
              </div>

              {/* Back button (Positioned absolute in the top-left corner and smaller) */}
              <button
                onClick={() => setIsDetailMode(false)}
                className="absolute top-6 left-6 md:top-8 md:left-12 z-30 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0b6326]/95 hover:bg-[#FF9850] text-[#FFD54F] hover:text-black font-sans font-black tracking-widest text-[10px] sm:text-xs uppercase border border-[#FFD54F]/20 transition-all cursor-pointer pointer-events-auto shadow-md"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                BACK TO OVERVIEW
              </button>

              {/* Content Core: Large centered texts */}
              <div className="w-full max-w-6xl text-center py-12 md:py-20 z-10 space-y-10 my-auto" id="cinematic-content">
                {/* Giant Name with adaptive scaling (never wraps to 1 letter or truncates with ellipsis) */}
                {barangayLetterings[activeBarangay.name] ? (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="flex justify-center items-center w-full px-4"
                  >
                    <img
                      src={barangayLetterings[activeBarangay.name]}
                      alt={`${activeBarangay.name} Lettering`}
                      className="h-24 sm:h-36 md:h-48 lg:h-56 xl:h-64 w-auto max-w-[95%] object-contain select-none"
                      style={{
                        filter: "drop-shadow(0 4px 30px rgba(0,0,0,0.95)) brightness-0 saturate-100 invert(84%) sepia(33%) saturate(1003%) hue-rotate(344deg) brightness(101%) contrast(101%)" // precise amber/yellow filter to match #FFD54F
                      }}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ) : (
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className={`font-sans font-black text-[#FFD54F] leading-none tracking-tight uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] text-center break-words select-none px-2 ${
                      activeBarangay.name.replace("Barangay ", "").length > 10 
                        ? "text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[7.5rem]" 
                        : "text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[11.5rem]"
                    }`}
                  >
                    {activeBarangay.name.replace("Barangay ", "")}
                  </motion.h2>
                )}

                {/* Full descriptive text of the Barangay */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-sans text-white text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto font-black drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] text-center px-4"
                >
                  {activeBarangay.desc} {activeBarangay.tip ? `Venture to find our ${activeBarangay.tip}.` : ""}
                </motion.p>
              </div>

              {/* Bounce Down indicator to encourage scrolling */}
              <div className="z-10 flex flex-col items-center gap-1.5 animate-bounce text-[#FFD54F] opacity-90 pb-2">
                <span className="font-mono text-[9px] font-black tracking-widest uppercase">DISCOVER HISTORY & SPECIALTY</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* WHITE BACKGROUND ONLY SECTION (Beautiful Dual-Column Editorial Layout - No Icons) */}
            <div className="w-full bg-white text-[#05461a] pb-16 pt-20 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-emerald-50 z-10 relative text-left" id="barangay-white-section">
              {/* Decorative Top Divider Image (Edge to Edge) like in the footer */}
              <div className="absolute top-0 left-0 right-0 w-full flex justify-center -translate-y-1/2 pointer-events-none z-20" id="green-divider-separator">
                <img 
                  src="/FILLERS/GreenDivider.png" 
                  alt="Top Section Divider" 
                  className="w-full h-5 md:h-6 object-fill"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="max-w-7xl mx-auto space-y-12">
                
                {/* Section Header */}
                <div className="border-b border-[#05461a]/15 pb-6 text-center">
                  <h3 className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight text-[#05461a] mt-1">
                    Cultural Identity of {activeBarangay.name}
                  </h3>
                </div>

                {/* 2-Column Balanced Narrative Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" id="heritage-narratives-grid">
                  
                  {/* Left Column: History & Origins */}
                  <div className="space-y-4" id="history-origins-block">
                    <h4 className="font-sans text-xl font-bold tracking-tight text-[#033010] border-b border-[#05461a]/10 pb-2">
                      History & Origins
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-[#05461a]/85 leading-relaxed text-justify">
                      {barangayDetails[activeBarangay.name]?.origin || "This neighborhood roots state traditional Boholano foundations, established over decades of family-run operations of agricultural, coastal, and urban heritage."}
                    </p>
                  </div>

                  {/* Right Column: Distinct Specialty & Vibe */}
                  <div className="space-y-4" id="distinct-specialty-block">
                    <h4 className="font-sans text-xl font-bold tracking-tight text-[#033010] border-b border-[#05461a]/10 pb-2">
                      Distinct Specialty & Vibe
                    </h4>
                    <div className="bg-[#05461a]/5 border-l-4 border-[#38B000] p-4 my-2">
                      <p className="font-sans text-sm sm:text-base text-[#05461a] font-bold leading-relaxed italic">
                        "{barangayDetails[activeBarangay.name]?.heritageHighlight || activeBarangay.heritage}"
                      </p>
                    </div>
                    <p className="font-sans text-sm sm:text-base text-[#05461a]/85 leading-relaxed text-justify">
                      {barangayDetails[activeBarangay.name]?.specialty || "Fosters a beautiful community of craftsman and deep local tourist hubs, keeping our historic legacy highly relevant."}
                    </p>
                  </div>

                </div>

                {/* Local Directory & Highlights Block - Placed Beautifully Below Distinct Specialty & Vibe */}
                <div className="pt-12 border-t border-[#05461a]/10 space-y-8" id="directory-highlights-section">
                  <div className="text-center max-w-2xl mx-auto space-y-2">
                    <span className="font-mono text-sm sm:text-base tracking-widest text-[#38B000] font-black uppercase block">
                      Explore Local Life
                    </span>
                    <h4 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#033010]">
                      Local Crafts, Stays & Attractions
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="directory-3-col-grid">
                    
                    {/* Local Products & Crafts */}
                    <div className="space-y-4 bg-stone-50/50 p-6 rounded-2xl border border-stone-200/40 hover:shadow-md transition-all duration-300">
                      <h5 className="font-sans text-lg font-bold tracking-tight text-[#033010]">
                        Local Products & Crafts
                      </h5>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {(barangayDetails[activeBarangay.name]?.products || ["Handwoven baskets", "Agricultural crops", "Fresh catch"]).map((item, idx) => (
                          <span 
                            key={idx} 
                            className="bg-white border border-stone-200 text-stone-700 px-3 py-1 rounded-full text-xs font-jakarta font-semibold transition-colors hover:border-[#38B000]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-[#05461a]/80 leading-relaxed italic border-t border-stone-100 pt-2">
                        {barangayDetails[activeBarangay.name]?.productDesc || "Traditional families produce agricultural items and home crafts sourced directly from the local materials found within the barangay boundaries."}
                      </p>
                    </div>

                    {/* Hotels & Places to Stay */}
                    <div className="space-y-4 bg-stone-50/50 p-6 rounded-2xl border border-stone-200/40 hover:shadow-md transition-all duration-300">
                      <h5 className="font-sans text-lg font-bold tracking-tight text-[#033010]">
                        Hotels & Places to Stay
                      </h5>
                      <ul className="space-y-2 pt-1">
                        {barangayDetails[activeBarangay.name]?.hotels?.map((hotel, idx) => (
                          <li key={idx} className="font-sans text-sm text-[#05461a]/85 flex items-baseline gap-2">
                            <span className="text-[#38B000] font-bold">&bull;</span>
                            <span className="font-semibold">{hotel}</span>
                          </li>
                        )) || (
                          <li className="font-sans text-xs sm:text-sm text-stone-500 italic">
                            Cozy residential bed-and-breakfasts and homestays. See nearby downtown areas for major hotels.
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Key Landmarks & Sites */}
                    <div className="space-y-4 bg-stone-50/50 p-6 rounded-2xl border border-stone-200/40 hover:shadow-md transition-all duration-300">
                      <h5 className="font-sans text-lg font-bold tracking-tight text-[#033010]">
                        Key Landmarks & Sites
                      </h5>
                      <ul className="space-y-2 pt-1">
                        {barangayDetails[activeBarangay.name]?.otherSites?.map((site, idx) => (
                          <li key={idx} className="font-sans text-sm text-[#05461a]/85 flex items-baseline gap-2">
                            <span className="text-[#38B000] font-bold">&bull;</span>
                            <span className="font-semibold">{site}</span>
                          </li>
                        )) || (
                          <li className="font-sans text-xs sm:text-sm text-stone-500 italic">
                            Beautiful residential corners, historic streets, chapels, and local barangay plazas.
                          </li>
                        )}
                      </ul>
                    </div>

                  </div>
                </div>
                {/* Barangay Map section */}
                {barangayMaps[activeBarangay.name] && (
                  <div className="mt-12 flex flex-col gap-6" id="barangay-boundary-map">
                    {/* Header */}
                    <div className="border-b border-[#05461a]/10 pb-6">
                      <h3 className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight text-[#05461a]">
                        {activeBarangay.name} Geographic Boundary Map
                      </h3>
                    </div>

                    {/* Map Image Panel - Cleared shadows, backgrounds and borders to keep it completely unenclosed */}
                    <div className="w-full max-w-4xl mx-auto aspect-[16/10] md:aspect-[16/9] flex items-center justify-center p-2 relative group">
                      <img 
                        src={barangayMaps[activeBarangay.name]} 
                        alt={`${activeBarangay.name} Geographic Map`} 
                        className="w-full max-h-[500px] md:max-h-[560px] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Description */}
                    <div className="text-center max-w-2xl mx-auto">
                      <p className="font-sans text-sm sm:text-base text-[#05461a]/80 leading-relaxed text-center">
                        This administrative map marks the precise municipal territory and certified boundaries of <strong>{activeBarangay.name}</strong>.
                      </p>
                    </div>
                  </div>
                )}



              </div>
            </div>

            {/* TAKE A LOOK CAROUSEL SECTION (Wavy connector path, right-to-left smooth hardware accelerated sliding) */}
            <div className="w-full bg-gradient-to-b from-[#064a1b] via-[#0e6128] to-[#033010] py-10 md:py-20 relative overflow-hidden text-left border-t border-emerald-500/10" id="barangay-take-a-look-section">
              {/* Injecting hardware-accelerated CSS Marquee Animation with slower, smoother pacing */}
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee-rtl {
                  0% { transform: translate3d(0, 0, 0); }
                  100% { transform: translate3d(-50%, 0, 0); }
                }
                @media (min-width: 1024px) {
                  .animate-marquee-custom {
                    display: flex;
                    width: max-content;
                    animation: marquee-rtl 95s linear infinite;
                    will-change: transform;
                    backface-visibility: hidden;
                  }
                  .animate-marquee-custom:hover {
                    animation-play-state: paused;
                  }
                }
                @media (max-width: 1023px) {
                  .animate-marquee-custom {
                    display: flex;
                    width: auto !important;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                    gap: 1rem;
                    padding-bottom: 12px;
                  }
                  .animate-marquee-custom::-webkit-scrollbar {
                    display: none;
                  }
                }
              `}} />

              {/* Background Glows and Connecting Amber Trail Line */}
              <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#FFD54F]/5 blur-[120px] pointer-events-none" />
              <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#38B000]/10 blur-[120px] pointer-events-none" />
              
              {/* Wavy Horizontal Path Line representing the local network connecting neighborhoods */}
              <div className="absolute top-[52%] md:top-[56%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF9850]/25 to-transparent pointer-events-none z-0" />

              {/* Header Container */}
              <div className="max-w-3xl mx-auto px-6 mb-12 relative z-10 text-center flex flex-col items-center justify-center" id="carousel-header-container">
                <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl font-black text-[#FFD54F] tracking-tight uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] select-none">
                  EXPLORE THE 15 BARANGAYS
                </h2>
              </div>

              {/* Infinite Scrolling Track */}
              <div className="w-full relative overflow-hidden z-10 py-4" id="infinite-scrolling-track">
                <div className="animate-marquee-custom flex gap-6 md:gap-8 px-4">
                  {/* Triple rendering array ensures there are no gaps on high-resolution widescreen displays */}
                  {[...tagbilaranBarangays, ...tagbilaranBarangays, ...tagbilaranBarangays].map((otherBarangay, index) => {
                    const uniqueIndexId = `${otherBarangay.name}-${index}`;
                    const isActive = otherBarangay.name === activeBarangay.name;
                    const cleanNameStr = otherBarangay.name.replace("Barangay ", "");
                    
                    return (
                      <div
                        key={uniqueIndexId}
                        onClick={() => {
                          setSelectedBarangayName(otherBarangay.name);
                          // Soft, gorgeous transition: scroll up elegantly to active detail view
                          const heroContainer = document.getElementById("barangay-cinematic-hero");
                          if (heroContainer) {
                            heroContainer.scrollIntoView({ behavior: "smooth" });
                          } else {
                            window.scrollTo({ top: 350, behavior: "smooth" });
                          }
                        }}
                        className={`w-[260px] md:w-[300px] h-[260px] md:h-[300px] relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0c2411] to-[#031c0a] border ${
                          isActive 
                            ? "border-[#FFD54F] shadow-[0_0_20px_rgba(255,213,79,0.25)] bg-gradient-to-b from-[#0d6b2c] to-[#043312] scale-[1.02]" 
                            : "border-white/10 hover:border-[#32e875]/60 hover:shadow-[#32e875]/10"
                        } transition-all duration-300 flex-shrink-0 flex flex-col justify-between p-4 md:p-5 group cursor-pointer hover:-translate-y-1`}
                      >
                        {/* Logo container - perfectly centered inside upper region */}
                        <div className="flex-1 flex items-center justify-center w-full min-h-0 py-1">
                          <img
                            src={barangayLogos[otherBarangay.name] || "/B-LOGO/BOOL_Logo.webp"}
                            alt={`${otherBarangay.name} Logo`}
                            className="w-32 h-32 md:w-36 md:h-36 object-contain transition-all duration-500 scale-100 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Lettering image (or text fallback) - centered at the bottom */}
                        <div className="w-full flex items-center justify-center min-h-[24px] md:min-h-[30px] pb-1 z-10">
                          {barangayLetterings[otherBarangay.name] ? (
                            <img
                              src={barangayLetterings[otherBarangay.name]}
                              alt={`${otherBarangay.name} Lettering`}
                              className="h-5 md:h-7 w-auto max-w-[85%] object-contain transition-all duration-500"
                              style={{
                                filter: "brightness-0 invert(1)" // clean bright white outline against dark green
                              }}
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <h4 className="font-black text-base md:text-lg text-white group-hover:text-[#FFD54F] transition-colors leading-tight tracking-wide uppercase">
                              {cleanNameStr}
                            </h4>
                          )}
                        </div>

                        {/* Subtle divider */}
                        <div className="w-full h-[1px] bg-white/10 my-1.5" />

                        {/* Brief Description below the image */}
                        <div className="text-center font-sans select-none pointer-events-none">
                          <p className="font-sans text-[10px] md:text-xs text-stone-300 group-hover:text-white transition-colors leading-relaxed line-clamp-2">
                            {otherBarangay.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>



          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
