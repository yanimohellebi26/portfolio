import React from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import "./GlobalFuturistic.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const { language } = useLanguage();

  const copy = {
    en: {
      designedBy: "Designed by Yani Mohellebi",
      copyright: `Copyright © ${year} YM`,
    },
    fr: {
      designedBy: "Conçu par Yani Mohellebi",
      copyright: `Copyright © ${year} YM`,
    },
  };

  const { designedBy, copyright } = copy[language] || copy.en;
  const socials = [
    {
      href: "https://github.com/yanimohellebi26",
      label: "GitHub",
      icon: <AiFillGithub />,
    },
    {
      href: "https://twitter.com/56740yani",
      label: "Twitter",
      icon: <AiOutlineTwitter />,
    },
    {
      href: "https://www.linkedin.com/in/yani-m/",
      label: "LinkedIn",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://www.instagram.com/yani._.mb",
      label: "Instagram",
      icon: <AiFillInstagram />,
    },
  ];

  return (
    <footer className="relative mt-auto border-t border-white/10 bg-brand-surface/80 backdrop-blur-2xl py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 text-sm text-brand-muted lg:flex-row lg:justify-between lg:px-8">
        <div className="space-y-2 text-center lg:text-left">
          <p className="text-brand-text/90 font-medium">{designedBy}</p>
          <p className="text-brand-text/60">{copyright}</p>
        </div>
        <ul className="flex items-center gap-4">
          {socials.map(({ href, label, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-futuristic"
              >
                <span className="sr-only">{label}</span>
                <span className="relative z-10">{icon}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;