const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
      cookieSession({
            //for how long its gonna stay inside the server
         maxAge: 30 * 24 * 60 * 60 * 1000
           // key for cookey
           keys:[keys.cookieKey]        
      })
);

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
