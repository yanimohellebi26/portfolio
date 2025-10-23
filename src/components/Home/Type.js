import React from "react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

function Type() {
  const { language } = useLanguage();
  const titles = translations[language].home.titles;

  return (
    <Typewriter
      key={language}
      options={{
        strings: titles,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
