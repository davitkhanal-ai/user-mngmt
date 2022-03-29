const axios = require('axios')


exports.homeRoutes = (req,res) =>{
    //get request for api/users
    axios.get("https://clinquant-pegasus-27b4c0.netlify.app/api/users")
    .then(function(response){
        
        res.render('index', {users:response.data})
    })
    .catch(err =>{
        res.send(err)
    })
    
}
exports.add_user = (req,res) =>{
    res.render('add_user');
}
exports.update_user = (req,res) =>{
    //update request for api/users
    axios.get("https://clinquant-pegasus-27b4c0.netlify.app/api/users", { params : { id : req.query.id }})
    .then(function(userdata){
        
        res.render('update_user', {user :userdata.data})
    })
    .catch(err =>{
        res.send(err)
    })
}

