const express = require('express') 
const api = express.Router()
const tasks = require('../../routes/task')
const users = require('../../routes/user')

api.get("/", (req, res) => res.status(200).json({
    status: 'success',
    message: 'Welcome to Task Management API'
}))

api.use('/tasks', tasks)
api.use('/users', users)


module.exports = api