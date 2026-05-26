class MultiplierSystem {
  calculateMultiplier(gameState) {
    let multiplier = 1;

    for (const effect of gameState.activeMultipliers) {
      multiplier += effect.value;
    }

    return multiplier;
  }

  apply(gameState, baseValue) {
    return baseValue * this.calculateMultiplier(gameState);
  }

  update(gameState, delta) {
    const now = Date.now();

    gameState.activeMultipliers =
      gameState.activeMultipliers.filter(
        effect =>
          !effect.expiresAt ||
          effect.expiresAt > now
      );
  }
}

module.exports = MultiplierSystem;