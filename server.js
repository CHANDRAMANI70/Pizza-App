const express = require('express')
require('dotenv').config()
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const session = require('express-session')
const flash =require('express-flash')
const MongoDbStore = require('connect-mongo')
const Noty = require('noty')
//database connection
const url = 'mongodb://localhost/pizza';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
}).on('error', (err)=> {
    console.log('Connection failed...')
});

//for session storage
//Session Store
const clientP = mongoose.connect(url,
    { useNewUrlParser: true, useUnifiedTopology: true }
  ).then(m => m.connection.getClient())

//Session Config, session also acts as a middleware
//session are valid till the cookies are valid
app.use(session({
    //to encrypt the cookies
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: MongoDbStore.create({
        clientPromise : clientP,
        collection: 'sessions'
    }),
    saveUninitialized: false,
    // cookies live // down one is 24 hours
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

app.use(flash())


//Assets
app.use(express.static('public'))
app.use(express.json())

//Global midddleware
app.use((req, res, next)=>{
    res.locals.session = req.session
    next()
})

//set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

require('./routes/web')(app)


app.listen(PORT, ()=> {
    //black tick for including variable inside this
    console.log(`Listening on port ${PORT}`)
})