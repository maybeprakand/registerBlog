const router = require("express").Router();

const authController = require("../controllers/controller.auth");

router.get("/", authController.registerPage);

// backend validation

const schema = require("../validator/validator.register");
const isValid = router.post("/register", (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.redirect("/register");
  }
  next();
});
router.get("/register", isValid, authController.register);
router.get("/login", authController.loginPage);

module.exports = router;
