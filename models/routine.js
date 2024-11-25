const mongoose = require('mongoose')

const routineSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true,
            enum: ['upperBody', 'lowerBody', 'core']
        },
        author: {
            type: mongoose.Schema.Types.ObjectId, ref: 'User'
        },
    }, 
    { timestamps: true }
)
const Routine = mongoose.model('Routine', routineSchema)
module.exports = Routine