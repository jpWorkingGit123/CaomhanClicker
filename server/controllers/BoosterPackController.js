class BoosterPackController {
  constructor(boosterPackService) {
    this.boosterPackService =
      boosterPackService;
  }

  getAll(req, res) {
    try {
      const packs =
        this.boosterPackService.getAllPacks();

      res.json(packs);
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }

  openPack(req, res) {
    try {
      const user = req.user;
      const { packId } = req.body;

      const rewards =
        this.boosterPackService.openPack(
          user,
          packId
        );

      res.json(rewards);
    } catch (error) {
      res.status(400).json({
        error: error.message
      });
    }
  }
}

module.exports = BoosterPackController;