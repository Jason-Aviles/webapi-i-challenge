// implement your API here

//imported express and the DB
const express = require("express");
const DB = require("./data/db");

//used expressed and called it server
const server = express();

// made express able to use json
server.use(express.json());

//made my first route to the root /

server.get("/", (req, res) => {
  res.send("hello world");
});

server.get("/user", (req, res) => {
  DB.find()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({  error: "The users information could not be retrieved." });
    });
});


server.get("/user/:id", (req, res) => {
    const { id } = req.params;
    DB. findById(id)
      .then(userId => {
        res.status(201).json(userId);
      })
      .catch(err => {
        res.status(500).json({message: "The user with the specified ID does not exist."});
      });
  });


server.post("/user", (req, res) => {
  const UserInfo = req.body;

  DB.insert(UserInfo)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "error cant post" });
    });
});


server.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  DB.remove(id)
    .then(userId => {
      res.status(201).json(userId);
    })
    .catch(err => {
      res.status(500).json({ message: "error cant post" });
    });
});





server.put("/user/:id", (req,res)=>{
    const { id } = req.params;
    const UserInfo = req.body;
    DB.update(id,UserInfo).then(
        updated => {if(updated){res.status(200).json(updated)}}
    ).catch(err =>{
        res.status(500).json({message:'error cant post'})
    } )
})


//created port
const port = 8000;

// listen to port
server.listen(port, () => console.log(`api is running on port ${port}`));
