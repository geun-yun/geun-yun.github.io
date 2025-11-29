// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Publications are listed in reversed chronological order by categories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "This page only includes repositories that are directly relevant to my research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "This page lists only public teaching experience, excluding private tutoring.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-early-research",
          title: "Early research",
          description: "A collection of early research works (IB Extended Essay, IB Math IA, simple literature review, etc.)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/early-research/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-am-excited-to-announce-the-launch-of-my-personal-academic-portfolio-website-here-i-will-mainly-share-updates-on-my-research-projects-and-publications",
          title: 'I am excited to announce the launch of my personal academic portfolio website!...',
          description: "",
          section: "News",},{id: "news-i-have-finally-submitted-my-honours-thesis-shield",
          title: 'I have finally submitted my Honours thesis: SHIELD!',
          description: "",
          section: "News",},{id: "news-i-will-be-joining-the-university-of-sydney-from-december-to-february-through-the-vacation-research-internship-program-to-work-on-fair-play-in-machine-learning-tackling-bias-in-data",
          title: 'I will be joining the University of Sydney from December to February through...',
          description: "",
          section: "News",},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-ib-extended-essay-chess-rating-systems",
          title: 'IB Extended Essay: Chess Rating Systems',
          description: "Evaluates Elo vs Glicko for how well ratings reflect chess performance, focusing on expected score, rating deviation, and responsiveness.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ib_ee/";
            },},{id: "projects-ib-mathematics-ia-wheel-of-theodorus",
          title: 'IB Mathematics IA: Wheel of Theodorus',
          description: "Investigates the Wheel of Theodorus, deriving its geometric properties, links to irrational numbers, and approximation to the Archimedean spiral.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ib_ia/";
            },},{id: "projects-research-proposal-amp-literature-review-zero-knowledge-proofs",
          title: 'Research Proposal &amp;amp; Literature Review: Zero-Knowledge Proofs',
          description: "Proposal and review on using zk-SNARK-based zero-knowledge proofs to verify complex actions in decentralised Bayesian games (e.g., poker) without leaking private information.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zkp/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%65%75%6E.%79%75%6E@%61%6E%75.%65%64%75.%61%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/geun-yun", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hyeonggeun-yun-54b3a1197", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0003-3163-2959", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ZBVW_NUAAAAJ", "_blank");
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
