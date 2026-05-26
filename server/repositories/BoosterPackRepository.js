const BaseRepository = require("./BaseRepository");

class BoosterPackRepository extends BaseRepository {
  findAffordable(userCoins) {
    return this.items.filter(
      pack => pack.packCost <= userCoins
    );
  }

  findByName(name) {
    return this.items.find(
      pack => pack.name === name
    );
  }
}

module.exports = BoosterPackRepository;