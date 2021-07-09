import React, { Component } from "react";
import axios from "axios";
export default class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: "abhi",
      email: "",
      password: "",
      password2: "",
      errors: "",
    };
    console.log(JSON.stringify(super.state)); // toString()
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.state.email = "abhi@gmail.com";

    console.log(JSON.stringify(this.state)); // toString()
    console.log("hello from register");
    axios.post(api, data, headerspec);
    // api: http://localhost:5000/api/users/register
  };
  onChange = (e) => {
    // 1. name attribute : e.target.name
    // 2. updated value from the controller : e.target.value
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div class="register">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <h1 class="display-4 text-center">Sign up</h1>
              <p class="lead text-center">Create your DevConnector account</p>
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Name"
                    name="name"
                    required
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
