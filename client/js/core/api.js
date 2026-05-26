class API {
  constructor() {
    this.baseUrl = "http://localhost:3000/api";
  }

  async getGameState() {
    return fetch(`${this.baseUrl}/game/state`).then(r => r.json());
  }

  async click() {
    return fetch(`${this.baseUrl}/game/click`, {
      method: "POST"
    }).then(r => r.json());
  }

  async openPack(packId) {

  const res = await fetch(
    `${this.baseUrl}/packs/open`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        packId
      })
    }
  );

  return res.json();
}
}

export default API;