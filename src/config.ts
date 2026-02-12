export const siteConfig = {
  name: "Albert Marín",
  title: "Software Engineer Student | Software Development & AI & Quantitative Finance Enthusiast",
  description: "Computer Engineering student at the University of Barcelona specializing in Reinforcement Learning, Algorithmic Trading systems, and Full-Stack Engineering.",
  accentColor: "#1d4ed8",
  social: {
    email: "albert.marin.bl@gmail.com",
    linkedin: "https://linkedin.com/in/your-profile", 
    github: "https://github.com/MalbertMB",
  },
  aboutMe:
    "I bridge the gap between complex mathematical theory and scalable software. Currently a Computer Engineering student at the University of Barcelona, I focus on the intersection of Reinforcement Learning and Financial Markets. Whether I'm optimizing Q-Learning agents to solve State Space problems or building full-stack mobile ecosystems, I thrive on engineering high-performance solutions to non-trivial problems.",
  
  skillGroups: [
    {
      category: "AI & Data Science",
      skills: ["Machine Learning", "Scikit-Learn", "NumPy/Pandas", "Linear Algebra", "Advanced Algorithmics", "Discrete Mathematics"]
    },
    {
      category: "Quantitative Finance",
      skills: ["Algorithmic Trading", "Risk Management", "Technical Analysis", "Alpaca API"]
    },
    {
      category: "Software Engineering",
      skills: ["Python", "Java", "SQL", "C++", "C", "Android (Java/XML)", "Firebase", "Cloudinary", "Git", "Virtual Environments", "Docker"]
    }
  ],

  projects: [
    {
      name: "Hybrid Phishing Detector AI",
      description:
        "Architected a dual-layer security system achieving 99.56% accuracy. Engineered a novel approach to the State Space Explosion problem by combining a Q-Learning agent for pattern memorization with a KNN fallback for zero-day URL states.",
      link: "#",
      skills: ["Python", "Reinforcement Learning", "KNN", "Q-Learning", "Scikit-Learn", "Data Discretization"],
    },
    {
      name: "Geospatial Social Review Ecosystem \"CagaUB\"",
      description:
        "A full-stack Android application for real-time location reviews. Features a robust backend integration using Firebase for data synchronization and Cloudinary for media management. Designed to handle high-concurrency user interactions in a campus environment.",
      link: "#", 
      skills: ["AndroidXML", "Java", "Reactive Programming", "Google Maps API", "Firebase", "Cloudinary"],
    },
    {
      name: "Volatility-Adjusted Trading Framework (Ongoing project)",
      description:
        "Developing an automated trading system (WIP) utilizing Donchian Channels and ADX. The framework is designed to evaluate performance through Sharpe Ratio and Average Return per Trade, utilizing Alpaca API for real-time market data.",
      link: "https://github.com/MalbertMB/alpaca-donchian-adx-vf-bot",
      skills: ["Python", "Algorithmic Trading", "Risk Management", "Alpaca API", "SQL database management", "Pandas"],
    },
    {
      name: "ML-Market Predictor",
      description:
        "Quantitative stock price forecasting engine. Utilizes Mean Absolute Error (MAE) as the primary loss metric to bridge the gap between predicted trends and real-market volatility.",
      link: "https://github.com/MalbertMB/ML-Market-Predictor",
      skills: ["Python", "Deep Learning", "Predictive Analytics", "Alpaca API", "Pandas", "Scikit-Learn"],
    },
    {
      name: "Algorithmic Research: NLP & Recommendation Systems",
      description: "A dual-project exploration into from-scratch probabilistic modeling and high-performance vectorized engines.",
      subProjects: [
        {
          title: "Language Detection via Open N-Grams",
          details: "Built a Multinomial Naive Bayes classifier from scratch. Innovated with 'Open N-Grams' to maintain 95% accuracy despite character perturbations and typos.",
          github: "https://github.com/MalbertMB/open-ngram-language-detector",
        },
        {
          title: "Heuristic User-CF Recommender",
          details: "Engineered a vectorized recommendation engine for the MovieLens 1M dataset. Optimized Euclidean similarity matrices using NumPy broadcasting.",
          github: "https://github.com/MalbertMB/heuristic-user-cf-recommender",
        }
      ],
      skills: ["Python", "NumPy", "Linear Algebra", "Probabilistic Modeling", "Vectorization"],
    },
  ],

  experience: [
    {
      company: "Fundació Hospital d’Olot i Comarcal de la Garrotxa",
      title: "Health Systems & Operations Specialist",
      // Add the company website URL here
      companyUrl: "https://hospiolot.com/", 
      dateRange: "Summers 2023 - 2025",
      // Your recommendation link is already here
      recommendationLink: "./public/recommendation-letter.pdf", 
      bullets: [
        "Orchestrated patient flow and diagnostics (TAC, RX, Analytics) using specialized sanitary ERP software in a high-pressure environment.",
        "Managed the Emergency Reception desk, coordinating admissions and logistics for spontaneous arrivals and ambulance entries.",
        "Handled sensitive GDPR-protected health documentation and medical agendas, ensuring data integrity and patient confidentiality.",
      ],
    },
    {
      company: "Farmàcia Farmàcia LaSans-Olot (Internship)",
      title: "Pharmaceutical Operations Intern",
      // Add the company website URL here (if available)
      companyUrl: "https://farmacialasans.com/", 
      dateRange: "Summer 2022",
      bullets: [
        "Supported pharmaceutical logistics and inventory management as part of a competitive school-to-work program.",
        "Gained early exposure to professional healthcare environments, focusing on precision, regulatory compliance, and patient service.",
      ],
    },
  ],

  education: [
    {
      school: "Universitat de Barcelona (UB)",
      degree: "Bachelor’s Degree in Computer Engineering",
      dateRange: "2022 - 2026 (Expected)",
      status: "155 ECTS Credits Completed",
      averageGrade: "7.43 / 10",
      achievements: [
        "Specialization: Software Architecture, AI, and Advanced Data Structures.",
        "Consistent academic performance with a focus on Algorithmic complexity and Quantitative methods.",
        "Currently developing a thesis-level focus on Reinforcement Learning applications in Finance.",
      ],
    },
  ],
};