const user = require("../models/user.js");

module.exports.renderSignupForm =  (req,res) =>
{
    res.render("users/signup.ejs");
};

module.exports.signup = async (req,res) =>
{
    try
    {
        let{username,email,password} = req.body;
        const newUser = new user ({
        email,
        username,
        });
        const registeredUser = await user.register(newUser,password);
        req.login(registeredUser,(err) =>
        {
            if(err)
            {
                return next(err);
            }

            req.flash("success","Welcome to Airbnb");
            res.redirect("/listings");
 
        });
        
    }
    catch(err)
    {
        req.flash("error",err.msg);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req,res) =>
{
    res.render("users/login.ejs");
};

module.exports.login = async (req,res) =>
{
    req.flash("success","welcome to airbnb you are logged in");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req,res)  =>
{
    req.logout((err) =>
    {
        if(err)
        {
           return next(err);
        }

        req.flash("success","You are logged out");
        res.redirect("/listings");
    })
};