const BaseRepository = require("./BaseRepository");

class UserRepository extends BaseRepository {
  findByUsername(username) {
    return this.items.find(
      user => user.username === username
    );
  }

  findByEmail(email) {
    return this.items.find(
      user => user.email === email
    );
  }

  updateCurrency(userId, amount) {
    const user = this.findById(userId);

    if (!user) return null;

    user.keevCoins = amount;

    return user;
  }
}

module.exports = UserRepository;