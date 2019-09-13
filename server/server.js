require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

const app = express()

app.use(express.json())

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/inventory', ctrl.addToInventory)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Was up ya'll?`))
})