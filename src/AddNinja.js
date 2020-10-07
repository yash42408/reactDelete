import React, { Component } from 'react';
class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    email: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.addNinja(this.state);

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="name">Enter Name</label>
          <input type="text" id="name" onChange={this.handleChange} /><br />
          <label for="age">Enter age</label>
          <input type="text" id="age" onChange={this.handleChange} /><br />
          <label for="email">Enter Email</label>
          <input type="text" id="email" onChange={this.handleChange} /><br />

          <button>submit</button>
        </form>
      </div>
    )

  }


}
export default AddNinja