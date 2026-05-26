export function bindStickerBook(state) {
  const grid =
    document.getElementById("sticker-grid");

  state.subscribe((data) => {
    grid.innerHTML = "";

    data.ownedCollectibles.forEach((c) => {
      const div = document.createElement("div");

      div.className = "sticker";

      div.innerHTML = `
        <img src="${c.image}" />
        <p>${c.name}</p>
      `;

      grid.appendChild(div);
    });
  });
}