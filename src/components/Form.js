import React, { Component } from 'react'
import '../components/form.css'

class Form extends Component {

    constructor() {
        super() 
        this.state = {
            id: '',
            img: '',
            product: '',
            price: '',
        }
        this.baseState = this.state
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log(event.target.name)
    }
    resetForm() {
        this.setState(this.baseState)
    }


    render() {
        return (
            <div className='form'>
                    <img src={this.state.url} alt='' />
                    <h3>Image URL</h3>
                    <input type='text' name='img' value={this.state.img} onChange={(e) => this.handleChange(e)}/>
                    <h3>Product Name:</h3>
                    <input type='text' name='product' value={this.state.product} onChange={(e) => this.handleChange(e)} />
                    <h3>Price:</h3>
                    <input type='number' name='price' placeholder="0" value={this.state.price} onChange={(e) => this.handleChange(e)} />
                <div className="buttons">
                    <button onClick={() => this.resetForm()}>Cancel</button>
                    <button onClick={() => this.props.addProduct()}>Add to inventory</button>
                
                </div>
                
            </div>
        )
    }
}
export default Form