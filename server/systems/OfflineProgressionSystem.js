class OfflineProgressionSystem {
  calculateOfflineIncome(
    incomePerSecond,
    secondsAway
  ) {
    return incomePerSecond * secondsAway;
  }

  applyOfflineProgress(gameState) {
    const now = Date.now();
    const last = gameState.lastSave;

    const secondsAway = (now - last) / 1000;

    const offlineIncome =
      gameState.totalIncomePerSecond *
      secondsAway;

    gameState.currency.keevCoins += offlineIncome;
  }
}

module.exports = OfflineProgressionSystem;