const BaseRepository = require("./BaseRepository");

class MultiplierRepository extends BaseRepository {
  findActive(currentTime) {
    return this.items.filter(effect => {
      return (
        !effect.expiresAt ||
        effect.expiresAt > currentTime
      );
    });
  }

  findByType(type) {
    return this.items.filter(
      effect => effect.type === type
    );
  }
}

module.exports = MultiplierRepository;