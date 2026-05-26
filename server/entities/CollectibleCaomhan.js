const BaseEntity = require("./BaseEntity");

class CollectibleCaomhan extends BaseEntity {
  constructor({
    id,
    name,
    image,
    rarity,
    shiny = false,
    description,
    flavourText,
    effect,
    dropRate,
    setNumber
  }) {
    super(id);

    this.name = name;

    this.image = image;

    this.rarity = rarity;

    this.shiny = shiny;

    this.description = description;

    this.flavourText = flavourText;

    this.effect = effect;

    this.dropRate = dropRate;

    this.setNumber = setNumber;
  }

  applyEffect(user) {
    if (!this.effect) {
      return;
    }

    switch (this.effect.type) {
      case "GLOBAL_MULTIPLIER":
        user.activeMultipliers.push({
          source: this.name,
          value: this.effect.value
        });
        break;

      case "FREE_PACK":
        user.highestPackOpened += 1;
        break;

      default:
        break;
    }
  }
}

module.exports = CollectibleCaomhan;