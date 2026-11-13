export interface TestimonialData {
  id: string;
  name: string;
  university: string;
  country: string;
  countryFlag: string;
  program: string;
  intakeYear: string;
  quote: string;
  scholarshipAwarded?: string;
  hometown: string;
  avatarText: string;
  avatarBg: string;
}

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: "t1",
    name: "Gaja Lakshmi",
    university: "Stanford University",
    country: "United States",
    countryFlag: "🇺🇸",
    program: "MS in Computer Science & AI",
    intakeYear: "Fall 2024",
    quote: "Ideation Education Services made my dream of studying at Stanford a reality. From structuring my statement of purpose to navigating the intensive F-1 visa interview, their personal guidance was invaluable throughout the entire journey!",
    scholarshipAwarded: "$32,000 Research Fellowship",
    hometown: "Tiruchirappalli, Tamil Nadu",
    avatarText: "GL",
    avatarBg: "bg-blue-600"
  },
  {
    id: "t2",
    name: "Ram Kumar",
    university: "University of Oxford",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    program: "Master of Business Administration (MBA)",
    intakeYear: "Fall 2024",
    quote: "The counselors at Ideation helped me identify the exact European MBA programs that aligned with my career transition. Their mock interview drills and essay review were world-class. Truly 100% transparent and stress-free.",
    scholarshipAwarded: "£18,000 Dean's Merit Scholarship",
    hometown: "Chennai, Tamil Nadu",
    avatarText: "RK",
    avatarBg: "bg-indigo-700"
  },
  {
    id: "t3",
    name: "Ananya Mehta",
    university: "University of Toronto",
    country: "Canada",
    countryFlag: "🇨🇦",
    program: "Master of Science in Biotechnology & Medicine",
    intakeYear: "Fall 2025",
    quote: "Professional, responsive, and genuinely caring. They supported me every single step of the way—especially when organizing financial documents and SDS visa filing. I received my Canadian student visa in under 3 weeks!",
    scholarshipAwarded: "CAD $12,500 International Entrance Award",
    hometown: "Coimbatore, Tamil Nadu",
    avatarText: "AM",
    avatarBg: "bg-emerald-600"
  },
  {
    id: "t4",
    name: "Ajay Arnold",
    university: "Technical University of Munich (TUM)",
    country: "Germany",
    countryFlag: "🇩🇪",
    program: "M.Sc. in Automotive & Robotics Systems",
    intakeYear: "Winter 2024",
    quote: "Finding tuition-free public universities in Germany seemed impossible on my own with the complex APS certification. Sherwin and the Ideation team handled my APS verification and blocked account setup flawlessly.",
    scholarshipAwarded: "Zero Tuition Fee + €300/mo Semester Stipend",
    hometown: "Madurai, Tamil Nadu",
    avatarText: "AA",
    avatarBg: "bg-amber-600"
  },
  {
    id: "t5",
    name: "Karthik Subramanian",
    university: "University of Melbourne",
    country: "Australia",
    countryFlag: "🇦🇺",
    program: "Master of Data Science",
    intakeYear: "Semester 1 2025",
    quote: "Their knowledge of Australian regional study rights and the Subclass 500 visa was razor-sharp. I got offers from Melbourne and UNSW with a 25% global partner scholarship. Forever grateful to Mrs. Rameeza!",
    scholarshipAwarded: "AUD $15,000 Global Partner Grant",
    hometown: "Tiruchirappalli, Tamil Nadu",
    avatarText: "KS",
    avatarBg: "bg-cyan-600"
  },
  {
    id: "t6",
    name: "Deepika R.",
    university: "Trinity College Dublin",
    country: "Ireland",
    countryFlag: "🇮🇪",
    program: "M.Sc. in Computer Science (Data Track)",
    intakeYear: "Autumn 2024",
    quote: "Dublin is the Silicon Valley of Europe and Ideation gave me the confidence to apply. Within 2 months of graduating, I secured an offer at a tech MNC on a Critical Skills Employment Permit. Couldn't have done it without them!",
    scholarshipAwarded: "€5,000 Global Excellence Award",
    hometown: "Bangalore, Karnataka",
    avatarText: "DR",
    avatarBg: "bg-purple-600"
  }
];
