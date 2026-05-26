export const canvas = document.getElementById("gameCanvas");
export const ctx = canvas.getContext("2d");

export function initCanvas() {
  resize();

  window.addEventListener("resize", resize);
}

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}