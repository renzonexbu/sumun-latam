"use client";

import { ViewTransition } from "react";

/*
 * Envuelve el contenido de cada página: al navegar, la página que sale se desvanece
 * hacia arriba y la que entra aparece desde abajo (estilos en globals.css).
 * Va en cada page.tsx porque los layouts persisten entre navegaciones.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
