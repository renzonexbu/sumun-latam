"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import styles from "./articulos.module.css";
import { useAlLlegar } from "./useAlLlegar";

const categorias = ["Ver todo", "Inteligencia curricular", "High tech", "Cultura"];

type Articulo = {
  title: string;
  text: string;
  tags: string[];
  byline: string;
  avatars: number;
  // null: foto pendiente (placeholder gris).
  image: { src: string; width: number; height: number; position: string } | null;
};

const articulos: Articulo[] = [
  {
    title: "Conectar, pensar y educar en tiempos complejos",
    text: "En un entorno global marcado por la incertidumbre y el cambio acelerado, la educación debe preparar a estudiantes capaces de pensar críticamente, actuar con autonomía y adaptarse con sentido. Esta propuesta invita a repensar el rol de la escuela como guía en medio de la complejidad contemporánea.",
    tags: ["Inteligencia curricular"],
    byline: "Renato Operetti",
    avatars: 1,
    image: { src: "/images/conversaciones-sumun/nota-conectar.jpg", width: 1100, height: 618, position: "60% 30%" },
  },
  {
    title: "Educación Glocal: entre lo local y lo global",
    text: "Frente a un mundo hiperconectado, surge el desafío de educar personas con mirada global pero firmemente ancladas en sus contextos. Este enfoque glocal propone una educación que integra lo tecnológico con lo cultural, y que potencia identidades sólidas en diálogo con el mundo.",
    tags: ["Inteligencia curricular", "Maestros"],
    byline: "Renato Operetti",
    avatars: 1,
    image: { src: "/images/conversaciones-sumun/nota-glocal.jpg", width: 900, height: 600, position: "75% 100%" },
  },
  {
    title: "La escuela como casa y mundo: resignificando el sentido",
    text: "Más que un lugar de instrucción, la escuela puede ser hogar, comunidad y punto de partida para el cambio. Esta visión invita a transformar la escuela en un espacio significativo, donde habitar, aprender y construir juntos nuevas formas de vivir y convivir.",
    tags: ["Inteligencia curricular", "Maestros"],
    byline: "Renato Operetti",
    avatars: 1,
    image: null,
  },
  {
    title: "La cultura como suelo del aprendizaje",
    text: "En esta Conversación SUMUN, el filósofo y pedagogo Gregorio Luri reflexiona sobre la cultura como el suelo donde arraiga la educación: un espacio donde los saberes no solo se adquieren, sino que se heredan y se reinterpretan.",
    tags: ["Cultura"],
    byline: "Gregorio Luri | Ernesto Núñez",
    avatars: 2,
    image: { src: "/images/conversaciones-sumun/nota-cultura.jpg", width: 1800, height: 1013, position: "30% 100%" },
  },
  {
    title: "¿Cómo la tecnología impulsa los procesos en la escuela?",
    text: "En el marco del IX Encuentro Nacional de Educación Privada, Richard Culatta —experto en innovación educativa y CEO de ISTE— comparte una visión poderosa sobre el impacto real de la tecnología en las escuelas. Una ponencia que invita a replantear su uso más allá de lo digital, enfocándose en cómo puede transformar los procesos de enseñanza, aprendizaje y liderazgo.",
    tags: ["High tech"],
    byline: "Richard Culatta",
    avatars: 1,
    image: null,
  },
];

export function ArticulosSection() {
  const [activa, setActiva] = useState("Ver todo");
  const sectionRef = useRef<HTMLElement>(null);

  // Revela la sección (una vez) cuando entra en pantalla.
  useAlLlegar(sectionRef, (section) => {
    section.dataset.revealed = "true";
  }, 0.15);
  const visibles =
    activa === "Ver todo" ? articulos : articulos.filter((a) => a.tags.includes(activa));

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-label="Artículos de Conversaciones Sumun">
      <div className={styles.content}>
        <div className={styles.tabs} role="tablist">
          {categorias.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={c === activa}
              className={c === activa ? styles.tabActive : styles.tab}
              onClick={() => setActiva(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div key={activa} className={styles.grid} role="tabpanel">
          {visibles.map((a, i) => (
            <article
              key={a.title}
              className={styles.card}
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className={styles.media}>
                {a.image ? (
                  <Image
                    src={a.image.src}
                    width={a.image.width}
                    height={a.image.height}
                    sizes="(min-width: 1240px) 362px, (min-width: 800px) 45vw, 100vw"
                    style={{ objectPosition: a.image.position }}
                    alt=""
                  />
                ) : null}
              </div>
              <div className={styles.cuerpo}>
                <div className={styles.tags}>
                  {a.tags.map((t) => (
                    <span key={t} className={t === "Maestros" ? styles.tagAzul : styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.text}>{a.text}</p>
                <div className={styles.meta}>
                  <div className={styles.avatares}>
                    {/* Pendiente: fotos de avatar de los autores. */}
                    {Array.from({ length: a.avatars }, (_, i) => (
                      <span key={i} className={styles.avatar} aria-hidden="true" />
                    ))}
                  </div>
                  <div>
                    <p className={styles.byline}>{a.byline}</p>
                    <p className={styles.fecha}>
                      11 Jan 2022 <span aria-hidden="true">•</span> 5 min
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
