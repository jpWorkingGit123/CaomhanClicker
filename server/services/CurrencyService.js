class CurrencyService {
  addCoins(user, amount) {
    user.keevCoins += amount;
    user.totalLifetimeCoins += amount;
  }

  spendCoins(user, amount) {
    if (user.keevCoins < amount) {
      return false;
    }

    user.keevCoins -= amount;
    return true;
  }

  canAfford(user, amount) {
    return user.keevCoins >= amount;
  }
}

module.exports = CurrencyService;