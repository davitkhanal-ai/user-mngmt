const express = require('express')
const dotenv = require('dotenv').config()

const app = express()

const PORT =process.env.PORT

app.get('/', (req,res)=>{
    res.send("Crud Application")
})

app.listen(PORT, ()=>{
    console.log(`server has started in ${PORT}`)
})