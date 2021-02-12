//import and use environmental variables
const dotenv = require("dotenv").config();

//import express
const express = require("express");

//imports cors... IDK WHY WE USE THIS
const cors = require("cors");

//import path
const path = require("path");

//use express on app
const app = express();

//Define a port using env variable, port
const port = process.env.PORT || 8675;

//IDK WHY WE USE THIS...
app.use(cors());

//set up app/express to return json
app.use(express.json())

//set up the build
app.use(express.static(path.join(__dirname,"client/build")))

//use the server and then listen, for science this time.
app.use('/api/*',(_,res)=>{
    res.json({greeting:`hello bubblegum from data.`, poem:`Oh where oh where has my little dog gone?`})
})
app.use("*",(_,res)=>{
    res.sendFile(path.join(__dirname,"client/build","index.html"))
})
app.listen(port,()=>{
    console.log(`server listening at port:${port}`)
})