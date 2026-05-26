async function loadHTML(path) {
  const res = await fetch(path);
  return await res.text();
}

export async function loadComponents() {
  const hud = await loadHTML(
    "../html/components/hud.html"
  );

  const shop = await loadHTML(
    "../html/components/shop.html"
  );

  const packs = await loadHTML(
    "../html/components/boosterPacks.html"
  );

  const stickerBook = await loadHTML(
    "../html/components/stickerBook.html"
  );

  document.getElementById("hud-container").innerHTML =
    hud;

  document.getElementById("shop-container").innerHTML =
    shop;

  document.getElementById(
    "booster-container"
  ).innerHTML = packs;

  document.getElementById(
    "stickerBook-container"
  ).innerHTML = stickerBook;
}