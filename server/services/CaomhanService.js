class CaomhanService {
  calculateNextCost(caomhan) {
    return Math.floor(
      caomhan.baseCost *
      Math.pow(1.15, caomhan.quantityOwned)
    );
  }

  calculateProduction(caomhan) {
    return (
      caomhan.incomePerSecond *
      caomhan.quantityOwned
    );
  }

  calculateTotalIncome(user) {
    return user.ownedCaomhans.reduce(
      (total, caomhan) => {
        return total + this.calculateProduction(caomhan);
      },
      0
    );
  }
}

module.exports = CaomhanService;