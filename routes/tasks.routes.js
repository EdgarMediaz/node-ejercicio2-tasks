const express = require('express');

// Controllers
const {
	getAllTasks,
	createTask,
	updateTask,
	deleteTask,
} = require('../controllers/tasks.controller');

// Middlewares
const { taskExists } = require('../middlewares/tasks.middlewares');
const {
	createTaskValidators,
} = require('../middlewares/validators.middlewares');

const tasksRouter = express.Router();

tasksRouter.get('/', getAllTasks);
tasksRouter.get('/:status', getAllTasks);

tasksRouter.post('/', createTaskValidators, createTask);

tasksRouter.patch('/:id', taskExists, updateTask);

tasksRouter.delete('/:id', taskExists, deleteTask);

module.exports = { tasksRouter };
