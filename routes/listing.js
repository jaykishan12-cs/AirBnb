const express = require("express");
const router = express.Router();
//
const wrapAsync  = require("../utils/wrapAsync.js");
const ExpressError  = require("../utils/ExpressError.js");
const {listingSchema , reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const {isLoggedin} = require("../middleware.js")
const {isOwner} = require("../middleware.js")
const {validateListing} = require("../middleware.js")

const {storage} = require("../cloudConfig.js");

const multer = require("multer");
const upload = multer({storage});

const listingController = require("../controllers/listing.js");


//all listing route
router.get("/", wrapAsync(listingController.index));


//add new lisitng
router.get("/new" ,isLoggedin, listingController.renderNewForm);


//show route
router.get("/:id", listingController.showListing);


//create route
router.post("/" , isLoggedin,validateListing,upload.single("listing[image]"),  wrapAsync(listingController.createListing));

//edit route
router.get("/:id/edit" ,isLoggedin,isOwner, listingController.renderEditForm);

//update route
router.put("/:id" , isLoggedin ,isOwner, validateListing , listingController.updateListing );

//delete route
router.delete("/:id" , isLoggedin,isOwner, listingController.deleteListing);

module.exports = router;