import { canvas, ctx } from "./canvasInit.js";
import { startRenderer } from "./renderer.js";
import { initCanvas } from "./canvasInit.js";

export function startCanvas() {
  initCanvas();
  startRenderer(ctx);
}