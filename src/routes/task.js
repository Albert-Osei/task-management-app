const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/task.controller')
const TaskValidator = require('../validators/task')
const { verifyToken } = require('../middlewares/auth.middleware')

//GET, POST, DELETE, PUT

router.get('/', verifyToken, TaskController.getTasks)

router.get('/:id', verifyToken, TaskController.getSingleTask)

router.post('/', verifyToken, TaskValidator.validateNewTask, TaskController.addTask)

router.put('/:id', verifyToken, TaskController.updateTask)

router.delete('/:id', verifyToken, TaskController.removeTask)
 
module.exports = router