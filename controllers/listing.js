const Listing = require("../models/listing");
const mbxGecoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const baseClient = mbxGecoding({ accessToken: mapToken });


module.exports.index = async (req,res) =>
{
    let allListing = await Listing.find({});
    res.render("listings/index", { allListing });

};

module.exports.renderNewForm = (req,res) =>
{
    res.render("listings/new");
};



module.exports.showListing = async (req,res) =>
{
    let { id }  = req.params;
    const listing = await Listing.findById(id)
    .populate({path:"reviews", populate : {path:"author"}})
    .populate("owner");

    if(!listing)
    {
        req.flash("error","Listing Does Not Exists");
        res.redirect("/listings");

    }
    res.render("listings/show", {listing});
};

module.exports.createListing = async (req,res) =>
{
   let resp = await  baseClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1
    })
    .send()

    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    newListing.geometry = resp.body.features[0].geometry;
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req,res) =>
{
    let { id }  = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit" , {listing});
};

module.exports.updateListing = async (req,res) =>
{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    req.flash("success","Listing Updated");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req,res)=>
{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
};

