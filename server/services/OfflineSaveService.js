class OfflineProgressService {
  calculateOfflineIncome(
    incomePerSecond,
    secondsAway
  ) {
    return incomePerSecond * secondsAway;
  }
}

module.exports = OfflineProgressService;