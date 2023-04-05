const User = require("../models/model.user");
const bcrypt = require("bcrypt");
const sendMail = require("../../mail");

exports.register = async (req, res) => {
  let { name, email, password } = req.body;
  password = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    const msg = `dear ${user.name} 
<br>
<br>
your account has been registered.
<br>
<br>
You can now login using your email.
<a href="http://127.0.0.1:3000/login>Login</a>"
<br>
Thank you for using this 
`;
    await sendMail(user.email, "WElCOME NIGGA", msg);
    res.redirect("/login");
  } catch (err) {
    res.redirect("/register");
  }
};

exports.registerPage = (req, res) => {
  res.render("auth/register");
};

exports.loginPage = (req, res) => {
  res.render("auth/login");
};
