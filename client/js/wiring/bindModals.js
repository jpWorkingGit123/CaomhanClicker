export function bindModals() {

  const mappings = [
    {
      button: "open-shop-btn",
      modal: "shop-modal"
    },
    {
      button: "open-packs-btn",
      modal: "packs-modal"
    },
    {
      button: "open-stickers-btn",
      modal: "stickers-modal"
    }
  ];

  mappings.forEach(({ button, modal }) => {

    const btn =
      document.getElementById(button);

    const modalEl =
      document.getElementById(modal);

    btn?.addEventListener("click", () => {
      modalEl.classList.remove("hidden");
    });

    modalEl
      ?.querySelector(".close-modal")
      ?.addEventListener("click", () => {
        modalEl.classList.add("hidden");
      });
  });
}