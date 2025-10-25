import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiLinux,
  SiDocker,
  SiGithub,
  SiGitlab,
  SiJupyter,
  SiAnaconda,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { id: "vscode", icon: <SiVisualstudiocode />, name: "VS Code" },
    { id: "postman", icon: <SiPostman />, name: "Postman" },
    { id: "heroku", icon: <SiHeroku />, name: "Heroku" },
    { id: "linux", icon: <SiLinux />, name: "Linux" },
    { id: "docker", icon: <SiDocker />, name: "Docker" },
    { id: "github", icon: <SiGithub />, name: "GitHub" },
    { id: "gitlab", icon: <SiGitlab />, name: "GitLab" },
    { id: "jupyter", icon: <SiJupyter />, name: "Jupyter" },
    { id: "anaconda", icon: <SiAnaconda />, name: "Anaconda" },
    { id: "vercel", icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {tools.map((tool) => (
        <div
          key={tool.id}
          className="group flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.04] p-6 text-brand-text/80 transition hover:-translate-y-1 hover:border-brand-accent/40 hover:bg-brand-accent/10 hover:text-brand-accent"
        >
          <span className="text-3xl sm:text-4xl" aria-hidden="true">
            {tool.icon}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted/80">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
