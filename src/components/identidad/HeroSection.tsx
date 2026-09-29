import Image from "next/image";

import styles from "./hero.module.css";

export function HeroSection() {
  return (
    <section className={styles.section} aria-labelledby="identidad-title">
      <div className={styles.texts}>
        <h1 id="identidad-title" className={styles.title}>
          Somos Sumun y nacimos con una convicción poderosa
        </h1>
        <p className={styles.lead}>
          Desafiar los límites de lo posible en la educación para que los
          estudiantes logren ser su mejor versión
        </p>
      </div>

      <Image
        className={styles.senora}
        src="/images/identidad/senora.png"
        width={2000}
        height={1261}
        sizes="65vw"
        alt="Docente sonriendo mientras usa una tablet"
        priority
      />
      {/* El aro va encima de la foto y sobresale hacia la sección siguiente. */}
      <Image
        className={styles.aro}
        src="/images/identidad/aro.png"
        width={2400}
        height={2182}
        sizes="75vw"
        alt=""
        aria-hidden="true"
        priority
      />
    </section>
  );
}
