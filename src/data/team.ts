export interface TeamMemberData {
  name: string;
  role: string;
  title: string;
  category: "founding" | "ceo" | "advisor";
  bio: string;
  credentials: string[];
  image: string;
  linkedin?: string;
  email?: string;
}

export const TEAM_MEMBERS: TeamMemberData[] = [
  {
    name: "Dr. Stanley D Isaac",
    role: "Chief Executive Officer (CEO)",
    title: "Dr.",
    category: "ceo",
    bio: "Provides strategic guidance, global institutional partnerships, and senior academic mentorship. Dr. Stanley has helped shape international education pathways for over a decade, forging direct relationships with overseas universities and advising students on high-impact academic trajectories.",
    credentials: [
      "15+ years in international higher education & institutional governance",
      "Keynote speaker & advisor on global university accreditation",
      "Specialist in STEM & High-Impact Post-Study Work trajectories"
    ],
    image: "https://ideationedu.com/wp-content/uploads/2026/06/Stanley-Issac-Avatar.webp",
    linkedin: "https://linkedin.com/in/dr-stanley-d-isaac",
    email: "ceo@ideationedu.com"
  },
  {
    name: "Rameeza Stanley Isaac",
    role: "Founder & Director",
    title: "Mrs.",
    category: "founding",
    bio: "The driving visionary behind Ideation Edu Services since its inception in 2015. Rameeza champions personalized, ethical student counseling, having personally mentored hundreds of Indian students into Ivy League, Russell Group, and European institutions with full scholarships.",
    credentials: [
      "Founded Ideation Edu Services in 2015",
      "Mentored 1,000+ students across Tamil Nadu and Pan-India",
      "Specialist in scholarship procurement & profile transformation"
    ],
    image: "https://ideationedu.com/wp-content/uploads/2026/06/Rameeza-Avatar.avif",
    linkedin: "https://linkedin.com/in/rameeza-stanley",
    email: "director@ideationedu.com"
  },
  {
    name: "Sherwin S Isaac",
    role: "Chief Operating Officer (COO)",
    title: "Mr.",
    category: "founding",
    bio: "Leads technical operations, university CRM integration, document audit pipelines, and student experience. Sherwin ensures every application is executed with zero defects, achieving an industry-leading 98% visa and admission success rate.",
    credentials: [
      "Architect of the Ideation 8-Stage University Application Pipeline",
      "Directs university admissions operations across 25 destination countries",
      "Pioneered AI-assisted visa document pre-screening"
    ],
    image: "https://ideationedu.com/wp-content/uploads/2026/06/Sherwin-Issac-Avatar.avif",
    linkedin: "https://linkedin.com/in/sherwin-isaac",
    email: "coo@ideationedu.com"
  }
];
