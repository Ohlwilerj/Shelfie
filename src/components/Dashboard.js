import React, {Component} from 'react'

import Product from './Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {

  state={
    products: []
  }

  componentDidMount() {
    axios.get('/api/products').then(res => {
      this.setState({
        products: res.data
      })
    }).catch(err => {
      console.log(`ERROR: ${err}`)
    })
  }

  setID = (id) => {
    this.props.setID(id)
  }
  render() {
    const {products} = this.state
    return(
      <div className='dashboard'>
      {products.map(product => (
       <Product 
      key={product.id} 
      id={product.id} 
      name={product.name} 
      price={product.price} 
      image={product.image}
      setID={this.setID}/>
      ))}
      </div>
    )
  }
}