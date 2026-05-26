const express = require("express");
const router = express.Router();

module.exports = (gameController) => {
  router.get("/state", (req, res) =>
    gameController.getGameState(req, res)
  );

  router.post("/click", (req, res) =>
    gameController.click(req, res)
  );

  router.post("/tick", (req, res) =>
    gameController.tick(req, res)
  );

  return router;
};