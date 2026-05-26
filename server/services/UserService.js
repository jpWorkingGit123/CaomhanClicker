class UserService {
  createDefaultGameState(user) {
    user.keevCoins = 0;
    user.totalClicks = 0;
    user.ownedCaomhans = [];
    user.ownedCollectibles = [];
  }
}

module.exports = UserService;