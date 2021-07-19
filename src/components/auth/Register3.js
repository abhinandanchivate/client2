import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../redux/actions/authAction";
import classnames from "classnames";
export const Register3 = ({ isAuthenticated, register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  //    (this.state) formData= {
  //     name: "",
  //     email: "",
  //     password: "",
  //     password2: "",
  //   } setState () ===> setFormData()

  const { name, email, password, password2 } = formData;

  const [errors, setErrors] = useState({});
  // name = formData.name
  // email = formData.email
  // ...
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // here we need to call action register
    register({ name, email, password });
  };

  return (
    <div class="register">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Sign Up</h1>
            <p class="lead text-center">Create your DevConnector account</p>
            <form onSubmit={(e) => onSubmit(e)}>
              <div class="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.name,
                  })}
                  placeholder="Name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => onChange(e)}
                />
                <div className="d-block invalid-feedback">{errors.name}</div>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.email,
                  })}
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />
                <small className="form-text text-muted">
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
                <div className="d-block invalid-feedback">{errors.email}</div>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.email,
                  })}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                />
                <div className="d-block invalid-feedback">
                  {errors.password}
                </div>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <input type="submit" class="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Register3.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(Register3);
