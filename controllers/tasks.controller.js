// Models
const { Task } = require('../models/task.model');

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.findAll({
			where: { status: 'active' },
		});

		res.status(200).json({
			status: 'success',
			data: {
				tasks,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

const createTask = async (req, res) => {
	try {
		const { title, userId, startDate, limitDate } = req.body;

		const newTask = await Task.create({ title, userId, startDate, limitDate });

		// 201 -> Success and a resource has been created
		res.status(201).json({
			status: 'success',
			data: { newTask },
		});
	} catch (error) {
		console.log(error);
	}
};

const updateTask = async (req, res) => {
	try {
		const { finishDate } = req.body;
		const { task } = req;

		// Method 2: Update using a model's instance
		await task.update({ finishDate });

		res.status(200).json({
			status: 'success',
			data: { task },
		});
	} catch (error) {
		console.log(error);
	}
};

const deleteTask = async (req, res) => {
	try {
		const { task } = req;

		// Method 3: Soft delete
		await task.update({ status: 'deleted' });

		res.status(204).json({ status: 'success' });
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getAllTasks,
	createTask,
	updateTask,
	deleteTask,
};
