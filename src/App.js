import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordConformation: "",
      email: "",
      errors: [],
    };
    this.validateUserNameOnBlur = this.validateUserNameOnBlur.bind(this);
    this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this);
    this.validateEmailOnBlur = this.validateEmailOnBlur.bind(this);
    this.validateConfirmPassword = this.validateConfirmPassword.bind(this);
  }

  submitForm(event) {
    console.log(event);
    console.log("I am submitted");
  }
  validateUserNameOnBlur(event) {
    const username = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Username", username));
    this.setState({ username, errors });
  }
  validatePasswordOnBlur(event) {
    const password = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("password", password));
    this.setState({ password, errors });
  }
  validateEmailOnBlur(event) {
    const email = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateEmailFormat("Email", email));
    this.setState({ email, errors });
  }
  validateNotEmpty(fieldName, value) {
    if (value.length <= 0) {
      return `${fieldName} must be filled out`;
    }
  }

  validateEmailFormat(fieldName, value) {
    let [lhs, rhs] = value.split("@");
    lhs = lhs || "";
    rhs = rhs || "";
    if (lhs.length <= 0 || rhs.length <= 0) {
      return `${fieldName} must be in standard email formate`;
    }
  }

  validateConfirmPassword(event) {
    const passwordConformation = event.target.value;
    const errors = this.state.errors;
    if (passwordConformation !== this.state.password) {
      errors.push("password must match Password Confirmation");
    }
    this.setState({ passwordConformation, errors });
    console.log(passwordConformation,errors);
  }

  displayForm() {
    return (
      <div>
        Username: <input type="text" onBlur={this.validateUserNameOnBlur} />
        <br />
        Password: <input type="text" onBlur={this.validatePasswordOnBlur} />
        <br />
        Password Confirmation:{" "}
        <input type="text" onBlur={this.validateConfirmPassword} />
        <br />
        Email: <input type="text" onBlur={this.validateEmailOnBlur} />
        <br />
        <br />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }

  displayError() {
    return (
      <div className="errors">
        {this.state.errors.map((err, i) => (
          <p key={`err-${i}`}>{err}</p>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        Create Account
        {this.displayError()}
        <hr />
        {this.displayForm()}
      </div>
    );
  }
}

// onBlur = loose focus

export default App;
