const GAME_CONFIG = {
  CLICK_BASE_VALUE: 1,
  SAVE_INTERVAL: 30000, // 30 seconds
  TICK_RATE: 1000,
  DEFAULT_GROWTH_RATE: 1.15
};

const RARITIES = {
  COMMON: "common",
  UNCOMMON: "uncommon",
  RARE: "rare",
  EPIC: "epic",
  LEGENDARY: "legendary",
  MYTHIC: "mythic"
};

const SHINY_CHANCE = 0.02;

module.exports = {
  GAME_CONFIG,
  RARITIES,
  SHINY_CHANCE
};