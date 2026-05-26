class CaomhanProductionSystem {
  constructor(currencySystem) {
    this.currencySystem = currencySystem;
  }

  calculateProduction(caomhan) {
    return (
      caomhan.incomePerSecond *
      caomhan.quantityOwned
    );
  }

  update(gameState, delta) {
    let totalIncome = 0;

    for (const caomhan of gameState.ownedCaomhans) {
      const income =
        this.calculateProduction(caomhan);

      totalIncome += income * delta;
    }

    this.currencySystem.addPassiveIncome(
      gameState,
      totalIncome
    );
  }
}

module.exports = CaomhanProductionSystem;