const mongoose = require("mongoose")

const connectDB = async () =>{
    try {
        //connection string
        const con = await mongoose.connect(
            process.env.MONGO_URI,
            { useNewUrlParser: true, 
            useUnifiedTopology: true}
        )
        console.log("MongoDb Connected")
    } catch (error) {
            console.log(error)
    }
}

module.exports = connectDB