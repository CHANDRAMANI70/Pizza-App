//const { default: mongoose } = require("mongoose")

const mongoose = require('mongoose')
const Schema =mongoose.Schema

//this will decide how our table or database will look
const userSchema = new Schema({
    name: {type: String, required:true},
    email: {type: String, required:true, unique: true },
    password: {type: String, required:true },
    role: {type: String, default:'customer'}
}, {timestamps:true})


//model making
//the first name must be small and in the database it will get created as a plural of the thing that we passed
module.exports = mongoose.model('user', userSchema)
