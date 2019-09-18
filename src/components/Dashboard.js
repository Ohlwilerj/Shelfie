import React, { Component } from 'react'
import axios from 'axios'
import Product from '../components/Product/Product'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
          inventory: [],
          updateProduct: null
        }
    }
    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`).then( res => {
            this.getAll()
        })
        .catch( error => {
            console.log(error)
        })
    }
    componentDidMount = () => {
        this.getAll()
    }
    getAll = () => {
        axios.get('/api/inventory')
        .then( res => {
            this.setState({
            inventory: res.data
            })
        })
        .catch( error => {
            console.log(error)
        })
    }
    setEdit = (id) => {
        this.setState({
            updateProduct: id
        })
    }
    render() {
        let mappedProducts = this.state.inventory.map( (element, index) => {
            return <Product 
                    key = {index} 
                    product = {element} 
                    deleteProduct={this.deleteProduct} 
                    setEdit={this.setEdit} />
        })
        return (
            <div>
                {mappedProducts}
            </div>
        )
    }
}