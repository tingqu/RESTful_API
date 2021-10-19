
// Get the express pacakge 
const express = require('express')

// Exexute the package 
const app = express();

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

require('dotenv/config')

app.use(express.json())

// In order to cross the domain
app.use(cors())

//Middlewares: Every time when we hit the route, the middle ware would always execute,start using aap.use
//Example:
// app.use('/posts', ()=>{
//     // Adding the logic here
//     console.log("this is a middle ware running ")
// })

//Import Routes 
const postsRoute = require('./routes/posts.js')

app.use('/posts', postsRoute)

//Routes 
app.get('/', (req,res)=>{
    res.send("we are on home");
})


//Connect to mongoDb
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    ()=>{console.log('connect to the db')
})

// Listen to the serve 
app.listen(3000);