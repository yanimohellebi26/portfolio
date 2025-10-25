import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { BsPencilSquare } from "react-icons/bs";
import { useLanguage } from "../context/LanguageContext";
import "./GlobalFuturistic.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const location = useLocation();

  const labels = {
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      resume: "Resume",
      blog: "Blog",
      contact: "Contact",
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      resume: "CV",
      blog: "Blog",
      contact: "Contact",
    },
  };

  const navText = labels[language] || labels.en;

  const links = [
    { id: "home", label: navText.home, icon: AiOutlineHome, to: "/" },
    { id: "about", label: navText.about, icon: AiOutlineUser, to: "/about" },
    {
      id: "projects",
      label: navText.projects,
      icon: AiOutlineFundProjectionScreen,
      to: "/project",
    },
    { id: "resume", label: navText.resume, icon: CgFileDocument, to: "/resume" },
    { id: "blog", label: navText.blog, icon: BsPencilSquare, to: "/blog" },
    { id: "contact", label: navText.contact, icon: AiOutlineUser, to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`navbar-futuristic ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-lg tracking-wide text-white transition hover:text-brand-accent group"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-accent/60 bg-gradient-to-br from-brand-accent/20 to-purple-500/20 backdrop-blur-sm text-base font-semibold text-brand-accent shadow-glow group-hover:shadow-[0_0_30px_rgba(199,112,240,0.5)] transition-all duration-300">
            YM
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.3em] text-brand-text/90 sm:block">
            Portfolio
          </span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {links.map(({ id, label, icon: Icon, to }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={id}
                to={to}
                className={`nav-link-futuristic ${
                  isActive ? "nav-link-active" : ""
                }`}
              >
                <Icon className="h-4 w-4 relative z-10" aria-hidden="true" />
                <span className="relative z-10">{label}</span>
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white shadow-inner transition hover:border-brand-accent/40 hover:bg-brand-accent/10 hover:text-brand-accent md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 transform rounded bg-current transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 transform rounded bg-current transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden px-5 pb-4 transition-all duration-300`}
      >
        <nav className="flex flex-col gap-2">
          {links.map(({ id, label, icon: Icon, to }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={`mobile-${id}`}
                to={to}
                className={`glass-card-futuristic flex items-center gap-3 px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "border-brand-accent/40 bg-brand-accent/15 text-brand-accent"
                    : "text-brand-text/80 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
