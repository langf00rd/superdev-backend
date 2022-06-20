const express = require('express')
const app = express()
const port = process.env.PORT || 2003
const postRoute = require('./routes/post.route')
const connectToMongoDB = require('./config')
const cors = require('cors')

connectToMongoDB()

app.use(cors())
app.use(express.json())
app.use('/post', postRoute)

app.get('/', (req, res) => { res.send('Superdev API V1 🔥') })
app.get('/favicon.ico', (req, res) => { res.send('/favicon.ico'); })

app.listen(port, () => { console.log('server listening on port >_', port) })