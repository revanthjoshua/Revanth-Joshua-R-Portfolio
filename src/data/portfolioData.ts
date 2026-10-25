import {
  NavigationItem,
  SkillItem,
  SkillGroup,
  ProjectItem,
  ExperienceItem,
  EducationItem,
  HackathonItem,
  CertificationItem,
  AccomplishmentItem,
  ContactDetails,
} from '../types/portfolio';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'hero', label: 'Home', href: '#hero', number: '00' },
  { id: 'about', label: 'About', href: '#about', number: '01' },
  { id: 'skills', label: 'Skills', href: '#skills', number: '02' },
  { id: 'projects', label: 'Projects', href: '#projects', number: '03' },
  { id: 'experience', label: 'Experience', href: '#experience', number: '04' },
  { id: 'education', label: 'Education', href: '#education', number: '05' },
  { id: 'hackathons', label: 'Hackathons', href: '#hackathons', number: '06' },
  { id: 'certifications', label: 'Certifications', href: '#certifications', number: '07' },
  { id: 'achievements', label: 'Achievements', href: '#achievements', number: '08' },
  { id: 'contact', label: 'Contact', href: '#contact', number: '09' },
];

export const PERSONAL_INFO = {
  name: 'Revanth Joshua R',
  shortName: 'Joshua',
  preferredCall: 'Joshua',
  title: 'Full-Stack Web Developer & Data Analyst',
  roles: ['Full-Stack Web Developer', 'Data Analyst', 'Computer Science Undergrad'],
  technicalInterests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Software Engineering',
    'Business Intelligence',
  ],
  location: 'Coimbatore, Tamil Nadu, India',
  university: 'SNS College of Engineering, Coimbatore',
  degree: 'B.E. Computer Science and Technology',
  currentYear: 'Third Year (Batch 2024–2028)',
  cgpa: '8.00 CGPA',
  volleyball: 'Represented India at the ISF Beach Volleyball Championship in Italy (2019)',
  leetcodeStats: '199 LeetCode Problems Solved (Java) · 50 Days Badge 2025',
  introHeadline: "Hi, I'm Joshua.",
  introLead:
    "I build modern web applications, analyze complex datasets, and develop practical AI systems that turn real-world data into clear decisions. Currently in my third year of Computer Science and Technology at SNS College of Engineering.",
  narrative: [
    "I'm an undergraduate in Computer Science and Technology at SNS College of Engineering, Coimbatore, working at the convergence of full-stack engineering and data analytics. Through hands-on internships—including frontend development at M8 IT Solutions and a 3-month Data Analytics internship at Next Gen Edu Tantr—I've focused on building accessible user interfaces, implementing robust backend logic, and extracting actionable intelligence from business metrics.",
    "Beyond software engineering, high-performance competitive athletics shaped my character and focus. In 2019, I had the honor of representing India at the ISF Beach Volleyball Championship in Italy. Competing at an international level instilled enduring discipline, resilience under pressure, and a team-first mindset that directly anchors my approach to software architecture and problem-solving.",
  ],
  focusText:
    'Currently advancing DATALYZE (an AI-powered KPI analysis & decision intelligence platform), building reliable full-stack applications, and exploring practical machine learning systems.',
};

export const VERIFIED_SKILLS: SkillItem[] = [
  // Frontend
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Responsive Web Design', category: 'frontend' },

  // Backend
  { name: 'Python', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Node.js', category: 'backend' },

  // Programming
  { name: 'Java (OOP)', category: 'programming' },
  { name: 'Python', category: 'programming' },
  { name: 'C Language', category: 'programming' },
  { name: 'TypeScript', category: 'programming' },

  // Data Analytics
  { name: 'Pandas', category: 'data' },
  { name: 'NumPy', category: 'data' },
  { name: 'SQL', category: 'data' },
  { name: 'Microsoft Excel', category: 'data' },
  { name: 'Data Cleaning', category: 'data' },
  { name: 'Data Visualization', category: 'data' },
  { name: 'KPI Analysis', category: 'data' },
  { name: 'Forecasting Logic', category: 'data' },

  // Databases
  { name: 'PostgreSQL', category: 'database' },
  { name: 'SQLite', category: 'database' },

  // AI / ML
  { name: 'Model Integration', category: 'ai_ml' },
  { name: 'RAG Architecture', category: 'ai_ml' },
  { name: 'FAISS Vector Search', category: 'ai_ml' },
  { name: 'sentence-transformers', category: 'ai_ml' },
  { name: 'Ollama (Local LLMs)', category: 'ai_ml' },
  { name: 'Introductory ML', category: 'ai_ml' },

  // Tools & Platforms
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
  { name: 'Streamlit', category: 'tools' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend Development',
    category: 'frontend',
    description: 'Crafting clean, accessible, and responsive user interfaces with modern component architectures.',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Tailwind CSS', 'Responsive Web Design'],
  },
  {
    title: 'Backend Engineering',
    category: 'backend',
    description: 'Constructing performant REST APIs, serverless endpoints, and modular backend application logic.',
    skills: ['Python', 'FastAPI', 'REST APIs', 'Node.js', 'API Proxying & Auth'],
  },
  {
    title: 'Core Programming',
    category: 'programming',
    description: 'Object-oriented programming, data structures, and algorithmic logic (199+ LeetCode problems solved).',
    skills: ['Java (Object-Oriented)', 'Python (Scripting & Systems)', 'C Programming', 'TypeScript'],
  },
  {
    title: 'Data Analytics & BI',
    category: 'data',
    description: 'Transforming multidimensional business datasets into structured insights, trends, and KPI calculations.',
    skills: ['Python', 'Pandas & NumPy', 'SQL Queries', 'Microsoft Excel', 'Data Cleaning', 'Data Visualization', 'KPI Analysis', 'Foundational Forecasting'],
  },
  {
    title: 'Databases & Storage',
    category: 'database',
    description: 'Relational data modeling, schema migrations, and transactional data isolation.',
    skills: ['PostgreSQL (Row-Level Security)', 'SQLite (Local Development)', 'Relational Schema Design'],
  },
  {
    title: 'Applied AI & Retrieval',
    category: 'ai_ml',
    description: 'Integrating language models, vector indexes, and semantic search into functional user tools.',
    skills: ['Model Integration', 'Retrieval-Augmented Generation (RAG)', 'FAISS Vector Index', 'sentence-transformers', 'Ollama Local AI'],
  },
  {
    title: 'Tools & Workflows',
    category: 'tools',
    description: 'Industry-standard version control, cloud deployment pipelines, and developer environments.',
    skills: ['Git & GitHub', 'VS Code', 'Vercel Deployment', 'Streamlit', 'Vite & Modern Tooling'],
  },
];

export const PROJECTS: ProjectItem[] = [
  // 1. Featured Real Project
  {
    id: 'datalyze',
    title: 'DATALYZE',
    subtitle: 'AI-Powered KPI Analysis & Decision Intelligence Platform',
    category: 'Enterprise SaaS & Analytics',
    period: 'Active Implementation · ICET 2026 Presentation',
    status: 'Active Implementation',
    featured: true,
    description:
      'An enterprise-grade business intelligence and decision intelligence platform engineered around the complete 18-step Data Analyst workflow: (1) Understand Problem, (2) Collect Data, (3) Clean Data, (4) Transform Data, (5) Explore Data, (6) Define KPIs, (7) Analyze Data, (8) Analyze Trends, (9) Detect Problems, (10) Find Root Causes, (11) Apply Statistics, (12) Create Visualizations, (13) Build Dashboards, (14) Generate Insights, (15) Make Recommendations, (16) Produce Reports, (17) Communicate with Stakeholders, and (18) Monitor Results.',
    workflowStages: [
      '1. Understand Problem',
      '2. Collect Data',
      '3. Clean Data',
      '4. Transform Data',
      '5. Explore Data',
      '6. Define KPIs',
      '7. Analyze Data',
      '8. Analyze Trends',
      '9. Detect Problems',
      '10. Find Root Causes',
      '11. Apply Statistics',
      '12. Create Visualizations',
      '13. Build Dashboards',
      '14. Generate Insights',
      '15. Make Recommendations',
      '16. Produce Reports',
      '17. Communicate with Stakeholders',
      '18. Monitor Results',
    ],
    takeaways: [
      'Engineered end-to-end 18-stage analytical pipeline from problem scoping to continuous KPI monitoring',
      'Implemented automated anomaly detection using historical baseline spreads and contribution percentage ranking',
      'Constructed honest forecasting routines with explicit uncertainty bounds and action recommendation logic',
      'Integrated Joshuaa / Noah dataset assistant for grounded natural language business query evaluation',
      'Presented research framework at the International Conference ICET 2026 (SNS College of Engineering)',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'PostgreSQL', 'SQLite', 'Pandas', 'NumPy'],
    image: '/projects/cloudmend-system-architecture.png',
    linkText: 'View Repository',
    url: 'https://github.com/revanthjoshua',
    evidenceNotes: 'Verified active codebase on desktop; comprehensive specification in Final Datalyze.docx; ICET 2026 conference presentation slides.',
  },
  // 2. Featured Real Project
  {
    id: 'noir-nectar',
    title: 'Noir & Nectar',
    subtitle: 'Michelin-Calibre Restaurant Website Prototype',
    category: 'Luxury Brand & Web Experience',
    period: 'Bespoke Editorial Web Experience',
    status: 'Active Implementation',
    featured: true,
    description:
      'An intimate culinary sanctuary website prototype where Michelin-calibre technique meets sensory poetry. Crafted with bespoke editorial typography, refined dark-mode aesthetics, responsive seasonal tasting menus, and an interactive table reservation flow.',
    takeaways: [
      'Crafted bespoke editorial layout with disciplined typographic hierarchy, dark aesthetic contrast, and whitespace rhythm',
      'Engineered interactive table reservation flow and multi-course seasonal tasting menu showcase',
      'Developed fully responsive cross-device layout optimized across mobile, tablet, and desktop viewports',
      'Implemented accessible semantics, custom navigation, and fine-dining brand micro-interactions',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Web Design', 'UI/UX Design'],
    image: '/credentials/localhost_5173_.png',
    linkText: 'View Project',
    url: 'https://github.com/revanthjoshua',
    evidenceNotes: 'Authentic Michelin-calibre dining application screenshot verified in workspace archive.',
  },
  // 3. Featured Real Project
  {
    id: 'ai-smart-inventory',
    title: 'AI Smart Inventory Allocation System',
    subtitle: 'Multi-Warehouse Demand Balancing & Logistics Optimization',
    category: 'Optimization & Machine Learning',
    period: 'INNOVHACK 2026 — Second Place Award',
    status: 'Award Winner',
    featured: true,
    description:
      'An AI-assisted warehouse allocation and logistics optimization system developed for INNOVHACK 2026 with teammates Mugesh Raj, Selva Kumar N, and Praneesh Viswanath. Covers warehouse selection, demand forecasting, inventory availability monitoring, delivery optimization, logistics cost reduction, and regional stock balancing to prevent localized stockout risks.',
    takeaways: [
      'Secured Second Place at INNOVHACK 2026 hackathon with teammates Mugesh Raj, Selva Kumar N, and Praneesh Viswanath',
      'Formulated mathematical balancing logic across regional warehouse distribution nodes and transfer routes',
      'Designed predictive demand anomaly indicators to alert logistics managers before stockouts occur',
      'Optimized warehouse selection, delivery routes, and stock availability to reduce cross-facility logistics costs',
      'Created an interactive operational dashboard illustrating reallocation routes and cost savings',
    ],
    techStack: ['Python', 'Machine Learning', 'Optimization Algorithms', 'Streamlit', 'Data Analytics'],
    image: '/images/hero-arch.jpg',
    linkText: 'View Hackathon Award',
    url: 'https://github.com/revanthjoshua',
    evidenceNotes: 'Awarded 2nd Place at INNOVHACK 2026; supply chain balancing concept with team.',
  },
  // 4. Additional Verified Project
  {
    id: 'noah-agent',
    title: 'NOAH — Personal Windows AI Agent',
    subtitle: 'Local-Model Desktop Assistant with Structured Memory',
    category: 'Autonomous Agents & Local AI',
    period: 'Personal AI Engineering',
    status: 'Prototype',
    featured: false,
    description:
      'A privacy-centric personal AI assistant built for local Windows environments using Python and local language models served through Ollama. Features local memory retention, file-system interaction, and task automation without cloud dependencies.',
    takeaways: [
      'Engineered modular Python core with isolated memory, plugins, voice, and system automation modules',
      'Integrated local Ollama inference pipeline for zero-cloud latency and complete user privacy',
      'Implemented persistent conversational memory storage to maintain context across execution sessions',
    ],
    techStack: ['Python', 'Ollama', 'Local LLMs', 'Task Automation', 'System Hooks'],
    url: 'https://github.com/revanthjoshua',
    evidenceNotes: 'Local folder structure verified in workspace downloads and Datalyze assistant prototypes.',
  },
  // 5. Additional Verified Project
  {
    id: 'equalicy',
    title: 'Equalicy — Gender Equality Policy Simulation',
    subtitle: 'Virtual Simulation Platform for Gender Equality Policy Evaluation · CAMCEE 5.0',
    category: 'Social Impact & AI Simulation',
    period: 'CAMCEE 5.0 Brilliant Bharath Hackathon 2K26',
    status: 'Prototype',
    featured: false,
    description:
      'A virtual policy-impact simulation platform developed during the intense 24-hour CAMCEE 5.0 Brilliant Bharath Hackathon 2K26 at Jansons Institute of Technology, Coimbatore. Evaluates organizational guidelines, HR manuals, and regulatory policies to detect subtle gender bias and simulate equitable workplace outcomes.',
    takeaways: [
      'Rapidly engineered and deployed full working prototype on the second day of the 24-hour hackathon',
      'Defended technical architecture and ethical model parameters across three rigorous panel review sessions',
      'Developed rule-based and AI-assisted evaluators to analyze policy text for unintentional systemic bias',
      'Generated metric breakdown scores illustrating equitable impact across gender demographics',
      'Gained deep experience in rapid prototyping, UI/UX design, team communication, time management, and iterative panel feedback',
    ],
    techStack: ['Python', 'AI Policy Evaluation', 'Streamlit', 'Data Modeling', 'UI/UX Design'],
    url: 'https://github.com/revanthjoshua',
    evidenceNotes: 'Developed and deployed in 24 hours at CAMCEE 5.0 Brilliant Bharath Hackathon (Jansons Institute of Technology).',
  },
  // 6. Additional Verified Project
  {
    id: 'career-pilot',
    title: 'Career Pilot',
    subtitle: 'AI-Assisted Educational Guidance & Personal Development',
    category: 'Educational Technology',
    period: 'Second-Year Academic Project',
    status: 'Academic Project',
    featured: false,
    description:
      'An academic guidance platform engineered to evaluate student learning velocity and construct personalized study roadmaps. Uses rule-guided evaluation routines and Claude AI integration to suggest daily improvement milestones and track mastery.',
    takeaways: [
      'Designed diagnostic assessment workflow that adapts to individual self-evaluation metrics',
      'Implemented daily milestone tracking with visual progress indicators and task recommendations',
      'Built a clean web interface enabling students to review roadmap suggestions and monitor skills',
    ],
    techStack: ['Python', 'Claude AI / Rule Engine', 'Web Interface', 'Modular Architecture'],
    url: 'https://github.com/revanthjoshua',
    evidenceNotes: 'Second-year academic project documented in legacy portfolio and verified resume.',
  },
  // 7. Additional Verified Project
  {
    id: 'campuslens',
    title: 'CampusLens',
    subtitle: 'RAG Knowledge Assistant for Academic Resources',
    category: 'Applied AI & Semantic Search',
    period: 'Academic & AI Exploration',
    status: 'Active Implementation',
    featured: false,
    description:
      'A document-based knowledge retrieval assistant engineered to answer contextual queries from uploaded academic resources. Utilizes sentence-transformer embeddings with FAISS vector indexing and Google Generative AI to deliver grounded, citation-backed answers without external hallucination.',
    takeaways: [
      'Built automated document chunking and embedding workflows using sentence-transformers',
      'Integrated high-dimensional similarity retrieval over indexed documents using FAISS',
      'Engineered contextual prompt synthesis with Google Generative AI for precise, grounded answers',
      'Developed an interactive Streamlit application with intuitive document upload and search monitoring',
    ],
    techStack: ['Python', 'Streamlit', 'sentence-transformers', 'FAISS', 'Google Generative AI', 'Vector Retrieval'],
    image: '/images/hero-tech-workspace.jpg',
    linkText: 'View Project',
    url: 'https://github.com/revanthjoshua',
    evidenceNotes: 'Document-grounded RAG assistant architecture using Streamlit, FAISS, and Gemini.',
  },
  // 8. Additional Verified Project
  {
    id: 'vinted-prototype',
    title: 'Vinted — Second-Hand E-Commerce App',
    subtitle: 'Sustainable Pre-Owned Fashion Mobile Marketplace',
    category: 'Mobile Prototyping',
    period: 'Mobile Product Exploration',
    status: 'Prototype',
    featured: false,
    description:
      'Designed a mobile marketplace prototype for buying and selling second-hand clothing to promote circular fashion sustainability. Built using FlutterFlow to test catalog discovery, structured listing flows, and search filters.',
    takeaways: [
      'Mapped circular fashion buyer and seller user journeys from listing to purchase',
      'Structured catalog navigation with multi-attribute filtering and responsive card layouts',
      'Engineered high-fidelity interactive prototype in FlutterFlow',
    ],
    techStack: ['FlutterFlow', 'Mobile Prototyping', 'Product Design', 'E-Commerce Logic'],
    url: 'https://github.com/revanthjoshua',
    evidenceNotes: 'Documented in legacy portfolio and verified resume.',
  },
  // 9. Additional Verified Project
  {
    id: 'ai-medical-platform',
    title: 'AI Hospital Platform (CloudMend / ThrivelTech)',
    subtitle: 'Intelligent Healthcare Assistance & Patient Support',
    category: 'Healthcare AI & Cloud Security',
    period: 'ThrivelTech Project · Active Project Work',
    status: 'Prototype',
    featured: false,
    description:
      'An AI-powered intelligent hospital assistance platform developed as active software engineering project work for ThrivelTech (not an internship). Features patient guidance, medical FAQ triage responses, bed and resource allocation simulation, and secure cloud healthcare dataset handling.',
    takeaways: [
      'Integrated Google AI Studio API for patient support guidance and triage FAQ navigation',
      'Designed security workspace validating medical dataset integrity and access permissions',
      'Constructed clean, accessible interface tailored for diverse healthcare users and resource balancing',
    ],
    techStack: ['Google AI Studio', 'Python', 'FastAPI', 'React', 'Cloud Security'],
    image: '/projects/cloudmend-large-dataset-ui.png',
    url: 'https://github.com/revanthjoshua',
    evidenceNotes: 'Active project engineering codebase on desktop; CloudMend system architecture and dataset integration.',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'thriveltech',
    role: 'Full-Stack Web Development Intern',
    company: 'ThrivelTech',
    certificate: 'Active Software Engineering Internship',
    period: 'October 2026 – Present · Current Role',
    location: 'Coimbatore, India',
    type: 'Internship',
    description:
      'Currently engaged as a Full-Stack Engineering Intern at ThrivelTech, contributing to production web applications, modern component architectures, client-side performance tuning, and scalable full-stack workflows.',
    responsibilities: [
      'Engineering modular React and TypeScript interface components using modern web tooling and responsive layout principles.',
      'Collaborating on client-facing frontend features, API integration pipelines, and cross-browser performance optimizations.',
      'Participating in sprint reviews, code refactoring sessions, and continuous version-controlled deployments using Git and GitHub.',
      'Applying secure state handling, structured styling standards, and accessible UI patterns across active product modules.',
    ],
  },
  {
    id: 'nextgen-edu-tantr',
    role: 'Data Analytics Internship',
    company: 'Next Gen Edu Tantr (Govt. of India MSME / AICTE recognized)',
    certificate: 'Certificate of Internship Completion',
    period: 'June 10, 2026 – September 10, 2026',
    location: 'Remote / Coimbatore, India',
    type: 'Internship',
    description:
      'Verifies completion of a 3-month comprehensive internship in Data Analytics, focusing on data processing, problem-solving, and analytics industry standards.',
    responsibilities: [
      'Cleaned, structured, and validated multidimensional business datasets using Python and Excel.',
      'Extracted operational insights, metric distributions, and business trends to support decision-making.',
      'Practiced data visualization and report generation adhering to professional industry standards.',
      'Completed comprehensive 3-month curriculum under executive instructor supervision.',
    ],
  },
  {
    id: 'm8-it-solutions',
    role: 'Full Stack Development Internship',
    company: 'M8 IT Solutions Pvt Ltd, Coimbatore',
    certificate: 'Experience / Completion Letter',
    period: 'December 10, 2025 – December 31, 2025',
    location: 'Coimbatore, India',
    type: 'Internship',
    description:
      'Certifies completion of a corporate full-stack development internship involving web development responsibilities and active project contributions.',
    responsibilities: [
      'Built responsive web pages ensuring visual and functional consistency across desktop and mobile screens.',
      'Improved layout responsiveness, typography hierarchy, and DOM interactions.',
      'Utilized Git and GitHub for version control, branch management, and collaborative development.',
      'Deployed applications through Vercel and practiced real-world code organization standards.',
    ],
  },
  {
    id: 'codsoft',
    role: 'Java Programming Internship',
    company: 'CodSoft',
    certificate: 'Certificate of Completion',
    period: 'May 10, 2025 – June 10, 2025',
    location: 'Virtual / Remote',
    type: 'Virtual Internship',
    description:
      'Awarded for completing a 4-week virtual internship covering core Java programming tasks, object-oriented concepts, and practical project deliverables.',
    responsibilities: [
      'Completed targeted Java tasks applying object-oriented principles, modular architecture, and algorithm design.',
      'Wrote algorithms for file handling, user input validation, and structured console applications.',
      'Demonstrated clean code formatting, descriptive naming, and systematic debugging throughout the 4-week tenure.',
    ],
  },
  {
    id: 'internpe',
    role: 'Java Programming Internship',
    company: 'InternPE',
    certificate: 'Internship Completion Certificate',
    period: 'June 23, 2025 – July 9, 2025',
    location: 'Virtual / Remote',
    type: 'Virtual Internship',
    description:
      'Confirms performance as a software intern focusing on Java development, problem-solving, and practical industry workflows.',
    responsibilities: [
      'Developed Java modules focusing on algorithmic problem-solving and structured program logic.',
      'Strengthened object-oriented programming workflows and routine verification under guided mentor standards.',
      'Constructed modular code deliverables aligned with practical industry software practices.',
    ],
  },
  {
    id: 'brainwave-kothagiri',
    role: 'Practical Technical Trainee',
    company: 'Brainwave, Kothagiri',
    period: 'Practical Training',
    location: 'Kothagiri, Nilgiris, India',
    type: 'Practical Training',
    description:
      'Hands-on technical training program focused on basic robotics principles, hardware-software interfacing, and technical workflows.',
    responsibilities: [
      'Gained practical exposure to microcontroller fundamentals and sensor-actuator interfacing.',
      'Executed structured laboratory exercises following guided engineering methodologies.',
      'Collaborated on practical hardware and logic assembly tasks in a technical workshop environment.',
    ],
  },
  {
    id: 'inker-robotics',
    role: 'Technical Observer — Robotics & Automation',
    company: 'Inker Robotics',
    period: 'Industry Immersion',
    location: 'Thrissur, Kerala',
    type: 'Industrial Visit',
    description:
      'Observed industrial robotics implementations, hardware-software integration, and automated assembly workflows during an industry visit.',
    responsibilities: [
      'Studied automation mechanisms, sensor feedback loops, and robotic control software in active operation.',
      'Gained direct perspective on how software systems interact with physical mechanical hardware.',
      'Engaged with automation engineers on real-world industrial robotics applications and safety protocols.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'sns-college',
    institution: 'SNS College of Engineering, Coimbatore',
    qualification: 'B.E. — Computer Science and Technology (Third Year)',
    period: '2024 – Present (Batch 2024–2028)',
    score: 'CGPA: 8.00',
    highlights: [
      'Active undergraduate curriculum covering Data Structures, Web Architectures, DBMS, and Applied Machine Learning.',
      'Presented technical research at national college symposiums (UDHAYAM’25) and ICET 2026.',
      'Balancing high-performance engineering academics with collegiate-level volleyball representation.',
    ],
    image: '/education.jpeg',
  },
  {
    id: 'kumutha-hsc',
    institution: 'Kumutha Matriculation Higher Secondary School',
    qualification: 'Higher Secondary Certificate (HSC — 12th Grade)',
    period: 'Completed in 2024',
    score: '79.1%',
    highlights: [
      'Comprehensive coursework in Mathematics, Physics, Chemistry, and Computer Science.',
      'Active participant in athletic competitions and school academic initiatives.',
    ],
  },
  {
    id: 'kumutha-sslc',
    institution: 'Kumutha Matriculation Higher Secondary School',
    qualification: 'Secondary School Leaving Certificate (SSLC — 10th Grade)',
    period: 'Completed in 2022',
    score: '80.0%',
    highlights: [
      'Graduated with distinction across foundational mathematics, science, and languages.',
      'Represented school in regional sports and athletic championships.',
    ],
  },
];

export const HACKATHONS: HackathonItem[] = [
  {
    id: 'hack-innovhack',
    title: 'INNOVHACK 2k26 – Certificate of Winner',
    issuer: 'Department of CSE, SNS College of Engineering',
    date: 'July 29, 2026',
    recognition: 'Winner, Team Quaprix',
    badge: 'Winner · Team Quaprix',
    description:
      'Awarded as a winner (Team Quaprix) for outstanding innovation, teamwork, and problem-solving in tackling real-world engineering challenges.',
  },
  {
    id: 'hack-code-oclock',
    title: 'CODE O’ CLOCK 2k26 – Certificate of Participation',
    issuer: 'Department of AI & Data Science, Coimbatore Institute of Technology (CIT)',
    date: 'August 21–22, 2026',
    badge: '24-Hour National Hackathon',
    description:
      'Acknowledges participation and hands-on technical contribution in the 24-hour national hackathon CODE O’ CLOCK 2k26 centered on AI and data-driven solutions.',
  },
  {
    id: 'hack-camcee',
    title: 'CAMCEE 5.0 – Brilliant Bharath Hackathon 2K26',
    issuer: 'Jansons Institute of Technology, Coimbatore',
    date: '24-Hour Hackathon',
    badge: 'Hackathon Participation',
    certificateLost: true,
    description:
      '“I had the opportunity to participate in CAMCEE 5.0 – Brilliant Bharath Hackathon 2K26, a 24-hour hackathon conducted by Jansons Institute of Technology, Coimbatore.”',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-python-besant',
    title: 'Python Training – Certificate of Completion',
    issuer: 'Besant Technologies, Chennai',
    date: 'July 20, 2024',
    badge: 'Certificate of Completion',
    verified: true,
    description:
      'Certifies the successful completion of foundational to practical technical training in Python programming.',
  },
  {
    id: 'cert-oracle-ai',
    title: 'OCI Certified AI Foundations Associate – Certificate of Recognition',
    issuer: 'Oracle University',
    date: 'October 28, 2025',
    validUntil: 'October 28, 2027',
    badge: 'Certificate of Recognition',
    verified: true,
    description:
      'An industry credential validating foundational knowledge in Artificial Intelligence, Machine Learning concepts, and Oracle Cloud Infrastructure (OCI) AI services.',
  },
  {
    id: 'cert-anthropic-mcp',
    title: 'Introduction to Model Context Protocol – Certificate of Completion',
    issuer: 'Anthropic',
    date: '2026',
    badge: 'Certificate of Completion',
    verified: true,
    description:
      "Certifies completion of Anthropic's official course on the Model Context Protocol (MCP), covering LLM-to-tool connectivity, agent integration, and standardized context pipelines.",
  },
];

export const ACCOMPLISHMENTS: AccomplishmentItem[] = [
  {
    id: 'ach-volleyball-isf',
    title: 'Beach Volleyball World Schools Championship – Certificate of Participation',
    category: 'International Sports',
    date: 'October 3–10, 2019',
    organization: 'International School Sport Federation (ISF)',
    badge: 'International Sports Participation',
    placement: 'Certificate of Participation',
    description:
      'Recognizes participation in the international ISF Beach Volleyball World Schools Championship held in San Vito Lo Capo (TP), Italy.',
  },
  {
    id: 'ach-innovhack-icet',
    title: 'INNOVHACK 2026 Second Place & ICET 2026 Conference Presentation',
    category: 'Paper Presentation',
    date: '2026',
    organization: 'ICET 2026 International Conference & INNOVHACK 2026',
    badge: 'Award & Conference Presentation',
    placement: 'Second Place (2nd) & Conference Presentation',
    description:
      'Research presented at international conference; award-winning AI inventory allocation algorithms.',
  },
  {
    id: 'ach-udhayam-paper',
    title: 'UDHAYAM’25 Paper Presentation – Certificate of Appreciation',
    category: 'Paper Presentation',
    date: 'March 1, 2025',
    organization: 'KIT – Kalaignarkarunanidhi Institute of Technology, Coimbatore',
    badge: 'Paper Presentation / Recognition',
    placement: 'Certificate of Appreciation',
    description:
      'Commends active participation in the Paper Presentation event representing SNS College of Engineering during the intercollegiate technical and cultural fest UDHAYAM’25.',
  },
  {
    id: 'ach-milestone-map',
    title: 'Professional Journey & Career Portfolio Milestone Map',
    category: 'Career Milestone',
    date: '2025–2026',
    organization: 'Personal Career & Hackathon Portfolio Document',
    badge: 'Personal Portfolio Document',
    isPersonalDocument: true,
    description:
      'An aggregated, verified infographic timeline tracking technical internships, global AI certifications, hackathon victories, and software engineering achievements.',
  },
  {
    id: 'ach-zonal-volleyball',
    title: '3rd Place — College Zonal Volleyball Tournament',
    category: 'Collegiate Athletics',
    date: '2024–2025',
    organization: 'SNS College of Engineering Athletics',
    badge: 'Collegiate Athletics',
    placement: 'Third Place (3rd)',
    description:
      'Secured 3rd place representing SNS College of Engineering in competitive zonal collegiate tournament play.',
  },
  {
    id: 'ach-leetcode-199',
    title: '199 LeetCode Problems Solved (Java) & 50 Days Badge',
    category: 'Coding',
    date: '2025–2026',
    organization: 'LeetCode (Profile: revanthjoshua)',
    badge: 'Algorithmic Consistency',
    placement: '50-Days Badge 2025',
    description:
      'Demonstrated consistent algorithmic discipline with 199 problems solved in Java (48 Easy, 108 Medium, 43 Hard) on LeetCode.',
  },
];

export const CONTACT_DETAILS: ContactDetails = {
  email: 'revanthjoshua77@gmail.com',
  phone: '+91 6369296932',
  linkedin: 'https://www.linkedin.com/in/revanthjoshua',
  github: 'https://github.com/revanthjoshua',
  leetcode: 'https://leetcode.com/u/revanthjoshua/',
  instagram: 'https://instagram.com/revanth_joshua006/',
  facebook: 'https://www.facebook.com/profile.php?id=61567838187393',
  resumeUrl: '/resume.pdf',
  location: 'Coimbatore, Tamil Nadu, India',
  status: 'Open for full-stack development & data analytics opportunities',
};
