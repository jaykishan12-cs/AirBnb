const express = require("express");
const router = express.Router({mergeParams:true});
//
const {listingSchema , reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const wrapAsync  = require("../utils/wrapAsync.js");
const ExpressError  = require("../utils/ExpressError.js");
const {validateReview, isLoggedin,isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/review.js");


//Create reviews
router.post("/", isLoggedin,validateReview, wrapAsync(reviewController.createReview ));

//delete review route
router.delete("/:reviewId", isLoggedin,isReviewAuthor, reviewController.deleteReview);

module.exports = router;