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
  SiPostman,
  SiOcaml,
  SiGraphql,
  SiJira,
  SiConfluence,
} from "react-icons/si";
import { TbBrain, TbChecklist } from "react-icons/tb";

function Techstack() {
  const techs = [
    { id: "python", icon: <SiPython />, name: "Python" },
    { id: "pytorch", icon: <SiPytorch />, name: "PyTorch" },
    { id: "tensorflow", icon: <SiTensorflow />, name: "TensorFlow" },
    { id: "langchain", icon: <TbBrain />, name: "LangChain" },
    { id: "fastapi", icon: <SiFastapi />, name: "FastAPI" },
    { id: "react", icon: <SiReact />, name: "React" },
    { id: "docker", icon: <SiDocker />, name: "Docker" },
    { id: "postgresql", icon: <SiPostgresql />, name: "PostgreSQL" },
    { id: "mongodb", icon: <SiMongodb />, name: "MongoDB" },
    { id: "graphql", icon: <SiGraphql />, name: "GraphQL/Cypher" },
    { id: "pandas", icon: <SiPandas />, name: "Pandas" },
    { id: "postman", icon: <SiPostman />, name: "Postman" },
    { id: "jira", icon: <SiJira />, name: "Jira" },
    { id: "confluence", icon: <SiConfluence />, name: "Confluence" },
    { id: "openproject", icon: <TbChecklist />, name: "OpenProject" },
    { id: "ocaml", icon: <SiOcaml />, name: "OCaml" },
    { id: "javascript", icon: <SiJavascript />, name: "JavaScript" },
    { id: "svelte", icon: <SiSvelte />, name: "Svelte" },
    { id: "mysql", icon: <SiMysql />, name: "MySQL" },
    { id: "c", icon: <SiC />, name: "C" },
    { id: "git", icon: <SiGit />, name: "Git" },
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
