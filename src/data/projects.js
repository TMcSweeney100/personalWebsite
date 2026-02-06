export const projects = [
  {
    id: "fitzpatrickMarketing",
    title: "Fitzpatrick Marketing",
    summary:
      "A fast, responsive marketing site built for a startup founder to present services clearly along with a reliable platform where potential customers can contact him easily",
    tags: ["React", "Email Service", "Vite", "UI/UX","Design"],
    links: {
      demo: "https://fitzpatrickmarketing.org/",
      code: "https://example.com",
    },
    details: {
      problem:
        "A founder needed a modern marketing site that communicates the business quickly, looks professional on mobile/desktop, and makes it easy for potential clients to get in touch.",
      built:
        "A single-page marketing website built with Vite + React, with a clean layout and strong visual hierarchy. Included a contact flow backed by an email service, plus basic bot detection to reduce spam submissions.",
      contribution:
        "Owned the project end-to-end: gathered requirements from a stakeholder, designed the UI structure, implemented the site in React, integrated email sending, added bot/spam protections, and tested responsiveness across devices.",
      features: [
        "Mobile-first, responsive layout with clean visual hierarchy",
        "Contact form integrated with an email service for lead captur",
        "Bot/spam protection to improve submission quality",
      ],
      learnings:
        "Learned how to translate non-technical requirements into implementable tasks, iterate based on feedback, and prioritize UX, clarity, and deadlines in a real client-style project.",
    },
  },
  {
    id: "maynoothMentalHealthy",
    title: "Maynooth Mental Health App",
    summary:
      "A full-stack wellbeing platform for students and lecturers, combining mood tracking, journaling, task management, analytics, and an AI chat feature in one place. ",
    tags: ["React", "Spring Boot", "Rest API","Database","Authentication","Full Stack"],
    links: {
      demo: "https://example.com",
      code: "https://example.com",
    },
    details: {
      problem:
        "Students and staff often lack a simple, structured way to track wellbeing over time and build consistent habits. The goal was to create one platform that supports daily check-ins, reflection, and actionable tools, initially aimed at Maynooth University (but usable by anyone).",
      built:
        "DA full-stack web application with authentication and a set of wellbeing features: mood tracking, journaling, task management, basic analytics to visualize trends, and an AI chat feature for guided support. The frontend is built in React, and the backend exposes REST APIs with Spring Boot, using MongoDB for document-based data storage.",
      contribution:
        "Designed and built the entire product end-to-end: feature design, UI implementation, backend API design, authentication, data modelling in MongoDB, and validation for user inputs. Also iterated on UX to keep the app quick and intuitive to use.",
      features: [
        "Mood tracking and journaling with input validation",
      "Task management to support routines and goals",
      "Analytics dashboard to visualize wellbeing trends over time",
      "AI chat feature for guided conversation/support",
      "Secure authentication and protected routes",
      ],
      learnings:
        "SDeepened my full-stack skills across React and Spring Boot: authentication flows, REST API design, validation, and efficient data modelling with MongoDB. I also learned how small UX decisions (navigation, forms, feedback states) strongly affect whether people actually stick with the product",
    },
  }
]
