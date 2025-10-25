import React from "react";
import {
  SiC,
  SiPython,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPytorch,
  SiTensorflow,
  SiFastapi,
  SiSvelte,
  SiDocker,
  SiPostgresql,
  SiPandas,
} from "react-icons/si";

function Techstack() {
  const techs = [
    { id: "c", icon: <SiC />, name: "C" },
    { id: "python", icon: <SiPython />, name: "Python" },
    { id: "javascript", icon: <SiJavascript />, name: "JavaScript" },
    { id: "react", icon: <SiReact />, name: "React" },
    { id: "mongodb", icon: <SiMongodb />, name: "MongoDB" },
    { id: "mysql", icon: <SiMysql />, name: "MySQL" },
    { id: "git", icon: <SiGit />, name: "Git" },
    { id: "pytorch", icon: <SiPytorch />, name: "PyTorch" },
    { id: "tensorflow", icon: <SiTensorflow />, name: "TensorFlow" },
    { id: "fastapi", icon: <SiFastapi />, name: "FastAPI" },
    { id: "svelte", icon: <SiSvelte />, name: "Svelte" },
    { id: "docker", icon: <SiDocker />, name: "Docker" },
    { id: "postgresql", icon: <SiPostgresql />, name: "PostgreSQL" },
    { id: "pandas", icon: <SiPandas />, name: "Pandas" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {techs.map((tech) => (
        <div
          key={tech.id}
          className="group flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.04] p-6 text-brand-text/80 transition hover:-translate-y-1 hover:border-brand-accent/40 hover:bg-brand-accent/10 hover:text-brand-accent"
        >
          <span className="text-3xl sm:text-4xl" aria-hidden="true">
            {tech.icon}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted/80">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
