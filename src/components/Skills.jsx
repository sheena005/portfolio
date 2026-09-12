import { Cpu, Server, Layers, Database, Code2 } from 'lucide-react';

export const Skills = ({ skillCategories }) => {
  const iconMap = {
    cpu: <Cpu size={20} />,
    server: <Server size={20} />,
    layers: <Layers size={20} />,
    database: <Database size={20} />,
    code: <Code2 size={20} />
  };

  const defaultCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Cpu size={20} />,
      items: ["LangChain", "RAG", "FAISS", "MCP Servers", "Azure OpenAI", "LightGBM", "Isolation Forest"]
    },
    {
      title: "Cloud & Distributed Systems",
      icon: <Server size={20} />,
      items: ["Docker", "Kubernetes", "Docker Swarm", "GlusterFS", "Prometheus", "Grafana", "AWS CloudWatch", "Portainer"]
    },
    {
      title: "Languages & Frameworks",
      icon: <Layers size={20} />,
      items: ["Python", "Java", "C++", "JavaScript", "FastAPI", "Spring Boot", "React.js", "Node.js", "Express.js"]
    },
    {
      title: "Databases & Tooling",
      icon: <Database size={20} />,
      items: ["PostgreSQL", "MongoDB", "Firebase Firestore", "Git", "GitHub", "JupyterHub", "Postman"]
    }
  ];

  const categories = skillCategories
    ? skillCategories.map((c) => ({
        ...c,
        icon: iconMap[c.icon] || <Cpu size={20} />
      }))
    : defaultCategories;

  return (
    <>
      <div className="text-center mb-16 space-y-2">
        <h2 className="text-4xl font-extrabold text-text-primary">Technical Arsenal</h2>
        <p className="text-text-muted text-base">Technologies, architectures, and tools I leverage to build scalable systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-bg-secondary border border-border-color rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-xl">
            <div>
              <div className="flex items-center gap-3.5 mb-6 text-text-primary text-left">
                <span className="text-primary flex items-center justify-center bg-primary/10 p-2.5 rounded-lg">{cat.icon}</span>
                <h3 className="text-lg font-bold font-heading">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5 text-left">
                {cat.items.map((skill, sIdx) => (
                  <span key={sIdx} className="font-mono text-xs font-medium bg-bg-tertiary text-text-secondary px-3.5 py-1.5 rounded-lg border border-border-color transition-all duration-200 hover:bg-primary/10 hover:border-primary hover:text-primary hover:scale-105 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
