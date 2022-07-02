//const { default: mongoose } = require("mongoose")

const mongoose = require('mongoose')
const Schema =mongoose.Schema

//this will decide how our table or database will look
const menuSchema = new Schema({
    name: {type: String, required:true},
    image: {type: String, required:true},
    price: {type: Number, required:true},
    size: {type: String, required:true},
})


//model making
//the first name must be small and in the database it will get created as a plural of the thing that we passed
module.exports = mongoose.model('Menu', menuSchema)
