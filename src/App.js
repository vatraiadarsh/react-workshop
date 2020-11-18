import React, { Component } from "react";
import "./App.css";
import Lifecycle from "./Lifecycle";
import LifecycleUnmount from "./LifecycleUnmount";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loading:true
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);
  }

  componentDidMount() {
    setTimeout(
      () => this.setState({ messages: ["Hello World", "How are    you?"], loading:false }),
      10000 // 10 seconds
    );
  }

  renderProfile() {
    if (this.state.loading) {
      return(<div>Loading...</div>)
    }
    if (this.state.messages?.length > 0) {
      return (
        <ul>
          {this.state.messages.map((msg, index) => (
            <li key={`msg-${index}`}>{msg}</li>
          ))}
        </ul>
      );
    } else {
      return <div>No Messages</div>;
    }
  }

  render() {
    return (
      <div>
        <Lifecycle />
        <hr />
        <div className="App">
          <h2>User Profile</h2>
          {this.renderProfile()}
        </div>

        <hr/>
        <LifecycleUnmount/>
      </div>
    );
  }
}
export default App;
