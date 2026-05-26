export function renderHUD(state) {

  const coinsEl =
    document.getElementById("coins-display");

  const incomeEl =
    document.getElementById("income-display");

  if (!coinsEl || !incomeEl) return;

  coinsEl.textContent =
    `${Math.floor(
      state.currency.keevCoins
    )} KeevCoins`;

  incomeEl.textContent =
    `${state.totalIncomePerSecond}/sec`;
}