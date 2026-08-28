import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ImageMapper, { CustomArea } from "react-img-mapper";
import { 
  Building2, 
  Heart, 
  HelpCircle, 
  Landmark, 
  MapPin, 
  Sparkles, 
  TrendingUp, 
  X, 
  Utensils, 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft,
  Image as ImageIcon,
  Layers, 
  Info,
  Maximize2,
  ExternalLink,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Compass,
  ArrowRight
} from "lucide-react";
import ImageWithSkeleton from "./ImageWithSkeleton";
import GrowthDetailView from "./GrowthDetailView";
import { 
  TAGBILARAN_GEOJSON_PATH, 
  GROWTH_AREA_POLYGONS, 
  GROWTH_AREA_PATHS,
  GROWTH_AREA_CENTROIDS 
} from "../data/tagbilaranGeoData";

export interface GrowthPhotoItem {
  url: string;
  title: string;
}

export interface GrowthAreaGalleryData {
  id: "g1" | "g2" | "g3" | "g4" | "g5";
  folderName: string;
  images: GrowthPhotoItem[];
}

export const GROWTH_AREA_PHOTOS: Record<string, GrowthAreaGalleryData> = {
  g1: {
    id: "g1",
    folderName: "Area 1",
    images: [
      { url: "/Growth/Area 1/1.webp", title: "Coastal Trail & Traditional Crafts" },
      { url: "/Growth/Area 1/1 (1).webp", title: "Manga & Booy Artisan Community" },
      { url: "/Growth/Area 1/2.webp", title: "Booy Coastal Seafood Promenade" },
      { url: "/Growth/Area 1/4.webp", title: "Taloto Spring & Marine Eco-Reserve" },
      { url: "/Growth/Area 1/AREA 1 5.webp", title: "Ubujan Coastal Livelihood & Craft Center" },
    ]
  },
  g2: {
    id: "g2",
    folderName: "Area 2",
    images: [
      { url: "/Growth/Area 2/AREA 2 1.webp", title: "Cogon & Dampas Commercial & Innovation Hub" },
      { url: "/Growth/Area 2/AREA 2 3.webp", title: "Dao Transit & Institutional District" },
    ]
  },
  g3: {
    id: "g3",
    folderName: "Area 3",
    images: [
      { url: "/Growth/Area 3/AREA 3 1.webp", title: "Historic Downtown & Heritage District" },
      { url: "/Growth/Area 3/AREA 3 2.webp", title: "St. Joseph Cathedral & Plaza Rizal" },
      { url: "/Growth/Area 3/AREA 3 3.webp", title: "National Museum & Heritage Corridor" },
    ]
  },
  g4: {
    id: "g4",
    folderName: "Area 4",
    images: [
      { url: "/Growth/Area 4/AREA 4 1.webp", title: "Blood Compact Friendship Monument" },
      { url: "/Growth/Area 4/AREA 4 2.webp", title: "Napoleon Abueva Sandugo Sculpture" },
      { url: "/Growth/Area 4/AREA 4 3.webp", title: "Mansasa Coastal Eco-Corridor" },
      { url: "/Growth/Area 4/AREA 4 4 no camera.webp", title: "Mangrove Conservation Boardwalk" },
      { url: "/Growth/Area 4/AREA 4 4 with camera.webp", title: "Friendship Bayfront Vista" },
    ]
  },
  g5: {
    id: "g5",
    folderName: "Area 5",
    images: [
      { url: "/Growth/Area 5/1 (2).webp", title: "San Isidro Active Wellness Ridge" },
      { url: "/Growth/Area 5/AREA 5 2.webp", title: "Cabawan Agri-Tourism Center" },
      { url: "/Growth/Area 5/AREA 5 3.webp", title: "Eco-Living Residential District" },
      { url: "/Growth/Area 5/AREA 5 4.webp", title: "Tiptip Hillside Trail & Overlook" },
      { url: "/Growth/Area 5/AREA 5 5.webp", title: "Active Green Trails & Fitness Loop" },
    ]
  }
};

export interface GrowthProject {
  id: string;
  title: string;
  category: "Civic" | "Commercial" | "Infrastructure" | "Healthcare" | "Education" | "Heritage & Culture" | "Tourism" | "Agri-Tourism" | "Eco-Tourism";
  location: string;
  growthAreaId: "g1" | "g2" | "g3" | "g4" | "g5";
  year: string;
  description: string;
  image: string;
  features: string[];
  impactStat: {
    value: string;
    label: string;
  };
  mapsUrl: string;
}

export interface GrowthAreaArea extends CustomArea {
  id: "g1" | "g2" | "g3" | "g4" | "g5";
  title: string;
  subtitle: string;
  description: string;
  shape: "poly";
  coords: number[];
  fillColor: string;
  color: string;
  badge: string;
  keyFocus: string;
  keyProjects: string[];
  iconName: string;
}

const MAP_IMAGE_URL = "/FILLERS/SAULOGBG.png";

export const mapData: { name: string; areas: GrowthAreaArea[] } = {
  name: "tagbilaran-growth-areas",
  areas: [
    {
      id: "g1",
      title: "Growth Area 1",
      subtitle: "Coastal Crafts & Culinary Trail",
      description: "Manga, Ubujan, Taloto, Booy, part of Cogon",
      shape: "poly",
      coords: GROWTH_AREA_POLYGONS.g1,
      fillColor: "rgba(34, 186, 187, 0.95)",
      color: "#22BABB",
      badge: "Crafts & Culinary",
      iconName: "Utensils",
      keyFocus: "Traditional Clay Pottery Artisans, Coastal Seafood Boardwalks, Marine Tourism",
      keyProjects: ["Manga Pottery Artisans Village", "Ubujan Coastal Promenade", "Taloto Spring Park", "Booy Local Culinary Trail"]
    },
    {
      id: "g2",
      title: "Growth Area 2",
      subtitle: "SMART Civic and Enterprise Hub",
      description: "Cogon, Dampas, Dao",
      shape: "poly",
      coords: GROWTH_AREA_POLYGONS.g2,
      fillColor: "rgba(220, 224, 32, 0.95)",
      color: "#D8E020",
      badge: "Civic & Enterprise",
      iconName: "Building2",
      keyFocus: "Digital Economy BPOs, Central City Administration, High-Volume Retail & Intermodal Transit",
      keyProjects: ["New Tagbilaran City Hall Complex", "Bohol Business & IT Park (Old Airport)", "Island City Mall (ICM)", "Holy Name University Janssen Campus"]
    },
    {
      id: "g3",
      title: "Growth Area 3",
      subtitle: "Heritage Revival Trail",
      description: "Poblacion 1, 2, 3, part of Cogon",
      shape: "poly",
      coords: GROWTH_AREA_POLYGONS.g3,
      fillColor: "rgba(92, 64, 40, 0.95)",
      color: "#5C4028",
      badge: "Heritage Revival",
      iconName: "Landmark",
      keyFocus: "Spanish Colonial Architecture Preservation, Museum Curations, Pedestrian Heritage Walks",
      keyProjects: ["Cathedral of St. Joseph the Worker", "Plaza Rizal Restoration & Sanctuary", "NM Bohol Area Museum", "Carlos P. Garcia Heritage House", "BQ & Alturas Malls"]
    },
    {
      id: "g4",
      title: "Growth Area 4",
      subtitle: "Friendship Coast and Eco-Corridor",
      description: "Bool and Mansasa",
      shape: "poly",
      coords: GROWTH_AREA_POLYGONS.g4,
      fillColor: "rgba(39, 179, 88, 0.95)",
      color: "#27B358",
      badge: "Eco-Corridor",
      iconName: "Heart",
      keyFocus: "Historic Sandugo Treaty Monument, Mangrove Bio-diversity, Tertiary Specialized Healthcare",
      keyProjects: ["Blood Compact Shrine (Friendship Park by Napoleon Abueva)", "ACE Medical Center Bohol", "Mansasa Eco-Mangrove Walkway"]
    },
    {
      id: "g5",
      title: "Growth Area 5",
      subtitle: "Green Living & Active Wellness District",
      description: "Cabawan, Tiptip, San Isidro",
      shape: "poly",
      coords: GROWTH_AREA_POLYGONS.g5,
      fillColor: "rgba(238, 89, 55, 0.95)",
      color: "#EE5937",
      badge: "Active Wellness",
      iconName: "Compass",
      keyFocus: "Sustainable Residential Communities, Organic Agri-Tourism, Outdoor Active Trails",
      keyProjects: ["San Isidro Active Ridge Trails", "Cabawan Organic Agri-Village", "Tiptip Eco-Residential Communities"]
    }
  ]
};

const growthProjects: GrowthProject[] = [
  // GROWTH AREA 1 (G1) - Manga, Ubujan, Taloto, Booy
  {
    id: "manga-pottery",
    title: "Manga Traditional Clay Pottery Center",
    category: "Heritage & Culture",
    location: "Manga, Tagbilaran City",
    growthAreaId: "g1",
    year: "Heritage Hub",
    description: "Terracotta pottery center with ceramic workshops and artisan souvenir production.",
    image: "/webp/Blood%20Compact%20Shrine%20(31).webp",
    features: ["Terracotta pottery heritage", "Artisan workshops", "Ceramic showroom"],
    impactStat: {
      value: "100+",
      label: "Artisan Families"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Manga,+Tagbilaran+City,+Bohol"
  },
  {
    id: "booy-boardwalk",
    title: "Booy Coastal Seafood Boardwalk",
    category: "Tourism",
    location: "Booy, Tagbilaran City",
    growthAreaId: "g1",
    year: "2021",
    description: "Seafood restaurant promenade with bay views along Tagbilaran Bay.",
    image: "/webp/Blood%20Compact%20Shrine%20(32).webp",
    features: ["Seafood dining", "Sunset view deck", "Coastal walking trails"],
    impactStat: {
      value: "5k+",
      label: "Weekly Visitors"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Booy,+Tagbilaran+City,+Bohol"
  },
  {
    id: "taloto-spring",
    title: "Taloto Heritage Spring & Eco-Park",
    category: "Eco-Tourism",
    location: "Taloto, Tagbilaran City",
    growthAreaId: "g1",
    year: "Community Reserve",
    description: "Natural freshwater spring and public ecological park.",
    image: "/TIMELINE/tagb.webp",
    features: ["Freshwater spring", "Recreation pavilions", "Eco-protection zone"],
    impactStat: {
      value: "100%",
      label: "Protected Reserve"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Taloto,+Tagbilaran+City,+Bohol"
  },
  {
    id: "ubujan-crafts",
    title: "Ubujan Marine Craft Center",
    category: "Infrastructure",
    location: "Ubujan, Tagbilaran City",
    growthAreaId: "g1",
    year: "2022",
    description: "Coastal livelihood center supporting fishing, boatbuilding, and marine conservation.",
    image: "/TIMELINE/maoyjpg.webp",
    features: ["Livelihood training", "Boat restoration", "Marine conservation"],
    impactStat: {
      value: "1.2k",
      label: "Trainees Supported"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ubujan,+Tagbilaran+City,+Bohol"
  },

  // GROWTH AREA 2 (G2) - Cogon, Dampas, Dao
  {
    id: "city-hall",
    title: "Tagbilaran City Hall Complex",
    category: "Civic",
    location: "Dampas, Government Center",
    growthAreaId: "g2",
    year: "2019",
    description: "City administration center consolidating civic departments and public services.",
    image: "/webp/cityhall.jpg",
    features: ["Sustainable architecture", "Solar-assisted power", "Public service atrium"],
    impactStat: {
      value: "100%",
      label: "Civic Operations"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=New+Tagbilaran+City+Hall+Complex,+Dampas,+Tagbilaran+City,+Bohol"
  },
  {
    id: "icm-dampas",
    title: "Island City Mall (ICM)",
    category: "Commercial",
    location: "Dampas, Tagbilaran City",
    growthAreaId: "g2",
    year: "2004",
    description: "Major shopping and lifestyle center with cinemas, retail stores, and dining.",
    image: "/Growth/Area 2/AREA 2 1.webp",
    features: ["Retail & department stores", "Cinemas & event halls", "Dining options"],
    impactStat: {
      value: "15k+",
      label: "Daily Visitors"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Island+City+Mall,+Dampas,+Tagbilaran+City,+Bohol"
  },
  {
    id: "airport-park",
    title: "Bohol Business & IT Park",
    category: "Infrastructure",
    location: "Cogon / Dampas, Tagbilaran City",
    growthAreaId: "g2",
    year: "Under Development",
    description: "Green business park redevelopment hosting BPO offices, IT hubs, and public spaces.",
    image: "/Growth/Area 2/AREA 2 3.webp",
    features: ["BPO & IT office spaces", "Linear green park", "Pedestrian avenues"],
    impactStat: {
      value: "10k+",
      label: "Expected Tech Jobs"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Old+Tagbilaran+Airport,+Cogon,+Tagbilaran+City,+Bohol"
  },
  {
    id: "hnu-campus",
    title: "Holy Name University (HNU) Janssen Campus",
    category: "Education",
    location: "Dampas, Tagbilaran City",
    growthAreaId: "g2",
    year: "2016",
    description: "University campus with academic buildings, athletic facilities, and tech labs.",
    image: "/TIMELINE/tagb.webp",
    features: ["Academic complexes", "Athletic gymnasium", "Tech & science labs"],
    impactStat: {
      value: "8k+",
      label: "Enrolled Students"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Holy+Name+University+Janssen+Campus,+Dampas,+Tagbilaran+City,+Bohol"
  },
  {
    id: "dao-terminal",
    title: "Tagbilaran Integrated Transit Terminal",
    category: "Infrastructure",
    location: "Dao, Tagbilaran City",
    growthAreaId: "g2",
    year: "Transit Hub",
    description: "Central terminal connecting Tagbilaran to all 47 municipalities in Bohol.",
    image: "/TIMELINE/charterday.webp",
    features: ["Central transport hub", "Bus & jeepney bays", "Passenger halls"],
    impactStat: {
      value: "25k+",
      label: "Daily Commuters"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dao+Bus+Terminal,+Tagbilaran+City,+Bohol"
  },

  // GROWTH AREA 3 (G3) - Poblacion 1, 2, 3
  {
    id: "bq-mall",
    title: "BQ Mall",
    category: "Commercial",
    location: "CPG Avenue, Downtown Poblacion II",
    growthAreaId: "g3",
    year: "1997 / Expanded 2012",
    description: "Downtown retail mall with department stores and digital services.",
    image: "/webp/Blood%20Compact%20Shrine%20(32).webp",
    features: ["Department store", "Electronics sector", "Food court"],
    impactStat: {
      value: "12k+",
      label: "Daily Foot Traffic"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=BQ+Mall,+CPG+Avenue,+Tagbilaran+City,+Bohol"
  },
  {
    id: "alturas-mall",
    title: "Alturas Mall Tagbilaran",
    category: "Commercial",
    location: "B. Inting Street, Downtown Poblacion II",
    growthAreaId: "g3",
    year: "2015",
    description: "Downtown shopping center with supermarket and retail stores.",
    image: "/TIMELINE/charterday.webp",
    features: ["Supermarket", "Fashion department", "Service shops"],
    impactStat: {
      value: "10k+",
      label: "Daily Shoppers"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Alturas+Mall,+B.+Inting+Street,+Tagbilaran+City,+Bohol"
  },
  {
    id: "ub-campus",
    title: "University of Bohol (UB)",
    category: "Education",
    location: "Maria Clara Street, Downtown Poblacion III",
    growthAreaId: "g3",
    year: "1946",
    description: "First private university in Bohol offering higher education.",
    image: "/TIMELINE/charterday.webp",
    features: ["Private university", "Law & healthcare programs", "Downtown campus"],
    impactStat: {
      value: "10k+",
      label: "Enrolled Students"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=University+of+Bohol,+Maria+Clara+Street,+Tagbilaran+City,+Bohol"
  },
  {
    id: "bisu-main",
    title: "Bohol Island State University (BISU)",
    category: "Education",
    location: "CPG Avenue, Poblacion II",
    growthAreaId: "g3",
    year: "2009",
    description: "Public state university specializing in engineering, technology, and sciences.",
    image: "/webp/cityhall.jpg",
    features: ["Public state university", "Engineering laboratories", "Free tertiary education"],
    impactStat: {
      value: "7.5k+",
      label: "State Scholars"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bohol+Island+State+University,+CPG+Avenue,+Tagbilaran+City,+Bohol"
  },
  {
    id: "cathedral-plaza",
    title: "St. Joseph Cathedral & Plaza Rizal",
    category: "Heritage & Culture",
    location: "Poblacion I, Tagbilaran City",
    growthAreaId: "g3",
    year: "18th Century",
    description: "Historic 18th-century Spanish colonial cathedral and central public plaza.",
    image: "/Growth/Area 3/AREA 3 2.webp",
    features: ["Colonial cathedral", "Plaza Rizal public park", "Heritage trail anchor"],
    impactStat: {
      value: "100%",
      label: "Cultural Heritage"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=St.+Joseph+the+Worker+Cathedral,+Tagbilaran+City,+Bohol"
  },
  {
    id: "national-museum-bohol",
    title: "National Museum - Bohol",
    category: "Heritage & Culture",
    location: "Poblacion I, Tagbilaran City",
    growthAreaId: "g3",
    year: "Historic Landmark",
    description: "Restored provincial capitol showcasing Bohol's history and cultural artifacts.",
    image: "/Growth/Area 3/AREA 3 3.webp",
    features: ["Restored capitol building", "Cultural galleries", "Educational exhibits"],
    impactStat: {
      value: "20k+",
      label: "Annual Tourists"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=National+Museum+Bohol,+Tagbilaran+City,+Bohol"
  },

  // GROWTH AREA 4 (G4) - Bool and Mansasa
  {
    id: "blood-compact",
    title: "Blood Compact Shrine",
    category: "Heritage & Culture",
    location: "Bool, Tagbilaran City",
    growthAreaId: "g4",
    year: "1565 Site",
    description: "Historic site of the 1565 treaty between Datu Sikatuna and Miguel López de Legazpi.",
    image: "/webp/Blood%20Compact%20Shrine%20(31).webp",
    features: ["Bronze sculpture by Napoleon Abueva", "Bay view", "Tourism landmark"],
    impactStat: {
      value: "100k+",
      label: "Annual Visitors"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Blood+Compact+Shrine,+Bool,+Tagbilaran+City,+Bohol"
  },
  {
    id: "ace-medical",
    title: "Ace Medical Center Bohol",
    category: "Healthcare",
    location: "Mansasa, Tagbilaran City",
    growthAreaId: "g4",
    year: "2020",
    description: "Private tertiary hospital with advanced diagnostic and medical facilities.",
    image: "/TIMELINE/charterday.webp",
    features: ["Diagnostic imaging", "Cardiac & dialysis units", "200+ beds"],
    impactStat: {
      value: "200+",
      label: "Bed Capacity"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ace+Medical+Center+Bohol,+Mansasa,+Tagbilaran+City,+Bohol"
  },
  {
    id: "mansasa-eco-corridor",
    title: "Mansasa Eco-Corridor & Boardwalk",
    category: "Eco-Tourism",
    location: "Mansasa, Tagbilaran City",
    growthAreaId: "g4",
    year: "2023",
    description: "Coastal greenway and mangrove preservation belt with jogging trails.",
    image: "/TIMELINE/tagb.webp",
    features: ["Mangrove sanctuary", "Coastal jogging loop", "Shoreline defense"],
    impactStat: {
      value: "3.5km",
      label: "Eco-Corridor"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mansasa,+Tagbilaran+City,+Bohol"
  },

  // GROWTH AREA 5 (G5) - Cabawan, Tiptip, San Isidro
  {
    id: "san-isidro-trails",
    title: "San Isidro Ridge & Wellness Trails",
    category: "Tourism",
    location: "San Isidro, Tagbilaran City",
    growthAreaId: "g5",
    year: "2022",
    description: "Outdoor fitness area featuring trail running, bike tracks, and view decks.",
    image: "/TIMELINE/charterday.webp",
    features: ["Running & bike trails", "Fitness park", "View decks"],
    impactStat: {
      value: "12km",
      label: "Trails"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=San+Isidro,+Tagbilaran+City,+Bohol"
  },
  {
    id: "cabawan-agri",
    title: "Cabawan Agri-Tourism Village",
    category: "Agri-Tourism",
    location: "Cabawan, Tagbilaran City",
    growthAreaId: "g5",
    year: "2021",
    description: "Agricultural center focused on organic farming and community training.",
    image: "/TIMELINE/maoyjpg.webp",
    features: ["Organic research fields", "Produce market", "Eco-farming hub"],
    impactStat: {
      value: "50+",
      label: "Hectares Agri-Zone"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cabawan,+Tagbilaran+City,+Bohol"
  },
  {
    id: "tiptip-heights",
    title: "Tiptip Hillside Residential District",
    category: "Infrastructure",
    location: "Tiptip, Tagbilaran City",
    growthAreaId: "g5",
    year: "Residential Community",
    description: "Master-planned residential community with hillside housing and parks.",
    image: "/webp/cityhall.jpg",
    features: ["Hillside housing", "Low-density green living", "Community parks"],
    impactStat: {
      value: "100%",
      label: "Residential Standards"
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tiptip,+Tagbilaran+City,+Bohol"
  }
];

const AREA_TRANSFORMS: Record<string, { scale: number; x: number; y: number }> = {
  g1: { scale: 1.35, x: -28, y: -630 },
  g2: { scale: 1.35, x: 378, y: -493 },
  g3: { scale: 1.35, x: 59, y: -74 },
  g4: { scale: 1.35, x: -235, y: 412 },
  g5: { scale: 1.35, x: 410, y: 304 }
};

const DEFAULT_TRANSFORM = { scale: 1, x: 0, y: 0 };

export default function Growth() {
  const [zoomedAreaId, setZoomedAreaId] = useState<string | null>(null);
  const [detailViewArea, setDetailViewArea] = useState<GrowthAreaArea | null>(null);
  const [hoveredArea, setHoveredArea] = useState<GrowthAreaArea | null>(null);
  const [selectedProject, setSelectedProject] = useState<GrowthProject | null>(null);
  const [is3DMode, setIs3DMode] = useState<boolean>(true);
  const [mouseTilt, setMouseTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [lightboxPhoto, setLightboxPhoto] = useState<GrowthPhotoItem | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-advance photos every 3 seconds when an area with images is active
  useEffect(() => {
    if (!zoomedAreaId) return;
    const gallery = GROWTH_AREA_PHOTOS[zoomedAreaId];
    if (!gallery || gallery.images.length <= 1) return;

    const interval = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % gallery.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [zoomedAreaId]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!is3DMode || zoomedAreaId) {
      if (mouseTilt.x !== 0 || mouseTilt.y !== 0) {
        setMouseTilt({ x: 0, y: 0 });
      }
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMouseTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
    setHoveredArea(null);
  };

  const handleAreaClick = (area: CustomArea, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    const growthArea = area as GrowthAreaArea;
    if (zoomedAreaId === growthArea.id) {
      // Area is already highlighted: toggle it off / exit highlight
      setZoomedAreaId(null);
      return;
    }
    // Highlight and zoom in on this area on the map
    setZoomedAreaId(growthArea.id);
    setActivePhotoIndex(0);
  };

  const convertCoordsToSvgPath = (coords: number[]): string => {
    if (!coords || coords.length < 2) return "";
    let path = `M ${coords[0]} ${coords[1]}`;
    for (let i = 2; i < coords.length; i += 2) {
      path += ` L ${coords[i]} ${coords[i + 1]}`;
    }
    path += " Z";
    return path;
  };

  if (detailViewArea) {
    const areaProjects = growthProjects.filter(p => p.growthAreaId === detailViewArea.id);
    return (
      <motion.div
        key={`growth-detail-${detailViewArea.id}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <GrowthDetailView
          area={detailViewArea}
          projects={areaProjects}
          onBack={() => {
            setDetailViewArea(null);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </motion.div>
    );
  }

  return (
    <div 
      className="w-full bg-white select-none relative overflow-hidden pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 px-3.5 sm:px-6 md:px-10 lg:px-12" 
      id="growth-view-root"
      onClick={() => {
        if (zoomedAreaId) {
          setZoomedAreaId(null);
        }
      }}
    >
      {/* FLOATING EXIT HIGHLIGHT BUTTON - VIEWPORT FIXED TOP-RIGHT LIKE PROMO */}
      <AnimatePresence>
        {zoomedAreaId && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed top-20 sm:top-24 right-4 sm:right-6 z-50"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setZoomedAreaId(null);
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-stone-900 shadow-md border border-stone-200 hover:border-red-200 hover:bg-white transition-all cursor-pointer ring-1 ring-black/5"
              id="floating-exit-highlight-btn"
              title="Exit Highlighted View"
            >
              <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <X className="w-3 h-3 text-red-600 stroke-[3]" />
              </div>
              <span className="text-stone-800 font-bold text-xs tracking-wide">
                Exit Highlight
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(5,70,26,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(5,70,26,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Mobile-Only Header: Positioned directly above the map on mobile/tablet */}
        <div className="block lg:hidden w-full text-center mb-4 sm:mb-6 px-1">
          <h1 className="font-sans font-black text-[#05461a] text-2xl sm:text-3xl tracking-tight leading-tight mb-2.5 uppercase text-center">
            Tagbilaran Tourism &amp; Growth Map
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans font-medium text-center max-w-xl mx-auto">
            Explore the 5 strategic urban development corridors driving Tagbilaran's transformation. Tap or click an area on the map to <strong className="text-[#05461a]">highlight and view its photos</strong> and strategic development zone.
          </p>
        </div>

        {/* Top Split Section: Left Header Info (Desktop) + Right Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 xl:gap-14 items-start mb-6 sm:mb-12">
          
          {/* Desktop Left Column: Title & Description OR Growth Area Photo Pop-in */}
          <div className="hidden lg:flex lg:col-span-6 text-left flex-col items-start justify-start pr-0 lg:pr-2 pt-2 lg:pt-4 min-h-[440px] relative z-30">
            <AnimatePresence mode="wait">
              {zoomedAreaId ? (
                (() => {
                  const activeArea = mapData.areas.find(a => a.id === zoomedAreaId);
                  const activeGallery = GROWTH_AREA_PHOTOS[zoomedAreaId];
                  if (!activeArea) return null;

                  return (
                    <motion.div
                      key={`growth-area-pop-${zoomedAreaId}-desktop`}
                      initial={{ opacity: 0, x: -20, scale: 0.98 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -20, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="w-full bg-white rounded-none border border-stone-200 p-2.5 sm:p-3 shadow-sm relative z-30 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Photo Showcase if available */}
                      {activeGallery && activeGallery.images.length > 0 ? (
                        <div className="space-y-2.5 sm:space-y-3">
                          {/* Active Large Image Frame */}
                          <div className="relative aspect-[16/10] sm:aspect-[16/10] md:aspect-[16/9.5] w-full min-h-[260px] sm:min-h-[340px] md:min-h-[380px] rounded-none overflow-hidden bg-stone-50 border border-stone-200 shadow-none group">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={`${zoomedAreaId}-photo-${activePhotoIndex}`}
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="w-full h-full"
                              >
                                <ImageWithSkeleton
                                  src={activeGallery.images[activePhotoIndex]?.url}
                                  alt=""
                                  className="w-full h-full object-cover cursor-pointer"
                                  onClick={() => setLightboxPhoto(activeGallery.images[activePhotoIndex])}
                                />
                              </motion.div>
                            </AnimatePresence>

                            {/* Top-Right Action Controls (Expand & Close) */}
                            <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-20">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLightboxPhoto(activeGallery.images[activePhotoIndex]);
                                }}
                                className="p-1.5 rounded-none bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-all cursor-pointer"
                                title="Expand"
                              >
                                <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setZoomedAreaId(null);
                                }}
                                className="p-1.5 rounded-none bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-all cursor-pointer"
                                title="Close"
                              >
                                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              </button>
                            </div>
                          </div>

                          {/* Thumbnail Strip */}
                          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-0.5 scrollbar-thin">
                            {activeGallery.images.map((img, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActivePhotoIndex(idx);
                                }}
                                className={`relative w-16 h-12 sm:w-20 sm:h-14 md:w-22 md:h-15 rounded-none overflow-hidden shrink-0 border transition-all cursor-pointer ${
                                  activePhotoIndex === idx
                                    ? "border-[#05461a] ring-1 ring-[#05461a]"
                                    : "border-stone-200 opacity-60 hover:opacity-100"
                                }`}
                              >
                                <img
                                  src={img.url}
                                  alt=""
                                  className="w-full h-full object-cover"
                                  referrerPolicy="no-referrer"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        /* Empty state for Area 2 and Area 3 */
                        <div className="relative py-12 flex flex-col items-center justify-center text-center">
                          <button
                            onClick={() => setZoomedAreaId(null)}
                            className="absolute top-0 right-0 p-1 rounded-none hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
                            title="Close"
                          >
                            <X className="w-4 h-4" />
                          </button>
                          <div className="w-12 h-12 rounded-none bg-stone-50 border border-stone-200 text-stone-400 flex items-center justify-center">
                            <ImageIcon className="w-6 h-6" />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })()
              ) : (
                <motion.div
                  key="default-growth-overview-desktop"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex flex-col items-start text-left"
                >
                  <h1 className="font-sans font-black text-[#05461a] text-3xl xl:text-5xl tracking-tight leading-tight mb-4 sm:mb-6 uppercase text-left">
                    Tagbilaran Tourism &amp; Growth Map
                  </h1>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-medium mb-6 sm:mb-8 text-left max-w-xl lg:max-w-none">
                    Explore the 5 strategic urban development corridors driving Tagbilaran's transformation. Tap or click an area on the map to <strong className="text-[#05461a]">highlight and view its photos</strong> and strategic development zone.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column (or Main on Mobile): HARMONIZED INTERACTIVE MAP SECTION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:col-span-6 relative z-10 text-stone-900 pl-0 lg:pl-6 xl:pl-8 mt-0 lg:-mt-12 flex justify-center"
            id="harmonized-map-container"
          >
            {/* MAP CANVAS DISPLAY WRAPPER WITH 3D PERSPECTIVE ON DESKTOP - More compact on mobile */}
            <div 
              className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-none mx-auto flex flex-col items-center justify-center py-1 sm:py-2"
              style={{ perspective: "1200px" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
            {/* Map Canvas Frame */}
            <div 
              className="relative w-full aspect-[3/4] rounded-2xl group transition-all duration-500 ease-out"
              style={{
                transform: (!isMobile && is3DMode && !zoomedAreaId) 
                  ? `rotateX(${12 + mouseTilt.y * 2}deg) rotateZ(${-3 + mouseTilt.x * 2}deg) translateZ(0px)` 
                  : "rotateX(0deg) rotateZ(0deg) rotateY(0deg)",
                transformStyle: "preserve-3d"
              }}
            >
              {(() => {
                const activeId = zoomedAreaId;

                return (
                  <svg 
                    viewBox="0 -30 1100 1480" 
                    className="absolute inset-0 w-full h-full z-10 pointer-events-auto overflow-visible touch-pan-y"
                    preserveAspectRatio="xMidYMid meet"
                    onClick={(e) => {
                      if (zoomedAreaId) {
                        setZoomedAreaId(null);
                      }
                    }}
                  >
                    <defs>
                      <clipPath id="tagbilaran-geojson-clip">
                        <path d={TAGBILARAN_GEOJSON_PATH} />
                      </clipPath>

                      {/* Subtle, soft 3D map shadow */}
                      <filter id="map-3d-shadow" x="-15%" y="-15%" width="130%" height="130%">
                        <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.25" />
                        <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.12" />
                      </filter>

                      {mapData.areas.map(area => (
                        <filter key={`glow-${area.id}`} id={`glow-${area.id}`} x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#ffffff" floodOpacity="0.75" />
                        </filter>
                      ))}
                    </defs>

                    {/* Animated Zoom / Pan Group - Static on mobile screens */}
                    <motion.g
                      animate={{
                        scale: (!isMobile && activeId) ? AREA_TRANSFORMS[activeId]?.scale || 1.3 : DEFAULT_TRANSFORM.scale,
                        x: (!isMobile && activeId) ? AREA_TRANSFORMS[activeId]?.x || 0 : DEFAULT_TRANSFORM.x,
                        y: (!isMobile && activeId) ? AREA_TRANSFORMS[activeId]?.y || 0 : DEFAULT_TRANSFORM.y
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 24,
                        mass: 0.8
                      }}
                      style={{ transformOrigin: "550px 725px" }}
                    >
                      {(() => {
                        const hasActiveSelection = !!activeId;

                        return (
                          <g filter={(!isMobile && is3DMode) ? "url(#map-3d-shadow)" : "none"}>
                            {/* Minimal 3D Island Base Plate */}
                            {(!isMobile && is3DMode) && (
                              <g className="pointer-events-none">
                                <path
                                  d={TAGBILARAN_GEOJSON_PATH}
                                  fill="#0f172a"
                                  transform="translate(0, 10)"
                                  opacity="0.35"
                                  stroke="#0f172a"
                                  strokeWidth="2"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                />
                                <path
                                  d={TAGBILARAN_GEOJSON_PATH}
                                  fill="#1e293b"
                                  transform="translate(0, 5)"
                                  opacity="0.6"
                                  stroke="#1e293b"
                                  strokeWidth="2"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                />
                              </g>
                            )}

                            {/* Growth Areas with Minimal 3D Lift */}
                            {mapData.areas.map((area) => {
                              const isHovered = !hasActiveSelection && hoveredArea?.id === area.id;
                              const isSelected = activeId === area.id;
                              const isUnselected = hasActiveSelection && !isSelected;
                              const path = GROWTH_AREA_PATHS[area.id] || convertCoordsToSvgPath(area.coords);

                              // Minimal 3D Lift Elevation - flat on mobile
                              const elevationY = isMobile ? 0 : (isSelected ? -10 : isHovered ? -6 : (is3DMode ? -2 : 0));

                              return (
                                <g 
                                  key={area.id} 
                                  className="cursor-pointer group/poly"
                                >
                                  {/* Soft Cast Shadow */}
                                  {is3DMode && (isHovered || isSelected) && (
                                    <path
                                      d={path}
                                      fill="#020617"
                                      opacity={isSelected ? 0.35 : 0.22}
                                      transform={`translate(0, ${isSelected ? 10 : 6})`}
                                      filter="blur(4px)"
                                      className="pointer-events-none"
                                    />
                                  )}

                                  {/* Top Polygon Surface */}
                                  <path
                                    d={path}
                                    fill={isUnselected ? "#94a3b8" : area.fillColor}
                                    stroke="#FFFFFF"
                                    strokeWidth={isSelected ? 5 : isHovered ? 4 : 2.5}
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    transform={`translate(0, ${elevationY})`}
                                    filter={isSelected ? `url(#glow-${area.id})` : isHovered && !hasActiveSelection ? `url(#glow-${area.id})` : "none"}
                                    className="transition-all duration-300"
                                    style={{
                                      opacity: isUnselected ? 0.75 : (isHovered ? 1 : 0.95)
                                    }}
                                    onMouseEnter={() => {
                                      if (!hasActiveSelection) setHoveredArea(area);
                                    }}
                                    onMouseLeave={() => {
                                      if (!hasActiveSelection) setHoveredArea(null);
                                    }}
                                    onClick={(e) => handleAreaClick(area, e)}
                                  />
                                </g>
                              );
                            })}

                            {/* Tagbilaran City Outer Boundary Contour Stroke */}
                            <path
                              d={TAGBILARAN_GEOJSON_PATH}
                              fill="none"
                              stroke="#FFFFFF"
                              strokeWidth="3.5"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              transform={is3DMode ? "translate(0, -2)" : "none"}
                              className="pointer-events-none"
                            />
                          </g>
                        );
                      })()}

                      {/* Floating Minimal Text Labels */}
                      {/* Area 1 Label - Coastal Crafts & Culinary Trail */}
                      <g 
                        className="cursor-pointer select-none transition-opacity duration-300" 
                        style={{ opacity: zoomedAreaId && zoomedAreaId !== "g1" ? 0.65 : 1 }}
                        onClick={(e) => handleAreaClick(mapData.areas[0], e)}
                        transform={is3DMode ? "translate(0, -6)" : "none"}
                      >
                        <text x="590" y="1245" textAnchor="middle" fill="#FFFFFF" fontSize="21" fontWeight="900" fontFamily="Plus Jakarta Sans, sans-serif" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.7))">GROWTH AREA 1</text>
                        <text x="590" y="1280" textAnchor="middle" fill="#FFFFFF" fontSize="17" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.7))">Coastal Crafts &amp; Culinary Trail</text>
                      </g>

                      {/* Area 5 Label - Green Living & Active Wellness District */}
                      <g 
                        className="cursor-pointer select-none transition-opacity duration-300"
                        style={{ opacity: zoomedAreaId && zoomedAreaId !== "g5" ? 0.65 : 1 }}
                        onClick={(e) => handleAreaClick(mapData.areas[4], e)}
                        transform={is3DMode ? "translate(0, -6)" : "none"}
                      >
                        <text x="280" y="420" textAnchor="middle" fill="#FFFFFF" fontSize="21" fontWeight="900" fontFamily="Plus Jakarta Sans, sans-serif" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.7))">GROWTH AREA 5</text>
                        <text x="280" y="452" textAnchor="middle" fill="#FFFFFF" fontSize="17" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.7))">Green Living &amp; Active</text>
                        <text x="280" y="478" textAnchor="middle" fill="#FFFFFF" fontSize="17" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.7))">Wellness District</text>
                      </g>

                      {/* Area 2 Label - SMART Civic and Enterprise Hub */}
                      <g 
                        className="cursor-pointer select-none transition-opacity duration-300"
                        style={{ opacity: zoomedAreaId && zoomedAreaId !== "g2" ? 0.65 : 1 }}
                        onClick={(e) => handleAreaClick(mapData.areas[1], e)}
                        transform={is3DMode ? "translate(0, -6)" : "none"}
                      >
                        <text x="285" y="1065" textAnchor="middle" fill="#0f172a" fontSize="21" fontWeight="900" fontFamily="Plus Jakarta Sans, sans-serif" filter="drop-shadow(0px 2px 4px rgba(255,255,255,0.85))">GROWTH AREA 2</text>
                        <text x="285" y="1100" textAnchor="middle" fill="#0f172a" fontSize="17" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif" filter="drop-shadow(0px 2px 4px rgba(255,255,255,0.85))">SMART Civic &amp; Enterprise Hub</text>
                      </g>

                      {/* Area 3 Label - Heritage Revival Trail */}
                      <g 
                        className="cursor-pointer select-none transition-opacity duration-300"
                        style={{ opacity: zoomedAreaId && zoomedAreaId !== "g3" ? 0.65 : 1 }}
                        onClick={(e) => handleAreaClick(mapData.areas[2], e)}
                        transform={is3DMode ? "translate(0, -6)" : "none"}
                      >
                        <text x="480" y="765" textAnchor="middle" fill="#FFFFFF" fontSize="27" fontWeight="900" fontFamily="Plus Jakarta Sans, sans-serif" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.7))">GROWTH AREA 3</text>
                        <text x="480" y="805" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.7))">Heritage Revival Trail</text>
                      </g>

                      {/* Area 4 Label - Friendship Coast and Eco-Corridor */}
                      <g 
                        className="cursor-pointer select-none transition-opacity duration-300"
                        style={{ opacity: zoomedAreaId && zoomedAreaId !== "g4" ? 0.65 : 1 }}
                        onClick={(e) => handleAreaClick(mapData.areas[3], e)}
                        transform={is3DMode ? "translate(0, -6)" : "none"}
                      >
                        <text x="610" y="270" textAnchor="middle" fill="#FFFFFF" fontSize="27" fontWeight="900" fontFamily="Plus Jakarta Sans, sans-serif" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.7))">GROWTH AREA 4</text>
                        <text x="610" y="310" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.7))">Friendship Coast &amp;</text>
                        <text x="610" y="340" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.7))">Eco-Corridor</text>
                      </g>

                      {/* Right Side Map Title (Matching Reference Image) */}
                      <g className="pointer-events-none select-none" transform="translate(930, 850)">
                        <text x="0" y="0" textAnchor="middle" fill="#0f172a" fontSize="22" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif">Map of</text>
                        <text x="0" y="30" textAnchor="middle" fill="#0f172a" fontSize="22" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif">Harmonized</text>
                        <text x="0" y="60" textAnchor="middle" fill="#0f172a" fontSize="22" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif">Tagbilaran City</text>
                        <text x="0" y="90" textAnchor="middle" fill="#0f172a" fontSize="22" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif">Tourism</text>
                        <text x="0" y="120" textAnchor="middle" fill="#0f172a" fontSize="22" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif">Growth Areas</text>
                      </g>
                    </motion.g>
                  </svg>
                );
              })()}

            </div>
          </div>

        </motion.div>
      </div>

      {/* Mobile Photo Showcase: Positioned directly below the map on mobile/tablet */}
      <div className="block lg:hidden w-full max-w-[550px] sm:max-w-[620px] mx-auto mt-4 px-2">
        <AnimatePresence mode="wait">
          {zoomedAreaId && (() => {
            const activeArea = mapData.areas.find(a => a.id === zoomedAreaId);
            const activeGallery = GROWTH_AREA_PHOTOS[zoomedAreaId];
            if (!activeArea) return null;

            return (
              <motion.div
                key={`growth-area-pop-${zoomedAreaId}-mobile`}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full bg-white rounded-none border border-stone-200 p-2.5 sm:p-3 shadow-sm relative z-30 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Photo Showcase if available */}
                {activeGallery && activeGallery.images.length > 0 ? (
                  <div className="space-y-2.5 sm:space-y-3">
                    {/* Active Large Image Frame */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full min-h-[230px] sm:min-h-[300px] rounded-none overflow-hidden bg-stone-50 border border-stone-200 shadow-none group">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${zoomedAreaId}-photo-mobile-${activePhotoIndex}`}
                          initial={{ opacity: 0, scale: 1.02 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="w-full h-full"
                        >
                          <ImageWithSkeleton
                            src={activeGallery.images[activePhotoIndex]?.url}
                            alt=""
                            className="w-full h-full object-cover cursor-pointer"
                            onClick={() => setLightboxPhoto(activeGallery.images[activePhotoIndex])}
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Top-Right Action Controls (Expand & Close) */}
                      <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-20">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxPhoto(activeGallery.images[activePhotoIndex]);
                          }}
                          className="p-1.5 rounded-none bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-all cursor-pointer"
                          title="Expand"
                        >
                          <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setZoomedAreaId(null);
                          }}
                          className="p-1.5 rounded-none bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-all cursor-pointer"
                          title="Close"
                        >
                          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-0.5 scrollbar-thin">
                      {activeGallery.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePhotoIndex(idx);
                          }}
                          className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-none overflow-hidden shrink-0 border transition-all cursor-pointer ${
                            activePhotoIndex === idx
                              ? "border-[#05461a] ring-1 ring-[#05461a]"
                              : "border-stone-200 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={img.url}
                            alt=""
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Empty state for Area 2 and Area 3 */
                  <div className="relative py-10 flex flex-col items-center justify-center text-center">
                    <button
                      onClick={() => setZoomedAreaId(null)}
                      className="absolute top-0 right-0 p-1 rounded-none hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
                      title="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="w-12 h-12 rounded-none bg-stone-50 border border-stone-200 text-stone-400 flex items-center justify-center">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </div>

      {/* PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full p-4 sm:p-8 shadow-2xl border border-stone-200 text-left relative my-auto overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 border border-stone-200 bg-stone-100">
                <ImageWithSkeleton
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                {(() => {
                  const area = mapData.areas.find(a => a.id === selectedProject.growthAreaId);
                  return area ? (
                    <span
                      className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider text-stone-900 shadow-md"
                      style={{ backgroundColor: area.color }}
                    >
                      {area.title} • {area.badge}
                    </span>
                  ) : null;
                })()}
              </div>

              {/* Modal Content */}
              <div className="flex items-center gap-2 text-emerald-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{selectedProject.location}</span>
              </div>

              <h3 className="font-sans font-black text-[#05461a] text-xl sm:text-3xl tracking-tight mb-2 sm:mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-stone-600 text-xs sm:text-base leading-relaxed font-sans font-medium mb-4 sm:mb-6">
                {selectedProject.description}
              </p>

              {/* Features & Impact */}
              <div className="space-y-3 sm:space-y-4 mb-2">
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Key Highlights</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.features.map((feature, fIdx) => (
                      <span key={fIdx} className="bg-emerald-50 text-emerald-900 border border-emerald-200 px-2.5 sm:px-3 py-1 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 sm:p-4 bg-stone-50 rounded-xl sm:rounded-2xl border border-stone-200/80 flex flex-wrap items-center justify-between gap-3 mt-3">
                  <div>
                    <span className="block text-[10px] sm:text-xs font-bold text-stone-500 uppercase tracking-wider">
                      {selectedProject.impactStat.label}
                    </span>
                    <span className="text-base sm:text-lg font-black text-emerald-800 font-mono">
                      {selectedProject.impactStat.value}
                    </span>
                  </div>

                  <a
                    href={selectedProject.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#05461a] hover:bg-[#032e11] text-white transition-all text-[11px] sm:text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md active:scale-95 shrink-0 min-h-[40px]"
                  >
                    <span>View On Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PHOTO LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setLightboxPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full flex flex-col items-center my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxPhoto(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
                title="Close Photo Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full rounded-2xl overflow-hidden max-h-[82vh] sm:max-h-[88vh] bg-stone-950 border border-white/10 shadow-2xl flex items-center justify-center">
                <img
                  src={lightboxPhoto.url}
                  alt=""
                  className="w-full h-auto max-h-[82vh] sm:max-h-[88vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
