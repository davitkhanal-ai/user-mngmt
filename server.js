const express = require('express')
const dotenv = require('dotenv').config()
const morgan = require('morgan')
const bodyparser = require("body-parser")
const path = require("path")
const connectDB = require("./server/database/connection")
const app = express()
const PORT =process.env.PORT



//log request
app.use(morgan("tiny"))

//conection file
connectDB();

//parse request 
app.use(bodyparser.urlencoded({ extended:true}))

//set view engine
app.set("view engine", "ejs")
//app.set("views",path.resolve(__dirname, "views/ejs"))


//loading assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))

//loading router
app.use('/',require("./server/routes/router"))

app.listen(PORT, ()=>{
    console.log(`server has started in ${PORT}`)
})