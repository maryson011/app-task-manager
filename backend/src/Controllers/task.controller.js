const TaskModel = require('../models/task.model')

class TaskController {
    constructor(req, res) {
        this.req = req
        this.res = res
    }

    async get() {
        try {
            const tasks = await TaskModel.find({})
            this.res.status(200).send(tasks)
        } catch (e) {
            this.res.status(500).send(e.message)
        }
    }

    async getById() {
        try {
            const task = await TaskModel.findById(this.req.params.id)
    
            if (!task) return this.res.status(404).send("Essa tarefa não foi encontrada!")
            this.res.status(200).send(task)
        } catch (e) {
            this.res.status(500).send(e.message)
        }
    }

    async create() {
        try {
            const newTask = new TaskModel(this.req.body)
            await newTask.save()
        
            this.res.status(201).send(newTask)
        } catch (e) {
            this.res.status(500).send(e.message)
        }
    }

    async update() {
        try {
            const taskToUpdate = await TaskModel.findById(this.req.params.id);
    
            const allowedUpdates = ['isCompleted']
            const requestedUpdate = Object.keys(this.req.body)
    
            for (const update of requestedUpdate) {
                if (allowedUpdates.includes(update)) {
                    taskToUpdate[update] = this.req.body[update]
                } else {
                    return this.res.status(500).send('Um ou mais campos não são editáveis')
                }
            }
    
            await taskToUpdate.save()
            return this.res.status(200).send(taskToUpdate)
        } catch (e) {
            this.res.status(500).send(e.message)
        }
    }

    async delete() {
        try {
            const taskId = this.req.params.id
            const taskToDelete = await TaskModel.findById(taskId)
            if (!taskToDelete) {
                return this.res.status(404).send("Essa tarefa não foi encontrada!")
            }
            const deleteTask = await TaskModel.findByIdAndDelete(taskId)
            this.res.status(200).send(deleteTask)
        } catch (e) {
            this.res.status(500).send(e.message)
        }
    }
}

module.exports = TaskController