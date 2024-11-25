const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        category: {
            type: String,
            enum: ['upperBody', 'lowerBody', 'core']
        },
        sets: Number,
        repetitions: Number,
        weight: Number
    }
)

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
        exercises: [exerciseSchema]
    }, 
    { timestamps: true }
)
const Routine = mongoose.model('Routine', routineSchema)
module.exports = Routine