const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
    console.log(`connected to ${mongoose.connection.name}`)
})


app.use(express.json())






app.listen(3000, ()=>{
    console.log('app ready on port 3000')
})
