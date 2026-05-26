class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  register(req, res) {
    try {
      const userData = req.body;

      const user =
        this.userService.createUser(userData);

      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({
        error: error.message
      });
    }
  }

  login(req, res) {
    try {
      const { email, password } = req.body;

      const token =
        this.userService.login(
          email,
          password
        );

      res.json({ token });
    } catch (error) {
      res.status(401).json({
        error: error.message
      });
    }
  }
}

module.exports = UserController;