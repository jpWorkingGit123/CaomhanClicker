import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


// ======================================
// SINGLE SOURCE OF TRUTH GAME STATE
// ======================================

const gameState = {

  currency: {
    keevCoins: 0
  },

  caomhans: [],

  ownedCollectibles: [],

  unlockedBoosters: [
    "basic-pack"
  ],

  totalIncomePerSecond: 1
};


// ======================================
// GET GAME STATE
// ======================================

app.get("/api/game/state", (req, res) => {
  res.json(gameState);
});


// ======================================
// CLICK ENDPOINT
// ======================================

app.post("/api/game/click", (req, res) => {

  // modify existing state
  gameState.currency.keevCoins += 1;

  // ALWAYS return full state
  res.json({
    gameState
  });
});

app.post("/api/packs/open", (req, res) => {

  const rewards = [
    {
      id: "sticker_001",
      name: "Basic Caomhan",
      rarity: "Common",
      shiny: false
    }
  ];

  res.json({
    rewards,
    gameState
  });
});


// ======================================
// START SERVER
// ======================================

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});