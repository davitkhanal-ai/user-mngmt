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

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // controls which domain have access
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE'); //this handles incoming request
    next();
  });

//loading assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))

//loading router
app.use('/',require("./server/routes/router"))

app.listen(PORT, ()=>{
    console.log(`server has started in ${PORT}`)
})