const BaseRepository = require("./BaseRepository");

class CaomhanRepository extends BaseRepository {
  findUnlocked(userCoins) {
    return this.items.filter(
      caomhan =>
        userCoins >= caomhan.unlockRequirement
    );
  }

  findByName(name) {
    return this.items.find(
      c => c.name === name
    );
  }
}

module.exports = CaomhanRepository;