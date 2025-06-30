const mongoose = require("mongoose")
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// DB connection
main()
.then(() => console.log("connected to DB"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.ATLASDB_URL);
}

const initDB = async () =>
{
  await Listing.deleteMany({});

  initData.data = initData.data.map((obj) => ({...obj, owner : "685696a8c5a6af1d95cfc31c"}));
  await Listing.insertMany(initData.data);


  console.log("data saved ");
}

initDB();
