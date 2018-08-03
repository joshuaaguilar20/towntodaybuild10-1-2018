const express = require('express');
const app = express();


app.get('/',(req,res)=>{   //
    res.send({hi:'there'});
});

const PORT = process.env.PORT || 5000 //allows heroku to choose port. looks at underlying enviroment. 
app.listen(PORT); // use my port or production port


