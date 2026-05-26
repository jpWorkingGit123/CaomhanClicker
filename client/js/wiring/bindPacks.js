export function bindPacks(state, api) {
  const buttons = document.querySelectorAll(
    ".open-pack-btn"
  );

  buttons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const packId =
        btn.closest(".pack-item").dataset.packId;

      const result = await api.openPack(packId);

      state.set(result.gameState);

      showPackAnimation(result.rewards);
    });
  });
}

function showPackAnimation(rewards) {
  console.log("Pack opened:", rewards);
}