const mongoose = require('mongoose')
const TaskModel = require('../models/task.model')
const { notFoundError, objectIdCastError } = require('../errors/mongodb.errors')
const { notAllowedFileldToUpdateError }= require('../errors/general.errors')
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

            if (!task) return notFoundError(this.res)
    
            this.res.status(200).send(task)
        } catch (e) {
            if (e instanceof mongoose.Error.CastError) {
                return objectIdCastError(this.res)
            }
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

            if (!taskToUpdate) {
                return notFoundError(this.res)
            }
    
            const allowedUpdates = ['isCompleted']
            const requestedUpdate = Object.keys(this.req.body)
    
            for (const update of requestedUpdate) {
                if (allowedUpdates.includes(update)) {
                    taskToUpdate[update] = this.req.body[update]
                } else {
                    return notAllowedFileldToUpdateError(this.res)
                }
            }
    
            await taskToUpdate.save()
            return this.res.status(200).send(taskToUpdate)
        } catch (e) {
            if (e instanceof mongoose.Error.CastError) {
                return objectIdCastError(this.res)
            }
            this.res.status(500).send(e.message)
        }
    }

    async delete() {
        try {
            const taskId = this.req.params.id
            const taskToDelete = await TaskModel.findById(taskId)

            if (!taskToDelete) return notFoundError(this.res)
        
            const deleteTask = await TaskModel.findByIdAndDelete(taskId)
            this.res.status(200).send(deleteTask)
        } catch (e) {
            if (e instanceof mongoose.Error.CastError) {
                return objectIdCastError(this.res)
            }
            this.res.status(500).send(e.message)
        }
    }
}

module.exports = TaskController