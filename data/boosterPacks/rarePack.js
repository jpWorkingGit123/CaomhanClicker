export const RARE_PACK = {
  id: "rare_pack",
  name: "Rare Pack",
  packCost: 1000,
  cardsPerPack: 5,

  shinyChance: 0.03,

  rarityWeights: {
    common: 40,
    uncommon: 35,
    rare: 20,
    epic: 5,
    legendary: 0
  },

  possibleDrops: [
    "caomhan_miner",
    "caomhan_farm",
    "caomhan_factory"
  ]
};