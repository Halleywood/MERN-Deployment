const mongoose = require("mongoose");
const express = require("express");
const app =express();
const cors= require("cors");
const PORT = 8000


app.use(cors())
app.use(express.json(), express.urlencoded({extended: true}))

require("./config/mongoose.config");

const AllMyPirateRoutes = require("./routes/pirate.route");
AllMyPirateRoutes(app);

app.listen(PORT, ()=> console.log("---ARRRR, THE SERVER BE FIRED UP ON---" + PORT))