const TaskService = require('../services/task.service')

const getTasks = async (req, res, next) => {
    try{
        const response = await TaskService.getTasks();
        return res.status(response.code).json(response);
    }catch(error){
        next(error)
    }  
}

const getSingleTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await TaskService.getTaskById(id);
        return res.status(response.code).json(response);
    } catch (error) {
        next(error)
    }
}


const addTask = async (req, res, next) => {
    const { id } = req.data
    try {
        const response = await TaskService.addTask(req.body, id);
        return res.status(response.code).json(response);
    }catch(err){
        next(err)
    }
}


const updateTask = async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await TaskService.updateTask(id, req.body)
        return res.status(response.code).json(response);
    }catch (error) {
        next(error)
    }
}


const removeTask = async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await TaskService.removeTask(id)
        return res.status(response.code).json(response);
    } catch (error) {
        next(error)
    }   
}


module.exports = {
    getTasks,
    addTask,
    updateTask,
    removeTask,
    getSingleTask
}