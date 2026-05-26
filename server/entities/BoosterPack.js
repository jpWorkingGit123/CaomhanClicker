const BaseEntity = require("./BaseEntity");

class BoosterPack extends BaseEntity {
  constructor({
    id,
    name,
    baseCost,
    cardsPerPack,
    rarityWeights,
    shinyChance,
    possibleDrops = []
  }) {
    super(id);

    this.name = name;

    this.baseCost = baseCost;

    this.currentCost = baseCost;

    this.cardsPerPack = cardsPerPack;

    this.rarityWeights = rarityWeights;

    this.shinyChance = shinyChance;

    this.possibleDrops = possibleDrops;

    this.packsOpened = 0;
  }

  calculateNextCost() {
    return Math.floor(
      this.baseCost * Math.pow(1.25, this.packsOpened)
    );
  }

  openPack(user) {
    const cost = this.calculateNextCost();

    if (user.keevCoins < cost) {
      return null;
    }

    user.spendCoins(cost);

    const rewards = [];

    for (let i = 0; i < this.cardsPerPack; i++) {
      const rarity = this.rollRarity();

      const pool = this.possibleDrops.filter(
        x => x.rarity === rarity
      );

      if (pool.length === 0) {
        continue;
      }

      const randomIndex = Math.floor(
        Math.random() * pool.length
      );

      const selected = pool[randomIndex];

      const shinyRoll = Math.random();

      selected.shiny =
        shinyRoll <= this.shinyChance;

      rewards.push(selected);

      user.addCollectible(selected);
    }

    this.packsOpened++;

    this.currentCost = this.calculateNextCost();

    this.touch();

    return rewards;
  }

  rollRarity() {
    const roll = Math.random();

    let cumulative = 0;

    for (const rarity in this.rarityWeights) {
      cumulative += this.rarityWeights[rarity];

      if (roll <= cumulative) {
        return rarity;
      }
    }

    return "Common";
  }
}

module.exports = BoosterPack;