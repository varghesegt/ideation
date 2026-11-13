export const SITE_NAME = "Ideation Edu Services";
export const SITE_TAGLINE = "Study Abroad Experts";
export const SITE_DESCRIPTION =
  "Empowering students to achieve their international education dreams since 2015. Personalized counseling, university shortlisting, visa processing & end-to-end study abroad support across 25+ countries.";
export const CONTACT_EMAIL = "info@ideationedu.com";
export const FOUNDED_YEAR = 2015;

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Profile Assessment", href: "/services/profile-assessment" },
      { label: "University Shortlisting", href: "/services/university-shortlisting" },
      { label: "Application Support", href: "/services/application-support" },
      { label: "Scholarship Guidance", href: "/services/scholarship-guidance" },
      { label: "Visa Processing", href: "/services/visa-processing" },
      { label: "Pre-Departure Support", href: "/services/pre-departure-support" },
      { label: "Test Preparation", href: "/services/test-preparation" },
    ],
  },
  { label: "Destinations", href: "/destinations" },
  { label: "Blog", href: "/blog" },
  {
    label: "Tools",
    href: "/tools",
    children: [
      { label: "AI Profile Evaluator", href: "/tools/profile-evaluator" },
      { label: "University Matcher", href: "/tools/university-matcher" },
      { label: "Cost Calculator", href: "/tools/cost-calculator" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/ideationedu",
  facebook: "https://facebook.com/ideationedu",
  linkedin: "https://linkedin.com/company/ideationedu",
  youtube: "https://youtube.com/@ideationedu",
  twitter: "https://twitter.com/ideationedu",
} as const;

export const STATS = {
  studentsGuided: { value: 1000, suffix: "+", label: "Students Guided" },
  partnerUniversities: { value: 500, suffix: "+", label: "Partner Universities" },
  successRate: { value: 98, suffix: "%", label: "Success Rate" },
  countries: { value: 25, suffix: "+", label: "Countries Covered" },
} as const;

export const COMPANY_INFO = {
  name: "Ideation Edu Services (OPC) Private Limited",
  brand: "Ideation Education Services",
  founded: 2015,
  headquarters: "Tiruchirappalli, Tamil Nadu, India",
  email: "info@ideationedu.com",
  tagline: "Plan Your Study Abroad Journey with Expert Guidance",
} as const;
