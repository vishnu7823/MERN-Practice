const mongoose = require("mongoose");

const taskModel = require("../Models/DbModel");
//logic for post data
const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const task = await taskModel.create({ title, description });
    res.status(200).json({ message: "Task stored in DB" });
  } catch (err) {
    res.status(400).json({ message: "error creating task", err });
  }
};

//logic for getall data

const getTask = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ message: "error fetching data", err });
  }
};

//logic to get singledata
const getsingleTask = async (req, res) => {
  const { id } = req.params; //id are stored in params instead of body
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Task not found" });
  }

  try {
    const singleTask = await taskModel.findById(id);
    res.status(200).json(singleTask);
  } catch (err) {
    res.status(400).json({ message: "error fetching single data", err });
  }
};

//logic for update logic -using PATCH

const updateTask = async (req, res) => {
  const { id } = req.params; //id are stored in params instead of bod
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Task not found" });
  }

  try {
    const task = await taskModel.findByIdAndUpdate({
        _id:id
    },
        {
           ...req.body 

        })
        res.status(200).json(task)
  } catch (err){
    res.status(400).json({message:"error updating data",err})
  }
};

//logic to delete

const deleteTask = async(req,res)=>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "Task not found" });
      }
      try{
        const task = await taskModel.findByIdAndDelete(id);
        res.status(200).json(task)

      }catch(err){
        res.status(400).json({message:'error deleting',err})
      }

}



module.exports = { createTask, getTask, getsingleTask ,updateTask,deleteTask};
