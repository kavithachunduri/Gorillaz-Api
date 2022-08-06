const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Album = new Schema(
    {

    name:{type:String,required:true},
    year_of_release:{type:String,required:true},
    genre:{type:String,required:true},
    Label:{type:String,required:true},
    image:{type:String,required:true},
    },
        {timestamps:true}
)

module.exports = mongoose.model('albums',Album)