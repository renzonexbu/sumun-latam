import { type RefObject, useEffect } from "react";

// Ejecuta `accion` una sola vez, cuando el elemento entra en pantalla.
export function useAlLlegar(
  ref: RefObject<HTMLElement | null>,
  accion: (el: HTMLElement) => void,
  threshold = 0.35,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          accion(el);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
