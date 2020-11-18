import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSecrete: false,
    };
    this.toggleSecreteMessage = this.toggleSecreteMessage.bind(this);
  }

  secreteMessage() {
    return <div className="secret-message">I am the secret message!</div>;
  }
  toggleSecreteMessage() {
    this.setState({ showSecrete: !this.state.showSecrete });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleSecreteMessage}>
          Click to show the secret message!
        </button>
        {this.state.showSecrete ? this.secreteMessage() : null}
      </div>
    );
  }
}

export default App;
