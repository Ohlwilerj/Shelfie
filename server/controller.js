module.exports = {
    addProduct: (req, res) => {
        const { name, price, imgUrl } = req.body
        const db = req.app.get('db')
        db.add_to_inventory([name, price, imgUrl]).then( result => {
         res.status(200).send(result)
        })
        .catch( error => {
            console.log(error)
         res.status(500).send('error adding product')
        })
    },

    getProducts: (req, res) => {
        const db = req.app.get('db')
         db.get_all_inventory().then( result => {
            res.status(200).send(result)
         })
        .catch( err0r => {
            console.log(error)
            res.status(500).send('error getting inventory')
         })  
    },

    deleteProduct: (req, res) => {
        const { id } = req.params
        const db = req.app.get('db')
        db.delete_product([id]).then( resonse =>{
         res.status(200).send()
         })
         .catch( error => {console.log(error)
         })
    },

    getProduct: (req, res) => {
         console.log('hit get one')
        const { id } = req.params
        const db = req.app.get('db')
        db.get_one_product([id]).then( result => {
        res.status(200).send(result)
        })
        .catch( error => {
        console.log(error)
        })
    },

    editProduct: (req, res) => {
        const { id } = req.params
        const { name, price, imgUrl } = req.body
        const db = req.app.get('db')
        db.update_product([name, price, imgUrl, id]).then( result => {
        res.status(200).send()
         })
        .catch( error => {
            console.log(error)
        })
    }
}