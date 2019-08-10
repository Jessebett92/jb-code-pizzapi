import React from "react";
import Cookie from "js-cookie";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      zip: "",
      newUser: true,
      city: "",
      street: "",
      state: "",
      phone: "",
      firstName: "",
      lastName: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    Cookie.set("fname", this.state.firstName);
    Cookie.set("lname", this.state.lastName);
    Cookie.set("email", this.state.email);
    Cookie.set("city", this.state.city);
    Cookie.set("state", this.state.state);
    Cookie.set("street", this.state.street);
    Cookie.set("zip", this.state.zip);
    Cookie.set("phone", this.state.phone);
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="login-component">
        <div className="login-heading">
          <h1>Order Your Pizza With the Power of Cookies!</h1>
        </div>
        <div className="login-grid-columns">
          <div className="login-description">
            <p>Fill in your info, and it will be stored as a cookie</p>
          </div>
          <div className="login-form">
            <form onSubmit={this.handleSubmit}>
              <label for="firstName">First Name</label>
              <input
                onChange={this.handleChange}
                name="firstName"
                id="firstName"
                type="text"
                value={this.state.firstName}
                required
              />

              <label for="lastName">Last Name</label>
              <input
                onChange={this.handleChange}
                name="lastName"
                id="lastName"
                type="text"
                value={this.state.lastName}
                required
              />
              <label for="email">E-Mail</label>
              <input
                onChange={this.handleChange}
                name="email"
                id="email"
                type="email"
                value={this.state.email}
                required
              />

              <label for="city">City</label>
              <input
                onChange={this.handleChange}
                name="city"
                id="city"
                type="text"
                value={this.state.city}
                required
              />

              <label for="state">State</label>
              <input
                onChange={this.handleChange}
                name="state"
                id="state"
                type="text"
                value={this.state.state}
                required
              />

              <label for="street">Street</label>
              <input
                onChange={this.handleChange}
                name="street"
                id="street"
                type="text"
                value={this.state.street}
                required
              />

              <label for="zip">Zip Code</label>
              <input
                onChange={this.handleChange}
                name="zip"
                id="zip"
                type="number"
                value={this.state.zip}
                pattern="(\d{5}([\-]\d{4})?)"
                required
              />

              <label for="phone">Phone Number</label>
              <input
                onChange={this.handleChange}
                name="phone"
                id="phone"
                type="tel"
                value={this.state.phone}
                pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                required
              />

              <button className="btn" type="submit">
                Submit My Info
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
