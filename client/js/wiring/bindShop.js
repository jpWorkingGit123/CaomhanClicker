import { renderShop }
from "../rendering/renderShop.js";

export function bindShop(state, api) {

  state.subscribe((data) => {
    renderShop(data, api);
  });
}