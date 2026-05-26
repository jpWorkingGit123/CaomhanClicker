class MultiplierEffect {
  constructor({
    type,
    value,
    duration = null
  }) {
    this.type = type;

    this.value = value;

    this.duration = duration;
  }
}

module.exports = MultiplierEffect;