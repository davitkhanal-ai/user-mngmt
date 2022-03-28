const Userdb = require("../models/model");



//create and save user
exports.create = (req,res)=>{
    //validate the request
    if(!req.body){
        res.status(400).send({ message:"content cannot be empty!"})
        return;
    }

    //new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        gender: req.body.gender,
        status: req.body.status
    })

    //saving data
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({ 
                message: err.message || "error occured"
            })
        })

}


//retrieve and retun all user/signal user
exports.find = (req,res)=>{
    Userdb.find()
    .then(user =>{
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({ message: err.message || "error occured"})
    })
}


//update new identified user by user id
exports.update = (req,res)=>{
    if(!req.body){
        return res.status(400).send({message: "data update cannot be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

//delete the user with specified id in req
exports.delete = (req,res)=>{

}