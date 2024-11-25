const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

const SALT_VALUE = 10


router.post('/signup', async(req, res) => {
    try {
        console.log(req.body)
        const userInDatabase = await User.findOne({ username: req.body.username })
        if(userInDatabase){
            res.json({error: "User already exist"})
        }

        const user = await User.create({
            username: req.body.username,
            hashedPassword: bcrypt.hashSync(req.body.hashedPassword, SALT_VALUE)
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.post('/signin', async(req, res) => {
    const user = await User.findOne({ username: req.body.username })
    if(user && bcrypt.compareSync(req.body.hashedPassword, user.hashedPassword) ){
        res.json({mgs:'welcome'})
    }else {
        res.status(401).json({ error: "invalid username or password"})
    }
})

module.exports = router