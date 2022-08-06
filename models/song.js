const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Song = new Schema(
    {
        title:{type:String,required:true},
        writer:{type:String,required:true},  
        length:{type:String,required:true},
        
        artist:{type:String,required:true},

        //iam referencing another schema in below line.in brand.js brand is exported as 'brands'
        album:{type:Schema.Types.ObjectId,ref:'albums'}
    },
    {timestamps:true},
)

module.exports = mongoose.model('songs',Song)
//left side u r exporting
//right side mongoose.model is method to export fully made model
//what i am putting inside mongoose model is the model name, Product
//we are going to add express before querying.