const BaseEntity = require("./BaseEntity");

class User extends BaseEntity {
  constructor({
    id,
    username,
    email,
    passwordHash
  }) {
    super(id);

    this.username = username;
    this.email = email;
    this.passwordHash = passwordHash;

    this.keevCoins = 0;

    this.totalClicks = 0;
    this.totalLifetimeCoins = 0;

    this.ownedCaomhans = [];
    this.ownedCollectibles = [];

    this.activeMultipliers = [];

    this.highestPackOpened = 0;

    this.lastLoginDate = new Date();
  }

  addCoins(amount) {
    this.keevCoins += amount;
    this.totalLifetimeCoins += amount;
    this.touch();
  }

  spendCoins(amount) {
    if (this.keevCoins < amount) {
      return false;
    }

    this.keevCoins -= amount;
    this.touch();

    return true;
  }

  incrementClicks() {
    this.totalClicks++;
    this.touch();
  }

  addCollectible(collectible) {
    this.ownedCollectibles.push(collectible);
    this.touch();
  }

  addCaomhan(caomhan) {
    this.ownedCaomhans.push(caomhan);
    this.touch();
  }
}

module.exports = User;