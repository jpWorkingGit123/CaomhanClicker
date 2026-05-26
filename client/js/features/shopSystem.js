class ShopSystem {
  constructor(api, state) {
    this.api = api;
    this.state = state;
  }

  buy(id) {
    return this.api.buyCaomhan(id);
  }
}

export default ShopSystem;