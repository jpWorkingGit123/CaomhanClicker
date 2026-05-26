const express = require("express");
const router = express.Router();

module.exports = (boosterPackController) => {
  router.get("/", (req, res) =>
    boosterPackController.getAll(req, res)
  );

  router.post("/open", (req, res) =>
    boosterPackController.openPack(req, res)
  );

  return router;
};