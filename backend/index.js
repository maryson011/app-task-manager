const express = require('express')
const dotenv = require('dotenv')

const connectToDatabase = require('./src/database/mongoose.database')
const TaskModel = require('./src/models/task.model')

dotenv.config()
const app = express()
app.use(express.json())

connectToDatabase()

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await TaskModel.find({})
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

app.post('/tasks', async (req, res) => {
    try {
        const newTask = new TaskModel(req.body)
    
        await newTask.save()
    
        res.status(201).send(newTask)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

app.delete('/tasks/:id', async (req, res) => {
    try {
        const taskId = req.params.id
        const taskToDelete = await TaskModel.findById(taskId)
        if (!taskToDelete) {
            return res.status(500).send("Essa tarefa não foi encontrada!")
        }
        const deleteTask = await TaskModel.findByIdAndDelete(taskId)
        res.status(200).send(deleteTask)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

app.listen(8000, () => console.log('Listening on port 8000!'))
