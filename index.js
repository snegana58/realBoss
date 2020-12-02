const express = require("express");
const mongoose = require("mongoose");
const keys = ("./config/keys.js");
require("./services/passpost");
 
mongoose.connect(keys.mongoURI);


const app = express();

require("./routes/authRoutes")(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT);