"use client";

import Link from "next/link";
import { useState } from "react";

import { CurricularMockup, HighTechMockup } from "./PilaresMockups";
import styles from "./pilares.module.css";

type Pilar = {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  text: string;
  link: { label: string; href: string };
  mockup: "high-tech" | "curricular" | null;
};

const pilares: Pilar[] = [
  {
    id: "high-tech",
    label: "High Tech",
    title: "Hackeamos el proceso de enseñanza",
    subtitle:
      "Aprendizaje inyectando en su núcleo la tecnología de los datos y la IA.",
    text: "Sumun convierte la IA y la data en las dos turbinas que impulsan el cambio educativo. Las integra como herramientas al servicio del aprendizaje activo, el pensamiento crítico y la resolución de problemas. Desde la planificación docente hasta el desarrollo de habilidades críticas, se trata de una tecnología menos visible, más silenciosa, pero absolutamente esencial para impulsar impactos reales en los resultados educativos.",
    link: { label: "Conocer más sobre High Tech", href: "/high-tech" },
    mockup: "high-tech",
  },
  {
    // Sin diseño en Figma todavía: texto provisorio tomado del pilar "Cultura" del home.
    id: "cultura",
    label: "Cultura de alto desempeño",
    title: "Hackeamos los hábitos para construir cultura",
    text: "Reconocemos los hábitos positivos como parte de un todo, donde el estudiante los asume como una cultura propia y no como una respuesta a un impulso autoritario. Hábitos que llevan a resultados.",
    link: { label: "Conocer más sobre Cultura", href: "/cultura-de-alto-desempeno" },
    mockup: null,
  },
  {
    id: "curricular",
    label: "Inteligencia curricular",
    title:
      "Hackeamos el currículo tradicional para ir más allá del proceso educativo.",
    text: "En Sumun abordamos el currículo como un sistema vivo, guiado por datos y orientado a resultados reales. Nuestro enfoque combina tecnología educativa con métodos pedagógicos eficaces para desarrollar habilidades medibles, desde lo micro hasta lo macro. Con evaluación continua y entornos seguros, ayudamos a que cada estudiante avance con claridad, esfuerzo y dirección.",
    // Así está en Figma (dice "High Tech" también en esta pestaña).
    link: { label: "Conocer más sobre High Tech", href: "#" },
    mockup: "curricular",
  },
];

// En el diseño de la página la pestaña activa es "Inteligencia curricular".
const DEFAULT_ACTIVE = 2;

export function PilaresSection() {
  const [active, setActive] = useState(DEFAULT_ACTIVE);
  const pilar = pilares[active];

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
      return;
    }
    event.preventDefault();
    const delta = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    const next = (active + delta + pilares.length) % pilares.length;
    setActive(next);
    document.getElementById(`pilar-tab-${pilares[next].id}`)?.focus();
  }

  return (
    <section className={styles.section} aria-labelledby="pilares-title">
      <h2 id="pilares-title" className={styles.title}>
        Los pilares fundamentales para hackear la educación
      </h2>

      <div className={styles.card}>
        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Pilares"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
        >
          {pilares.map((item, index) => {
            const isActive = index === active;
            return (
              <button
                key={item.id}
                id={`pilar-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="pilar-panel"
                tabIndex={isActive ? 0 : -1}
                className={isActive ? styles.tabActive : styles.tab}
                onClick={() => setActive(index)}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          key={pilar.id}
          id="pilar-panel"
          role="tabpanel"
          aria-labelledby={`pilar-tab-${pilar.id}`}
          className={pilar.subtitle ? styles.panelConSubtitulo : styles.panel}
        >
          <div className={styles.copy}>
            <div className={styles.heading}>
              <h3 className={styles.panelTitle}>{pilar.title}</h3>
              {pilar.subtitle ? (
                <p className={styles.panelSubtitle}>{pilar.subtitle}</p>
              ) : null}
            </div>
            <p className={styles.panelText}>{pilar.text}</p>
          </div>
          <Link className={styles.link} href={pilar.link.href}>
            {pilar.link.label}
          </Link>
        </div>

        {pilar.mockup ? (
          <div
            key={`${pilar.id}-mockup`}
            className={
              pilar.mockup === "high-tech"
                ? styles.visualHighTech
                : styles.visualCurricular
            }
          >
            {pilar.mockup === "high-tech" ? <HighTechMockup /> : <CurricularMockup />}
          </div>
        ) : null}
      </div>
    </section>
  );
}
