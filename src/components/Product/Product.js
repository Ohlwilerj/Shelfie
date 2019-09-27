import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Product extends Component {

  delete = () => {
    let {id} = this.props
    axios.delete(`/api/products/${id}`).then(() => {
      window.location.reload()
    })
  }

  render() {

    let { name, price, image, id } = this.props

    return (


      <div className='productcontainer'>
        <img src={image} alt={name} className='product_image' />
        <div className='imgandtext'>
          <div className='producttextholder'>
            
            <h3 className='nametext'>{name}</h3>
            <h3 className='pricetext'>${price}</h3>
          </div>
          <div className='productbuttonsholder'>

          <Link to={`/edit/${id}`}><button className='productbuttons'
          onClick={() => this.props.setID(id)}>Edit</button></Link>
          <button className='productbuttons' onClick={this.delete}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}