export interface AcademicRecord {
  id: string;
  course: string;
  level: string;
  yearOfPassing: string;
  institute: string;
  scoreOrCgpa: string;
  status: "Completed" | "Pursuing";
  description?: string;
}

export interface InternshipItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period?: string;
  highlights: string[];
  skillsApplied: string[];
  summary: string;
}

export interface SkillItem {
  name: string;
  category: "Software & Productivity" | "Research & Analytics";
  description: string;
  badge: string;
}

export interface CompetencyItem {
  title: string;
  summary: string;
  behavioralMetric: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  levelDesc: string;
}

export interface InterestItem {
  name: string;
  category: string;
  description: string;
}

export const RESUME_DATA = {
  candidate: {
    fullName: "Yash Deepak Sarode",
    designation: "Management Scholar & Market Research Enthusiast",
    shortBio:
      "Motivated management student interested in market research with experience in sales and marketing activities. A quick learner with strong communication, teamwork, creativity, and discipline.",
    objective:
      "Motivated and to gain advance experience in market research, develop my professional skills, and contribute positively to an organization while learning and growing as a management student.",
    keyMetrics: [
      { label: "Current Program", value: "PGDM @ IMDR® Pune" },
      { label: "Graduation CGPA", value: "7.17 / 10" },
      { label: "Field Experience", value: "Sales & Marketing Intern" },
      { label: "Language Fluency", value: "3 Languages" },
    ],
  },

  academics: [
    {
      id: "pgdm",
      course: "PGDM (Post Graduate Diploma in Management)",
      level: "Post Graduate",
      yearOfPassing: "Pursuing",
      institute: "Deccan Education Society's Institute of Management Development and Research (IMDR®), Pune",
      scoreOrCgpa: "Pursuing",
      status: "Pursuing",
      description:
        "Comprehensive postgraduate management coursework focusing on market research, strategic management, corporate analytics, and business development.",
    },
    {
      id: "grad",
      course: "Graduation (Bachelor's Degree)",
      level: "Undergraduate",
      yearOfPassing: "2026",
      institute: "Swaraj College Of Computer Studies",
      scoreOrCgpa: "7.17 CGPA",
      status: "Completed",
      description:
        "Undergraduate computing and business systems curriculum cultivating analytical methodologies, systematic problem solving, and technological aptitude.",
    },
    {
      id: "hsc",
      course: "HSC (Higher Secondary Certificate - 12th)",
      level: "Junior College",
      yearOfPassing: "2023",
      institute: "Sir Parshurambhau College",
      scoreOrCgpa: "45.5%",
      status: "Completed",
      description:
        "Higher secondary education with a rigorous foundational academic syllabus in Pune.",
    },
    {
      id: "ssc",
      course: "SSC (Secondary School Certificate - 10th)",
      level: "High School",
      yearOfPassing: "2021",
      institute: "Sinhgad Spring Dale School",
      scoreOrCgpa: "72.0%",
      status: "Completed",
      description:
        "Secondary scholastic coursework establishing foundational discipline, mathematics, and science communication.",
    },
  ] as AcademicRecord[],

  experience: [
    {
      id: "vipat",
      role: "Sales & Marketing Intern",
      company: "Vipat Industries",
      type: "Internship",
      period: "Internship Practicum",
      summary:
        "Hands-on immersion in business development, prospective customer acquisition, consultative client communication, and market campaign execution.",
      highlights: [
        "Assisted in active sales and marketing activities to directly support business growth and customer acquisition pipelines.",
        "Identified potential client segments and systematically supported targeted lead generation activities.",
        "Communicated with prospective customers to deeply understand their specific requirements and provide relevant product information.",
        "Assisted senior sales executives in timely lead follow-ups and cultivating lasting customer relationships.",
        "Supported comprehensive marketing campaigns, promotional activities, and field market research initiatives.",
        "Gained practical real-world exposure to customer handling, professional communications, and marketing strategy implementation.",
      ],
      skillsApplied: [
        "Lead Generation",
        "Market Research",
        "Customer Advisory",
        "Relationship Management",
        "Promotional Campaigns",
      ],
    },
  ] as InternshipItem[],

  technicalSkills: [
    {
      name: "MS Excel",
      category: "Software & Productivity",
      description: "Data organization, spreadsheet formulas, structured record keeping, and basic quantitative modeling.",
      badge: "Core",
    },
    {
      name: "MS Word",
      category: "Software & Productivity",
      description: "Professional report authoring, academic documentation, meeting minutes, and formatted proposals.",
      badge: "Core",
    },
    {
      name: "PowerPoint",
      category: "Software & Productivity",
      description: "Pitch decks, executive summaries, marketing presentations, and structured visual storytelling.",
      badge: "Presentation",
    },
    {
      name: "Google Workspace",
      category: "Software & Productivity",
      description: "Google Docs, Sheets, Slides, Drive, Forms, and collaborative cloud document workflows.",
      badge: "Collaboration",
    },
    {
      name: "Data Collection & Analysis",
      category: "Research & Analytics",
      description: "Systematic data gathering, survey structuring, primary and secondary data collation, and insight extraction.",
      badge: "Analytical",
    },
    {
      name: "Survey Tools",
      category: "Research & Analytics",
      description: "Digital questionnaires, respondent feedback collation, opinion polling, and quantitative trend analysis.",
      badge: "Research",
    },
    {
      name: "Internet & Online Research",
      category: "Research & Analytics",
      description: "Competitive intelligence, industry benchmarking, trend monitoring, and credible secondary source synthesis.",
      badge: "Intelligence",
    },
  ] as SkillItem[],

  competencies: [
    {
      title: "Event & Activity Coordination",
      summary:
        "Skilled in organizing events, scheduling milestones, and synchronizing cross-functional team actions for seamless execution.",
      behavioralMetric: "Orchestration & Planning",
    },
    {
      title: "Conflict Resolution",
      summary:
        "Diplomatic listener focused on de-escalating team tensions, understanding core perspectives, and reaching win-win consensus.",
      behavioralMetric: "Mediation & Balance",
    },
    {
      title: "Time Management",
      summary:
        "Disciplined prioritization of academic commitments and marketing deliverables to consistently hit target deadlines.",
      behavioralMetric: "Efficiency & Punctuality",
    },
    {
      title: "Leadership & Initiative",
      summary:
        "Proactively taking ownership of projects, encouraging team morale, and driving shared objectives with positive energy.",
      behavioralMetric: "Drive & Mentorship",
    },
    {
      title: "Strategic Communication",
      summary:
        "Articulate spoken and written communication with customers, peers, and mentors, fostering transparent business relations.",
      behavioralMetric: "Clarity & Rapport",
    },
  ] as CompetencyItem[],

  languages: [
    {
      language: "English",
      proficiency: "Professional Working Proficiency",
      levelDesc: "Fluent in corporate correspondence, academic presentations, and professional client consultations.",
    },
    {
      language: "Hindi",
      proficiency: "Full Professional Fluency",
      levelDesc: "Effortless conversational, commercial, and collaborative communication across diverse regional demographics.",
    },
    {
      language: "Marathi",
      proficiency: "Native / Bilingual Fluency",
      levelDesc: "Native linguistic command, ideal for localized Maharashtra market research and regional business negotiations.",
    },
  ] as LanguageItem[],

  interests: [
    {
      name: "Cars & Automobiles",
      category: "Mobility & Engineering",
      description: "Following automotive market trends, vehicle design evolutions, and next-generation mobility advancements.",
    },
    {
      name: "Learning Emerging Technologies",
      category: "Tech Innovation",
      description: "Curious exploration of modern digital productivity tools, business analytics software, and automation tools.",
    },
    {
      name: "Content Creation",
      category: "Creative Media",
      description: "Storyboarding, conceptual visual design, social storytelling, and sharing educational insights.",
    },
  ] as InterestItem[],
};
