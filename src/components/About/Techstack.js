import React from "react";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPytorch,
  SiTensorflow,
  SiFastapi,
  SiDocker,
  SiPostgresql,
  SiPandas,
  SiNodedotjs,
  SiGraphql,
  SiStreamlit,
} from "react-icons/si";
import { TbBrain, TbRobot, TbLink } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";

function Techstack() {
  const techs = [
    { id: "python", icon: <SiPython />, name: "Python" },
    { id: "typescript", icon: <SiTypescript />, name: "TypeScript" },
    { id: "langchain", icon: <TbLink />, name: "LangChain" },
    { id: "langgraph", icon: <TbBrain />, name: "LangGraph" },
    { id: "pytorch", icon: <SiPytorch />, name: "PyTorch" },
    { id: "tensorflow", icon: <SiTensorflow />, name: "TensorFlow" },
    { id: "nodejs", icon: <SiNodedotjs />, name: "Node.js" },
    { id: "react", icon: <SiReact />, name: "React" },
    { id: "fastapi", icon: <SiFastapi />, name: "FastAPI" },
    { id: "streamlit", icon: <SiStreamlit />, name: "Streamlit" },
    { id: "docker", icon: <SiDocker />, name: "Docker" },
    { id: "mcp", icon: <TbRobot />, name: "MCP" },
    { id: "zod", icon: <VscJson />, name: "Zod" },
    { id: "postgresql", icon: <SiPostgresql />, name: "PostgreSQL" },
    { id: "mongodb", icon: <SiMongodb />, name: "MongoDB" },
    { id: "graphql", icon: <SiGraphql />, name: "GraphQL/Cypher" },
    { id: "pandas", icon: <SiPandas />, name: "Pandas" },
    { id: "javascript", icon: <SiJavascript />, name: "JavaScript" },
    { id: "mysql", icon: <SiMysql />, name: "MySQL" },
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
