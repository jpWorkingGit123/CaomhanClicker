class GameClient {
  constructor(api, state) {
    this.api = api;
    this.state = state;
  }

  async init() {
    const gameState = await this.api.getGameState();
    this.state.set(gameState);

    this.startLoop();
  }

  startLoop() {
    requestAnimationFrame(() => this.loop());
  }

  loop() {
    this.update();
    this.render();

    requestAnimationFrame(() => this.loop());
  }

  update() {
    // update animations, UI, particles
  }

  render() {
    // draw canvas + update DOM UI
  }
}

export default GameClient;