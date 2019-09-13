module.exports = {
    getInventory: (req,res) => {
        const db = req.app.get('db')
        db.get_all_inventory().then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    addToInventory: (req, res) => {
        const db = req.app.get('db')
        const {product_name, price, image} = req.body 
        db.add_to_inventory({product_name, price, image})
        .then(result => {res.status(200).send(result)
        })
    }

}