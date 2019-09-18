require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

// TOP LEVEL MIDDLEWARE
app.use(express.json())



app.post('/api/product', ctrl.addProduct)
app.get('/api/inventory', ctrl.getProducts)
app.get('/api/product/:id', ctrl.getProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)
app.put('/api/product/:id', ctrl.editProduct)



massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`I made ${SERVER_PORT} dollars  yesterday`))
})
.catch( error => {
    console.log(error)
})
