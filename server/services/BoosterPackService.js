class BoosterPackService {
  openPack(pack) {
    const rewards = [];

    for (let i = 0; i < pack.cardsPerPack; i++) {
      rewards.push(this.generateReward(pack));
    }

    return rewards;
  }

  generateReward(pack) {
    const rarity =
      this.rollRarity(pack.rarityWeights);

    const shiny =
      this.rollShiny(pack.shinyChance);

    return {
      rarity,
      shiny
    };
  }

  rollShiny(chance) {
    return Math.random() < chance;
  }
}

module.exports = BoosterPackService;