export function renderShop(state, api) {

  const shopList =
    document.getElementById("shop-list");

  if (!shopList) return;

  const caomhans =
    state?.caomhans || [];

  shopList.innerHTML = "";

  caomhans.forEach((c) => {

    const item =
      document.createElement("div");

    item.className = "shop-item";

    item.innerHTML = `
      <h3>${c.name}</h3>

      <p>
        ${c.incomePerSecond}/sec
      </p>

      <p>
        Cost: ${c.currentCost}
      </p>

      <button>
        Buy
      </button>
    `;

    item
      .querySelector("button")
      .addEventListener(
        "click",
        async () => {

          const result =
            await api.buyCaomhan(c.id);

          state.set(result.gameState);
        }
      );

    shopList.appendChild(item);
  });
}