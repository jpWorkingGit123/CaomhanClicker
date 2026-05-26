export function drawCaomhan(ctx, sprite, x, y) {
  const img = new Image();
  img.src = sprite;

  ctx.drawImage(img, x, y, 128, 128);
}