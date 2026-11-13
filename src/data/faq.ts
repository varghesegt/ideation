export interface FAQItem {
  id: string;
  category: "counseling" | "visas" | "costs" | "universities" | "general";
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    category: "general",
    question: "What services do you provide?",
    answer: "We offer end-to-end overseas education guidance: 1-on-1 profile evaluation, country selection, university shortlisting, statement of purpose (SOP) & essay mentoring, application filing, scholarship negotiation, visa processing with mock interviews, and pre-departure/post-arrival onboarding across 25+ countries."
  },
  {
    id: "f2",
    category: "costs",
    question: "Do you really provide 100% free counseling?",
    answer: "Yes, absolutely! All our core counseling and application advisory services are completely free of cost throughout your entire journey. We operate on official institutional partnerships with global universities, meaning students never pay any hidden advisory or file charges to us."
  },
  {
    id: "f3",
    category: "universities",
    question: "Which countries and universities do you support?",
    answer: "We support over 25 destination countries including the USA, UK, Canada, Australia, Germany, France, Ireland, Netherlands, New Zealand, Singapore, UAE, Switzerland, Italy, Spain, Austria, Poland, Hungary, and more, partnering directly with 500+ accredited universities."
  },
  {
    id: "f4",
    category: "counseling",
    question: "How can I get started?",
    answer: "Getting started is simple. Fill out our free consultation form on the website or WhatsApp our advisory team. An assigned senior counselor will reach out within 24 hours to schedule your personalized profile audit and country planning session."
  },
  {
    id: "f5",
    category: "visas",
    question: "What is your student visa success rate?",
    answer: "Ideation Edu Services maintains a 98% visa success rate. Our dedicated visa filing team conducts meticulous financial verification, assists with sponsor affidavits, and runs realistic 1-on-1 mock consular interview drills before your appointment."
  },
  {
    id: "f6",
    category: "costs",
    question: "Are there low-cost or tuition-free countries to study abroad?",
    answer: "Yes! Germany offers tuition-free higher education at all public universities. Italy provides regional DSU scholarships that cover 100% tuition plus €6,000+ living grants. Hungary offers the Stipendium Hungaricum full scholarship, and public universities in Austria and France offer very low tuition fees (€1,000 - €3,000/year)."
  },
  {
    id: "f7",
    category: "visas",
    question: "Can I work while studying abroad?",
    answer: "In almost all our 25 partner countries, international students are legally allowed to work part-time (typically 20 hours per week during academic semesters, and full-time 40 hours per week during vacations and holidays). Countries like Australia offer 48 hours per fortnight, and Germany allows 140 full days per year."
  },
  {
    id: "f8",
    category: "counseling",
    question: "I have backlogs or a low GPA. Can I still study abroad?",
    answer: "Yes. Many reputed international universities evaluate applicants holistically. If your GPA is lower, we offset it by highlighting strong work experience, portfolio projects, GRE/GMAT scores, and a compelling, reflective Statement of Purpose that explains your academic growth."
  }
];
