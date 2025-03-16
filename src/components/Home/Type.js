import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur Logiciel",
          "Étudiant en Informatique",
          "Passionné d'IA et de Cybersécurité",
          "Freelance & Bénévole",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
