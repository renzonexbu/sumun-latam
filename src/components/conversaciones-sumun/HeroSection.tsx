import Image from "next/image";

import styles from "./hero.module.css";

const burbujas = [
  {
    className: styles.cultura,
    title: "Cultura de alto desempeño",
    text: "Inspiramos el cambio y el liderazgo colectivo.",
  },
  {
    className: styles.lectura,
    title: "Lectura crítica en la escuela",
    text: "Formamos lectores críticos capaces de enfrentar la desinformación y los desafíos del mundo digital.",
  },
  {
    className: styles.curricular,
    title: "Inteligencia Curricular",
    text: "Exploramos propuestas centradas en el desarrollo integral y la diversidad.",
  },
];

export function HeroSection() {
  return (
    <section className={styles.section} aria-labelledby="conversaciones-title">
      <div className={styles.texts}>
        <p className={styles.eyebrow}>Un espacio para el diálogo transformador</p>
        {/* Provisorio: va el logo "CONVERSACIONES | SUMUN" (image-10.png, 500 × 41.69). */}
        <h1 id="conversaciones-title" className={styles.logo}>
          Conversaciones | Sumun
        </h1>
        <p className={styles.lead}>
          Conversaciones SUMUN reúne voces expertas de Latinoamérica para
          reflexionar sobre los desafíos de la educación actual y actuar sobre
          el futuro de la educación. Ideas que inspiran a transformar nuestras
          escuelas y liderazgos.
        </p>
      </div>

      <div className={styles.escena} aria-hidden="true">
        <Image
          className={styles.ola}
          src="/images/conversaciones-sumun/ola.png"
          width={1108}
          height={760}
          sizes="85vw"
          alt=""
          priority
        />
        <Image
          className={styles.familia}
          src="/images/conversaciones-sumun/familia.png"
          width={2000}
          height={1612}
          sizes="68vw"
          alt=""
          priority
        />
      </div>

      {burbujas.map((burbuja) => (
        <div key={burbuja.title} className={`${styles.marco} ${burbuja.className}`}>
          <div className={styles.burbuja}>
            <p className={styles.burbujaTitle}>{burbuja.title}</p>
            <p className={styles.burbujaText}>{burbuja.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
