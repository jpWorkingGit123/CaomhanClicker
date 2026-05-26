import { renderHUD }
from "../rendering/renderHUD.js";

export function bindHUD(state) {

  state.subscribe((data) => {
    renderHUD(data);
  });
}