// implement your API here

//imported express and the DB
const express = require('express')
const DB = require('./data/db')

//used expressed and called it server
const server = express()

// made express able to use json
server.use(express.json())

//made my first route to the root /

server.get('/',(req,res)=>{
    res.send('hello world')
})

server.get('/user',(req,res)=>{
    DB.find().then(user =>{res.status(200).json(user)} ).catch(err =>{
        res.status(500).json({message:'error cant get'})
    } )
})


const port = 8000

server.listen(port, () => console.log(`api is running on port ${port}`))