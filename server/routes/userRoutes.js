const express = require("express");
const router = express.Router();

module.exports = (userController) => {
  router.post("/register", (req, res) =>
    userController.register(req, res)
  );

  router.post("/login", (req, res) =>
    userController.login(req, res)
  );

  router.get("/profile", (req, res) =>
    userController.getProfile(req, res)
  );

  router.post("/reset", (req, res) =>
    userController.reset(req, res)
  );

  return router;
};