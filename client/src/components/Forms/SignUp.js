import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  //use onSubmit
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setSignUpForm({ ...setSignUpForm, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault(e);
    try {
      await axios.post("/api/user", signUpForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Name</label>
          <br></br>
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="name-input"
            placeholder="First Name"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="name-input"
            placeholder="Last Name"
            onChange={onChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <br></br>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email-input"
            placeholder="Email"
            onChange={onChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <br></br>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password-input"
            placeholder="Password"
            onChange={onChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Create account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
