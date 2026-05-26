function randomFloat(min = 0, max = 1) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return (
    Math.floor(Math.random() * (max - min + 1)) +
    min
  );
}

function chance(probability) {
  return Math.random() < probability;
}

function pickWeighted(weights) {
  const entries = Object.entries(weights);

  const total = entries.reduce(
    (sum, [, w]) => sum + w,
    0
  );

  let roll = Math.random() * total;

  for (const [key, weight] of entries) {
    if (roll < weight) return key;
    roll -= weight;
  }
}

module.exports = {
  randomFloat,
  randomInt,
  chance,
  pickWeighted
};