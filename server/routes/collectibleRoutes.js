const express = require("express");
const router = express.Router();

module.exports = (collectibleController) => {
  router.get("/", (req, res) =>
    collectibleController.getCollection(req, res)
  );

  router.get("/stats", (req, res) =>
    collectibleController.getStats(req, res)
  );

  router.get("/book", (req, res) =>
    collectibleController.getStickerBook(req, res)
  );

  return router;
};