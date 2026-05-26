export function drawClickEffects(ctx, effects, delta) {
  for (let i = effects.length - 1; i >= 0; i--) {
    const e = effects[i];

    e.radius += delta * 0.2;
    e.alpha -= delta * 0.002;

    ctx.beginPath();
    ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);

    ctx.strokeStyle = `rgba(255,255,255,${e.alpha})`;
    ctx.stroke();

    if (e.alpha <= 0) {
      effects.splice(i, 1);
    }
  }
}