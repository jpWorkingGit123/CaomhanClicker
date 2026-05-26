class MultiplierService {
  calculateIncomeMultiplier(user) {
    return user.activeMultipliers.reduce(
      (total, effect) => {
        return total + effect.value;
      },
      1
    );
  }

  applyIncomeMultipliers(user, amount) {
    return (
      amount *
      this.calculateIncomeMultiplier(user)
    );
  }
}

module.exports = MultiplierService;