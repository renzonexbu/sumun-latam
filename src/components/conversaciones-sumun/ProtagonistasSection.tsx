"use client";

import Image from "next/image";
import { useRef } from "react";

import styles from "./protagonistas.module.css";
import { useAlLlegar } from "./useAlLlegar";

// Fotos exportadas a 2x con su aro (339 × 339 en Figma, sobresale 40px del bloque de 259).
const protagonistas = [
  {
    name: "Gregorio Luri",
    role: "Pedagogo, ensayista, docente y filósofo",
    src: "/images/conversaciones-sumun/gregorio-luri.png",
  },
  {
    name: "Ernesto Núñez",
    role: "Director global de producto e investigación",
    src: "/images/conversaciones-sumun/ernesto-nunez.png",
  },
  {
    name: "Renato Opertti",
    role: "Experto internacional en educación curricular",
    src: "/images/conversaciones-sumun/renato-opertti.png",
  },
  {
    name: "Richard Culatta",
    role: "Director ejecutivo de la Sociedad Internacional de Tecnología en Educación y ASCD",
    src: "/images/conversaciones-sumun/richard-culatta.png",
  },
];

export function ProtagonistasSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Revela la sección (una vez) cuando entra en pantalla.
  useAlLlegar(sectionRef, (section) => {
    section.dataset.revealed = "true";
  }, 0.2);

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="protagonistas-title">
      <div className={styles.intro}>
        <h2 id="protagonistas-title" className={styles.title}>
          Conoce a los protagonistas{" "}
          <span className={styles.accent}>del especial</span>
        </h2>
        <p className={styles.lead}>
          Haz click en cada especialista <b>para saber más.</b>
        </p>
      </div>

      {/* Pendiente: qué se abre al hacer click en cada especialista. */}
      <ul className={styles.lista}>
        {protagonistas.map((p, i) => (
          <li
            key={p.name}
            className={styles.item}
            style={{ "--i": i } as React.CSSProperties}
          >
            <div className={styles.foto}>
              <Image src={p.src} width={678} height={678} sizes="339px" alt={p.name} />
            </div>
            <div className={styles.texts}>
              <p className={styles.name}>{p.name}</p>
              <p className={styles.role}>{p.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
