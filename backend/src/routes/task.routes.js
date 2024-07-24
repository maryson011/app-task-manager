const Express = require('express')

const TaskController = require('../Controllers/task.controller')
const TaskModel = require('../models/task.model')

const router = Express.Router()

router.get('/', async (req, res) => {
    return new TaskController(req, res).getTasks()
})
router.get('/:id', async (req, res) => {
    return new TaskController(req, res).getTaskById()
})
router.post('/', async (req, res) => {
    return new TaskController(req, res).postTask()
})
router.patch('/:id', async (req, res) => {
    return new TaskController(req, res).patchTaskById()
})
router.delete('/:id', async (req, res) => {
    return new TaskController(req, res).deleteTaskById()
})


module.exports = router