import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import noImage from '../assets/no_image.png'

export default class Form extends Component {

  state = {
    edit: false,
    defaultImg: false,
    name: '',
    price: 0,
    imgUrl: ''
  }

  componentDidUpdate(oldProps, ) {
    if (oldProps !== this.props) {
      if (this.props.updateID !== 0) {
        this.setState({
          edit: true
        })
      }
      let { name, price, imgUrl } = this.props.props
      this.setState({
        name: name,
        price: price,
        imgUrl: imgUrl
      })
    }
  }
  postNewProduct = () => {
    let { name, price, imgUrl } = this.state
    let addProduct = {
      name: name,
      price: price,
      image: imgUrl
    }
    axios.post('/api/products', addProduct).then(() => {
      this.clearState()
    })
  }

  updateProduct = () => {
    let update = {
      name: this.state.name,
      price: this.state.price,
      image: this.state.imgUrl
    }
    axios.put(`/api/products/${this.props.updateID}`, update).then(() => {
      this.clearState()
    })
  }

  clearState = () => {
    this.setState({
      name: '',
      price: 0,
      imgUrl: '',
      edit: false
    })

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  defaultTrue = () => {
    this.setState({
      defaultImg: true
    })
  }

  render() {
    let url
    if(this.state.imgUrl === ''){url = noImage
    } else {url = this.state.imgUrl}
    return (

        <div className="form">
          <img className='form_image_preview'
            src={url}
            alt={this.state.name}
          />
          <div className="form_inputs">
            <p>Image URL:</p> 
            <input className='form_inputs'
              type="text"
              name='imgUrl'
              onChange={this.handleChange}
              value={this.state.imgUrl} /> 

            <p>Name:</p> 
            <input className='form_inputs'
              type="text"
              name='name'
              onChange={this.handleChange}
              value={this.state.name} /> 

            <p>Price:</p> 
            <input className='form_inputs'
              type="number"
              name='price'
              onChange={this.handleChange}
              value={this.state.price} />


            <div className="button_holder">
              <Link to='/'>
                <button className='cancel' onClick={this.clearState}>Cancel</button>
              </Link>
              <div>{this.state.edit ? <Link to='/'>
                <button className='submit' onClick={this.updateProduct}>Save Changes</button>
              </Link> : <Link to='/'><button
                className='submit'
                onClick={this.postNewProduct}>Add to Inventory</button></Link>}</div>
            </div>
          </div>
        </div>
     
    )
  }
}
