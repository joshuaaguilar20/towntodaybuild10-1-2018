const mongoose = require('mongoose');
const { Schema } = mongoose;

 //creates model class* 

const userSchema = new Schema({  
    googleId:String

});     //able to add any prop. I would like to add to this schema. 


mongoose.model('users',userSchema);