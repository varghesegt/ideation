// ─── Navigation & Layout ───────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// ─── Stats ─────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// ─── Team ──────────────────────────────────────────────────────────

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  category: "founding" | "ceo" | "advisor";
  linkedin?: string;
}

// ─── Countries & Universities ──────────────────────────────────────

export interface Country {
  name: string;
  slug: string;
  code: string; // ISO country code
  flag: string; // emoji
  region: "americas" | "europe" | "asia-pacific" | "middle-east";
  description: string;
  heroImage: string;
  avgTuition: string;
  avgLivingCost: string;
  workHoursAllowed: string;
  popularPrograms: string[];
  topUniversities: University[];
  intakes: string[];
  visaInfo: VisaInfo;
}

export interface University {
  name: string;
  slug: string;
  country: string;
  ranking?: number;
  logo?: string;
  programs: Program[];
  description: string;
  website: string;
}

export interface Program {
  name: string;
  level: "undergraduate" | "postgraduate" | "phd" | "diploma" | "certificate";
  duration: string;
  tuition: string;
  intake: string[];
  requirements: string[];
}

export interface VisaInfo {
  type: string;
  processingTime: string;
  documents: string[];
  tips: string[];
  postStudyWork: string;
}

// ─── Services ──────────────────────────────────────────────────────

export interface Service {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  steps: ServiceStep[];
  features: string[];
}

export interface ServiceStep {
  title: string;
  description: string;
  icon?: string;
}

// ─── Testimonials ──────────────────────────────────────────────────

export interface Testimonial {
  name: string;
  university: string;
  country: string;
  countryFlag: string;
  program: string;
  quote: string;
  image?: string;
  rating: number;
  year: number;
}

// ─── Blog ──────────────────────────────────────────────────────────

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  category: BlogCategory;
  tags: string[];
  publishedAt: string;
  readTime: number;
}

export type BlogCategory =
  | "study-abroad-news"
  | "visa-updates"
  | "university-spotlight"
  | "scholarships"
  | "guides"
  | "student-stories";

// ─── FAQ ───────────────────────────────────────────────────────────

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

// ─── Forms ─────────────────────────────────────────────────────────

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  mobileNumber: string;
  areaOfInterest: string;
  course: string;
  destinationOfChoice: string;
  currentQualification?: string;
  preferredIntake?: string;
  budget?: string;
  message?: string;
  source?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  countryOfInterest: string;
  programLevel: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
}
