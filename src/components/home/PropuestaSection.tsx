"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./propuesta.module.css";

type Pilar = {
  id: string;
  eyebrow: string;
  title: string;
  text: React.ReactNode;
  // Alto de la línea vertical cuando el pilar está inactivo (valores del diseño).
  lineHeight: number;
};

const pilares: Pilar[] = [
  {
    id: "habitos",
    eyebrow: "Cultura",
    title: "Hábitos",
    text: "Reconocemos los hábitos positivos como parte de un todo, donde el estudiante los asume como una cultura propia y no como una respuesta a un impulso autoritario. Hábitos que llevan a resultados.",
    lineHeight: 267,
  },
  {
    id: "data",
    eyebrow: "High tech",
    title: "Data",
    text: "Hackemos las formas de relacionarnos con la tecnología. Nuestros directores y docentes tienen acceso a algo más que simples datos del desempeño de los estudiantes: tienen como aliado a un sistema de seguimiento de intereses y habilidades que usa la tecnología desde un lado más humano.",
    lineHeight: 267,
  },
  {
    id: "resultados",
    eyebrow: "Inteligencia curricular",
    title: "Resultados",
    text: "No es solo cuestión de un aprendizaje por competencias, apostamos por empoderar al estudiante a través de la metacognición, autoconciencia y autonomía para un aprendizaje más profundo y responsable.",
    lineHeight: 285,
  },
];

export function PropuestaSection() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="propuesta-title">
      <div className={styles.stage}>
        <div className={styles.intro}>
          <h2 id="propuesta-title" className={styles.title}>
            Una propuesta disruptiva impulsada por IA y datos en tiempo real
          </h2>
          <p className={styles.lead}>
            Ofrecemos una experiencia personalizada y adaptada a las necesidades
            de cada estudiante y lograr aprendizajes más profundos, medibles y
            relevantes, que fortalece la cultura institucional y optimiza el
            currículo.
          </p>
        </div>

        <div className={styles.pilares} role="tablist" aria-label="Pilares">
          {pilares.map((pilar, index) => {
            const isActive = index === active;

            return (
              <div
                key={pilar.id}
                className={isActive ? styles.pilarActive : styles.pilar}
              >
                <span
                  className={styles.line}
                  style={{ height: isActive ? 307 : pilar.lineHeight }}
                  aria-hidden="true"
                />
                <div className={styles.pilarBody}>
                  <button
                    type="button"
                    role="tab"
                    id={`pilar-${pilar.id}`}
                    aria-selected={isActive}
                    aria-controls={`pilar-${pilar.id}-panel`}
                    className={styles.pilarHead}
                    onClick={() => setActive(index)}
                  >
                    <span className={styles.eyebrow}>{pilar.eyebrow}</span>
                    <span className={styles.pilarTitle}>{pilar.title}</span>
                  </button>
                  <p
                    id={`pilar-${pilar.id}-panel`}
                    role="tabpanel"
                    aria-labelledby={`pilar-${pilar.id}`}
                    hidden={!isActive}
                    className={styles.pilarText}
                  >
                    {pilar.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.ola} aria-hidden="true" data-parallax="slow">
          <Image
            src="/images/propuesta/ola.png"
            alt=""
            width={4096}
            height={2215}
            sizes="(min-width: 1100px) 173vw, 230vw"
          />
        </div>
      </div>
    </section>
  );
}
