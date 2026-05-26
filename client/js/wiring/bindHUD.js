import { formatNumber } from "../utils/formatNumber.js";

export function bindHUD(state) {
  const coinEl = document.getElementById("coinCount");
  const incomeEl = document.getElementById(
    "incomePerSecond"
  );

  state.subscribe((data) => {
    coinEl.innerText = formatNumber(
      data.currency.keevCoins
    );

    incomeEl.innerText = formatNumber(
      data.totalIncomePerSecond || 0
    );
  });
}