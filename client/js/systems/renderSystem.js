class RenderSystem {
  constructor(state) {
    this.state = state;
  }

  renderUI() {
    const data = this.state.data;

    document.getElementById("coins").innerText =
      data.currency.keevCoins;
  }
}

export default RenderSystem;