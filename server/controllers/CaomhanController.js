class CaomhanController {
  constructor(caomhanService) {
    this.caomhanService = caomhanService;
  }

  getAll(req, res) {
    try {
      const caomhans =
        this.caomhanService.getAll();

      res.json(caomhans);
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }

  buy(req, res) {
    try {
      const user = req.user;
      const { caomhanId } = req.body;

      const result =
        this.caomhanService.buyCaomhan(
          user,
          caomhanId
        );

      res.json(result);
    } catch (error) {
      res.status(400).json({
        error: error.message
      });
    }
  }
}

module.exports = CaomhanController;