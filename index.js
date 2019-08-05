// implement your API here

//imported express and the DB
const express = require('express')
const DB = require('./data/db')

//used expressed and called it server
const server = express()

// made express able to use json
server.use(express.json())

//made my first route tothe root /

server.get('/',(req,res)=>{
    res.send('hello world')
})

