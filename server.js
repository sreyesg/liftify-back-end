const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const testJWTRouter = require('./middleware/verifyToken')
const usersRouter = require('./controllers/users')
const routinesRouter = require('./controllers/routines')

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
    console.log(`connected to ${mongoose.connection.name}`)
})

app.use(express.json())
app.use(cors({}))
app.use('/jwt-test', testJWTRouter)
app.use('/users', usersRouter)
app.use('/routines', routinesRouter)
app.get('/', (req, res) => {
    res.send('Welcome to liftify')
})





app.listen(PORT, ()=>{
    console.log(`app ready on port ${PORT}`)
})
