class SaveSystem {
  constructor(saveRepository) {
    this.saveRepository = saveRepository;
  }

  autoSave(gameState) {
    gameState.lastSave = Date.now();

    this.saveRepository.save(gameState);
  }

  save(gameState) {
    this.saveRepository.save(gameState);
  }

  load(userId) {
    return this.saveRepository.load(userId);
  }
}

module.exports = SaveSystem;