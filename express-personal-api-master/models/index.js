const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", { useNewUrlParser: true });

const Wish = require("./wishes");
// module.exports.Campsite = require("./campsite.js.example");

exports.Wish = Wish;
