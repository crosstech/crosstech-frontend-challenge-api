const userValidationService = {
  userMustBeExist: (res, user) => {
    if (user == undefined) {
      res
        .status(404)
        .json({
          code: "validationError",
          message: "Email not matched with any user",
        });
      throw "User Validation Error: Email not matched with any user";
    }
  },
  emailMustBeFilled: (res, email) => {
    if (!email) {
      res.status(400).json({
        code: "validationError",
        message: "Email can not be empty",
      });
      throw "User Validation Error: Email can not be empty";
    }
  },
};

module.exports = userValidationService;
