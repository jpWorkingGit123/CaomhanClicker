export function bindClickArea(state, api) {
  const button = document.getElementById(
    "mainClickButton"
  );

  button.addEventListener("click", async () => {
    const result = await api.click();

    // server returns updated state OR delta
    state.set(result.gameState);
  });
}