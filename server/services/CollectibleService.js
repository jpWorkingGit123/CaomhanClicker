class CollectibleService {
  unlockCollectible(user, collectible) {
    user.ownedCollectibles.push(collectible);
  }

  hasCollectible(user, collectibleId) {
    return user.ownedCollectibles.some(
      c => c.id === collectibleId
    );
  }
}

module.exports = CollectibleService;