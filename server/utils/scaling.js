function exponentialCost(base, owned, growth = 1.15) {
  return base * Math.pow(growth, owned);
}

function linearGrowth(base, increment, level) {
  return base + increment * level;
}

function diminishingReturns(value, factor = 0.9) {
  return value * factor;
}

module.exports = {
  exponentialCost,
  linearGrowth,
  diminishingReturns
};