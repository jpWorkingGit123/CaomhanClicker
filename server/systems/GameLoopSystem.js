class GameLoopSystem {
  constructor({
    currencySystem,
    caomhanProductionSystem,
    multiplierSystem,
    saveSystem
  }) {
    this.currencySystem = currencySystem;
    this.caomhanProductionSystem =
      caomhanProductionSystem;
    this.multiplierSystem = multiplierSystem;
    this.saveSystem = saveSystem;

    this.lastUpdate = Date.now();
  }

  start(gameState) {
    setInterval(() => {
      this.tick(gameState);
    }, 1000); // 1 second tick for simplicity
  }

  tick(gameState) {
    const now = Date.now();
    const delta = (now - this.lastUpdate) / 1000;

    this.update(gameState, delta);

    this.lastUpdate = now;
  }

  update(gameState, delta) {
    this.caomhanProductionSystem.update(
      gameState,
      delta
    );

    this.currencySystem.update(gameState, delta);

    this.multiplierSystem.update(gameState, delta);

    this.saveSystem.autoSave(gameState);
  }
}

module.exports = GameLoopSystem;