// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications ordered in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-served-as-an-organizing-volunteer-for-the-plate-forme-intelligence-artificielle-pfia-2023-in-strasbourg",
          title: 'Served as an organizing volunteer for the Plate-Forme Intelligence Artificielle (PFIA 2023) in...',
          description: "",
          section: "News",},{id: "news-participated-in-google-research-day-in-paris-see-my-post-here",
          title: 'Participated in Google Research Day in Paris. See my post here.',
          description: "",
          section: "News",},{id: "news-oxford-machine-learning-summer-school-oxml",
          title: 'Oxford Machine Learning Summer School (OxML)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-07-15-oxml-summer-school/";
            },},{id: "news-attended-pfia-2025-in-dijon-participating-in-the-ai-amp-amp-health-workshop-and-the-cap-and-cnia-conferences",
          title: 'Attended PFIA 2025 in Dijon, participating in the “AI &amp;amp;amp; Health” workshop and...',
          description: "",
          section: "News",},{id: "news-visiting-researcher-at-the-university-of-tirana",
          title: 'Visiting Researcher at the University of Tirana',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-05-01-visiting-researcher-tirana/";
            },},{id: "news-held-a-workshop-on-classification-for-students-of-the-information-systems-engineering-programme-at-the-university-of-tirana-code-available-on-github",
          title: 'Held a workshop on Classification for students of the Information Systems Engineering programme...',
          description: "",
          section: "News",},{id: "news-starting-new-position-as-a-lecturer-attaché-temporaire-d-enseignement-et-de-recherche-ater-at-the-epn-05-department-of-the-conservatoire-national-des-arts-et-métiers-cnam",
          title: 'Starting new position as a lecturer (Attaché Temporaire d’Enseignement et de Recherche –...',
          description: "",
          section: "News",},{id: "teachings-machine-learning-workshop-end-to-end-pipeline-amp-medical-classification",
          title: 'Machine Learning Workshop: End-to-End Pipeline &amp;amp; Medical Classification',
          description: "A hands-on engineering workshop focused on building, evaluating, and optimizing a supervised machine learning pipeline for tumor diagnosis using the Breast Cancer Wisconsin dataset.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/ML-Wrokshop/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV-FR.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%68%61%73%73%65%6E.%6D%61%72%72%61%6B%63%68%69@%6C%69%70%6E.%75%6E%69%76-%70%61%72%69%73%31%33.%66%72", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("marrakchighassen.github.io", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=s24TAWQAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-2538-783X", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/marrakchi-ghassen", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Ghassen-Marrakchi/", "_blank");
        },
      },{
        id: 'social-hal',
        title: 'HAL',
        section: 'Socials',
        handler: () => {
          window.open("https://cv.hal.science/ghassen-marrakchi", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MARRAKCHIGhassen", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
