import React, { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const TYPING_DELAY = 110;
const DELETING_DELAY = 45;
const HOLD_DELAY = 1500;
const TRANSITION_DELAY = 400;

function Type({ language: languageOverride }) {
  const { language: contextLanguage } = useLanguage();
  const language = languageOverride || contextLanguage || "en";

  const strings = useMemo(
    () =>
      language === "fr"
        ? [
            "Étudiant en Master IA",
            "Ingénieur R&D IA en Alternance chez Siemens DISW",
            "Développeur Full Stack & IA",
            "Passionné d'IA et de Cybersécurité",
          ]
        : [
            "Master's Student in Artificial Intelligence",
            "AI R&D Engineer Apprentice at Siemens DISW",
            "Full Stack & AI Developer",
            "AI & Cybersecurity Enthusiast",
          ],
    [language]
  );

  const [displayed, setDisplayed] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setStringIndex(0);
    setIsDeleting(false);
  }, [strings]);

  useEffect(() => {
    if (!strings.length) {
      return;
    }

    const currentString = strings[stringIndex % strings.length];
    const currentComplete = displayed === currentString;
    const isEmpty = displayed === "";

    let timeoutId;

    if (currentComplete && !isDeleting) {
      timeoutId = setTimeout(() => setIsDeleting(true), HOLD_DELAY);
    } else if (isEmpty && isDeleting) {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
      }, TRANSITION_DELAY);
    } else {
      timeoutId = setTimeout(() => {
        const nextLength = displayed.length + (isDeleting ? -1 : 1);
        setDisplayed(currentString.slice(0, Math.max(0, nextLength)));
      }, isDeleting ? DELETING_DELAY : TYPING_DELAY);
    }

    return () => clearTimeout(timeoutId);
  }, [displayed, isDeleting, stringIndex, strings]);

  return (
    <span className="flex items-center text-2xl font-semibold text-brand-accent md:text-3xl" aria-live="polite">
      <span className="whitespace-nowrap">{displayed}</span>
      <span
        className="ml-2 inline-block h-6 w-[2px] animate-pulse bg-brand-accent/80"
        aria-hidden="true"
      />
    </span>
  );
}

export default Type;
