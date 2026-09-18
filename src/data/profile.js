// All page copy lives here so wording changes never touch layout code.
// Source: docs/Tim Mc Sweeney CV September 2026.pdf

const NBSP = " "

export const profile = {
  name: "Tim Mc Sweeney",
  /** Name with non-breaking spaces, for the wordmark and H1. */
  nameNoBreak: `Tim${NBSP}Mc${NBSP}Sweeney`,
  eyebrow: "Full-stack software engineer",
  lede: "React and TypeScript interfaces, Java/Spring services, SQL underneath.",

  skills: [
    { label: "Front end", value: "React · TypeScript", sub: "JavaScript, Tailwind" },
    { label: "Back end", value: "Java · Spring · Python", sub: "SQL, REST APIs" },
  ],

  currently: {
    company: `Optum (UnitedHealth${NBSP}Group)`,
    role: "Full Stack Software Engineer · RxSync platform",
    dates: "Jul 2026 — Present · Dublin",
  },

  education: [
    {
      degree: "MSc Software Engineering",
      institution: "Maynooth University",
      grade: "Final grade 1.1",
    },
  ],

  about: {
    paragraphs: [
      "I’m a full-stack engineer at Optum, working on the RxSync platform. Before that I spent a year at Strandum HR on an enterprise HR product, shipping fixes and enhancements across the UI, the business logic and the database behind it.",
      "Outside work I build my own products end-to-end. Leaving Cert AAC is the one I’m proudest of — it’s used by real students, which means real feedback and no hiding behind a demo. I care about clean, maintainable code and interfaces that are obvious to the person using them.",
    ],
    // Draft — Tim is rewriting these three lines.
    points: [
      "Ships features end to end, from design through to release",
      "Comfortable in review-heavy Agile teams, and takes feedback seriously",
      "Builds for real users: Leaving Cert AAC is in daily use by students",
    ],
  },

  experience: [
    {
      company: `Optum (UnitedHealth${NBSP}Group)`,
      location: "Dublin",
      role: "Full Stack Software Engineer",
      dates: "Jul 2026 — Present",
      current: true,
      summary:
        "Full-stack development on RxSync, an enterprise platform that supports OptumRx Network Operations through workflow automation, API integrations and secure backend services.",
      bullets: [
        "Develop and maintain full-stack features using React, TypeScript, Python, Spring Boot, Java and SQL.",
        "Build and integrate REST APIs between front-end applications, backend services and wider enterprise systems.",
        "Diagnose and fix application and integration issues across the stack, working to security and engineering standards.",
      ],
    },
    {
      company: "Strandum HR",
      location: "Dublin",
      role: "Junior Software Engineer",
      dates: "Jun 2025 — Jun 2026",
      bullets: [
        "Built and maintained full-stack features for an enterprise HR platform: JSF and PrimeFaces on the front end, Java and Spring behind it.",
        "Contributed to Project Leon (v8), a major UI/UX upgrade of the platform, implementing pages and components, reducing load times and improving accessibility.",
        "Designed and optimised SQL queries, stored procedures and schemas in Microsoft SQL Server, improving performance and data integrity.",
      ],
    },
    {
      company: "Maynooth University",
      location: "Education",
      role: "MSc Software Engineering",
      dates: "Graduated Mar 2026",
      summary: "Final grade 1.1",
      bullets: [],
    },
  ],
  experienceRange: "2025 — Present",

  contact: {
    email: "timmcsweeney50@gmail.com",
    location: "Dublin, IE",
    // Draft — Tim is rewriting this block.
    heading: "Happy to talk through any of this.",
    blurb: "Dublin based. Email is the quickest way to reach me.",
  },

  links: {
    cv: "/Tim_Mc_Sweeney_CV_September_2026.pdf",
    github: "https://github.com/TMcSweeney100",
    githubHandle: "TMcSweeney100",
    linkedin: "https://www.linkedin.com/in/t-mc-sweeney/",
    linkedinHandle: "t-mc-sweeney",
  },
}
