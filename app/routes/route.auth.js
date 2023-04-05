const router = require("express").Router();

const authController = require("../controllers/controller.auth");

// validation
const registerSchema = require("../validator/validator.register");
const isValid = require("../middlewares/middleware.isvalid");

router.get("/", authController.registerPage);
router.post(
  "/register",
  isValid(registerSchema, "/register"),
  authController.register
);
router.get("/login", authController.loginPage);

module.exports = router;
