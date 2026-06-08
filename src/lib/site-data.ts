// ─── Featured ────────────────────────────────────────────────────────────────
import p2024 from "@/assets/works/highlights/2024 F.jpg";
import facewash from "@/assets/works/highlights/Mockup facewash 1.png";
import raackPamphlet from "@/assets/works/highlights/Raack pamphlet 3 RED.jpg";
import poppycock from "@/assets/works/highlights/The Prophets of Poppycock Poster 6 CC.jpg";
import clothBranding from "@/assets/works/highlights/Cloth Branding.jpg";

// ─── Logos ───────────────────────────────────────────────────────────────────
import shreeShakthi from "@/assets/works/Logos/Shree Shakthi Foods.png";
import sgp1 from "@/assets/works/Logos/sgplogo.jpg";
import manojCashew from "@/assets/works/Logos/Manoj Cashew.png";
import directorsView from "@/assets/works/Logos/Director_s View.jpg";

// ─── Cinematic Posters ───────────────────────────────────────────────────────
import ak64 from "@/assets/works/Cinematic Posters/AK64.png";
import haji from "@/assets/works/Cinematic Posters/Haji mustan.jpg";
import jananayagan from "@/assets/works/Cinematic Posters/Jananayagan 2.png";
import priyanka from "@/assets/works/Cinematic Posters/Priyanka mohan.jpg";
import terroristFamily from "@/assets/works/Cinematic Posters/Terrorist Family.jpg";
import weAre from "@/assets/works/Cinematic Posters/We are.jpg";

// Reuse existing image
// import p2024
// import poppycock

// ─── Flyers ──────────────────────────────────────────────────────────────────
import cinegate from "@/assets/works/Flyers/COSPLAY EVENT (3).jpg";
import demoWeek from "@/assets/works/Flyers/Demo Week Revised 3.png";
import movieScreening from "@/assets/works/Flyers/Movie SCREENING (1).jpg";
import raackOffer from "@/assets/works/Flyers/RAACK (Offer Flyer).jpg";
import sgp from "@/assets/works/Flyers/SGP.jpg";
import belur from "@/assets/works/Flyers/Work 1 Belur.jpg";
import work1 from "@/assets/works/Flyers/Work 1.png";

// ─── Print Design ────────────────────────────────────────────────────────────
import brochure from "@/assets/works/Printings/Brouchore-Recovered Puple.png";
import ecole from "@/assets/works/Printings/Ecole Globale (1).jpg";
import mechtrix from "@/assets/works/Printings/MECHTRIX - HG (1).jpg";
import program from "@/assets/works/Printings/Program.jpg";
import raackPamphletRed from "@/assets/works/Printings/Raack pamphlet 3 RED.jpg";
import raackPamphlet3 from "@/assets/works/Printings/Raack pamphlet 3.jpg";
import raackBack from "@/assets/works/Printings/Raack RED back.jpg";
import selectResearchers from "@/assets/works/Printings/Select Researchers (3).jpg";
import ENC from "@/assets/works/Printings/ENC Catering Front Side.jpg"
import UHY from "@/assets/works/Printings/UHYCUR5jg.png";
// ─── Social Media ────────────────────────────────────────────────────────────
import birthday from "@/assets/works/Social Media/2B.png";
import clothSocial from "@/assets/works/Social Media/Cloth Branding.jpg";
import levin from "@/assets/works/Social Media/Levin.png";
import mockupFacewash from "@/assets/works/Social Media/Mockup Fashwash.png";
import posterContest from "@/assets/works/Social Media/Poster Contest (1).jpg";
import recutTrailer from "@/assets/works/Social Media/RE-CUT Trailer Contest.jpg";
import primbuds from "@/assets/works/Social Media/POSTER PRIMBUDS.jpg";

// ─── Thumbnails ──────────────────────────────────────────────────────────────
import bms from "@/assets/works/thumbnails/BMs.png";
import clubExpo from "@/assets/works/thumbnails/Club Expo THUMBNAIL.jpg";
import deepavali from "@/assets/works/thumbnails/Deepavali Kondattam Thumbnail.png";
import lowest from "@/assets/works/thumbnails/Lowest Thumbnail 2.png";
import nda from "@/assets/works/thumbnails/NDA.png";
import podcast from "@/assets/works/thumbnails/Podcast thumbnail 2.jpg";
import thumbnail2 from "@/assets/works/thumbnails/Thumbnail2.png";
import typography from "@/assets/works/thumbnails/Typography 6.jpg";

// ─── Icons ───────────────────────────────────────────────────────────────────
import iconPs from "@/components/site/icons/adobephotoshop.svg";
import iconAi from "@/components/site/icons/adobeillustrator.svg";
import iconAe from "@/components/site/icons/adobeaftereffects.svg";
import iconPr from "@/components/site/icons/adobepremierepro.svg";
import iconCc from "@/components/site/icons/adobecreativecloud.svg";
import iconCanva from "@/components/site/icons/canva.svg";
// ─────────────────────────────────────────────────────────────────────────────

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  // ── Featured ──────────────────────────────────────────────────────────────
  {
    id: "2024",
    title: "Journey of Triumph",
    category: "Featured",
    description: "Kollywood Year End Concept - 2024",
    image: p2024,
  },
  {
    id: "cloth",
    title: "Cloth Branding",
    category: "Featured",
    description: "Premium apparel branding.",
    image: clothBranding,
  },
  {
    id: "facewash",
    title: "Product Design",
    category: "Featured",
    description: "Own Creative design concept.",
    image: facewash,
  },
  {
    id: "raack-red",
    title: "Dance School Pamphlet",
    category: "Featured",
    description: "Creative print campaign.",
    image: raackPamphlet,
  },
  {
    id: "poppycock",
    title: "The Prophets of Poppycock",
    category: "Featured",
    description: " - Official Web Series poster artwork for Dir. Selvendran",
    image: poppycock,
  },

  // ── Logos ─────────────────────────────────────────────────────────────────
  {
    id: "director",
    title: "The Director's View",
    category: "Logos",
    description: "Pruduction House Logo",
    image: directorsView,
  },
  {
    id: "sgp1",
    title: "SGP",
    category: "Logos",
    description: "Sri Ganesh Printers logo.",
    image: sgp1,
  },
  {
    id: "cashew",
    title: "Manoj Cashew",
    category: "Logos",
    description: "Cashew nut brand identity.",
    image: manojCashew,
  },
  {
    id: "ssf",
    title: "Shree Shakthi Foods",
    category: "Logos",
    description: "Food brand logo.",
    image: shreeShakthi,
  },

  // ── Cinematic Posters ─────────────────────────────────────────────────────
  {
    id: "poppy-cinema",
    title: "The Prophets of Poppycock - Official Series",
    category: "Cinematic Posters",
    description: "By Dir. Selvendran - Publicity Poster",
    image: poppycock,
  },
  {
    id: "2024poster",
    title: "Journey of Triumph",
    category: "Cinematic Posters",
    description: "Kollywood 2024 tribute artwork.",
    image: p2024,
  },
  {
    id: "terrorist",
    title: "Terrorist Family - Tourist Family",
    category: "Cinematic Posters",
    description: "What if - Concept.",
    image: terroristFamily,
  },
  {
    id: "ak64",
    title: "AK64",
    category: "Cinematic Posters",
    description: "What if - Movie concept artwork.",
    image: ak64,
  },
  {
    id: "priyanka",
    title: "Priyanka Mohan Birthday Post",
    category: "Cinematic Posters",
    description: "Celebrity poster artwork.",
    image: priyanka,
  },
  {
    id: "jananayagan",
    title: "Jananayagan",
    category: "Cinematic Posters",
    description: "Birthday special poster.",
    image: jananayagan,
  },
  
  {
    id: "weare",
    title: "Announcement Poster",
    category: "Cinematic Posters",
    description: "Promotional poster.",
    image: weAre,
  },
  {
    id: "haji",
    title: "Haji Mustan - Character reveal",
    category: "Cinematic Posters",
    description: "For Prophets of Poppycock - Dir. Selvendran's Series",
    image: haji,
  },

  // ── Flyers ────────────────────────────────────────────────────────────────
  {
    id: "cinegate",
    title: "Event Flyer",
    category: "Flyers",
    description: "Cosplay Event - Creative Flyer",
    image: cinegate,
  },
  {
    id: "demo",
    title: "Promotional Flyer",
    category: "Flyers",
    description: "Academy campaign.",
    image: demoWeek,
  },
  {
    id: "movie",
    title: "Movie Screening - Announcement",
    category: "Flyers",
    description: "Special screening event.",
    image: movieScreening,
  },
  {
    id: "sgp",
    title: "Greetings Flyer",
    category: "Flyers",
    description: "Festive Newspaper Flyer",
    image: sgp,
  },
  {
    id: "work1",
    title: "Fitness Notice",
    category: "Flyers",
    description: "Promotional flyer for Dance Academy",
    image: work1,
  },
  {
    id: "offer",
    title: "Offer Flyer",
    category: "Flyers",
    description: "Promotional Flyer",
    image: raackOffer,
  },


  // ── Print Design ──────────────────────────────────────────────────────────
  {
    id: "mechtrix",
    title: "Mechtrix",
    category: "Print Design",
    description: "VIT - Magazine cover.",
    image: mechtrix,
  },
  {
    id: "raackpamphletred",
    title: "Pamphlet - Dance School",
    category: "Print Design",
    description: "Attention based Creative design",
    image: raackPamphletRed,
  },
  {
    id: "uhy",
    title: "Magazine Cover",
    category: "Print Design",
    description: "Conceptual Front page - Based on True Events.",
    image: UHY,
  },
  {
    id: "enc",
    title: "ENC Catering",
    category: "Print Design",
    description: "Menu Card Design",
    image: ENC,
  },
  {
    id: "program",
    title: "VIT - Academic Brouchure",
    category: "Print Design",
    description: "Promotional Design",
    image: program,
  },
  
  
  {
    id: "ecole",
    title: "Ecole Globale - Flyer",
    category: "Print Design",
    description: "School brochure.",
    image: ecole,
  },
  {
    id: "raackback",
    title: "Raack Back",
    category: "Print Design",
    description: "Back side layout.",
    image: raackBack,
  },
  {
    id: "research",
    title: "Announcement Flyer",
    category: "Print Design",
    description: "Educational brochure.",
    image: selectResearchers,
  },
  {
    id: "brochure",
    title: "Resort Brochure",
    category: "Print Design",
    description: "Print collateral.",
    image: brochure,
  },

  // ── Social Media ──────────────────────────────────────────────────────────
  {
    id: "clothsocial",
    title: "Cloth Branding",
    category: "Social Media",
    description: "Fashion campaign.",
    image: clothBranding,
  },
  {
    id: "mockup",
    title: "Product Design",
    category: "Social Media",
    description: "Creative concept - Product marketing.",
    image: facewash,
  },
  {
    id: "primbuds",
    title: "National Days Greetings",
    category: "Social Media",
    description: "For Primbuds School",
    image: primbuds,
  },
  {
    id: "birthday",
    title: "Birthday Creative",
    category: "Social Media",
    description: "Social media post.",
    image: birthday,
  },
  {
    id: "levin",
    title: "Birthday Wishes",
    category: "Social Media",
    description: "Birthday social creative.",
    image: levin,
  },
  

 

  // ── Thumbnails ────────────────────────────────────────────────────────────
  {
    id: "podcast",
    title: "Podcast",
    category: "Thumbnails",
    description: "Youtube Podcast cover.",
    image: podcast,
  },
  {
    id: "typography",
    title: "Official Series",
    category: "Thumbnails",
    description: "Typography Title Reveal.",
    image: typography,
  },
  {
    id: "lowest",
    title: "Educational Cover",
    category: "Thumbnails",
    description: "Creative thumbnail for Budding Mariners",
    image: lowest,
  },
  {
    id: "nda",
    title: "NDA Educational Coover",
    category: "Thumbnails",
    description: "Podcast artwork for Budding Mariners.",
    image: nda,
  },
  
  {
    id: "clubexpo",
    title: "Elegent Festive Aftermovie Thumbnail",
    category: "Thumbnails",
    description: "for Thamizh Mandram VITC.",
    image: clubExpo,
  },
  {
    id: "deepavali",
    title: "Deepavali Kondattam",
    category: "Thumbnails",
    description: "Festival thumbnail for Thamizh Mandram VITC.",
    image: deepavali,
  },

  {
    id: "thumbnail2",
    title: "Super Start Birthday Tibute Thumbnail",
    category: "Thumbnails",
    description: "YouTube artwork for Filmsociety VITC.",
    image: thumbnail2,
  },
  {
    id: "bms",
    title: "BMS Educational Thumbnail",
    category: "Thumbnails",
    description: "YouTube cover for budding Mariners",
    image: bms,
  },
  
];

export const portfolioCategories = [
  "Featured",
  "Logos",
  "Cinematic Posters",
  "Flyers",
  "Print Design",
  "Social Media",
  "Thumbnails",
];

export const services = [
  { title: "Brand Identity",          desc: "Logos, systems and guidelines that make brands unforgettable.", features: ["Logo & Marks", "Visual System", "Brand Guidelines"] },
  { title: "Graphic Design",          desc: "Editorial-grade posters, flyers and campaign visuals.",          features: ["Posters", "Flyers", "Campaign Sets"] },
  { title: "Printing Solutions",      desc: "End-to-end print production with finish-grade attention.",        features: ["Invitations", "Brochures", "Packaging"] },
  { title: "Social Media Marketing",  desc: "Scroll-stopping creatives and consistent content calendars.",     features: ["Creatives", "Reels", "Strategy"] },
  { title: "Video Editing",           desc: "Crisp cuts, color and sound for premium narrative video.",        features: ["Reels", "Long-form", "Color"] },
  { title: "Motion Graphics",         desc: "Logo stings, explainers and kinetic typography.",                 features: ["Logo Stings", "Explainers", "Kinetic Type"] },
];

export const whyUs = [
  { title: "Creative Thinking",       desc: "We start with the idea, not the template — every brief is solved fresh." },
  { title: "Business-Focused Design", desc: "Beautiful work that earns attention and moves real numbers." },
  { title: "Fast Delivery",           desc: "Tight, transparent timelines with no compromise on craft." },
  { title: "Complete Solutions",      desc: "From logo to launch film — one studio, end to end." },
];

export const processSteps = [
  { n: "01", title: "Discovery",    desc: "We listen, audit and align on goals." },
  { n: "02", title: "Research",     desc: "Audience, competitors, market truth." },
  { n: "03", title: "Strategy",     desc: "Positioning, narrative and creative direction." },
  { n: "04", title: "Design",       desc: "Concept, craft and iteration." },
  { n: "05", title: "Refinement",   desc: "Polish, feedback loops and approvals." },
  { n: "06", title: "Delivery",     desc: "Files, rollout assets and launch support." },
];

export const testimonials = [
  { name: "Karthik R.", company: "Fatboy Collections", review: "Out Of Box translated our streetwear soul into visuals that finally feel premium." },
];

export const floatingBadges = [
  "Graphic Design", "Branding", "Printing Solutions", "Video Editing",
  "Social Media Marketing", "Motion Graphics",
];

export const stats = [
  { value: 190, suffix: "+",   label: "Projects Completed" },
  { value: 138, suffix: "+",   label: "Happy Clients" },
  { value: 5,   suffix: "yrs", label: "Design Experience" },
];

export const tools: { name: string; icon: string; color: string }[] = [
  { name: "Photoshop",      icon: iconPs,    color: "#31A8FF" },
  { name: "Illustrator",    icon: iconAi,    color: "#FF9A00" },
  { name: "Canva",          icon: iconCanva, color: "#00C4CC" },
  { name: "After Effects",  icon: iconAe,    color: "#9999FF" },
  { name: "Premiere Pro",   icon: iconPr,    color: "#9999FF" },
];

export const social = {
  instagram: "https://www.instagram.com/outoFbox712/",
  linkedin:  "https://www.linkedin.com/in/out-of-box-514778414",
  email:     "outofbox712@gmail.com",
  phone:     "+91 94893 56960",
};