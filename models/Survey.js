const mongoose = require('mongoose');
const { Schema } = mongoose;
// const recipientSchema = require('./recipient');

 //creates model class* 

const surveySchema = new Schema({  
    title:String,
    subject:String,
    body:String,
//     recipients:[recipientSchema],
//     no:{ type: Number, default: 0 },
//     yes:{ type: Number, default: 0 },
//    _user:{type:Schema.Types.ObjectId, ref:'User'},
//     dateSent:Date,
//     lastResponded:Date

});   

mongoose.model('surveys', surveySchema)