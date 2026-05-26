class CollectibleController {
  constructor(collectibleService) {
    this.collectibleService =
      collectibleService;
  }

  getCollection(req, res) {
    try {
      const user = req.user;

      const collection =
        this.collectibleService.getCollection(
          user
        );

      res.json(collection);
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }

  getStats(req, res) {
    try {
      const user = req.user;

      const stats =
        this.collectibleService.getStats(user);

      res.json(stats);
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }
}

module.exports = CollectibleController;