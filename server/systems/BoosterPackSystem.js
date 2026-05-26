class BoosterPackSystem {
  rollRarity(weights) {
    const total = Object.values(weights).reduce(
      (a, b) => a + b,
      0
    );

    let rand = Math.random() * total;

    for (const [rarity, weight] of Object.entries(
      weights
    )) {
      if (rand < weight) return rarity;
      rand -= weight;
    }
  }

  rollShiny(chance) {
    return Math.random() < chance;
  }

  openPack(gameState, pack) {
    const results = [];

    for (let i = 0; i < pack.cardsPerPack; i++) {
      results.push({
        rarity: this.rollRarity(
          pack.rarityWeights
        ),
        shiny: this.rollShiny(pack.shinyChance)
      });
    }

    return results;
  }
}

module.exports = BoosterPackSystem;