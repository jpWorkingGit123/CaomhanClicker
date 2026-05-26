export function drawPackEffects(ctx, effects, delta) {
  for (let i = effects.length - 1; i >= 0; i--) {
    const e = effects[i];

    e.timer -= delta;

    ctx.fillStyle = e.color;
    ctx.font = "20px Arial";

    ctx.fillText(
      `+ ${e.rarity.toUpperCase()}`,
      e.x,
      e.y
    );

    if (e.timer <= 0) {
      effects.splice(i, 1);
    }
  }
}