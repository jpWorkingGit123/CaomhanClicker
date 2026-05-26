export async function loadComponents() {

  const components = [
    {
      path: "./components/shop.html",
      target: "shop-modal"
    },
    {
      path: "./components/boosterPacks.html",
      target: "packs-modal"
    },
    {
      path: "./components/stickerBook.html",
      target: "stickers-modal"
    },
    {
      path: "./components/hud.html",
      target: "hud-container"
    }
  ];

  for (const component of components) {

    const res =
      await fetch(component.path);

    const html =
      await res.text();

    const target =
      document.getElementById(component.target);

    // SAFE CHECK
    if (!target) {

      console.error(
        `Missing component target: ${component.target}`
      );

      continue;
    }

    target.innerHTML = html;
  }
}