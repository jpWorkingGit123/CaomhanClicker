class GameService {
  constructor({
    currencyService,
    caomhanService,
    multiplierService
  }) {
    this.currencyService = currencyService;
    this.caomhanService = caomhanService;
    this.multiplierService = multiplierService;
  }

  update(user, deltaTime) {
    const income =
      this.caomhanService.calculateTotalIncome(user);

    const modifiedIncome =
      this.multiplierService.applyIncomeMultipliers(
        user,
        income
      );

    this.currencyService.addPassiveIncome(
      user,
      modifiedIncome,
      deltaTime
    );
  }
}

module.exports = GameService;