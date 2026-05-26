class EventSystem {
  update(gameState) {
    const now = Date.now();

    gameState.activeEvents =
      gameState.activeEvents.filter(
        event => event.endTime > now
      );
  }
}

module.exports = EventSystem;