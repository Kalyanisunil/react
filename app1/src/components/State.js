import { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      counter: 5,
    };
  }
  render()
    {
    return (
      <div> <h1>Count value is:{this.state.counter}</h1>
        <button>Click</button>
     </div>
    );
  }
}
export default State;
