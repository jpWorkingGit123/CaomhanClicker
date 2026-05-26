const suffixes = [
  "",
  "K",
  "M",
  "B",
  "T",
  "Qa",
  "Qi",
  "Sx",
  "Sp",
  "Oc",
  "No"
];

function formatNumber(num) {
  if (num < 1000) return num.toFixed(0);

  const tier = Math.floor(
    Math.log10(num) / 3
  );

  const suffix = suffixes[tier] || "e+";

  const scaled = num / Math.pow(1000, tier);

  return `${scaled.toFixed(2)}${suffix}`;
}

module.exports = {
  formatNumber
};