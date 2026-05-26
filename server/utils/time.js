function getCurrentTimestamp() {
  return Date.now();
}

function secondsBetween(a, b) {
  return Math.abs(a - b) / 1000;
}

function minutesToMs(minutes) {
  return minutes * 60 * 1000;
}

function hoursToMs(hours) {
  return hours * 60 * 60 * 1000;
}

module.exports = {
  getCurrentTimestamp,
  secondsBetween,
  minutesToMs,
  hoursToMs
};