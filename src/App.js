import React, {Component} from 'react';
import './App.css';

import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component{

  

  state = {
    users: [
      { userName: "Claponex", city: "Cali"},
      { userName: "HydroneXX", city: "Wuhan"},
      { userName: "Ciupamalau", city: "Benezuela"}
    ]
  }

  inputChanged = (event) => {
    this.setState({
      users: [
      { userName: event.target.value, city: "Cali"},
      { userName: "HydroneXX", city: "Wuhan"},
      { userName: "Ciupamalau", city: "Benezuela"}
    ]
    })

    console.log(event.target);  
  }

  render(){

    const style = {
      border: "1px solid black",
      padding: "30px",
      boxSizing: "border-box",
      margin: "0px 0px 50px  auto",
      borderBottom: "1px solid black",
    };

    return (
      <div className="App">
      <h1 style={style}>React playground</h1>
       <UserInput changed={this.inputChanged} userName={this.state.users[0].userName} />
       <UserOutput userName={this.state.users[0].userName} city={this.state.users[0].city} />
       <UserOutput userName={this.state.users[1].userName} city={this.state.users[1].city} />
       <UserOutput userName={this.state.users[2].userName} city={this.state.users[2].city} />       
      </div>
    );
  }
}

export default App;
