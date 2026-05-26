export const UNLOCKS = [
  {
    id: "unlock_miner",
    requirement: {
      type: "coins_earned",
      value: 50
    },
    unlocks: ["caomhan_miner"]
  },

  {
    id: "unlock_booster_packs",
    requirement: {
      type: "coins_earned",
      value: 500
    },
    unlocks: ["starter_pack"]
  }
];