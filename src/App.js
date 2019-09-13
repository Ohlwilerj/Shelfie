import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Header from './components/Header'
import axios from 'axios'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      inventory: []
    }
  }
  
  addToInventory(body) {
    axios.post('api/inventory', body).then(res => {
      this.this.setState({inventory: res.data})
    })
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Dashboard 
          updatedList={this.state.inventory} />
        <Form 
          addProduct={this.addToInventory}/>
      </div>
    );
  }

} 
export default App;
