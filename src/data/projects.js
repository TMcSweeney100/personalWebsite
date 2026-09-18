// One `featured: true` project renders as the large card; the rest render under "Also built".
export const projects = [
  {
    id: "leavingCertAac",
    title: "Leaving Cert AAC",
    featured: true,
    year: "2026",
    live: true,
    displayUrl: "leavingcertaac.com",
    // Draft — Tim is rewriting this description.
    summary:
      "A study platform for Leaving Cert Biology, built and maintained solo and used by students at Wicklow Educate Together Secondary School.",
    tags: ["React", "TypeScript", "Vite", "Solo build", "Education"],
    links: {
      live: "https://leavingcertaac.com",
      liveLabel: "Open live site",
      code: "https://github.com/TMcSweeney100/leavingCertBiologyWebsite",
    },
    // Set to { src, alt, width, height } once the 1984×600 screenshot exists, e.g.
    // { src: "/leaving-cert-aac.png", alt: "Leaving Cert AAC student dashboard", width: 1984, height: 600 }
    screenshot: null,
  },
  {
    id: "maynoothMentalHealth",
    title: "Maynooth Mental Health",
    year: "2025",
    summary:
      "A full-stack wellbeing platform for students and lecturers — mood tracking, journaling, tasks, analytics and an AI chat feature behind secure auth.",
    tags: ["React", "Spring Boot", "REST API", "MongoDB", "Auth"],
    links: {
      live: "https://mh-front-end-wa6q.vercel.app/",
      liveLabel: "Live demo",
      code: "https://github.com/TMcSweeney100/MHFrontEnd",
    },
  },
  {
    id: "fitzpatrickMarketing",
    title: "Fitzpatrick Marketing",
    year: "2025",
    summary:
      "A marketing site for a startup founder — built to a brief, with a contact flow backed by an email service and spam protection on submissions.",
    tags: ["React", "Vite", "Email service", "Client work"],
    links: {
      live: "https://fitzpatrickmarketing.org/",
      liveLabel: "Live site",
      code: "https://github.com/TMcSweeney100/FitzpatrickMarketingFrontEnd",
    },
  },
]
