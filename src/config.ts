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
    "I bridge the gap between complex mathematical theory and scalable software. Currently a Computer Engineering student at the University of Barcelona, I focus on the intersection of Reinforcement Learning and Financial Markets. Whether I'm optimizing Q-Learning agents to solve State Space problems or building full-stack mobile ecosystems, I thrive on transforming abstract concepts into tangible solutions. With a strong foundation in software engineering and a relentless drive for innovation, I'm eager to contribute to cutting-edge projects that push the boundaries of technology and finance.",
  
  skillGroups: [
    {
      category: "AI & Data Science",
      skills: ["Machine Learning", "Scikit-Learn", "NumPy/Pandas", "Linear Algebra", "Data Structures & Algorithms (DSA)", "Statistical Modeling"]
    },
    {
      category: "Software Engineering",
      skills: ["Python", "Java", "C++", "C", "Android (Java/XML)", "Reactive Programming (RxJava)", "SQLite/Database Design", "Firebase", "Cloudinary", "Git", "Docker"]
    },
    {
      category: "Quantitative Finance",
      skills: ["Algorithmic Trading", "Risk Management", "Technical Analysis", "Alpaca API"]
    }
  ],

  projects: [
    {
      name: "Hybrid Phishing Detector AI",
      description:
        "Developed a dual-layer detection engine using the UCI Phiusiil Phishing URL Dataset, achieving 99.56% accuracy. Combined a Q-Learning agent for state-space pattern memorization with a KNN fallback to classify zero-day URLs.",
      link: "#",
      skills: ["Python", "Reinforcement Learning", "KNN", "Q-Learning", "Scikit-Learn", "Data Discretization"],
    },
    {
      name: "Geospatial Social Review Ecosystem \"CagaUB\"",
      description:
        "Full-stack Android application for real-time location reviews. Implemented RxJava for reactive data handling and integrated Firebase and Cloudinary for scalable backend storage and media management.",
      link: "https://github.com/MalbertMB/geo-review-android-app", 
      skills: ["AndroidXML", "Java", "RxJava", "Google Maps API", "Firebase", "Cloudinary"],
    },
    {
      name: "Volatility-Adjusted Trading Framework (in development)",
      description:
        "Developing an automated trading system utilizing Donchian Channels and ADX as my bachelor's thesis. The framework is designed to evaluate performance through Sharpe Ratio and Average Return per Trade, utilizing Alpaca API for real-time market data and a local SQL caching layer for OHLC and volume data to minimize API calls.",
      link: "https://github.com/MalbertMB/alpaca-donchian-adx-vf-bot",
      skills: ["Python", "Algorithmic Trading", "Risk Management", "Alpaca API", "SQL", "Pandas"],
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
          details: "Built a Multinomial Naive Bayes classifier from scratch. Implemented an adaptation of 'Open N-Grams' to maintain 95% accuracy despite character perturbations and typos.",
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
      title: "Admissions & Health Systems Support",
      companyUrl: "https://hospiolot.com/", 
      dateRange: "Summers 2023 – 2025 (3 Consecutive Tenures)",
      recommendationLink: "./public/recommendation-letter.pdf", 
      bullets: [
        "Utilized SAVAC (Sanitary ERP) to coordinate patient diagnostics (TAC, RX, Analytics) and flow within a high-pressure clinical environment.",
        "Entrusted with GDPR-protected health documentation and medical agendas, ensuring data integrity and patient confidentiality.",
        "Managed reception logistics, coordinating admissions for spontaneous arrivals and ambulance entries.",
        "Demonstrated strong adaptability and resilience by consistently being rehired to support critical hospital infrastructure.",
      ],
    },
    {
      company: "Farmàcia LaSans-Olot (Internship)",
      title: "Pharmaceutical Patient Support & Logistics Assistant",
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
      degree: "Bachelor's Degree in Computer Engineering",
      dateRange: "2023 - 2027 (Expected)",
      status: "155 ECTS Credits Completed",
      averageGrade: "7.43 / 10",
      achievements: [
        "Specialization: Software Architecture, Advanced Data Structures, and Algorithmic Complexity.",
        "Thesis Focus: Development of scalable automated trading systems and SQL-based market data infrastructure.",
        "Consistent focus on the intersection of Quantitative Finance and performant Software Engineering.",
      ],
    },
    {
      school: "Institut Garrotxa (Olot)", // Replace with your school name
      degree: "Scientific & Technological Batxillerat",
      dateRange: "2021 - 2023",
      achievements: [
        "Focused on Mathematics, Physics and other pivotal scientific subjects.",
        "Completed non-compulsory pre-university cycle with an emphasis on engineering foundations."
      ],
    },
  ],

  languages: [
    { name: "Catalan", level: "Native" },
    { name: "Spanish", level: "Native" },
    { name: "English", level: "C1 (Advanced) - Currently Preparing for Certification" }
  ],

};