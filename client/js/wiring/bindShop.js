export function bindShop(state, api) {
  const shopList =
    document.getElementById("shop-list");

  function render(data) {
    shopList.innerHTML = "";

    data.caomhans.forEach((c) => {
      const div = document.createElement("div");

      div.className = "shop-item";

      div.innerHTML = `
        <div>
          <h3>${c.name}</h3>
          <p>${c.incomePerSecond}/sec</p>
          <p>Cost: ${c.currentCost}</p>
        </div>
        <button>Buy</button>
      `;

      div.querySelector("button")
        .addEventListener("click", async () => {
          const result = await api.buyCaomhan(c.id);
          state.set(result.gameState);
        });

      shopList.appendChild(div);
    });
  }

  state.subscribe(render);
}