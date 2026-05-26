import { renderStickerBook }
from "../rendering/renderStickerBook.js";

export function bindStickerBook(state) {

  state.subscribe((data) => {
    renderStickerBook(data);
  });
}