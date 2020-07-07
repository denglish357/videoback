const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongodb = require('mongodb')
const {getClient} = require('./db')
const app = express()
app.use(bodyParser.json())
app.use(cors())
const objectId = require('mongodb').ObjectId;
app.get('/', (req,res) => {
  res.send('hello')
})

const {router} = require('./router')


router(app)


app.listen(5000, () => {
  console.log('server started on port 5000')
})