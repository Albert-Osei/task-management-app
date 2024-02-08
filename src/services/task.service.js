const { runQuery } = require('../config/database.config')
const { findTaskByTitle, addTask: addTaskQuery, removeTaskQuery, updateTaskQuery, getAllTasks, findTaskById } = require('../queries/task')


const getTasks = async () => {

    const tasks = await runQuery(getAllTasks);
    return {
        status: 'success',
        code: 200,
        message: 'Tasks fetched successfully',
        data: tasks
    }
}

const getTaskById = async (id) => {
    const task = await runQuery(findTaskById, [id]);
    return {
        status: 'success',
        code: 200,
        message: 'Task fetched successfully',
        data: task
    }
}

const addTask = async (body, user_id) => {
    const { title, description } = body

    const task = await runQuery(findTaskByTitle, [title]);
    if(task.length > 0){
        throw { 
            status: 'error',
            message: 'Task already exists',
            code: 409,
            data: null
        }
    }

    const response = await runQuery(addTaskQuery, [title, description, user_id]);

    return {
        status: 'success',
        message: 'Task added successfully',
        code: 201,
        data: response[0]
    }
}

const updateTask = async(id, body) => {
    const { title, description } = body;

    const task = await runQuery(findTaskById, [id]);
    
   if (task.length === 0) {
       throw{
           status: "error",
           message: "Task not found",
           code: 400,
           data: null
       };
   }
   const response = await runQuery(updateTaskQuery, [title, description, id]);
   return {
       status: "success",
       message: "Task updated successfully",
       code: 200,
       data: response[0],
   };
}

const removeTask = async (id) => {
    const task = await runQuery(findTaskById, [id]);
    if (task.length === 0) {
        throw {
            status: "error",
            message: "Task not found",
            code: 400,
            data: null
        };
    }
    const response = await runQuery(removeTaskQuery, [id]);

    return {
        status: "success",
        message: "Task deleted successfully",
        code: 200,
        data: response[0]
    };
} 

module.exports = {
    getTasks,
    addTask,
    updateTask,
    removeTask,
    getTaskById
}