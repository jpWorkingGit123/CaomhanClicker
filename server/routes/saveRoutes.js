const express = require("express");
const router = express.Router();

module.exports = (saveController) => {
  router.post("/", (req, res) =>
    saveController.save(req, res)
  );

  router.get("/", (req, res) =>
    saveController.load(req, res)
  );

  router.post("/export", (req, res) =>
    saveController.export(req, res)
  );

  router.post("/import", (req, res) =>
    saveController.import(req, res)
  );

  return router;
};