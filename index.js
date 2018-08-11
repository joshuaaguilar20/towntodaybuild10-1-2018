const express = require('express'); //lib for node 
const mongoose = require('mongoose'); //lib for mongo DB 
const cookieSession = require('cookie-session'); //express does not know how to use cookies on its on*
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys'); //Hidden Keys for Ap
require('./models/Users'); //creates model class* 
require('./services/passport');




mongoose.connect(keys.mongoURI);
const app = express();

app.use(bodyParser.json());

app.use(cookieSession({
    maxAge:30 * 24 * 60 * 60 * 1000, //tells browser how long to use cookies 30days# 
    keys:[keys.cookieKey] //encrypts cookie key
}));
app.use(passport.initialize());
app.use(passport.session()); 


require('./routes/authroutes')(app);
require('./routes/billing')(app);
const PORT = process.env.PORT || 5000 //allows heroku to choose port. looks at underlying enviroment. 
app.listen(PORT); // use my port or production port
