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

}


//update new identified user by user id
exports.update = (req,res)=>{

}

//delete the user with specified id in req
exports.delete = (req,res)=>{

}