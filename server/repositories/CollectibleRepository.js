const BaseRepository = require("./BaseRepository");

class CollectibleRepository extends BaseRepository {
  findByRarity(rarity) {
    return this.items.filter(
      collectible =>
        collectible.rarity === rarity
    );
  }

  findShinyCollectibles() {
    return this.items.filter(
      collectible => collectible.shiny
    );
  }

  findBySet(setNumber) {
    return this.items.filter(
      collectible =>
        collectible.setNumber === setNumber
    );
  }
}

module.exports = CollectibleRepository;