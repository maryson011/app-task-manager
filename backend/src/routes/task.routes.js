const Express = require('express')
const TaskModel = require('../models/task.model')

const router = Express.Router()

router.get('/', async (req, res) => {
    try {
        const tasks = await TaskModel.find({})
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send(e.message)
    }
})
router.get('/:id', async (req, res) => {
    try {
        const task = await TaskModel.findById(req.params.id)

        if (!task) return res.status(404).send("Essa tarefa não foi encontrada!")
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send(e.message)
    }
})
router.post('/', async (req, res) => {
    try {
        const newTask = new TaskModel(req.body)
    
        await newTask.save()
    
        res.status(201).send(newTask)
    } catch (e) {
        res.status(500).send(e.message)
    }
})
router.patch('/:id', async (req, res) => {
    try {
        const taskToUpdate = await TaskModel.findById(req.params.id);

        const allowedUpdates = ['isCompleted']
        const requestedUpdate = Object.keys(req.body)

        for (update of requestedUpdate) {
            if (allowedUpdates.includes(update)) {
                taskToUpdate[update] = req.body[update]
            } else {
                return res.status(500).send('Um ou mais campos não são editáveis')
            }
        }

        await taskToUpdate.save()
        return res.status(200).send(taskToUpdate)
    } catch (e) {
        res.status(500).send(e.message)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const taskId = req.params.id
        const taskToDelete = await TaskModel.findById(taskId)
        if (!taskToDelete) {
            return res.status(404).send("Essa tarefa não foi encontrada!")
        }
        const deleteTask = await TaskModel.findByIdAndDelete(taskId)
        res.status(200).send(deleteTask)
    } catch (e) {
        res.status(500).send(e.message)
    }
})


module.exports = router