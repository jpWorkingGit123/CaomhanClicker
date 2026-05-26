function generateId(prefix = "") {
  return (
    prefix +
    "_" +
    Date.now().toString(36) +
    "_" +
    Math.random().toString(36).substr(2, 5)
  );
}

module.exports = {
  generateId
};