const express = require("express");
const router = express.Router();

module.exports = (caomhanController) => {
  router.get("/", (req, res) =>
    caomhanController.getAll(req, res)
  );

  router.post("/buy", (req, res) =>
    caomhanController.buy(req, res)
  );

  router.post("/sell", (req, res) =>
    caomhanController.sell(req, res)
  );

  return router;
};