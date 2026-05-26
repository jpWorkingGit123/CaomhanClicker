const BaseEntity = require("./BaseEntity");

class Caomhan extends BaseEntity {
  constructor({
    id,
    name,
    sprite,
    baseCost,
    incomePerSecond,
    flavourText,
    unlockRequirement = 0
  }) {
    super(id);

    this.name = name;

    this.sprite = sprite;

    this.baseCost = baseCost;
    this.currentCost = baseCost;

    this.incomePerSecond = incomePerSecond;

    this.quantityOwned = 0;

    this.unlockRequirement = unlockRequirement;

    this.flavourText = flavourText;
  }

  calculateNextCost() {
    return Math.floor(
      this.baseCost * Math.pow(1.15, this.quantityOwned)
    );
  }

  buy(user) {
    const cost = this.calculateNextCost();

    if (user.keevCoins < cost) {
      return false;
    }

    user.spendCoins(cost);

    this.quantityOwned++;

    this.currentCost = this.calculateNextCost();

    this.touch();

    return true;
  }

  sell(user) {
    if (this.quantityOwned <= 0) {
      return false;
    }

    this.quantityOwned--;

    const refund = Math.floor(this.currentCost * 0.5);

    user.addCoins(refund);

    this.currentCost = this.calculateNextCost();

    this.touch();

    return true;
  }

  generateIncome(deltaSeconds) {
    return (
      this.incomePerSecond *
      this.quantityOwned *
      deltaSeconds
    );
  }
}

module.exports = Caomhan;