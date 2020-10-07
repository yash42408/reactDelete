import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja';
class App extends Component {
  state = {
    ninjas: [
      { name: 'yash', age: 21, email: 'y@gmail.com' },
      { name: 'yash', age: 21, email: 'y1@gmail.com' },
      { name: 'yashsoni', age: 21, email: 'y2@gmail.com' }
    ]
  }
  addNinja = (ninja) => {
    //console.log(ninja);
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (email) => {
    // console.log(email);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.email !== email
    });
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Wellcome</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );

  }

}

export default App;
