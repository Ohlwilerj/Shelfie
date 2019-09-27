import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Dashboard from './components/Dashboard'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'


export default class App extends Component {

  state = {
    updateID: 0,
    name: '',
    price: '',
    imgUrl: ''
  }

  setID = (id) => {

    axios.get(`/api/products/${id}`).then(res => {
      let { name, price, image } = res.data[0]
      this.setState({
        updateID: id,
        name: name,
        price: price,
        imgUrl: image,
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className='body'>
            <Switch>
              <Route exact path='/' render={() => <Dashboard
                setID={this.setID}
                inventory={this.state.inventory} />} />
              <Route path='/add' render={() => <Form setID={this.setID}
                updateID={this.state.updateID}
                props={this.state} />} />
              <Route path='/edit/:id' render={() => <Form setID={this.setID}
                updateID={this.state.updateID}
                props={this.state} />} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
