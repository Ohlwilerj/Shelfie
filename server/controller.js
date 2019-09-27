module.exports = {
  getAllInventory (req, res) {
    const db = req.app.get('db')
    db.get_all_inventory()
    .then(result => {
      res.status(200)
      .send(result)
    })
    .catch(err => {
      console.log(`error: ${err}`)
      res.status(500).send('Yo error')
    })
  },

  getProduct (req, res) {
    const db = req.app.get('db')
    let {id} = req. params
    db.get_one_product(id)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      console.log(`error: ${err}`)
      res.status(500).send('Yo error')
    })
  },

  addProduct (req,res) {
    const db = req.app.get('db')
    let {name, price, image} = req.body
    db.add_to_inventory(name, price, image)
    .then(res.status(200).send({message: "Added"}))
    .catch(err => {
      console.log(`error: ${err}`)
      res.status(500).send('Yo error')
    })
  },

  deleteProduct (req,res) {
    const db = req.app.get('db')
    let {id} = req.params
    const deleteProduct = db.delete_product([id])
    res.status(200).send(deleteProduct)
    
  },

  updateProduct (req, res) {
    const db=req.app.get('db')
    let {name, price, image} = req.body
    let {id} = req.params

    db.update_product(id, name, +price, image)
    .then(result => {
      res.sendStatus(200)
    })
    .catch(err => {
      console.log(`error: ${err}`)
      res.status(500).send('Yo error')
    })
  }
}