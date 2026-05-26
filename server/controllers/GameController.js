class GameController {
  constructor(gameService) {
    this.gameService = gameService;
  }

  getGameState(req, res) {
    try {
      const user = req.user;

      const state =
        this.gameService.getGameState(user);

      res.json(state);
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }

  click(req, res) {
    try {
      const user = req.user;

      const result =
        this.gameService.processClick(user);

      res.json(result);
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }
}

module.exports = GameController;