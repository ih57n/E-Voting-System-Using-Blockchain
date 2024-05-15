// To connect with your mongoDB database
const mongoose = require("mongoose");
// Connecting to database
mongoose.connect(
"mongodb://localhost:27017/",
{
	dbName: "yourDB-name",
	useNewUrlParser: true,
	useUnifiedTopology: true,
},
(err) =>
	err ? console.log(err) : console.log(
	"Connected to yourDB-name database")
);
const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
