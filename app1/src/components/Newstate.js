import { Component } from "react";

class Newstate extends Component {
  constructor() {
    super();
    this.Newstate = {
      myname: "liya",
    };
  }
  render() {
    return (
      <div>
        <h1>MY NAME IS : {this.Newstate.myname}</h1>
        <button>click</button>
      </div>
    );
  }
}

export default Newstate;
