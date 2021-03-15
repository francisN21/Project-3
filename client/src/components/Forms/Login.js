// import axios from "axios";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "../Forms/styles.css";
import API from "../../utils/API";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const onChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(loginDetails);
      API.loginUser(loginDetails).then((res) => {
        return history.push("/profile");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-form">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <br></br>
          <input
            onChange={onChange}
            type="email"
            name="email"
            className="form-control"
            id="email-input"
            placeholder="Email"
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <br></br>
          <input
            onChange={onChange}
            type="password"
            name="password"
            className="form-control"
            id="password-input"
            placeholder="Password"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
