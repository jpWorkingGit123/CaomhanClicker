function requireFields(obj, fields) {
  for (const field of fields) {
    if (obj[field] === undefined) {
      throw new Error(
        `Missing field: ${field}`
      );
    }
  }
}

function isPositiveNumber(value) {
  return typeof value === "number" && value >= 0;
}

function isString(value) {
  return typeof value === "string";
}

module.exports = {
  requireFields,
  isPositiveNumber,
  isString
};