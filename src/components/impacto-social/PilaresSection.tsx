"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "./pilares.module.css";
import { useAlLlegar } from "./useAlLlegar";

// Pendiente: contenido de los pilares 1 y 2 (solo vino "Gobernanza comprometida", el tercero).
const pilares = [
  { title: "Pilar 1 (pendiente)", items: [] as string[] },
  { title: "Pilar 2 (pendiente)", items: [] as string[] },
  {
    title: "Gobernanza comprometida",
    items: [
      "Impulsar los compromisos en materia de ESG (aspectos éticos, sociales y de gobernanza) a nivel internos",
      "Buscar la excelencia ética del cumplimiento y la relación con nuestros grupos de interés",
    ],
  },
];

const INTERVALO = 5000;

export function PilaresSection() {
  const [activo, setActivo] = useState(0);
  const [pausa, setPausa] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useAlLlegar(sectionRef, (section) => {
    section.dataset.revealed = "true";
  }, 0.2);

  // Carrusel automático: avanza cada 5s; se pausa con el mouse encima o el foco adentro.
  useEffect(() => {
    if (pausa || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = window.setTimeout(() => setActivo((i) => (i + 1) % pilares.length), INTERVALO);
    return () => window.clearTimeout(id);
  }, [activo, pausa]);

  const pilar = pilares[activo];

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="pilares-title">
      <div
        className={styles.card}
        onMouseEnter={() => setPausa(true)}
        onMouseLeave={() => setPausa(false)}
        onFocus={() => setPausa(true)}
        onBlur={() => setPausa(false)}
      >
        <div className={styles.media}>
          <Image
            src="/images/impacto-social/pilares-docente.jpg"
            width={1400}
            height={933}
            sizes="915px"
            alt="Docente sonriendo en un aula con estudiantes trabajando detrás"
          />
        </div>

        <div className={styles.content}>
          <h2 id="pilares-title" className={styles.title}>
            Nuestros compromisos y pilares de actuación
          </h2>

          <div key={activo} className={styles.lista} aria-live="polite">
            <p className={styles.pilar}>{pilar.title}</p>
            {pilar.items.map((item) => (
              <p key={item} className={styles.item}>
                <svg className={styles.check} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m5 12 5 5L20 7" />
                </svg>
                {item}
              </p>
            ))}
          </div>

          <div className={styles.puntos}>
            {pilares.map((p, i) => (
              <button
                key={p.title}
                type="button"
                className={i === activo ? styles.puntoActivo : styles.punto}
                aria-label={`Ver pilar ${i + 1}`}
                aria-current={i === activo}
                onClick={() => setActivo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
