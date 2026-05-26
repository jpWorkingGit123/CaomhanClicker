export function createDefaultGameState() {
  return {
    currency: {
      keevCoins: 0,
      totalLifetimeCoins: 0,
      clickPower: 1
    },

    stats: {
      totalClicks: 0,
      totalPacksOpened: 0,
      totalCaomhansOwned: 0
    },

    caomhans: [],

    ownedCollectibles: [],

    unlockedBoosters: ["basic-pack"],

    activeMultipliers: [],

    totalIncomePerSecond: 0,

    settings: {
      soundEnabled: true,
      musicEnabled: true
    },

    timestamps: {
      createdAt: Date.now(),
      lastSavedAt: Date.now(),
      lastLoginAt: Date.now()
    }
  };
}