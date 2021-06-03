const userRepository = require("../repositories/userRepository");
const authModule = require("../services/authService");
const userValidationService = require("../services/userValidationService");

const authController = {
  mapRequestsToHandlers: (app) => {
    app.post("/api/auth/login", authController.login);
    app.get("/api/auth/all-users", authController.allUsers);
    app.get(
      "/api/auth/me",
      authModule.authenticateTokenMiddleware,
      authController.me
    );
  },

  allUsers: function (req, res) {
    const allUsers = userRepository.getAll();
    return res.status(200).json({ code: "allUsersSuccess", payload: allUsers });
  },
  me: function (req, res) {
    const currentUser = userRepository.getById(req.user.userId);
    return res.status(200).json({ code: "meSuccess", payload: currentUser });
  },

  login: function (req, res) {
    // accessing the data in request body
    var requestData = req.body;

    userValidationService.emailMustBeFilled(res, requestData.email);

    // Get user
    const matchedUser = userRepository.getByEmail(requestData.email);

    userValidationService.userMustBeExist(res, matchedUser);

    const jwtToken = authModule.generateJWT(
      matchedUser.id,
      matchedUser.name,
      matchedUser.department
    );

    var userData = {
      id: matchedUser.id,
      name: matchedUser.name,
      email: matchedUser.email,
      department: matchedUser.department,
      jwtToken: jwtToken,
    };

    return res.status(200).json({ code: "loginSuccess", payload: userData });
  },
};

module.exports = authController;
