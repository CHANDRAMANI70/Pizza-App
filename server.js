const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.render('home')
})

//Assets
app.use(express.static('public'))
//set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

app.listen(PORT, ()=> {
    //black tick for including variable inside this
    console.log(`Listening on port ${PORT}`)
})