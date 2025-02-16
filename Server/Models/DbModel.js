const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    title:{
        type:"String",
        require:true
    },
    description:{
        type:"String",
        require:true

    }
        

},{
    timestamps:true
})

const Taskmodel = mongoose.model("Task",taskSchema)

module.exports = Taskmodel;
