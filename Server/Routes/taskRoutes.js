const express = require('express')

const router = express.Router();
const {createTask,getTask,getsingleTask,updateTask,deleteTask} = require('../Controllers/taskController')

router.post('/',createTask)
router.get('/',getTask)
router.get('/:id',getsingleTask)
router.patch('/:id',updateTask)
router.delete('/:id',deleteTask)


module.exports = router