export const projectDetailsData = {
  "agentic-ai": {
    subtitle: "Production-grade Agentic AI platform built with LangChain, Azure OpenAI, FAISS vector search, and Model Context Protocol (MCP) tool routing containerized on Kubernetes.",
    images: [],
    metrics: [
      { value: "Sub-500ms", label: "Vector Retrieval Latency" },
      { value: "MCP-First", label: "Dynamic Tool Protocols" },
      { value: "99.9%", label: "Azure OpenAI Uptime" },
      { value: "Zero-Trust", label: "Enterprise Guardrails" }
    ],
    techSpecs: [
      { label: "Core Engine", value: "LangChain / Python 3.11 / FastAPI" },
      { label: "Inference Models", value: "Azure OpenAI (GPT-4o, Embeddings)" },
      { label: "Tool Protocol", value: "Model Context Protocol (MCP)" },
      { label: "Vector Store", value: "FAISS Index with Semantic Chunking" },
      { label: "Orchestration", value: "Docker Microservices & Kubernetes" },
      { label: "Security & Auth", value: "RBAC, Azure AD & Semantic Guardrails" }
    ],
    architectureTitle: "Agentic AI System Architecture",
    architectureNodes: [
      { title: "Client Gateway", desc: "FastAPI REST & WebSocket routing", icon: "monitor" },
      { title: "MCP Tool Registry", desc: "Dynamic tool discovery & invocation", icon: "terminal" },
      { title: "Semantic RAG Engine", desc: "Multi-repo retrieval with FAISS", icon: "database" },
      { title: "Azure OpenAI Engine", desc: "Context synthesis & structured outputs", icon: "cpu" },
      { title: "Enterprise Guardrails", desc: "Validation, audit logging & safety", icon: "shield-check" }
    ],
    narratives: [
      {
        heading: "The Enterprise Context & Tooling Challenge",
        paragraphs: [
          "Modern enterprise teams manage vast, heterogeneous information scattered across multiple code repositories, design specifications, and internal microservices. Standard LLM chatbots fail in these environments because they lack verified codebase context, cannot safely invoke private developer tools, and risk producing hallucinated code.",
          "This platform was engineered to deliver reliable, autonomous Agentic AI capability by combining standard tool protocols with multi-repository retrieval-augmented generation (RAG) and strict enterprise guardrails."
        ]
      },
      {
        heading: "Model Context Protocol (MCP) & Autonomous Tool Calling",
        paragraphs: [
          "To avoid proprietary vendor lock-in and enable seamless extensibility, the architecture is built around the open Model Context Protocol (MCP). Specialized MCP servers expose internal database queries, Git repository search, and enterprise microservices as callable tools.",
          "The autonomous agent leverages LangChain agents to dynamically decide which tool to execute based on user intent, inspect execution logs, and synthesize structured, production-ready solutions."
        ],
        bullets: [
          "Dynamic MCP tool discovery and authentication per user role.",
          "FAISS high-dimensional vector search for semantic codebase and documentation retrieval.",
          "Strict input/output sanitization and policy enforcement preventing prompt injection.",
          "High-throughput streaming completions via Azure OpenAI enterprise tier."
        ]
      },
      {
        heading: "Kubernetes Orchestration & Production Deployment",
        paragraphs: [
          "The system is containerized as decoupled microservices using Docker and orchestrated on Kubernetes. Automated horizontal pod autoscaling ensures smooth performance under concurrent query loads, while distributed caching minimizes redundant LLM embedding queries."
        ]
      }
    ]
  },
  "gpu-orchestration": {
    subtitle: "High-availability 10-node GPU compute cluster featuring role-based reservation, dynamic JupyterHub environments, GlusterFS distributed storage, and Prometheus/Grafana telemetry.",
    images: [],
    metrics: [
      { value: "10 Nodes", label: "Clustered Compute Fabric" },
      { value: "GlusterFS", label: "Distributed Replicated Storage" },
      { value: "Dynamic", label: "JupyterHub Provisioning" },
      { value: "Real-Time", label: "Prometheus & Grafana" }
    ],
    techSpecs: [
      { label: "Cluster Engine", value: "Docker Swarm" },
      { label: "Storage Architecture", value: "GlusterFS Distributed Volumes" },
      { label: "Backend API", value: "FastAPI (Python)" },
      { label: "Interactive IDE", value: "JupyterHub with GPU Passthrough" },
      { label: "Telemetry & Logs", value: "Prometheus & Grafana" },
      { label: "Container Control", value: "Portainer CE & NGINX Reverse Proxy" }
    ],
    architectureTitle: "Cluster Orchestration Pipeline",
    architectureNodes: [
      { title: "Reverse Proxy & SSL", desc: "NGINX SSL termination & load balancing", icon: "shield" },
      { title: "Booking Platform", desc: "FastAPI role-based GPU scheduling", icon: "calendar-check" },
      { title: "JupyterHub Daemon", desc: "Ephemeral notebook instances with GPU passthrough", icon: "monitor" },
      { title: "Swarm GPU Nodes", desc: "Docker Swarm 10-node hardware workers", icon: "server" },
      { title: "GlusterFS Fabric", desc: "Distributed persistent storage volumes", icon: "hard-drive" },
      { title: "Observability Stack", desc: "Prometheus metrics & Grafana dashboards", icon: "bar-chart-2" }
    ],
    narratives: [
      {
        heading: "Centralizing Machine Learning Compute",
        paragraphs: [
          "Machine learning training and deep neural network experiments require high-performance GPU hardware. Without centralized orchestration, researchers and engineers often face idle workstation silos, scheduling conflicts, and data loss across unshared local drives.",
          "This platform designed and deployed a high-availability 10-node GPU cluster to offer researchers self-service, containerized GPU workspaces with dedicated memory and isolated compute."
        ]
      },
      {
        heading: "Distributed Storage & High Availability",
        paragraphs: [
          "Compute nodes are orchestrated via Docker Swarm, providing automatic failover and container reschedule capabilities. Storage across the cluster is unified through a multi-brick GlusterFS distributed file system, ensuring users can access datasets and model checkpoints from any physical node.",
          "A custom FastAPI scheduling service implements role-based slot booking, ensuring fair resource distribution during peak utilization."
        ],
        bullets: [
          "NVIDIA Container Toolkit passthrough for containerized CUDA acceleration.",
          "GlusterFS distributed volume mirroring guaranteeing zero data loss across node failovers.",
          "Role-based authentication and automated slot expiration to eliminate zombie workloads.",
          "Portainer management console for centralized container lifecycle monitoring."
        ]
      },
      {
        heading: "Full-Stack Observability with Prometheus & Grafana",
        paragraphs: [
          "Real-time cluster telemetry is powered by Prometheus node-exporters and NVIDIA GPU metrics collectors. Grafana dashboards visualize GPU temperature, compute utilization, memory pressure, and network throughput with automated alerts for anomalous hardware states."
        ]
      }
    ]
  },
  "cloud-finops": {
    subtitle: "Cloud cost optimization engine monitoring live AWS CloudWatch metrics, detecting anomalous consumption with Isolation Forests, and forecasting expenditure with LightGBM.",
    images: [],
    metrics: [
      { value: "Real-Time", label: "AWS CloudWatch Ingestion" },
      { value: "Isolation Forest", label: "Unsupervised Anomaly Detection" },
      { value: "LightGBM", label: "Predictive Cost Forecasting" },
      { value: "Actionable", label: "FinOps Optimization Insights" }
    ],
    techSpecs: [
      { label: "Metrics Pipeline", value: "AWS CloudWatch API / Boto3" },
      { label: "Anomaly Model", value: "Isolation Forest (scikit-learn)" },
      { label: "Forecasting Engine", value: "LightGBM Gradient Boosting" },
      { label: "Backend Service", value: "FastAPI Microservice" },
      { label: "Analytics Storage", value: "PostgreSQL & TimescaleDB" },
      { label: "Visualization", value: "Interactive React FinOps Dashboard" }
    ],
    architectureTitle: "FinOps Intelligence Pipeline",
    architectureNodes: [
      { title: "CloudWatch Pipeline", desc: "Boto3 telemetry streaming & aggregation", icon: "upload-cloud" },
      { title: "Preprocessing Engine", desc: "Metric normalization & feature extraction", icon: "cpu" },
      { title: "Anomaly Detector", desc: "Isolation Forest unsupervised detector", icon: "shield-check" },
      { title: "Predictive Forecaster", desc: "LightGBM gradient boosting model", icon: "bar-chart-2" },
      { title: "FinOps Dashboard", desc: "Utilization analysis & cost reduction tips", icon: "grid" }
    ],
    narratives: [
      {
        heading: "Mitigating Cloud Cost Overruns & Sprawl",
        paragraphs: [
          "As organizations scale microservices across multi-region cloud infrastructures, cloud bills frequently surge due to unmonitored autoscaling, orphaned EBS volumes, and oversized compute instances. Traditional monthly invoicing discovers cost anomalies weeks after the spike occurred.",
          "The AI-Powered Cloud FinOps Platform addresses this by ingesting live AWS CloudWatch telemetry and running machine learning models to detect runaway consumption patterns in near real-time."
        ]
      },
      {
        heading: "Machine Learning for Anomaly Detection & Forecasting",
        paragraphs: [
          "The engine applies unsupervised Isolation Forests to multi-dimensional cloud metric streams (CPU utilization, network I/O, disk throughput, and API request rates). When anomalous behavior diverges from historical baselines, automated alerts trigger instantly.",
          "For financial planning, a tuned LightGBM model forecasts future monthly expenditures based on trend indicators, seasonal usage cycles, and workload changes."
        ],
        bullets: [
          "Near real-time anomaly detection identifying compute spikes within minutes.",
          "LightGBM predictive regression models outperforming standard ARIMA baselines.",
          "Right-sizing recommendations tailored to underutilized EC2 and RDS instances.",
          "Interactive analytics dashboards providing drill-downs by service and tag."
        ]
      },
      {
        heading: "Executive FinOps Reporting & Continuous Optimization",
        paragraphs: [
          "The platform translates raw technical metrics into strategic business insights. Engineering leads receive tailored recommendations on reserved instance conversions, storage tier transitions, and idle cluster purges, driving measurable cloud ROI."
        ]
      }
    ]
  }
};
