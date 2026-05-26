export function drawParticles(ctx, particles, delta) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];

    p.x += p.vx * delta * 0.01;
    p.y += p.vy * delta * 0.01;
    p.life -= delta;

    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.life / p.maxLife;

    ctx.fillText(p.text, p.x, p.y);

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  }

  ctx.globalAlpha = 1;
}