export const siteConfig = {
  name: "Albert Marín",
  title: "Software Engineer Student | Software Development & AI & Quantitative Finance Enthusiast",
  description: "Computer Engineering student at the University of Barcelona specializing in Reinforcement Learning, Algorithmic Trading systems, and Full-Stack Engineering.",
  accentColor: "#1d4ed8",
  social: {
    email: "albert.marin.bl@gmail.com",
    linkedin: "https://www.linkedin.com/in/albert-mar%C3%ADn-blasco-b64b2932a/", 
    github: "https://github.com/MalbertMB",
  },
  aboutMe:
    "I am a Computer Engineering student at the University of Barcelona with a strong focus on Deep Learning, Algorithmic Trading, and Software Architecture. I am passionate about applying Artificial Intelligence to solve complex problems, particularly within financial markets. I have hands-on experience training predictive models using PyTorch and Scikit-Learn, managing data pipelines with Pandas and NumPy, and bringing these solutions to life by integrating them with tools like the Alpaca API, Docker, and relational databases. Currently, I am focusing my bachelor's thesis on financial prediction using hybrid TFT-GNN architectures and stochastic risk validation through Monte Carlo simulations.",
    
  skillGroups: [
    {
      category: "Main Languages",
      skills: [
        "Python",
        "Java",
        "C/C++",
        "SQL",
        "Bash"
      ]
    },
    {
      category: "AI & Data Science",
      skills: [
        "Deep Learning (PyTorch)",
        "GNN & Transformers (TFT)",
        "Machine Learning (Scikit-Learn)",
        "NumPy & Pandas",
        "Monte Carlo Simulations",
        "Reinforcement Learning"
      ]
    },
    {
      category: "Development",
      skills: [
        "Android (Java/XML)",
        "Reactive Programming (RxJava)",
        "Docker",
        "Git",
        "Firebase",
        "Alpaca API (Quantitative Systems)",
        "Cloudinary"
      ]
    }
  ],

  projects: [
    {
      name: "Hybrid Phishing Detector AI",
      description:
        "Developed a dual-layer detection engine using the UCI Phiusiil Phishing URL Dataset, achieving 99.56% accuracy. Combined a Q-Learning agent for state-space pattern memorization with a KNN fallback to classify zero-day URLs.",
      link: "https://github.com/MalbertMB/AI-hybrid-phishing-detector",
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
      name: "TFT-GNN Evolutionary Graph Trading System (Bachelor's Thesis)",
      description:
        "Developing an autonomous trading system for my bachelor's thesis that combines deep learning with real-time market infrastructure. The predictive engine uses a hybrid Temporal Fusion Transformer (TFT) and Graph Neural Network (GNN) architecture with a dynamic adjacency matrix to model spatial-temporal market relationships. Integrated with the Alpaca API for live OHLC data and paper trading, the system utilizes fractional differentiation for feature engineering and Monte Carlo simulations for robust risk and maximum drawdown evaluation.",
      link: "https://github.com/MalbertMB/alpaca-donchian-adx-vf-bot", // Pots actualitzar aquest enllaç si crees un repositori nou per a la tesi
      skills: ["Python", "Deep Learning", "GNN", "Transformers (TFT)", "Alpaca API", "Algorithmic Trading", "Monte Carlo Simulations", "Data Science"],
    },
    {
      name: "ML-Market Predictor",
      description:
        "Modular machine learning pipeline for forecasting daily stock prices and simulating trading strategies. It evaluates model accuracy using absolute and percentage errors, and includes a backtesting engine to compare predictive trading ROI against a traditional buy-and-hold approach.",
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
      recommendationLink: "/recommendation-letter.pdf", 
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