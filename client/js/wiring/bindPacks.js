import { renderPacks }
from "../rendering/renderPacks.js";

export function bindPacks(state, api) {

  state.subscribe((data) => {
    renderPacks(data, api);
  });
}