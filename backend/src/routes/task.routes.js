const Express = require('express')

const TaskController = require('../Controllers/task.controller')
const TaskModel = require('../models/task.model')

const router = Express.Router()

router.get('/', async (req, res) => {
    return new TaskController(req, res).get()
})
router.get('/:id', async (req, res) => {
    return new TaskController(req, res).getById()
})
router.post('/', async (req, res) => {
    return new TaskController(req, res).create()
})
router.patch('/:id', async (req, res) => {
    return new TaskController(req, res).update()
})
router.delete('/:id', async (req, res) => {
    return new TaskController(req, res).delete()
})


module.exports = router