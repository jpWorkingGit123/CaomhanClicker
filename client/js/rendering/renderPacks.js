export function renderPacks(state, api) {

  const packsList =
    document.getElementById("packs-list");

  if (!packsList) return;

  const packs =
    state?.unlockedBoosters || [];

  packsList.innerHTML = "";

  packs.forEach((packId) => {

    const el =
      document.createElement("div");

    el.className = "pack-item";

    el.innerHTML = `
      <h3>${formatPackName(packId)}</h3>

      <button>
        Open Pack
      </button>
    `;

    el.querySelector("button")
      .addEventListener(
        "click",
        async () => {

          const result =
            await api.openPack(packId);

          state.set(result.gameState);

          console.log(
            "Rewards:",
            result.rewards
          );
        }
      );

    packsList.appendChild(el);
  });
}

function formatPackName(packId) {

  return packId
    .replaceAll("-", " ")
    .replace(/\b\w/g, l => l.toUpperCase());
}