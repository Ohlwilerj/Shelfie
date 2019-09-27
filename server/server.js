require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

app.use(express.json())

app.delete(`/api/products/:id`, ctrl.deleteProduct)
app.get('/api/products', ctrl.getAllInventory)
app.put(`/api/products/:id`, ctrl.updateProduct)
app.get('/api/products/:id', ctrl.getProduct)
app.post('/api/products', ctrl.addProduct)

massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
  app.listen(SERVER_PORT, () => console.log(`Say hello ${SERVER_PORT} times!`))
})