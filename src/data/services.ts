export interface ServiceDetail {
  id: string;
  stepNumber: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  color: string;
  deliverables: string[];
  timeline: string;
  whyCrucial: string;
  faq: { q: string; a: string }[];
}

export const SERVICES: ServiceDetail[] = [
  {
    id: "01",
    stepNumber: "01",
    title: "Profile Assessment",
    slug: "profile-assessment",
    shortDesc: "Comprehensive evaluation of your academics, test scores, extracurriculars, budget & career goals.",
    fullDesc: "Our senior counselors conduct a multi-dimensional diagnostic of your academic transcripts, GRE/GMAT/SAT scores, English proficiency, co-curricular achievements, and financial budget to build your unique international admissions trajectory.",
    iconName: "UserCheck",
    color: "from-blue-600 to-indigo-600",
    deliverables: [
      "In-depth academic GPA & credit evaluation",
      "Standardized test diagnostic & score target roadmap",
      "Financial budget mapping (self-funded vs scholarship vs education loan)",
      "Strengths & weaknesses gap analysis for high-tier university competitiveness"
    ],
    timeline: "1 to 2 business days",
    whyCrucial: "A candid profile audit prevents costly application mistakes and ensures students do not apply blindly to universities where their profiles are ill-matched.",
    faq: [
      {
        q: "What documents do I need for a profile evaluation?",
        a: "Copies of your 10th, 12th, undergraduate marksheets/transcripts, resume/CV, and any existing test scorecards (IELTS, PTE, TOEFL, GRE, GMAT)."
      },
      {
        q: "Is the profile evaluation completely free?",
        a: "Yes! Ideation Edu Services provides 100% free counseling and evaluation with zero hidden fees throughout your journey."
      }
    ]
  },
  {
    id: "02",
    stepNumber: "02",
    title: "Country & Destination Selection",
    slug: "country-selection",
    shortDesc: "Strategic geographical alignment based on post-study work rights, immigration pathways, and job markets.",
    fullDesc: "We balance immigration regulations, post-study work permits (OPT, PGWP, Graduate Route), industry demand, safety, and living costs across 25 countries to identify your ideal study destination.",
    iconName: "Globe2",
    color: "from-indigo-600 to-blue-500",
    deliverables: [
      "Side-by-side comparison of 2-3 target countries",
      "Analysis of current immigration laws & PR point systems",
      "Industry hiring patterns and regional employment demand",
      "Part-time student work rights and minimum wage benchmarks"
    ],
    timeline: "2 to 3 days",
    whyCrucial: "With fast-evolving global immigration policies in countries like Canada, Australia, and the UK, picking the right country in 2026/2027 is vital for career ROI.",
    faq: [
      {
        q: "Can I apply to multiple countries simultaneously?",
        a: "Yes, we frequently help students create hybrid application strategies (e.g., applying to both the US and Germany, or Canada and the UK) to maximize scholarship and admission offers."
      }
    ]
  },
  {
    id: "03",
    stepNumber: "03",
    title: "University & Course Shortlisting",
    slug: "university-shortlisting",
    shortDesc: "Curating a tailored Dream, Target, and Safety university portfolio to guarantee admission offers.",
    fullDesc: "Using our database of 500+ partner universities, our counselors build a balanced university list divided into Reach (Dream), Match (Target), and Safe tiers, maximizing your chance of receiving high-value admits and scholarships.",
    iconName: "GraduationCap",
    color: "from-blue-600 to-cyan-600",
    deliverables: [
      "Personalized 6-8 university shortlist with Dream/Target/Safe breakdown",
      "Curriculum alignment with your long-term career aspirations",
      "Tuition fee, fee-waiver, and university-specific scholarship mapping",
      "Application deadline alerts for rolling and round-based intakes"
    ],
    timeline: "3 to 5 days",
    whyCrucial: "Applying to an unbalanced list (all top-tier or all safety) leads to either heartbreak or underachievement. Our balanced tiering guarantees successful outcomes.",
    faq: [
      {
        q: "How many universities do you recommend applying to?",
        a: "We usually recommend 6 to 8 universities: 2 Reach (Dream), 3-4 Target (Match), and 2 Safety institutions."
      }
    ]
  },
  {
    id: "04",
    stepNumber: "04",
    title: "Application Support & SOP/LOR Editing",
    slug: "application-support",
    shortDesc: "Polishing compelling Statements of Purpose, Resumes, and Letters of Recommendation with zero plagiarism.",
    fullDesc: "Your SOP is your personal voice before the admissions committee. Our editorial mentors brainstorm, outline, review, and refine your essays, SOPs, CVs, and LORs to ensure they stand out among thousands of international applicants.",
    iconName: "FileEdit",
    color: "from-amber-500 to-orange-500",
    deliverables: [
      "Custom SOP brainstorming and storytelling framework",
      "Multiple rounds of editorial review, grammar, and structural polish",
      "Academic and professional LOR review against university guidelines",
      "Academic CV restructuring tailored to international admissions standards",
      "Flawless portal submission and document checklist verification"
    ],
    timeline: "1 to 2 weeks",
    whyCrucial: "Admissions committees reject hundreds of applicants with top grades due to generic or AI-plagiarized SOPs. We craft authentic narratives that highlight your unique motivations.",
    faq: [
      {
        q: "Do you write the SOP for me?",
        a: "We never provide generic templates or ghostwrite. Instead, we work directly with you through interactive questionnaires and revisions to produce an authentic, compelling essay in your authentic voice."
      }
    ]
  },
  {
    id: "05",
    stepNumber: "05",
    title: "Scholarship & Financial Aid Guidance",
    slug: "scholarship-guidance",
    shortDesc: "Identifying merit-based, need-based & government grants to slash tuition costs.",
    fullDesc: "Higher education abroad is an investment. We actively scout university merit awards, alumni endowments, international research fellowships, and government grants like Erasmus Mundus, Fulbright, and DAAD.",
    iconName: "Award",
    color: "from-emerald-600 to-teal-600",
    deliverables: [
      "University-specific entrance scholarship application assistance",
      "External government scholarship deadline tracking (DAAD, Eiffel, Commonwealth)",
      "Financial assistance essay and scholarship motivation letter crafting",
      "Education loan partnership tie-ups with leading Indian nationalized & private banks"
    ],
    timeline: "Ongoing alongside applications",
    whyCrucial: "Many students miss out on scholarships worth $5,000 to full-tuition simply because they miss separate scholarship deadlines or don't know the awards exist.",
    faq: [
      {
        q: "Can Indian students get 100% scholarships abroad?",
        a: "Yes! Countries like Germany, Italy (DSU scholarships), Hungary (Stipendium Hungaricum), and select US universities offer full tuition waivers and living stipends for qualified applicants."
      }
    ]
  },
  {
    id: "06",
    stepNumber: "06",
    title: "Visa Processing & Mock Interviews",
    slug: "visa-processing",
    shortDesc: "98% visa success rate through rigorous document auditing and 1-on-1 consular mock interviews.",
    fullDesc: "The student visa stage is where many unguided applicants stumble. Our visa specialists review bank solvency certificates, sponsorship affidavits, source of funds, and conduct realistic mock interview drills.",
    iconName: "ShieldCheck",
    color: "from-blue-700 to-indigo-800",
    deliverables: [
      "Comprehensive visa document dossier checklist tailored to your destination",
      "Financial proof auditing (GIC for Canada, Blocked Account for Germany, CAS for UK)",
      "Statement of Purpose for Visa / Cover Letter drafting",
      "Simulated 1-on-1 consular mock visa interview drills with feedback",
      "VFS / Embassy appointment booking and biometrics scheduling assistance"
    ],
    timeline: "2 to 4 weeks before intake",
    whyCrucial: "Visa refusals stay on your permanent immigration record. Our meticulous verification maintains our 98% first-time visa approval track record.",
    faq: [
      {
        q: "What is your visa approval rate?",
        a: "Ideation Edu Services maintains a 98% student visa success rate across all destinations."
      }
    ]
  },
  {
    id: "07",
    stepNumber: "07",
    title: "Pre-Departure Briefing & Forex Support",
    slug: "pre-departure-support",
    shortDesc: "Guidance on foreign exchange, flight bookings, baggage allowance, student health insurance & local SIMs.",
    fullDesc: "Before you board your flight, we equip you with essential knowledge on packing guidelines, customs compliance, discounted student flight tickets, student Forex cards, international bank accounts, and local phone plans.",
    iconName: "PlaneTakeoff",
    color: "from-cyan-600 to-blue-600",
    deliverables: [
      "Pre-departure orientation seminar with alumni and fellow batchmates",
      "Best-rate foreign exchange (Forex) cards and international student accounts",
      "Guidance on student health insurance (OSHC, OHIP, TK, etc.)",
      "Packing checklist, medications protocol, and port-of-entry immigration guide"
    ],
    timeline: "2 to 3 weeks prior to departure",
    whyCrucial: "Prevents anxiety and costly mistakes during travel, currency exchange, and airport port-of-entry customs inspections.",
    faq: [
      {
        q: "Can you help me connect with other students traveling to the same city?",
        a: "Yes! We run exclusive cohort WhatsApp groups connecting students heading to the same university, city, or airport."
      }
    ]
  },
  {
    id: "08",
    stepNumber: "08",
    title: "Post-Arrival Onboarding & Accommodation",
    slug: "post-arrival-support",
    shortDesc: "Safe student housing booking, airport pickup coordination, and alumni networking abroad.",
    fullDesc: "Our support does not end at the airport. We partner with verified international student housing providers (Amber, Casita, University Halls) to help you secure vetted accommodation, register with local municipalities, and connect with Indian alumni.",
    iconName: "Home",
    color: "from-blue-600 to-purple-600",
    deliverables: [
      "Verified on-campus and private student housing booking assistance",
      "Local municipal registration guidance (Anmeldung in Germany, NIN in UK, SIN in Canada)",
      "Part-time job search tips and CV adaptation for local employers",
      "Access to Ideation Global Alumni Network for mentorship and internships"
    ],
    timeline: "First 90 days after landing",
    whyCrucial: "Finding safe accommodation in major student cities is notoriously difficult. Our verified partnerships protect students from rental scams.",
    faq: [
      {
        q: "Do you help with finding safe housing before I arrive?",
        a: "Yes! We assist in booking verified student studios, shared apartments, or university dormitories prior to departure."
      }
    ]
  }
];
