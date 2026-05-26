const fs = require("fs");
const path = require("path");

class SaveRepository {
  constructor() {
    this.savePath = path.join(
      __dirname,
      "../../data/saves.json"
    );
  }

  loadSaves() {
    if (!fs.existsSync(this.savePath)) {
      return [];
    }

    const data = fs.readFileSync(
      this.savePath,
      "utf-8"
    );

    return JSON.parse(data);
  }

  saveSaves(saves) {
    fs.writeFileSync(
      this.savePath,
      JSON.stringify(saves, null, 2)
    );
  }
}

module.exports = SaveRepository;