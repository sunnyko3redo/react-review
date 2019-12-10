import React from "react";
import "./App.css";
import Card from "./Components/Card";
import data from "./data";
import Lifecycle from "./Components/Lifecycle";
import { SSL_OP_NO_TLSv1_1 } from "constants";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: data,
      i: 0
    };
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick = e => {
    if (this.state.i > 24){
     this.setState({i: 0})
    } if(this.state.i > 0){
      this.setState({i: 24})
    }
    if (e.target.name === "next") {
      this.setState({
        i: this.state.i + 1
      });
    }
    else {
      this.setState({
        i: this.state.i - 1
    
      });
    }
  };
  render() {
    return (
      <div className="App">
        <nav>
          <h1 className='home'>Home</h1>
        </nav>
        <div className="black">
          <Card person={this.state.people[this.state.i]} />
          <button className='button2' name="previous" onClick={this.handleClick}>
            Previous
          </button>
          <button className='button1' name="next" onClick={this.handleClick}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
export default App;
