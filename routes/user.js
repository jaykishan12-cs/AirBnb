const express = require("express");
const router = express.Router();
const user = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");


//get signup routes
router.get("/signup",userController.renderSignupForm);

//post signup route
router.post("/signup", wrapAsync(userController.signup));

//get login route
router.get("/login", userController.renderLoginForm);

//post login route
router.post("/login",saveRedirectUrl, passport.authenticate("local",{failureRedirect : "/login", failureFlash: true}) , userController.login);

//logout route
router.get("/logout", userController.logout);

module.exports = router;