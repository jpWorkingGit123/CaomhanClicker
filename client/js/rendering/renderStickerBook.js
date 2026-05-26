export function renderStickerBook(state) {

  const grid =
    document.getElementById("sticker-grid");

  if (!grid) return;

  const stickers =
    state?.ownedCollectibles || [];

  grid.innerHTML = "";

  stickers.forEach((sticker) => {

    const el =
      document.createElement("div");

    el.className = `
      sticker-card
      ${sticker.shiny ? "shiny" : ""}
    `;

    el.innerHTML = `
      <img
        src="../stickers/${sticker.image}"
        alt="${sticker.name}"
      >

      <div class="sticker-name">
        ${sticker.name}
      </div>
    `;

    grid.appendChild(el);
  });
}