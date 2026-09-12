export const data = {
  name: "SHEENA U",
  role: "AI & Cloud Systems Engineer | Full-Stack Developer",
  resume: "./assets/resume.pdf",
  gamePath: [
    { "Dino": "./games/dino/dino.html" },
    { "Pacman": "./games/pacman/pacman.html" },
    { "Tetris": "./games/tetris/tetris.html" }
  ],
  images: {
    profile: "./assets/profile.svg",
    hero: "./assets/profile.svg"
  },
  contact: {
    email: "sheenaumar05@gmail.com",
    phone: "+91 6381004147",
    location: "Chennai, India",
    github: "https://github.com/sheena005",
    linkedin: "https://www.linkedin.com/in/sheena-u",
    instagram: ""
  },
  about: "Computer Science & Data Science dual-track engineer studying at Madras Institute of Technology (Anna University) and IIT Madras. I specialize in architecting enterprise Agentic AI platforms, Model Context Protocol (MCP) integrations, high-availability distributed GPU computing infrastructure, and cloud-native systems. Experienced in production LLM pipelines, container orchestration, and full-stack software development with a proven focus on building resilient, scalable, and intelligent applications.",
  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Madras Institute of Technology (MIT), Anna University",
      period: "2023 – 2027",
      description: "Chennai, India • CGPA: 8.52/10.00"
    },
    {
      degree: "B.S. Data Science and Applications",
      institution: "Indian Institute of Technology Madras (IIT Madras)",
      period: "2023 – Present",
      description: "Online / Hybrid • CGPA: 7.02/10.00"
    }
  ],
  experience: [
    {
      role: "Data Science Intern",
      company: "Dover Corporation",
      period: "May 2026 – July 2026",
      description: "Worked with the Data Analytics team to develop enterprise AI solutions for engineering, marketing, and service operations. Built production-ready LLM applications and contributed to enterprise AI adoption across business workflows with scalable AI deployments, cloud infrastructure, and DevOps practices in Bangalore, India."
    },
    {
      role: "Web Development Intern",
      company: "Novitech",
      period: "May 2025 – June 2025",
      description: "Developed responsive full-stack web applications and implemented new features for client projects. Collaborated with developers to integrate backend APIs, optimize UI performance, and resolve production issues."
    }
  ],
  skills: [
    "Java", "Python", "C++", "JavaScript",
    "LangChain", "RAG", "FAISS", "MCP Servers", "Azure OpenAI",
    "FastAPI", "Spring Boot", "React.js", "Node.js", "Express.js",
    "Docker", "Kubernetes", "Docker Swarm", "GlusterFS", "Prometheus", "Grafana", "AWS CloudWatch",
    "PostgreSQL", "MongoDB", "Firebase Firestore",
    "Git", "GitHub", "JupyterHub", "Portainer", "Postman"
  ],
  skillCategories: [
    {
      title: "AI & Machine Learning",
      icon: "cpu",
      items: ["LangChain", "Retrieval-Augmented Generation", "FAISS", "MCP Servers", "Azure OpenAI", "LightGBM", "Isolation Forest"]
    },
    {
      title: "Cloud & Distributed Systems",
      icon: "server",
      items: ["Docker", "Kubernetes", "Docker Swarm", "GlusterFS", "Prometheus", "Grafana", "AWS CloudWatch", "Portainer"]
    },
    {
      title: "Languages & Frameworks",
      icon: "layers",
      items: ["Python", "Java", "C++", "JavaScript", "FastAPI", "Spring Boot", "React.js", "Node.js", "Express.js"]
    },
    {
      title: "Databases & Tooling",
      icon: "database",
      items: ["PostgreSQL", "MongoDB", "Firebase Firestore", "Git", "GitHub", "JupyterHub", "Postman"]
    }
  ],
  interests: ["Agentic AI", "Distributed Systems", "Cloud Orchestration", "Open Source", "Autonomous Systems"],
  certificates: [
    {
      title: "AI Fundamentals",
      issuer: "IBM",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
      desc: "Authorized credential in AI principles, generative models, neural architectures, and enterprise AI deployment by IBM."
    },
    {
      title: "Cloud Cybersecurity Professional",
      issuer: "GOOGLE",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      desc: "Comprehensive cloud network defense, SIEM tools, zero-trust security postures, and compliance policies by Google."
    },
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      desc: "Foundational training in scientific Python, vector operations, Pandas data wrangling, and statistical computing."
    },
    {
      title: "Deep Learning",
      issuer: "NPTEL",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
      desc: "Rigorous coursework covering neural network backpropagation, CNNs, sequence models, and modern deep learning."
    }
  ],
  projects: [
    {
      title: "Enterprise Agentic AI Platform",
      description: "Production-ready Agentic AI platform leveraging LangChain, multi-repo RAG, FAISS vector search, and Model Context Protocol (MCP) tool calling. Integrated with Azure OpenAI and containerized via Docker and Kubernetes.",
      tags: ["MCP", "LangChain", "Azure OpenAI", "FAISS", "RAG", "Docker", "Kubernetes"],
      link: "https://github.com/sheena005",
      detailsLink: "./project_details/agentic-ai.html",
      status: "Completed",
      duration: "May 2026 – July 2026",
      stars: 5
    },
    {
      title: "Distributed GPU Cloud Orchestration Platform",
      description: "High-availability 10-node GPU cluster engineered for machine learning compute. Built with Docker Swarm, GlusterFS distributed storage, FastAPI role-based booking, and Prometheus/Grafana real-time telemetry.",
      tags: ["Docker Swarm", "GlusterFS", "FastAPI", "JupyterHub", "Prometheus", "Grafana", "Portainer"],
      link: "https://github.com/sheena005",
      detailsLink: "./project_details/gpu-orchestration.html",
      status: "Completed",
      duration: "Jan 2026 – Apr 2026",
      stars: 5
    },
    {
      title: "AI-Powered Cloud FinOps Platform",
      description: "Cloud resource cost optimization engine monitoring live AWS CloudWatch metrics. Employs Isolation Forest for anomalous spending spikes and LightGBM for cost forecasting and capacity recommendations.",
      tags: ["AWS CloudWatch", "LightGBM", "Isolation Forest", "FastAPI", "Python", "Data Science"],
      link: "https://github.com/sheena005",
      detailsLink: "./project_details/cloud-finops.html",
      status: "Completed",
      duration: "Oct 2025 – Dec 2025",
      stars: 5
    }
  ]
};