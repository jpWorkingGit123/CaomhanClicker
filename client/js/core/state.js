class GameState {
  constructor() {
    this.data = null;
    this.subscribers = [];
  }

  set(newState) {
    this.data = newState;
    this.notify();
  }

  update(partial) {
    this.data = {
      ...this.data,
      ...partial
    };

    this.notify();
  }

  notify() {
    this.subscribers.forEach(fn => fn(this.data));
  }

  subscribe(fn) {
    this.subscribers.push(fn);
  }
}

export default GameState;