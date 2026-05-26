class SaveController {
  constructor(saveService) {
    this.saveService = saveService;
  }

  save(req, res) {
    try {
      const user = req.user;

      this.saveService.saveGame(user);

      res.json({
        success: true
      });
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }

  load(req, res) {
    try {
      const userId = req.user.id;

      const saveData =
        this.saveService.loadGame(userId);

      res.json(saveData);
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }
}

module.exports = SaveController;