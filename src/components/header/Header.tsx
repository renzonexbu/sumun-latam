"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./header.module.css";

const navItems = [
  { label: "Visión del producto", href: "#", hasMenu: true },
  { label: "Conversaciones Sumun", href: "#", hasMenu: true },
  { label: "Nosotros", href: "#", hasMenu: true },
  { label: "Recursos", href: "#", hasMenu: true },
  { label: "Noticias", href: "#", hasMenu: false },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Cierra el menú mobile con Escape y si la pantalla vuelve a ser ancha.
  useEffect(() => {
    if (!open) {
      return;
    }

    const media = window.matchMedia("(min-width: 1101px)");
    const close = () => setOpen(false);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", onKey);
    media.addEventListener("change", close);
    return () => {
      window.removeEventListener("keydown", onKey);
      media.removeEventListener("change", close);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className={styles.logoLink} aria-label="Sumun, inicio">
          {/* Logo de Figma remuestreado a su proporción final (99 × 30.4) a 3x para que se vea nítido. */}
          <img
            className={styles.logo}
            src="/images/header/logo@3x.png"
            alt="Sumun"
            width={99.01}
            height={30.36}
          />
        </Link>

        <nav aria-label="Principal" className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
              {item.hasMenu ? (
                <img
                  src="/images/header/chevron-down.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              ) : null}
            </a>
          ))}
        </nav>

        <a href="#" className={`btn ${styles.demo}`}>
          Demo IA
          <img src="/images/header/ai.svg" alt="" width={24} height={24} />
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={open ? styles.burgerOpen : styles.burger} />
        </button>
      </div>

      <div
        id="menu-mobile"
        className={open ? styles.panelOpen : styles.panel}
        hidden={!open}
      >
        <nav aria-label="Principal (mobile)" className={styles.panelNav}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.panelLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
              {item.hasMenu ? (
                <img
                  src="/images/header/chevron-down.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              ) : null}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className={`btn ${styles.panelDemo}`}
          onClick={() => setOpen(false)}
        >
          Demo IA
          <img src="/images/header/ai.svg" alt="" width={24} height={24} />
        </a>
      </div>
    </header>
  );
}
