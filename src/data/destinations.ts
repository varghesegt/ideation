export interface DestinationData {
  name: string;
  slug: string;
  code: string;
  flag: string;
  region: "Americas" | "UK & Ireland" | "Europe" | "Asia-Pacific & Middle East";
  tagline: string;
  description: string;
  image?: string;
  avgTuitionINR: string;
  avgLivingCostINR: string;
  postStudyWork: string;
  workWhileStudy: string;
  intakes: string[];
  keyAdvantages: string[];
  topUniversities: {
    name: string;
    ranking?: string;
    popularCourses: string[];
  }[];
  visaHighlights: {
    processingTime: string;
    financialProof: string;
    languageReq: string;
  };
}

export const DESTINATIONS: DestinationData[] = [
  {
    name: "United States",
    slug: "usa",
    code: "US",
    flag: "🇺🇸",
    region: "Americas",
    tagline: "World-leading research & STEM OPT opportunities",
    description: "Home to the world's most prestigious universities and global tech hubs. Enjoy up to 3 years of STEM OPT post-study work authorization.",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80",
    avgTuitionINR: "₹18L - ₹45L / year",
    avgLivingCostINR: "₹10L - ₹15L / year",
    postStudyWork: "Up to 3 Years (STEM OPT) / 1 Year (Non-STEM)",
    workWhileStudy: "20 hrs/week on-campus",
    intakes: ["Fall (Aug/Sep)", "Spring (Jan/Feb)", "Summer (May)"],
    keyAdvantages: [
      "Top-ranked universities globally with generous research grants",
      "3-year STEM OPT extension for high-tech career advancement",
      "Flexible curriculum with major-minor combinations and dual degrees",
      "Extensive global alumni networks and corporate recruiter access"
    ],
    topUniversities: [
      { name: "Stanford University", ranking: "QS #5", popularCourses: ["Computer Science", "AI", "Business", "Bioengineering"] },
      { name: "Massachusetts Institute of Technology (MIT)", ranking: "QS #1", popularCourses: ["Engineering", "Data Science", "Physics"] },
      { name: "University of California, Berkeley", ranking: "QS #10", popularCourses: ["EECS", "Economics", "Data Science"] },
      { name: "Carnegie Mellon University", ranking: "QS #52", popularCourses: ["Software Engineering", "Robotics", "HCI"] }
    ],
    visaHighlights: {
      processingTime: "3 to 8 weeks",
      financialProof: "I-20 financial documentation for 1st year tuition + living",
      languageReq: "IELTS 6.5+ / TOEFL 85+ / Duolingo 115+"
    }
  },
  {
    name: "United Kingdom",
    slug: "uk",
    code: "GB",
    flag: "🇬🇧",
    region: "UK & Ireland",
    tagline: "1-year Master's degrees & 2-year Graduate Route visa",
    description: "World-class historic universities, fast-track 1-year master's degrees for quick ROI, and post-study Graduate Route work visas.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    avgTuitionINR: "₹14L - ₹32L / year",
    avgLivingCostINR: "₹9L - ₹14L / year",
    postStudyWork: "2 Years Graduate Route (3 Years for PhD)",
    workWhileStudy: "20 hrs/week during term, 40 hrs in breaks",
    intakes: ["September/October (Major)", "January/February"],
    keyAdvantages: [
      "Cost & time-efficient 1-year intensive Master's degrees",
      "2-Year Graduate Route post-study work permit",
      "No GRE/GMAT required for most STEM & Management courses",
      "Multicultural financial & technology center of Europe"
    ],
    topUniversities: [
      { name: "University of Oxford", ranking: "QS #3", popularCourses: ["PPE", "MBA", "Biomedical Sciences", "Law"] },
      { name: "University of Cambridge", ranking: "QS #2", popularCourses: ["Computer Science", "Natural Sciences", "Engineering"] },
      { name: "Imperial College London", ranking: "QS #6", popularCourses: ["Advanced Computing", "Data Science", "Finance"] },
      { name: "University of Manchester", ranking: "QS #32", popularCourses: ["Mechanical Eng", "Business Analytics", "Biotech"] }
    ],
    visaHighlights: {
      processingTime: "3 weeks (standard)",
      financialProof: "CAS letter + 28-day bank balance for fees & living",
      languageReq: "IELTS 6.0 - 6.5 / Medium of Instruction (MOI) accepted in select unis"
    }
  },
  {
    name: "Canada",
    slug: "canada",
    code: "CA",
    flag: "🇨🇦",
    region: "Americas",
    tagline: "Up to 3-year PGWP & clear permanent residency pathways",
    description: "Renowned for safety, diverse culture, high standard of living, and straightforward post-graduation work permits (PGWP) linked to PR pathways.",
    image: "https://images.unsplash.com/photo-1517935703635-271907604688?auto=format&fit=crop&w=800&q=80",
    avgTuitionINR: "₹12L - ₹28L / year",
    avgLivingCostINR: "₹8L - ₹12L / year",
    postStudyWork: "Up to 3 Years PGWP",
    workWhileStudy: "20 hrs/week during academic sessions",
    intakes: ["Fall (September)", "Winter (January)", "Spring/Summer (May)"],
    keyAdvantages: [
      "Welcoming immigration policies and Express Entry PR streams",
      "Co-op programs combining hands-on paid Canadian work experience",
      "High return on investment with globally recognized credentials",
      "Safe, welcoming communities and affordable healthcare benefits"
    ],
    topUniversities: [
      { name: "University of Toronto", ranking: "QS #21", popularCourses: ["CS", "Medicine", "Management", "Civil Eng"] },
      { name: "University of British Columbia", ranking: "QS #34", popularCourses: ["Data Science", "Forestry", "MBA", "Finance"] },
      { name: "McGill University", ranking: "QS #30", popularCourses: ["Biomedical", "AI", "Law", "Neuroscience"] },
      { name: "University of Waterloo", ranking: "QS #112", popularCourses: ["Software Engineering (Co-op)", "Math", "Quantum Tech"] }
    ],
    visaHighlights: {
      processingTime: "4 to 12 weeks",
      financialProof: "GIC (Guaranteed Investment Certificate) CAD $20,635 + 1st year fees",
      languageReq: "IELTS 6.0 each band (SDS stream) / PTE Academic 60+"
    }
  },
  {
    name: "Australia",
    slug: "australia",
    code: "AU",
    flag: "🇦🇺",
    region: "Asia-Pacific & Middle East",
    tagline: "Group of Eight excellence & generous post-study work rights",
    description: "World-class education infrastructure, high minimum wages, sunny climate, and up to 4-year Subclass 485 post-study visas.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    avgTuitionINR: "₹16L - ₹34L / year",
    avgLivingCostINR: "₹10L - ₹14L / year",
    postStudyWork: "2 to 4 Years (depending on qualification & regional bonus)",
    workWhileStudy: "48 hrs per fortnight during semesters",
    intakes: ["Semester 1 (Feb/March)", "Semester 2 (July/August)", "Trimester (Nov)"],
    keyAdvantages: [
      "7 of the world's top 100 universities belong to Australia's Group of Eight",
      "High minimum wage (AUD $24.10/hr) supports student lifestyle",
      "Regional study incentives provide an additional 1-2 years of work rights",
      "Vibrant multicultural society with massive demand for healthcare & STEM"
    ],
    topUniversities: [
      { name: "University of Melbourne", ranking: "QS #14", popularCourses: ["Data Science", "Biomedicine", "Finance", "Law"] },
      { name: "University of Sydney", ranking: "QS #19", popularCourses: ["Software Tech", "Pharmacy", "Project Management"] },
      { name: "University of New South Wales (UNSW)", ranking: "QS #19", popularCourses: ["Renewable Energy", "Robotics", "Commerce"] },
      { name: "Australian National University (ANU)", ranking: "QS #34", popularCourses: ["Public Policy", "Astronomy", "Computing"] }
    ],
    visaHighlights: {
      processingTime: "4 to 8 weeks",
      financialProof: "CoE letter + AUD $29,710 living expenses proof",
      languageReq: "IELTS 6.5 overall / PTE 58+"
    }
  },
  {
    name: "Germany",
    slug: "germany",
    code: "DE",
    flag: "🇩🇪",
    region: "Europe",
    tagline: "Tuition-free public universities & EU industrial powerhouse",
    description: "Enjoy zero or nominal tuition fees at public universities, world-leading engineering standards, and an 18-month job search visa.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    avgTuitionINR: "₹0 - ₹3L / year (Public) / ₹8L - ₹16L (Private)",
    avgLivingCostINR: "₹8L - ₹11L / year",
    postStudyWork: "18 Months Job Seeker Visa -> EU Blue Card",
    workWhileStudy: "140 full days or 280 half days per year",
    intakes: ["Winter (September/October - Major)", "Summer (March/April)"],
    keyAdvantages: [
      "Zero tuition fees at all public universities (pay only ~€300 semester ticket)",
      "Automotive, green energy, industrial robotics global epicenter",
      "Fast-track to EU Blue Card and German Permanent Residency in 21-27 months",
      "Over 2,000+ fully English-taught Master's and Bachelor's programs"
    ],
    topUniversities: [
      { name: "Technical University of Munich (TUM)", ranking: "QS #37", popularCourses: ["Informatics", "Automotive", "Mechanical", "Management"] },
      { name: "Ludwig Maximilian University of Munich (LMU)", ranking: "QS #54", popularCourses: ["Physics", "Life Sciences", "Data Science"] },
      { name: "Heidelberg University", ranking: "QS #87", popularCourses: ["Medicine", "Biosciences", "Mathematics"] },
      { name: "RWTH Aachen University", ranking: "QS #106", popularCourses: ["Production Eng", "Electrical & Computer Eng", "Materials"] }
    ],
    visaHighlights: {
      processingTime: "6 to 10 weeks (APS Certificate mandatory for India)",
      financialProof: "Blocked Account (Sperrkonto) with €11,904/year",
      languageReq: "English programs: IELTS 6.5+ / German programs: TestDaF/Goethe B2-C1"
    }
  },
  {
    name: "Ireland",
    slug: "ireland",
    code: "IE",
    flag: "🇮🇪",
    region: "UK & Ireland",
    tagline: "The Silicon Valley of Europe with English-speaking work rights",
    description: "European headquarters for Google, Meta, Apple, Pfizer, and TikTok. 2-year Third Level Graduate Scheme work permit for Master's graduates.",
    image: "https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80",
    avgTuitionINR: "₹11L - ₹24L / year",
    avgLivingCostINR: "₹8L - ₹12L / year",
    postStudyWork: "2 Years for Master's / 1 Year for Bachelor's",
    workWhileStudy: "20 hrs/week term time, 40 hrs during holidays",
    intakes: ["Autumn (September - Major)", "Spring (January)"],
    keyAdvantages: [
      "Only native English-speaking nation in the Eurozone",
      "Direct campus recruitment by 1,000+ multinational tech & pharma headquarters",
      "2-Year stay-back visa leading to Critical Skills Employment Permit",
      "Vibrant student lifestyle in Dublin, Cork, and Galway"
    ],
    topUniversities: [
      { name: "Trinity College Dublin (TCD)", ranking: "QS #81", popularCourses: ["Computer Science", "Immunology", "Finance", "Literature"] },
      { name: "University College Dublin (UCD)", ranking: "QS #171", popularCourses: ["Business Analytics", "Biotech", "Supply Chain"] },
      { name: "University College Cork (UCC)", ranking: "QS #292", popularCourses: ["Food Science", "Pharmaceutical", "Cybersecurity"] },
      { name: "National University of Ireland Galway", ranking: "QS #289", popularCourses: ["Biomedical Eng", "Cloud Computing"] }
    ],
    visaHighlights: {
      processingTime: "4 to 6 weeks",
      financialProof: "Proof of €10,000 immediate access funds + evidence of sponsor funds",
      languageReq: "IELTS 6.5 overall (minimum 6.0 in each band) / Duolingo 120+"
    }
  },
  {
    name: "France",
    slug: "france",
    code: "FR",
    flag: "🇫🇷",
    region: "Europe",
    tagline: "Grandes Écoles excellence, luxury management & 5-year Schengen visa",
    description: "Triple-accredited business schools, world-leading aerospace and fashion industries, housing subsidies (CAF), and 5-year alumni visas for Indian master's grads.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    avgTuitionINR: "₹6L - ₹18L / year",
    avgLivingCostINR: "₹7L - ₹10L / year (up to 40% subsidized by French CAF)",
    postStudyWork: "2-Year APS / Job Search visa + 5-Year Schengen circulation visa",
    workWhileStudy: "Up to 964 hours per year (60% of legal work duration)",
    intakes: ["Fall (September - Major)", "Spring (January/February)"],
    keyAdvantages: [
      "Special 5-year short-stay Schengen visa for Indian alumni with French Master's",
      "CAF government subsidy covers 20% - 40% of monthly student accommodation rent",
      "Globally leading Business Schools (HEC Paris, INSEAD, ESSEC, EDHEC)",
      "Over 1,600+ programs taught entirely in English"
    ],
    topUniversities: [
      { name: "Université PSL (Paris Sciences & Lettres)", ranking: "QS #24", popularCourses: ["Applied Math", "Physics", "Economics"] },
      { name: "HEC Paris / ESSEC Business School", ranking: "FT #1 Europe", popularCourses: ["Master in Management (MiM)", "MBA", "Marketing"] },
      { name: "Institut Polytechnique de Paris", ranking: "QS #38", popularCourses: ["AI & Data", "Cybersecurity", "Aerospace"] },
      { name: "Sorbonne University", ranking: "QS #59", popularCourses: ["Humanities", "Robotics", "Marine Biology"] }
    ],
    visaHighlights: {
      processingTime: "3 to 5 weeks via Campus France NOC procedure",
      financialProof: "€615/month for 1 year (~€7,380) in bank account",
      languageReq: "IELTS 6.0+ for English tracks (French not required for admission)"
    }
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    code: "NZ",
    flag: "🇳🇿",
    region: "Asia-Pacific & Middle East",
    tagline: "Unmatched quality of life, scenic innovation & 3-year post-study work",
    description: "Every single state university is ranked within the global top 3%. Safe, peaceful environment with up to 3 years post-study work rights.",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
    avgTuitionINR: "₹14L - ₹26L / year",
    avgLivingCostINR: "₹9L - ₹13L / year",
    postStudyWork: "Up to 3 Years open post-study work visa",
    workWhileStudy: "20 hrs/week during study, full-time during vacations",
    intakes: ["Semester 1 (February)", "Semester 2 (July)"],
    keyAdvantages: [
      "100% of New Zealand universities rank in the top 3% globally (QS)",
      "High standard of living with #2 ranking on Global Peace Index",
      "Long-term skill shortages in IT, Engineering, Healthcare, and Agriculture",
      "Spouse eligible for open work visa during Master's degree studies"
    ],
    topUniversities: [
      { name: "University of Auckland", ranking: "QS #68", popularCourses: ["Civil Eng", "Software", "Accounting", "Psychology"] },
      { name: "University of Otago", ranking: "QS #206", popularCourses: ["Health Sciences", "Biotech", "Finance"] },
      { name: "Victoria University of Wellington", ranking: "QS #241", popularCourses: ["Digital Media", "Law", "International Relations"] },
      { name: "University of Canterbury", ranking: "QS #256", popularCourses: ["Structural Eng", "Environmental Science", "CS"] }
    ],
    visaHighlights: {
      processingTime: "4 to 7 weeks",
      financialProof: "NZD $20,000/year living expenses proof + paid tuition fee",
      languageReq: "IELTS 6.5 (no band below 6.0) / PTE 58+"
    }
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    code: "NL",
    flag: "🇳🇱",
    region: "Europe",
    tagline: "Continental Europe's largest English-taught curriculum hub",
    description: "Over 95% of Dutch citizens speak fluent English. Tech headquarters for ASML, Philips, Booking.com, and Shell with a 1-year 'Zoekjaar' visa.",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80",
    avgTuitionINR: "₹8L - ₹18L / year",
    avgLivingCostINR: "₹8L - ₹12L / year",
    postStudyWork: "1 Year 'Orientation Year' (Zoekjaar) work permit",
    workWhileStudy: "16 hrs/week or full-time during June, July, August",
    intakes: ["September (Major Intake)", "February (Limited programs)"],
    keyAdvantages: [
      "2,100+ fully English-taught programs across research universities and universities of applied sciences",
      "ASML, Philips, NXP, Adyen semiconductor & fintech powerhouse",
      "Zoekjaar orientation year can be activated within 3 years of graduating",
      "Progressive, bike-friendly, deeply international society"
    ],
    topUniversities: [
      { name: "Delft University of Technology (TU Delft)", ranking: "QS #47", popularCourses: ["Aerospace", "Architecture", "Quantum Eng", "CS"] },
      { name: "University of Amsterdam", ranking: "QS #53", popularCourses: ["Communication", "AI", "Economics", "Psychology"] },
      { name: "Eindhoven University of Technology", ranking: "QS #124", popularCourses: ["Semiconductor Technology", "Industrial Design"] },
      { name: "Erasmus University Rotterdam", ranking: "QS #176", popularCourses: ["Erasmus School of Management (RSM)", "Health Economics"] }
    ],
    visaHighlights: {
      processingTime: "2 to 4 weeks via direct university sponsorship",
      financialProof: "€12,500/year living costs transferred to university escrow",
      languageReq: "IELTS 6.5 (minimum 6.0 in each section) / TOEFL 90+"
    }
  },
  {
    name: "Singapore",
    slug: "singapore",
    code: "SG",
    flag: "🇸🇬",
    region: "Asia-Pacific & Middle East",
    tagline: "Asia's premier financial and technological capital",
    description: "Home to NUS and NTU (both ranked top 15 in the world). Close proximity to India, low taxes, and direct multinational corporate recruiting.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    avgTuitionINR: "₹15L - ₹30L / year",
    avgLivingCostINR: "₹10L - ₹14L / year",
    postStudyWork: "1-year Long Term Visit Pass (LTVP) -> Employment Pass",
    workWhileStudy: "16 hrs/week during term at approved government institutions",
    intakes: ["August (Major)", "January"],
    keyAdvantages: [
      "National University of Singapore (NUS) & NTU consistently in QS Top 15",
      "Only 4-5 hours flight from major Indian metros with zero timezone jet lag",
      "Safe, ultra-modern city with APAC headquarters of Google, Microsoft, Grab",
      "Government tuition grant scheme offers substantial fee reductions"
    ],
    topUniversities: [
      { name: "National University of Singapore (NUS)", ranking: "QS #8", popularCourses: ["AI & Data", "Finance", "Computing", "Civil Eng"] },
      { name: "Nanyang Technological University (NTU)", ranking: "QS #15", popularCourses: ["Materials Science", "Robotics", "MBA", "Electronics"] },
      { name: "Singapore Management University (SMU)", ranking: "Specialized", popularCourses: ["Fintech", "Corporate Law", "Analytics"] }
    ],
    visaHighlights: {
      processingTime: "2 to 4 weeks (Solar/ICA approval)",
      financialProof: "Tuition fee payment + SGD $15,000 - $20,000 living proof",
      languageReq: "IELTS 6.5 - 7.0 / TOEFL 100+"
    }
  },
  {
    name: "United Arab Emirates",
    slug: "uae",
    code: "AE",
    flag: "🇦🇪",
    region: "Asia-Pacific & Middle East",
    tagline: "Tax-free global commerce hub with branch campuses of top universities",
    description: "Dubai International Academic City hosts top UK, Australian, and US universities. Enjoy tax-free earnings and a 10-year Golden Visa for high achievers.",
    avgTuitionINR: "₹10L - ₹22L / year",
    avgLivingCostINR: "₹7L - ₹11L / year",
    postStudyWork: "Green Residence Visa (up to 5 years) / 10-year Golden Visa",
    workWhileStudy: "Part-time work permitted with Student Work Permit",
    intakes: ["September (Major)", "January"],
    keyAdvantages: [
      "Branch campuses of University of Birmingham, Wollongong, Curtin, RIT",
      "0% income tax environment for post-graduation employment",
      "10-Year Golden Visa for outstanding GPA graduates (>3.8)",
      "Proximity to India (3-hour flight) with rich Indian student community"
    ],
    topUniversities: [
      { name: "University of Birmingham Dubai", ranking: "QS #84 parent", popularCourses: ["Computer Science", "Mechanical Eng", "Business", "Law"] },
      { name: "University of Wollongong in Dubai (UOWD)", ranking: "Top 200 Parent", popularCourses: ["Engineering", "Fintech", "Marketing"] },
      { name: "Middlesex University Dubai", ranking: "Top UK Branch", popularCourses: ["Graphic Design", "Data Analytics", "Psychology"] }
    ],
    visaHighlights: {
      processingTime: "2 to 3 weeks",
      financialProof: "Fee payment receipt + sponsor bank statement",
      languageReq: "IELTS 6.0+ / TOEFL 79+"
    }
  },
  {
    name: "Spain",
    slug: "spain",
    code: "ES",
    flag: "🇪🇸",
    region: "Europe",
    tagline: "Top European business schools & rich cultural experience",
    description: "World-class triple-crown business schools (IE, ESADE, IESE), affordable living costs, warm climate, and 1-year post-study work authorization.",
    avgTuitionINR: "₹4L - ₹14L / year (Public) / ₹12L - ₹25L (Private)",
    avgLivingCostINR: "₹6L - ₹9L / year",
    postStudyWork: "1 Year job search permit (can be converted to work residency)",
    workWhileStudy: "30 hrs/week part-time work allowed",
    intakes: ["September/October (Major)", "January/February"],
    keyAdvantages: [
      "Home to 3 of the world's top 10 MBA schools (IE, IESE, ESADE)",
      "Low living cost compared to Northern Europe (€600 - €900/month)",
      "Spanish language proficiency provides access to Latin American markets",
      "Fast-track residency opportunities for high-skilled international talent"
    ],
    topUniversities: [
      { name: "IE University (Madrid)", ranking: "FT Top 10", popularCourses: ["BBA", "Data Analytics", "International Relations", "MBA"] },
      { name: "University of Barcelona", ranking: "QS #164", popularCourses: ["Biomedicine", "Economics", "Chemistry"] },
      { name: "Autonomous University of Madrid", ranking: "QS #199", popularCourses: ["Physics", "Law", "Computer Science"] }
    ],
    visaHighlights: {
      processingTime: "4 to 6 weeks",
      financialProof: "IPREM index proof (~€600/month or €7,200/year)",
      languageReq: "IELTS 6.5 for English programs (DELE required only for Spanish)"
    }
  },
  {
    name: "Italy",
    slug: "italy",
    code: "IT",
    flag: "🇮🇹",
    region: "Europe",
    tagline: "Centuries of academic prestige, design, fashion & DSU regional scholarships",
    description: "Universities offering historic prestige (Bologna, Politecnico di Milano) with 100% regional DSU scholarships covering tuition plus €6,000 - €8,000 living stipend.",
    avgTuitionINR: "₹1L - ₹4L / year (Public) / ₹8L - ₹18L (Private)",
    avgLivingCostINR: "₹6L - ₹9L / year (can be 100% offset by DSU scholarships)",
    postStudyWork: "1 Year 'Permesso di Soggiorno per Ricerca Lavoro'",
    workWhileStudy: "20 hrs/week (up to 1,040 hours per year)",
    intakes: ["September/October (Major Intake)"],
    keyAdvantages: [
      "Government DSU / EDISU scholarships offer free tuition + €7,000+ living stipend for middle-income students",
      "Global leader in Automotive Engineering (Ferrari, Lamborghini), Design, and Fashion",
      "Politecnico di Milano ranks top 15 in the world for Architecture & Engineering",
      "Thousands of master's programs delivered entirely in English"
    ],
    topUniversities: [
      { name: "Politecnico di Milano", ranking: "QS #123 (Eng #7)", popularCourses: ["Mechanical Eng", "Architecture", "Design", "Data Science"] },
      { name: "University of Bologna", ranking: "QS #154", popularCourses: ["Oldest Uni in the World: Law, AI, Biotechnology"] },
      { name: "Sapienza University of Rome", ranking: "QS #134", popularCourses: ["Classics", "Computer Science", "Physics"] },
      { name: "Bocconi University", ranking: "FT Top 5", popularCourses: ["Finance", "Management", "Economics"] }
    ],
    visaHighlights: {
      processingTime: "4 to 8 weeks (DOV / CIMEA certification required)",
      financialProof: "€6,000/year minimal bank balance for student visa",
      languageReq: "IELTS 6.0 - 6.5 / Medium of instruction letter accepted in some universities"
    }
  },
  {
    name: "Switzerland",
    slug: "switzerland",
    code: "CH",
    flag: "🇨🇭",
    region: "Europe",
    tagline: "World #7 ETH Zurich & global hospitality management pinnacle",
    description: "World benchmark for technology (ETH Zurich, EPFL) and hospitality (EHL, Glion, Les Roches) with exceptional global starting salaries.",
    avgTuitionINR: "₹1.5L - ₹4L / year (Public Tech) / ₹25L - ₹45L (Private Hospitality)",
    avgLivingCostINR: "₹14L - ₹20L / year",
    postStudyWork: "6 Months job seeker visa after graduation",
    workWhileStudy: "15 hrs/week during semester (after first 6 months)",
    intakes: ["September (Autumn)", "February (Spring)"],
    keyAdvantages: [
      "ETH Zurich ranked #7 globally — public tuition under CHF 1,500/year",
      "Swiss hospitality diplomas recognized as the gold standard worldwide",
      "Highest average salaries in Europe across banking, pharma (Novartis, Roche), and tech",
      "Breathtaking Alpine quality of life and multilingual environment"
    ],
    topUniversities: [
      { name: "ETH Zurich", ranking: "QS #7", popularCourses: ["Computer Science", "Robotics", "Physics", "Civil Eng"] },
      { name: "EPFL (École Polytechnique Fédérale de Lausanne)", ranking: "QS #36", popularCourses: ["Microengineering", "Data Science", "Bioeng"] },
      { name: "EHL Hospitality Business School", ranking: "QS #1 Hospitality", popularCourses: ["Luxury Brand Management", "Hospitality Leadership"] }
    ],
    visaHighlights: {
      processingTime: "8 to 12 weeks (Cantonal migration authority review)",
      financialProof: "CHF 21,000 in a Swiss-recognized bank account",
      languageReq: "IELTS 7.0 for ETH/EPFL / TOEFL 100+"
    }
  },
  {
    name: "Austria",
    slug: "austria",
    code: "AT",
    flag: "🇦🇹",
    region: "Europe",
    tagline: "Vienna: World's most livable city with low tuition and high safety",
    description: "Located in the heart of Europe. Public universities charge non-EU students nominal fees (~€726 per semester) with rich cultural heritage.",
    avgTuitionINR: "₹1.5L - ₹3L / year (Public)",
    avgLivingCostINR: "₹7L - ₹10L / year",
    postStudyWork: "12 Months Job Search Visa -> Red-White-Red Card",
    workWhileStudy: "20 hrs/week without labour market check",
    intakes: ["Winter (October)", "Summer (March)"],
    keyAdvantages: [
      "Vienna repeatedly ranked #1 Most Livable City in the World (Economist)",
      "Nominal tuition fees (~€1,450/year) at world-class public institutions",
      "Red-White-Red Card system enables smooth pathway to European residency",
      "Hub for international organizations (UN, OPEC, IAEA headquarters)"
    ],
    topUniversities: [
      { name: "University of Vienna", ranking: "QS #130", popularCourses: ["Data Science", "Economics", "Law", "Physics"] },
      { name: "TU Wien (Vienna University of Technology)", ranking: "QS #190", popularCourses: ["Informatics", "Mechanical", "Architecture"] },
      { name: "WU (Vienna University of Economics & Business)", ranking: "FT Top 30", popularCourses: ["International Management", "Finance"] }
    ],
    visaHighlights: {
      processingTime: "6 to 10 weeks",
      financialProof: "Proof of €1,000/month living expense for under 24 years old",
      languageReq: "IELTS 6.5+ for English master's programs"
    }
  },
  {
    name: "Belgium",
    slug: "belgium",
    code: "BE",
    flag: "🇧🇪",
    region: "Europe",
    tagline: "Capital of the European Union & world-renowned research institutes",
    description: "Brussels houses the European Commission and NATO. KU Leuven ranks in the world's top 100 for engineering, biotech, and economics.",
    avgTuitionINR: "₹3L - ₹8L / year",
    avgLivingCostINR: "₹7L - ₹10L / year",
    postStudyWork: "12-month Search Year ('Orientation Year') visa",
    workWhileStudy: "20 hrs/week permitted with work permit C",
    intakes: ["September (Major Intake)"],
    keyAdvantages: [
      "Direct exposure to European governance, international law, and policy think tanks",
      "KU Leuven ranked #61 globally and known as Europe's most innovative university",
      "Affordable tuition compared to UK/US with high academic rigor",
      "Strategic geographic location connected by high-speed trains to Paris, London, Amsterdam"
    ],
    topUniversities: [
      { name: "KU Leuven", ranking: "QS #61", popularCourses: ["Engineering", "Philosophy", "Economics", "Biotech"] },
      { name: "Ghent University", ranking: "QS #159", popularCourses: ["Veterinary Science", "Bio-engineering", "Environmental"] },
      { name: "Université Catholique de Louvain (UCL)", ranking: "QS #180", popularCourses: ["Management", "Medicine", "AI"] }
    ],
    visaHighlights: {
      processingTime: "4 to 8 weeks via ASP/VFS",
      financialProof: "Proof of minimum €789/month (blocked account or sponsor)",
      languageReq: "IELTS 6.5 (minimum 6.0 in each sub-score)"
    }
  },
  {
    name: "Hungary",
    slug: "hungary",
    code: "HU",
    flag: "🇭🇺",
    region: "Europe",
    tagline: "Stipendium Hungaricum 100% full scholarships & affordable medical degrees",
    description: "Famed for English-taught General Medicine, Dentistry, and Pharmacy programs alongside the prestigious Stipendium Hungaricum full scholarship.",
    avgTuitionINR: "₹3L - ₹7L / year (STEM/Biz) / ₹10L - ₹15L (Medicine)",
    avgLivingCostINR: "₹4L - ₹6L / year",
    postStudyWork: "9-Month 'Study-to-Work' residence permit",
    workWhileStudy: "30 hrs/week during term time",
    intakes: ["September (Major)", "February"],
    keyAdvantages: [
      "Stipendium Hungaricum Scholarship covers 100% tuition, monthly allowance & housing",
      "WHO and NMC recognized General Medicine (MD) degrees without NEET capitation fees",
      "Extremely affordable cost of living in Budapest and Debrecen",
      "Full Schengen visa mobility across 29 European countries"
    ],
    topUniversities: [
      { name: "Eötvös Loránd University (ELTE)", ranking: "QS #564", popularCourses: ["Computer Science", "Psychology", "Applied Mathematics"] },
      { name: "University of Debrecen", ranking: "QS #671", popularCourses: ["General Medicine (MBBS)", "Dentistry", "Pharmacy"] },
      { name: "Budapest University of Technology and Economics (BME)", ranking: "QS #741", popularCourses: ["Civil Eng", "Software", "Chemical"] },
      { name: "Semmelweis University", ranking: "Top 200 Medicine", popularCourses: ["Medicine", "Dentistry", "Health Sciences"] }
    ],
    visaHighlights: {
      processingTime: "3 to 5 weeks",
      financialProof: "€5,000 - €7,000 bank statement or Scholarship Award Letter",
      languageReq: "IELTS 5.5 - 6.5 / University internal entrance exam"
    }
  },
  {
    name: "Finland",
    slug: "finland",
    code: "FI",
    flag: "🇫🇮",
    region: "Europe",
    tagline: "World's happiest country & #1 rated global education system",
    description: "Famous for student well-being, equality, tech innovation (Nokia, Supercell, clean tech), and a generous 2-year post-study job search visa.",
    avgTuitionINR: "₹7L - ₹14L / year (Generous 50% - 100% institutional scholarships available)",
    avgLivingCostINR: "₹7L - ₹10L / year",
    postStudyWork: "2-Year Post-Study Work Permit (extendable)",
    workWhileStudy: "30 hrs/week during academic terms",
    intakes: ["Autumn (Joint Application in January for August intake)"],
    keyAdvantages: [
      "Voted #1 Happiest Country in the World for 7 consecutive years",
      "Generous merit scholarships covering 50% - 100% of tuition fees",
      "Permit type A (continuous) given for duration of studies — counts towards Finnish citizenship",
      "High tech startups, clean energy, and cybersecurity ecosystems"
    ],
    topUniversities: [
      { name: "University of Helsinki", ranking: "QS #115", popularCourses: ["Data Science", "Ecology", "Law", "Computer Science"] },
      { name: "Aalto University", ranking: "QS #109", popularCourses: ["Design", "Computer Science", "Business Analytics", "Robotics"] },
      { name: "Tampere University", ranking: "Top 350", popularCourses: ["Biomedical Tech", "Wireless Comm", "Software Engineering"] }
    ],
    visaHighlights: {
      processingTime: "4 to 6 weeks via Enter Finland online portal",
      financialProof: "€6,720/year (€560/month) living cost deposit",
      languageReq: "IELTS 6.5 (minimum 6.0 in writing) / TOEFL 92+"
    }
  },
  {
    name: "Czech Republic",
    slug: "czech-republic",
    code: "CZ",
    flag: "🇨🇿",
    region: "Europe",
    tagline: "Central Europe's tech innovation center in fairytale Prague",
    description: "Centuries-old Charles University, flourishing software development hubs, affordable living, and 9-month job seeking residence permits.",
    avgTuitionINR: "₹2.5L - ₹6L / year (English) / 100% Free in Czech",
    avgLivingCostINR: "₹4.5L - ₹7L / year",
    postStudyWork: "9-Month job seeker residency after graduation",
    workWhileStudy: "Unlimited hours for accredited university students",
    intakes: ["Winter (September/October)", "Summer (February)"],
    keyAdvantages: [
      "Degree from Charles University (founded 1348) commands worldwide respect",
      "Very low student cost of living (~€450 - €650/month in Prague & Brno)",
      "Vibrant engineering and automotive (Škoda) & cybersecurity (Avast) hubs",
      "Full free movement across all Schengen European states"
    ],
    topUniversities: [
      { name: "Charles University (Prague)", ranking: "QS #248", popularCourses: ["General Medicine", "Mathematics", "Philosophy", "CS"] },
      { name: "Czech Technical University in Prague (CTU)", ranking: "QS #403", popularCourses: ["Cybernetics", "Informatics", "Aerospace"] },
      { name: "Masaryk University (Brno)", ranking: "QS #400", popularCourses: ["Biotechnology", "Business", "Medicine"] }
    ],
    visaHighlights: {
      processingTime: "60 to 90 days (Plan early)",
      financialProof: "CZK 140,000 (~€5,500) bank funds proof",
      languageReq: "IELTS 6.0+ / University video interview"
    }
  },
  {
    name: "Portugal",
    slug: "portugal",
    code: "PT",
    flag: "🇵🇹",
    region: "Europe",
    tagline: "Sunny Mediterranean climate, affordable tuition & tech nomad hub",
    description: "One of Europe's safest and most welcoming nations, host of Web Summit Lisbon, and an affordable gateway to European higher education.",
    avgTuitionINR: "₹1.5L - ₹4.5L / year (Public)",
    avgLivingCostINR: "₹5L - ₹7.5L / year",
    postStudyWork: "1-Year Job Search Visa (extendable to work residency)",
    workWhileStudy: "20 hrs/week during semester, full-time in holidays",
    intakes: ["September/October (Major Intake)"],
    keyAdvantages: [
      "#7 Safest Country in the world according to Global Peace Index",
      "Lisbon & Porto tech startup boom with Web Summit every November",
      "Low living expenses (€500 - €750/month) with warm Mediterranean weather",
      "Direct pathway to Portuguese EU passport after 5 years of legal residence"
    ],
    topUniversities: [
      { name: "University of Porto", ranking: "QS #253", popularCourses: ["Civil Eng", "Biomedical Sciences", "Management"] },
      { name: "University of Lisbon", ranking: "QS #266", popularCourses: ["Computer Engineering", "Data Science", "Economics"] },
      { name: "Nova University Lisbon", ranking: "FT Top 30 Biz", popularCourses: ["Nova SBE Finance", "International Management"] }
    ],
    visaHighlights: {
      processingTime: "4 to 6 weeks via VFS Global",
      financialProof: "€760/month minimum wage equivalent bank balance",
      languageReq: "IELTS 6.0+ or English proficiency letter from bachelor's college"
    }
  },
  {
    name: "Poland",
    slug: "poland",
    code: "PL",
    flag: "🇵🇱",
    region: "Europe",
    tagline: "Central Europe's fastest growing economy & affordable medicine",
    description: "Rapidly expanding IT and shared services sectors (Warsaw, Krakow, Wroclaw) with affordable tuition fees and WHO-approved medical universities.",
    avgTuitionINR: "₹2L - ₹5L / year (Engineering/IT) / ₹9L - ₹13L (Medicine)",
    avgLivingCostINR: "₹3.5L - ₹5.5L / year",
    postStudyWork: "9-Month job seeker permit (graduates exempt from work permit)",
    workWhileStudy: "Unlimited part-time hours for full-time regular students",
    intakes: ["October (Winter - Major)", "February (Summer)"],
    keyAdvantages: [
      "Polish university graduates are legally EXEMPT from needing a separate work permit",
      "Fastest growing economy in the EU with major hubs for Google, Amazon, Intel",
      "High-quality English-taught MBBS/MD degrees recognized by GMC, NMC, and USMLE",
      "Incredible student affordability (€400 - €550/month living cost)"
    ],
    topUniversities: [
      { name: "University of Warsaw", ranking: "QS #262", popularCourses: ["Computer Science", "International Relations", "Physics"] },
      { name: "Jagiellonian University (Krakow)", ranking: "QS #304", popularCourses: ["Medicine", "Molecular Biology", "Law"] },
      { name: "Warsaw University of Technology", ranking: "Top 500", popularCourses: ["Robotics", "Civil Eng", "Software Engineering"] }
    ],
    visaHighlights: {
      processingTime: "3 to 4 weeks",
      financialProof: "PLN 800/month (~€200) + return ticket funds in bank",
      languageReq: "IELTS 6.0 / Medium of Instruction (MOI) widely accepted"
    }
  },
  {
    name: "Latvia",
    slug: "latvia",
    code: "LV",
    flag: "🇱🇻",
    region: "Europe",
    tagline: "Baltic innovation hub, high visa success & affordable Schengen degree",
    description: "Part of the European Union and Schengen Zone. High visa success rate for Indian students, modern campuses, and very low living costs.",
    avgTuitionINR: "₹2.2L - ₹4.5L / year",
    avgLivingCostINR: "₹3.5L - ₹5L / year",
    postStudyWork: "9-Month graduate job seeker permit",
    workWhileStudy: "20 hrs/week during study",
    intakes: ["September (Autumn)", "February (Spring)"],
    keyAdvantages: [
      "100% Schengen student visa granting travel across 29 European countries",
      "Very competitive tuition fees starting from €2,500/year",
      "Fast-growing startup ecosystem in Riga with high internet connectivity",
      "Streamlined admission process with university entrance tests"
    ],
    topUniversities: [
      { name: "Riga Technical University (RTU)", ranking: "QS #751", popularCourses: ["Telecommunications", "Aviation Transport", "Computer Systems"] },
      { name: "University of Latvia", ranking: "QS #801", popularCourses: ["Business Administration", "Medicine", "Optometry"] },
      { name: "Turiba University", ranking: "Accredited", popularCourses: ["Tourism & Hospitality", "International Law"] }
    ],
    visaHighlights: {
      processingTime: "3 to 5 weeks",
      financialProof: "€620/month minimum bank statement (~€7,500 total)",
      languageReq: "IELTS 5.5+ or university internal English test"
    }
  },
  {
    name: "Malaysia",
    slug: "malaysia",
    code: "MY",
    flag: "🇲🇾",
    region: "Asia-Pacific & Middle East",
    tagline: "Twinning programs with UK/Australia & world-class affordability",
    description: "Complete UK or Australian university degrees at 1/3rd of the cost via famous 2+1 twinning programs (Monash, Nottingham, Southampton campuses).",
    avgTuitionINR: "₹4L - ₹9L / year",
    avgLivingCostINR: "₹3L - ₹5L / year",
    postStudyWork: "Employment pass via Graduate Scheme / Digital Nomad DE Rantau",
    workWhileStudy: "20 hrs/week during semester breaks",
    intakes: ["March", "July", "October"],
    keyAdvantages: [
      "Earn a direct degree from Monash University Australia or University of Nottingham UK",
      "Ranked among the world's most budget-friendly higher education study destinations",
      "Rich cultural diversity with widespread English and Tamil spoken across Kuala Lumpur",
      "Only 3.5 hours flight from Chennai, Tiruchirappalli, and Bangalore"
    ],
    topUniversities: [
      { name: "Universiti Malaya (UM)", ranking: "QS #60", popularCourses: ["Engineering", "Medicine", "Economics", "AI"] },
      { name: "Monash University Malaysia", ranking: "Top 45 Parent", popularCourses: ["Business", "Biotechnology", "Software Eng"] },
      { name: "Taylor's University", ranking: "QS #251", popularCourses: ["Hospitality & Leisure (QS #17)", "Architecture", "Design"] },
      { name: "University of Nottingham Malaysia", ranking: "Top 100 Parent", popularCourses: ["Pharmacy", "Mechanical", "International Studies"] }
    ],
    visaHighlights: {
      processingTime: "2 to 4 weeks via EMGS portal",
      financialProof: "Bank statement showing tuition fees + MYR 15,000 living expenses",
      languageReq: "IELTS 5.5 - 6.0 / PTE 50+"
    }
  },
  {
    name: "Japan",
    slug: "japan",
    code: "JP",
    flag: "🇯🇵",
    region: "Asia-Pacific & Middle East",
    tagline: "Technology titan, MEXT full scholarships & massive demographic job demand",
    description: "World leader in robotics, automotive, semiconductors, and precision technology with high corporate demand for international engineers.",
    avgTuitionINR: "₹4L - ₹8L / year (Public National Universities)",
    avgLivingCostINR: "₹6L - ₹9L / year",
    postStudyWork: "Designated Activities Visa (1 to 2 years) -> High-Skilled Professional Visa",
    workWhileStudy: "28 hrs/week permitted with Shikakugai-katsudo permit",
    intakes: ["Spring (April - Major in Japan)", "Autumn (September/October for English courses)"],
    keyAdvantages: [
      "Japan has over 200,000+ unfilled engineering positions due to demographic demand",
      "MEXT Japanese Government Scholarship offers 100% free tuition + monthly ¥145,000 stipend",
      "Exceptional public safety, ultra-clean cities, and bullet-train infrastructure",
      "High-Skilled Professional visa offers fastest pathway to permanent residency in just 1-3 years"
    ],
    topUniversities: [
      { name: "University of Tokyo", ranking: "QS #28", popularCourses: ["Physics", "Robotics", "Material Sciences", "Civil Eng"] },
      { name: "Kyoto University", ranking: "QS #46", popularCourses: ["Chemistry", "Informatics", "Medicine (11 Nobel Laureates)"] },
      { name: "Tokyo Institute of Technology", ranking: "QS #91", popularCourses: ["Mechanical", "Computer Science", "Nano-Engineering"] },
      { name: "Waseda University", ranking: "QS #181", popularCourses: ["International Relations", "MBA", "Media"] }
    ],
    visaHighlights: {
      processingTime: "4 to 8 weeks following COE (Certificate of Eligibility) issuance",
      financialProof: "JPY 2,000,000 (~₹11L) bank balance in sponsor account",
      languageReq: "English programs: IELTS 6.5+ / Japanese programs: JLPT N2"
    }
  },
  {
    name: "Timor-Leste",
    slug: "timor-leste",
    code: "TL",
    flag: "🇹🇱",
    region: "Asia-Pacific & Middle East",
    tagline: "Emerging Southeast Asian frontier for international development & ecology",
    description: "Unique opportunity for research, sustainable development, tropical marine biology, and institutional diplomatic academic exchanges.",
    avgTuitionINR: "₹2L - ₹4L / year",
    avgLivingCostINR: "₹3L - ₹5L / year",
    postStudyWork: "Subject to NGO, international agency, or bilateral employment contracts",
    workWhileStudy: "Dependent on institutional sponsorship",
    intakes: ["February", "August"],
    keyAdvantages: [
      "Close institutional tie-ups with UN agencies and ASEAN research missions",
      "Unique tropical biodiversity and maritime ecology field research opportunities",
      "Affordable tuition structure with English & Portuguese institutional frameworks",
      "Pioneering niche for students focused on international diplomacy and community development"
    ],
    topUniversities: [
      { name: "Universidade Nacional Timor Lorosa'e (UNTL)", popularCourses: ["Agriculture", "Education", "Public Health", "Engineering"] },
      { name: "Dili Institute of Technology (DIT)", popularCourses: ["Information Technology", "Petroleum Engineering", "Business"] }
    ],
    visaHighlights: {
      processingTime: "2 to 4 weeks",
      financialProof: "University acceptance + sponsor guarantee",
      languageReq: "English proficiency assessment"
    }
  }
];
