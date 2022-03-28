const express = require('express')
const dotenv = require('dotenv').config()
const morgan = require('morgan')
const bodyparser = require("body-parser")
const path = require("path")

const app = express()
const PORT =process.env.PORT

//log request
app.use(morgan("tiny"))

//parse request 
app.use(bodyparser.urlencoded({ extended:true}))

//set view engine
app.set("view engine", "ejs")
//app.set("views",path.resolve(__dirname, "views/ejs"))


//loading assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))

//getting and listening
app.get('/', (req,res)=>{
    res.send("Crud Application")
})

app.listen(PORT, ()=>{
    console.log(`server has started in ${PORT}`)
})