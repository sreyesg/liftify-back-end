const express = require('express')
const router = express.Router()
const Routine = require('../models/routine')
const verifyToken = require('../middleware/verifyToken')

router.use(verifyToken)

router.post('/', async(req, res) => {
    try {
        req.body.author = req.user._id
        const routine = await Routine.create(req.body)
        routine._doc.author = req.user
        res.status(200).json(routine)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/', async(req, res) => {
    try {
        const routines = await Routine.find()
            .populate('author')
            .sort({ createdAt: 'desc' })
        res.status(200).json(routines)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:routineId', async(req, res) => {
    try {
        const routine = await Routine.findById(req.params.routineId)
            .populate('author')
        res.status(200).json(routine)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/:routineId', async(req, res) => {
    try {
        const routine = await Routine.findById(req.params.routineId)
        if(!routine.author.equals(req.user._id)){
            res.status(403).send('Unauthorized to modify this routine')
        }
        const updatedRoutine = await Routine.findByIdAndUpdate(
            req.params.routineId, 
            req.body, 
            {new: true})

            updatedRoutine._doc.author=req.user

        res.status(200).json(updatedRoutine)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:routineId', async(req, res) => {
    try {
        const routine = await Routine.findById(req.params.routineId)
        if(!routine.author.equals(req.user._id)){
            res.status(403).send("Unauthorized to delete this routine")
        }
        const deletedRoutine = await Routine.findByIdAndDelete(req.params.routineId)
        res.status(200).json(deletedRoutine)
        
    } catch (error) {
        res.status(500).json(error)
    }

})

module.exports = router