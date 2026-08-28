import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, MapPin, Phone, Globe, Building2 } from "lucide-react";

interface DirectoryItem {
  id: string;
  category:
    | "Hotel"
    | "Mabuhay Accommodation"
    | "Restaurant"
    | "Tourism Training Center"
    | "Land Transport Operator"
    | "Travel Agency"
    | "Travel and Tour Agency";
  name: string;
  address: string;
  contact: string;
  website?: string;
}

const DIRECTORY_ITEMS: DirectoryItem[] = [
  // Page 1
  {
    id: "925-maxi-hotel",
    category: "Hotel",
    name: "925 Maxi Hotel & Event Center",
    address: "Palma St., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "(038) 422-3523"
  },
  {
    id: "belian-hotel",
    category: "Hotel",
    name: "Belian Hotel",
    address: "006 Graham Avenue, Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "0977-8267541",
    website: "https://www.belianhotel.com/"
  },
  {
    id: "bohol-tropics-resort",
    category: "Hotel",
    name: "Bohol Tropics Resort",
    address: "Graham Avenue, Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "(038) 412-1240",
    website: "http://www.boholtropics.ph"
  },
  {
    id: "kew-hotel",
    category: "Hotel",
    name: "Kew Hotel",
    address: "JA Clarin Street, Brgy. Dampas, Tagbilaran City, Bohol",
    contact: "(038) 427-2513",
    website: "https://kewhotel.com.ph/tagbilaran/"
  },
  {
    id: "metrocentre-hotel",
    category: "Hotel",
    name: "O.G. Metrocentre Hotel & Convention Center",
    address: "CPG Avenue, Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "(038) 411-2599 / (038) 501-7575 / (038) 501-7288",
    website: "https://www.metrocentrehotel.com/"
  },
  {
    id: "ocean-suites-boutique-hotel",
    category: "Hotel",
    name: "Ocean Suites Boutique Hotel",
    address: "0716 VP Inting Avenue, Brgy. Bool, Tagbilaran City, Bohol",
    contact: "0917-6547217",
    website: "https://www.oceansuitesbohol.com/"
  },
  {
    id: "panda-tea-garden-suites",
    category: "Hotel",
    name: "Panda Tea Garden Suites",
    address: "J.A. Clarin Street, Brgy. Dao, Tagbilaran City, Bohol",
    contact: "0918-9359178"
  },
  {
    id: "7-meadows-inn",
    category: "Mabuhay Accommodation",
    name: "7 Meadows Inn",
    address: "0299 J.A. Clarin St., Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "0946-4161417"
  },
  {
    id: "arabelle-suites",
    category: "Mabuhay Accommodation",
    name: "Arabelle Suites",
    address: "0055 New Calceta St., Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "0999-3692946"
  },
  {
    id: "b-and-j-guesthouse",
    category: "Mabuhay Accommodation",
    name: "B and J Guesthouse and Functions Inc.",
    address: "0409 Bantol St., Dampas District, Tagbilaran City, Bohol",
    contact: "0942-9764512 / 0956-9560033",
    website: "http://www.bnjguesthouse.com/"
  },
  {
    id: "bodare-pension-house",
    category: "Mabuhay Accommodation",
    name: "Bodare Pension House",
    address: "Bodare Bldg., Brgy. Dao, Tagbilaran City, Bohol",
    contact: "(038) 422-8034"
  },
  {
    id: "bohol-ecotel",
    category: "Mabuhay Accommodation",
    name: "Bohol Ecotel",
    address: "64-A A. Hontanosas St. Ext., Brgy. Poblacion III, Tagbilaran City, Bohol",
    contact: "(038) 502-0442 / 0927-0867039",
    website: "https://www.boholecotel.com/"
  },
  {
    id: "chriscent-ville-pension-house",
    category: "Mabuhay Accommodation",
    name: "Chriscent Ville Pension House",
    address: "0016 Gallares St., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "(038) 411-4029 / 0977-8248642",
    website: "https://www.chriscentvillebohol.com/"
  },
  {
    id: "cresebo-mansion-bohol-hotel",
    category: "Mabuhay Accommodation",
    name: "Cresebo Mansion-Bohol Hotel",
    address: "42 F. Torralba St., Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "0939-9776517"
  },

  // Page 2
  {
    id: "darunday-manor",
    category: "Mabuhay Accommodation",
    name: "Darunday Manor",
    address: "0022 J.A. Clarin Street, Brgy. Poblacion III, Tagbilaran City, Bohol",
    contact: "(038) 412-2512",
    website: "https://www.darundaymanor.com"
  },
  {
    id: "drew-hostel",
    category: "Mabuhay Accommodation",
    name: "Drew Hostel",
    address: "CPG East Avenue, Brgy. Mansasa, Tagbilaran City, Bohol",
    contact: "0922-3358524"
  },
  {
    id: "gv-hotel-tagbilaran",
    category: "Mabuhay Accommodation",
    name: "GV Hotel Tagbilaran / Vismin GV Hotel Inc.",
    address: "JS Borja St., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "0917-7034508",
    website: "https://www.gvhotels.com.ph/"
  },
  {
    id: "hotel-fleur-de-liz",
    category: "Mabuhay Accommodation",
    name: "Hotel Fleur De Liz Tagbilaran",
    address: "Carlos P. Gracia Avenue, Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "0917-7070974",
    website: "https://www.hotelfleurdeliz.com.ph/"
  },
  {
    id: "jjs-seafoods-village",
    category: "Mabuhay Accommodation",
    name: "JJ's Seafoods Village",
    address: "K of C Drive, Gallares St., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "(038) 411-5457 / (038) 412-3756 / 0998-9803436"
  },
  {
    id: "m-moonlight-inn-bohol",
    category: "Mabuhay Accommodation",
    name: "M. Moonlight Inn Bohol",
    address: "0059 Espuelas Street, Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "(038) 411-2760 / 0908-3062283"
  },
  {
    id: "mellow-apartelle",
    category: "Mabuhay Accommodation",
    name: "Mellow Apartelle and Tourist Inn",
    address: "0428 Binayran Rd., Brgy. Dampas, Tagbilaran City, Bohol",
    contact: "(038) 411-2211 / 0939-7740920"
  },
  {
    id: "nisa-travellers-hotel",
    category: "Mabuhay Accommodation",
    name: "Nisa Travellers Hotel",
    address: "2F Sarmiento Bldg., 0060 CPG Avenue, Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "(038) 422-8773"
  },
  {
    id: "og-marbella-leisure-hostel",
    category: "Mabuhay Accommodation",
    name: "O.G. Marbella Leisure Hostel",
    address: "Marbella Bldg., C. Gallares St., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "(038) 412-2966",
    website: "https://www.marbellaleisure.com"
  },
  {
    id: "pure-shores-villa",
    category: "Mabuhay Accommodation",
    name: "Pure Shores Villa",
    address: "Sitio Dela Paz, Brgy. Basdio, Guindulman, Bohol",
    contact: "0917-5305412 / 0917-6257204",
    website: "https://www.pureshoresvilla.com"
  },
  {
    id: "reynas-haven-and-gardens",
    category: "Mabuhay Accommodation",
    name: "Reyna's the Haven and Gardens",
    address: "0067, Brunidor St., Formerly New Calceta Street, Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "(038) 412-3170 / (038) 422-8168"
  },
  {
    id: "sun-avenue-pensionne",
    category: "Mabuhay Accommodation",
    name: "Sun Avenue Pensionne",
    address: "0203 Gallares Street, Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "(032) 412-8723 / 0968-8684770"
  },
  {
    id: "travelbee-seaside-inn",
    category: "Mabuhay Accommodation",
    name: "Travelbee Seaside Inn",
    address: "Gallares St., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "0917-8886779",
    website: "https://tbsi-bohol.travelbee.ph"
  },
  {
    id: "wregent-plaza-hotel",
    category: "Mabuhay Accommodation",
    name: "Wregent Plaza Hotel",
    address: "CPG North Avenue, Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "0949-7176615"
  },
  {
    id: "seafront-sepo-grill",
    category: "Restaurant",
    name: "Seafront Sepo Grill and Restaurant",
    address: "0382 Seaside Cottage, VP Inting Avenue, Brgy. Mansasa, Tagbilaran City, Bohol",
    contact: "(038) 411-3504",
    website: "https://www.facebook.com/rclickygroup"
  },
  {
    id: "cmc-institute",
    category: "Tourism Training Center",
    name: "CMC Institute of Business Management Skills, Training and Assessment Center Inc.",
    address: "0250 J.A. Clarin St., Brgy. Poblacion III, Tagbilaran City, Bohol",
    contact: "(038) 501-0918 / 0985-8336108"
  },
  {
    id: "logic-force-consultancy",
    category: "Tourism Training Center",
    name: "Logic Force Consultancy Corporation",
    address: "Venancio P. Inting Avenue, Brgy. Mansasa, Tagbilaran City, Bohol",
    contact: "0966-1566718"
  },
  {
    id: "blue-eagle-road-transport",
    category: "Land Transport Operator",
    name: "Blue Eagle Road Transport Corp.",
    address: "Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "0955-4075209"
  },

  // Page 3
  {
    id: "biodmpc-transport",
    category: "Land Transport Operator",
    name: "Bohol Island Operators and Drivers Multipurpose Cooperative (BIODMPC)",
    address: "Room 4, K of C Building, K of C Drive, Gallares St., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "0938-4762809"
  },
  {
    id: "bohol-premium-transport",
    category: "Land Transport Operator",
    name: "Bohol Premium Transport Corporation",
    address: "c/o Iantaw Native Restaurant Bohol, V.P. Inting Avenue, Brgy. Mansasa, Tagbilaran City, Bohol",
    contact: "0917-6294172"
  },
  {
    id: "bohol-tourist-multipurpose",
    category: "Land Transport Operator",
    name: "Bohol Tourist Multi-Purpose Cooperative",
    address: "Everglory Building Corner Gallares & Ma. Clara Streets, Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "0909-4541615 / 0995-9484958"
  },
  {
    id: "bohol-transport-cooperative",
    category: "Land Transport Operator",
    name: "Bohol Transport Cooperative",
    address: "3F-B&U Bldg., Belderol St., Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "0948-6216601"
  },
  {
    id: "nf-transport-and-tours",
    category: "Land Transport Operator",
    name: "NF Transport and Tours",
    address: "0080 G. Visarra St., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "(038) 412-4568 / 0917-3020055"
  },
  {
    id: "odtohan-rent-a-car",
    category: "Land Transport Operator",
    name: "Odtohan Rent A Car",
    address: "0019-B, L. Glovasa St., Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "0942-0818967 / 0922-7345111"
  },
  {
    id: "ramyer-transport-tour",
    category: "Land Transport Operator",
    name: "Ramyer Travel & Tour",
    address: "Lamdagan St., Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "0917-7956753 / 0947-8928954"
  },
  {
    id: "asiatic-adventures",
    category: "Travel Agency",
    name: "Asiatic Adventures Tours and Services",
    address: "06565 Wildstone Property Leasing, T. Bantol St., Brgy. Dampas, Tagbilaran City, Bohol",
    contact: "0905-3409008"
  },
  {
    id: "bohol-sl-travel",
    category: "Travel Agency",
    name: "Bohol SL Travel and Tours",
    address: "#0938 Baguio Drive, Brgy. Taloto, Tagbilaran City, Bohol",
    contact: "0917-3237559"
  },
  {
    id: "dagohoy-world-travel",
    category: "Travel Agency",
    name: "Dagohoy World Travel, Inc.",
    address: "City Airport Commercial Center, Brgy. Booy, Tagbilaran City, Bohol",
    contact: "0917-8960486",
    website: "http://dagohoyworldtravel.com"
  },
  {
    id: "fambats-travel-agency",
    category: "Travel Agency",
    name: "Fambats Travel and Tours",
    address: "0095 Happy Valley Street, Brgy. Dampas, Tagbilaran City, Bohol",
    contact: "0933-8616263"
  },
  {
    id: "jb7-travel-courier",
    category: "Travel Agency",
    name: "JB7 Travel & Courier Services",
    address: "0075 C.P.G. Avenue, Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "(038) 411-6403 / 0917-3061499"
  },
  {
    id: "rutas-viajes-tour",
    category: "Travel Agency",
    name: "Rutas Viajes and Tour Services",
    address: "0028-A Remolador St., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "0917-8000079"
  },
  {
    id: "ticket-bee-services",
    category: "Travel Agency",
    name: "Ticket Bee Ticketing Services",
    address: "Corner Lessage St., & C.P.G. Ave., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "(038) 501-8448 / 0917-3061499"
  },
  {
    id: "angels-wings-tours",
    category: "Travel and Tour Agency",
    name: "Angel's Wings Tours and Travel",
    address: "G/F Alta Cita Mall, Gallares St., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "0917-1609201"
  },
  {
    id: "baclayon-travel-tours",
    category: "Travel and Tour Agency",
    name: "Baclayon Travel & Tours",
    address: "Caseñas Building, 079 Carlos P. Garcia Ave., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "0917-6205300"
  },

  // Page 4
  {
    id: "bht-bohol-holidays",
    category: "Travel and Tour Agency",
    name: "BHT Bohol Holidays Travel & Tours Inc.",
    address: "0128 Sarabia-Co-Torralba Bldg., CPG Ave., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "(038) 411-3840 / 0917-4744756"
  },
  {
    id: "bohol-fb-travel-tours",
    category: "Travel and Tour Agency",
    name: "Bohol F&B Travel and Tours",
    address: "Lim Limuel Building, CPG Avenue cor. San Jose St., Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "0917-6522669",
    website: "https://www.boholfbtravels.com"
  },
  {
    id: "earth-explorers-travel",
    category: "Travel and Tour Agency",
    name: "Earth Explorers Travel & Tours",
    address: "Door 5, Jam Building, H. Zamora St., Brgy. Dampas, Tagbilaran City, Bohol",
    contact: "0917-7921005",
    website: "https://www.earthexplorers.ph"
  },
  {
    id: "ecotravelers-travel-tours",
    category: "Travel and Tour Agency",
    name: "Ecotravelers Travel & Tours",
    address: "JGY Land, Cor. Gallares & Ma. Clara Sts., Poblacion II, Tagbilaran City, Bohol",
    contact: "0906-3343357"
  },
  {
    id: "enchanting-expeditions",
    category: "Travel and Tour Agency",
    name: "Enchanting Expeditions Centre Inc.",
    address: "Mezzanine Floor, Lim-Magtajas Bldg., CPG Avenue, Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "0963-4877587"
  },
  {
    id: "fambats-travel-tour-agency",
    category: "Travel and Tour Agency",
    name: "Fambats Travel and Tours",
    address: "0095 Happy Valley Street, Brgy. Dampas, Tagbilaran City, Bohol",
    contact: "0933-8616263"
  },
  {
    id: "felys-tours-and-travel",
    category: "Travel and Tour Agency",
    name: "Felys Tours and Travel",
    address: "16 J.A. Clarin St., Brgy. Poblacion I, Tagbilaran City, Bohol",
    contact: "(038) 411-4476"
  },
  {
    id: "gecko-tours-and-travel",
    category: "Travel and Tour Agency",
    name: "Gecko Tours and Travel",
    address: "0136 E. Inting Street, Brgy. Mansasa, Tagbilaran City, Bohol",
    contact: "(038) 505-1189"
  },
  {
    id: "gjs-travel-tours",
    category: "Travel and Tour Agency",
    name: "GJS Travel & Tours",
    address: "0046 Kauswagan St., Brgy. Manga, Tagbilaran City, Bohol",
    contact: "0917-8012133"
  },
  {
    id: "happy-trails-tours",
    category: "Travel and Tour Agency",
    name: "Happy Trails Tours and Travel",
    address: "Unit A3, the Alley, JA Clarin Street, Brgy. Dampas, Tagbilaran City, Bohol",
    contact: "0917-1328235 / 0927-7463991",
    website: "https://happytrails.ph/"
  },
  {
    id: "lc-travel-services",
    category: "Travel and Tour Agency",
    name: "L&C Travel Services",
    address: "0097 cor C. Putong and Graham Ave., Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "0939-9192314 / 0926-8922864"
  },
  {
    id: "merry-go-travel-tours",
    category: "Travel and Tour Agency",
    name: "Merry Go Travel & Tours",
    address: "UGF, Galleria Luisa Mall, Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "0943-3378837 / 0948-3747390",
    website: "https://www.facebook.com/toursmerrygotravels"
  },
  {
    id: "one-fine-travel",
    category: "Travel and Tour Agency",
    name: "One Fine Travel",
    address: "0243 M. Torralba Extension, Brgy. Poblacion III, Tagbilaran City, Bohol",
    contact: "0975-2911498",
    website: "https://www.facebook.com/OneFineTravelandTours"
  },
  {
    id: "philippine-travel-tours-corp",
    category: "Travel and Tour Agency",
    name: "Philippine Travel and Tours Corporation",
    address: "0200 B. Inting St., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "0927-1102793"
  },
  {
    id: "powerupz-travel-tours",
    category: "Travel and Tour Agency",
    name: "Powerupz Travel & Tours",
    address: "P&R Commercial Lot and Bldg. Rental, Gallares St., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "(038) 500-1011 / 0927-7925905 / 0939-7559502",
    website: "https://powerupztravelandtours.com/"
  },
  {
    id: "ramyer-travel-tour-agency",
    category: "Travel and Tour Agency",
    name: "Ramyer Travel & Tour",
    address: "Lamdagan St., Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "0917-8399921"
  },
  {
    id: "topaz-travel-tours",
    category: "Travel and Tour Agency",
    name: "Topaz Travel and Tours",
    address: "50 P Belderol St., Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "(038) 501-7391 / 0945-7437944"
  },

  // Page 5
  {
    id: "traveien-travel-tours",
    category: "Travel and Tour Agency",
    name: "Traveien Travel and Tours",
    address: "G/F BOPE MPC Bldg., F. Rocha Street, Brgy. Poblacion III, Tagbilaran City, Bohol",
    contact: "0921-5467386"
  },
  {
    id: "travel-treats-tour-services",
    category: "Travel and Tour Agency",
    name: "Travel Treats Tour Services",
    address: "0120 San Jose St., Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "0977-8200517",
    website: "http://www.traveltreats.com.ph"
  },
  {
    id: "travel-village-inc",
    category: "Travel and Tour Agency",
    name: "Travel Village,Inc",
    address: "La Roca Bldg., Brgy. Cogon, Tagbilaran City, Bohol",
    contact: "0917-3042103",
    website: "https://www.boholtravelvillage.com"
  },
  {
    id: "young-travel-services",
    category: "Travel and Tour Agency",
    name: "Young Travel Services",
    address: "0171 B. Inting St., Brgy. Poblacion II, Tagbilaran City, Bohol",
    contact: "0917-4798477"
  }
];

const CATEGORIES = [
  "All",
  "Hotel",
  "Mabuhay Accommodation",
  "Restaurant",
  "Tourism Training Center",
  "Land Transport Operator",
  "Travel Agency",
  "Travel and Tour Agency"
] as const;

export default function Shops() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredItems = DIRECTORY_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.website && item.website.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      className="w-full bg-[#FCFBF8] select-none relative pt-24 sm:pt-28 pb-20 px-3 sm:px-6 lg:px-12 border-t border-stone-200 overflow-hidden"
      id="shops-view-root"
    >
      {/* Ambient background glows */}
      <div className="absolute top-20 -left-32 w-80 h-80 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans font-black text-[#05461a] text-2xl sm:text-4xl lg:text-6xl tracking-tight leading-none mb-3 sm:mb-6 uppercase"
          >
            Shops & Directory
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-500 text-xs sm:text-sm lg:text-base leading-relaxed font-sans font-medium px-2"
          >
            Official directory of accredited hotels, Mabuhay accommodations, restaurants, tourism training centers, land transport operators, and travel agencies across Tagbilaran City.
          </motion.p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-6 sm:mb-10 space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-full sm:max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by name, address, or contact..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 sm:py-2.5 bg-white border border-stone-200 rounded-none text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#05461a] shadow-sm font-sans"
              />
            </div>

            {/* Results count */}
            <div className="text-[11px] sm:text-xs font-sans font-semibold text-stone-500 text-right sm:text-left whitespace-nowrap">
              Showing <span className="font-bold text-stone-800">{filteredItems.length}</span> of {DIRECTORY_ITEMS.length} establishments
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-none text-xs font-sans font-bold tracking-tight uppercase whitespace-nowrap transition-all duration-300 cursor-pointer border ${
                    active
                      ? "bg-[#05461a] text-white border-[#05461a] shadow-md shadow-emerald-900/20 scale-[1.02]"
                      : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50 hover:text-stone-900 hover:border-emerald-600/40 hover:shadow-xs"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Layout Grid - 2 columns on ALL screen sizes (grid-cols-2) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 items-stretch" id="shops-content-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, delay: Math.min(idx * 0.015, 0.2) }}
                className="bg-white rounded-none border border-stone-200 p-3.5 sm:p-6 lg:p-8 shadow-sm flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06),0_0_15px_rgba(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300 h-full"
                id={`card-${item.id}`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-1.5 sm:gap-4 mb-2.5 sm:mb-3">
                    <h3 className="font-sans font-black text-[#05461a] text-xs sm:text-base lg:text-lg tracking-tight uppercase leading-snug">
                      {item.name}
                    </h3>
                    <span className="text-[8px] sm:text-[10px] text-stone-600 font-sans font-bold tracking-wider uppercase bg-stone-100 border border-stone-200 px-1.5 sm:px-2 py-0.5 whitespace-nowrap shrink-0">
                      {item.category}
                    </span>
                  </div>

                  {/* Address Section */}
                  <div className="flex items-start gap-1.5 text-[10px] sm:text-xs text-stone-600 font-sans font-medium mb-3 sm:mb-4 leading-relaxed">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-stone-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-3 sm:line-clamp-none">{item.address}</span>
                  </div>
                </div>

                {/* Card Details (Contact Number positioned up right under address) */}
                <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs font-sans pt-2.5 sm:pt-3 border-t border-stone-100">
                  {/* Direct Contact */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-stone-50 p-2 sm:p-3 rounded-none border border-stone-100 gap-1">
                    <span className="text-stone-500 font-bold uppercase tracking-wider text-[9px] sm:text-[11px]">
                      Contact
                    </span>
                    <span className="font-bold text-stone-800 font-mono text-[10px] sm:text-xs lg:text-sm select-text text-left sm:text-right break-all">
                      {item.contact}
                    </span>
                  </div>

                  {/* Website link if available */}
                  {item.website && (
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-1 sm:py-2 px-1 text-[9px] sm:text-xs gap-0.5">
                      <span className="text-stone-500 font-medium">Website</span>
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#05461a] font-bold hover:underline select-text truncate max-w-full sm:max-w-[240px] text-left sm:text-right"
                      >
                        {item.website.replace(/^https?:\/\//, "")}
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white border border-stone-200 p-8 shadow-sm">
            <Building2 className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <p className="text-sm font-bold text-stone-800 uppercase tracking-wide mb-1">
              No matching establishment found
            </p>
            <p className="text-xs text-stone-500 mb-4">
              Try searching with another keyword or selecting "All" categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-[#05461a] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#033012] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
