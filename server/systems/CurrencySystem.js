class CurrencySystem {
  addPassiveIncome(gameState, amount) {
    gameState.currency.keevCoins += amount;
    gameState.stats.totalEarned += amount;
  }

  processClick(gameState, clickValue) {
    gameState.currency.keevCoins += clickValue;
    gameState.stats.totalClicks += 1;
  }

  update(gameState, delta) {
    // reserved for scaling logic later
  }
}

module.exports = CurrencySystem;