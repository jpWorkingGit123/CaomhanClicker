import { drawParticles } from "./particleSystem.js";
import { drawClickEffects } from "./clickEffects.js";
import { drawPackEffects } from "./packEffects.js";

let lastTime = 0;

const state = {
  particles: [],
  clickEffects: [],
  packEffects: []
};

export function getCanvasState() {
  return state;
}

export function addParticle(p) {
  state.particles.push(p);
}

export function addClickEffect(e) {
  state.clickEffects.push(e);
}

export function addPackEffect(e) {
  state.packEffects.push(e);
}

export function startRenderer(ctx) {
  function loop(timestamp) {
    const delta = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    drawParticles(ctx, state.particles, delta);
    drawClickEffects(ctx, state.clickEffects, delta);
    drawPackEffects(ctx, state.packEffects, delta);

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}