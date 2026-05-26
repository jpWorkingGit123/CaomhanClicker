import express from "express";
import cors from "cors";

const app = express();

// ✅ THIS FIXES YOUR ERROR
app.use(cors());

app.use(express.json());

app.get("/api/game/state", (req, res) => {
  res.json({
    currency: { keevCoins: 0 }
  });
});

app.post("/api/game/click", (req, res) => {
  res.json({
    gameState: {
      currency: { keevCoins: 1 }
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});