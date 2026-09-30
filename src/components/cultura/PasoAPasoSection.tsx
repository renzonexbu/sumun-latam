import Image from "next/image";

import styles from "./pasoAPaso.module.css";

// Posiciones de las tarjetas sobre la ola (zigzag del diseño).
const pasos = [
  { n: 1, x: 126, y: 0, text: "Diagnóstico cultural, vivencial e institucional: entendemos y analizamos" },
  { n: 2, x: 384, y: 178, text: "Diseño de estrategia personalizada" },
  { n: 3, x: 642, y: 13, text: "Presentación de acciones concretas y contextualizadas para activar el cambio" },
  { n: 4, x: 900, y: 178, text: "Implementación capa cultural + modelo colmena" },
  { n: 5, x: 1158, y: 13, text: "Formación en liderazgo cultural" },
];

export function PasoAPasoSection() {
  return (
    <section className={styles.section} aria-labelledby="paso-title">
      <div className={styles.stage}>
        <div className={styles.intro}>
          <h2 id="paso-title" className={styles.title}>
            El paso a paso <span className={styles.accent}>para lograrlo</span>
          </h2>
          <p className={styles.lead}>
            Hackeamos la cultura escolar e impulsamos el cambio para generar
            oportunidades de vida.
          </p>
        </div>

        <div className={styles.recorrido}>
          <div className={styles.ola} aria-hidden="true">
            <Image src="/images/propuesta/ola.png" width={4096} height={2215} sizes="2155px" alt="" />
          </div>

          <ol className={styles.pasos}>
            {pasos.map((p) => (
              <li key={p.n} className={styles.paso} style={{ left: p.x, top: p.y }}>
                <span className={styles.numero}>{p.n}</span>
                <p className={styles.texto}>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
