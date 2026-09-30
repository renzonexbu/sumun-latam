"use client";

import Image from "next/image";
import { useRef } from "react";

import styles from "./proposito.module.css";
import { useAlLlegar } from "./useAlLlegar";

export function PropositoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // La imagen entra desde la izquierda cuando la sección aparece en pantalla.
  useAlLlegar(sectionRef, (section) => {
    section.dataset.revealed = "true";
  }, 0.25);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="proposito-title"
    >
      <Image
        className={styles.imagen}
        src="/images/identidad/proposito.png"
        width={1954}
        height={1404}
        sizes="59vw"
        alt="Estudiantes, docentes y familias sonriendo dentro de una cinta de vidrio"
      />

      <div className={styles.texts}>
        <p className={styles.eyebrow}>¿Qué queremos lograr?</p>
        <h2 id="proposito-title" className={styles.title}>
          Nuestro propósito
        </h2>
        <p className={styles.lead}>
          Lideramos la revolución educativa para que cada estudiante alcance su
          máximo nivel de logro y crezca hacia su mejor versión.
        </p>
      </div>
    </section>
  );
}
