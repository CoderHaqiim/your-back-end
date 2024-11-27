const express = require('express')
const router = express.Router()
const Tasks = require('../models/task')
const {verifyToken} = require('./auth')
const {checkSchema} = require('express-validator')
const {taskValidation, validateRequest} = require('../validation.js')

const {getAllTasks, updateProperty, createNewTask, deleteSingleTask, deleteAllTasks} = require('../controllers/taskController')

//the route to fetch all tasks. After you deploy this backend, it becomes https://your-site-url/api/tasks/all
router.get('/tasks/all',verifyToken,getAllTasks)

//the route to create a single task. After you deploy this backend, it becomes https://your-site-url/api/tasks/create
router.post('/tasks/create', verifyToken,checkSchema(taskValidation),validateRequest, createNewTask)

//the route to delete a single task. After you deploy this backend, it becomes https://your-site-url/api/tasks/dropone/:id
router.delete('/tasks/dropone/:id', verifyToken, deleteSingleTask)

//the route to edit a task. After you deploy this backend, it becomes https://your-site-url/api/tasks/edit/:id
router.patch('/tasks/edit/:id', verifyToken,checkSchema(taskValidation),validateRequest,updateProperty)

//the route to delelte all tasks. After you deploy this backend, it becomes https://your-site-url/api/tasks/dropall
router.delete('/tasks/dropall', verifyToken, deleteAllTasks)


module.exports = router
