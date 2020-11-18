import React, { Component } from "react";
import "./App.css";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = { cycle: 0 };
    setInterval(() => this.setState({ cycle: this.state.cycle + 1 }), 5000);
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  shouldComponentUpdate() {
    console.log("Should Component Update");
    return true;
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  render() {
    console.log("Render");
    return <div className="Lifecycle">Hello Lifecycle: Cycle {this.state.cycle}</div>;
  }
}
export default Lifecycle;
