const { model, Schema} = require('mongoose')

const taskSchema = Schema({

        description: {
            type: String,
            required: true,
        },
        isCompleted: {
            type: Boolean,
            default: false,
        }
    }
)

const taskModel = model('Task', taskSchema)

module.exports = taskModel