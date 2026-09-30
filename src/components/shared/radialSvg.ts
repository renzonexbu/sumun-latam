// Degradados radiales de Figma: se embeben como SVG para respetar su matriz y paradas tal cual.
export function radialSvg(
  w: number,
  h: number,
  matrix: string,
  stops: string,
  opacity = 1,
) {
  const svg = `<svg viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='${opacity}'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(${matrix})'>${stops}</radialGradient></defs></svg>`;
  return `url("data:image/svg+xml;utf8,${svg}")`;
}
