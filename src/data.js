export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" }
];

export const socialLinks = [
  { href: "https://github.com/madhumitha27V", label: "GitHub" },
  { href: "https://leetcode.com/u/Madhumitha13_V/", label: "LeetCode" },
  { href: "https://www.linkedin.com/in/madhhv/", label: "LinkedIn" },
  { href: "mailto:27madhumitha.v@gmail.com", label: "Email" }
];

export const skillGroups = [
  {
    title: "Primary Skills",
    items: [
      { name: "React.js", value: 75 },
      { name: "Node.js", value: 75 },
      { name: "Express.js", value: 70 },
      { name: "SQL", value: 70 },
      { name: "AI", value: 75 },
      { name: "ML", value: 70 },
      { name: "RAG Pipelines", value: 70 }
    ]
  },
  {
    title: "Stack and Frameworks",
    items: [
      { name: "HTML", value: 95 },
      { name: "CSS", value: 90 },
      { name: "React.js", value: 75 },
      { name: "Node.js", value: 75 },
      { name: "Express.js", value: 70 },
      { name: "Rest API", value: 70 }
    ]
  },
  {
    title: "Database and Tools",
    items: [
      { name: "SQL", value: 70 },
      { name: "Git", value: 90 },
      { name: "GitHub", value: 90 }

    ]
  },
  {
    title: "Core Technologies",
    items: [
      { name: "Data Structures", value: 70 },
      { name: "Algorithms", value: 65 },
      { name: "OOP", value: 70 }]
  }
];

export const projects = [
  {
    title: "Real-Time Traffic Management System",
    category: "ML",
    role: "Computer Vision · Full-stack",
    status: "Patent filed",
    description: "Problem: congested signals slow emergency response. Built a YOLOv8 and OpenCV system that prioritises emergency vehicles and adapts signal timing. Result: clearer lane intelligence and faster response visibility — [X]% improvement to be added.",
    tags: ["YOLOv8", "OpenCV", "Python", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    demo: "#contact",
    github: "https://github.com/madhumitha27V/REAL-TIME-TRAFFIC-MANAGEMENT-SYSTEM-FOR-DYNAMIC-SIGNAL-CONTROL-AND-EMERGENCY-VEHICLE-PRIORITIZATION.git",
    patent: "Patent filed - IP India"
  },
  {
    title: "Dark Pattern Detection on E-Commerce Websites",
    category: "ML",
    role: "ML Engineer",
    status: "Live project",
    description: "Problem: manipulative checkout patterns are hard to spot. Built a fine-tuned DistilBERT classifier, Flask API and Chrome extension for Amazon and Flipkart. Result: 95.91% accuracy and 0.9551 F1-score across five categories.",
    tags: ["Python", "PyTorch", "DistilBERT", "Flask", "Scikit-learn", "MySQL", "Chrome Extension"]
    ,image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    demo: "#contact",
    github: "https://github.com/madhumitha27V"
  },
  {
    title: "Menstrual Wellness Support System",
    category: "Web",
    role: "Full-stack Developer",
    status: "In progress",
    description: "Problem: wellness data is scattered and difficult to understand. Built secure REST APIs, cycle logging, symptom analytics, forecasting and a Gemini chatbot with an offline fallback. Result: one calm dashboard for personal insights — [X] users to add.",
    tags: ["JavaScript", "Node.js", "MySQL", "REST API", "Gemini"],
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    demo: "#contact",
    github: "https://github.com/madhumitha27V"
  },
  {
    title: "Certificate Validator",
    category: "Web",
    role: "Web Developer",
    status: "Built",
    description: "Problem: verifying credentials manually is slow. Built a focused validation flow that makes certificate checks faster and clearer. Result: a simple, reliable experience — [X] validation time to add.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    demo: "#contact",
    github: "https://github.com/madhumitha27V/CERTIFICATE-VALIDATOR"
  },
  {
    title: "Smart Drainage System and Monitoring",
    category: "IoT",
    role: "IoT Developer",
    status: "Built",
    description: "Problem: drainage issues need earlier visibility. Built a monitoring concept with a web interface for timely awareness and system status. Result: a clearer path from sensor signal to action — [X] alerts to add.",
    tags: ["IoT", "Monitoring", "Web Interface"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    demo: "#contact",
    github: "https://github.com/madhumitha27V/SMART-DRAINAGE-SYSTEM-AND-MONITORING-WITH-WEB-INTERFACE"
  },
  {
    title: "LLM Using RAG",
    category: "ML",
    role: "AI Developer",
    status: "Experiment",
    description: "Problem: generic answers miss useful context. Built a retrieval-augmented generation experiment that grounds LLM responses in relevant information. Result: more focused answers from a contextual knowledge flow — [X] benchmark to add.",
    tags: ["LLM", "RAG", "AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    demo: "#contact",
    github: "https://github.com/madhumitha27V/LLM-USING-RAG.git"
  }
];

export const achievements = [
  {
    title: "Published Patent",
    subtitle: "Intellectual Property",
    text: "Real-Time Traffic Management System for Dynamic Signal Control and Emergency Vehicle Prioritization",
    year: "2024"
  },
  {
    title: "Class Representative",
    subtitle: "Leadership",
    text: "Served as Class Representative for one semester in 2nd year, facilitated communication between students and faculty, and coordinated academic initiatives.",
    year: "2024-2025"
  },
  {
    title: "Zenith (2025-2026)",
    subtitle: "Achievement",
    text: "Secured third prize in the Project Presentation event at Zenith, an intra-department event.",
    year: "2025"
  },
  {
    title: "SSN Inter-College Event (2025)",
    subtitle: "Achievement",
    text: "Secured third prize in the Project Presentation competition at SSN College, Chennai",
    year: "2025"
  },
  {
    title: "Techno Fest Department Level",
    subtitle: "Achievement",
    text: "Secured fifth place in the Techno Fest event at the department level.",
    year: "2025"
  }
];

export const education = [
  {
    school: "Kongu Engineering College",
    course: "B.E. Electrical and Electronics Engineering",
    score: "CGPA: 8.03 (till 5th semester)"
  },
  {
    school: "S.S.M. Lakshmi Ammal Matriculation Higher Secondary School",
    course: "HSC",
    score: "80.83%"
  },
  {
    school: "S.S.M. Lakshmi Ammal Matriculation Higher Secondary School",
    course: "SSLC",
    score: "Completed"
  }
];

export const certifications = [
  {
    title: "Microsoft Applied Skills",
    issuer: "Microsoft",
    detail: "Azure AI Language Processing",
    year: "2025"
  },
  {
    title: "Oracle Cloud Infrastructure",
    issuer: "Oracle",
    detail: "AI Foundations Associate",
    year: "2025"
  }
];
