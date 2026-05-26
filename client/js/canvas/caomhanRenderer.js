export function drawCaomhan(ctx, caomhan) {
  const img = new Image();
  img.src = caomhan.sprite;

  ctx.drawImage(
    img,
    caomhan.x,
    caomhan.y,
    128,
    128
  );
}