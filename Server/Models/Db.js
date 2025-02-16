const mongoose = require('mongoose')

const connectDb = async()=>{

    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDb connected')
    }catch(err){
        console.log(err)
    }

}
module.exports = connectDb