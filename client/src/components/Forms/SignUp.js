// Import all the react goodness
import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  //use onSubmit to set state
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  // Set the change for state
  const onChange = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };

  // On submit for the form to send the info to the database
  const submit = async (e) => {
    e.preventDefault();
    try {
      // console.log("submit runs");
      await axios.post("/api/user", signUpForm);
      console.log(signUpForm, "user info");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Return the component
  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Name</label>
          <br></br>
          {/* Input for First Name */}
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="firstName-input"
            placeholder="First Name"
            onChange={onChange}
          ></input>
          {/* Input for Last Name */}
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="lastName-input"
            placeholder="Last Name"
            onChange={onChange}
          ></input>
        </div>
        <label>User Name</label>
        <br></br>
        {/* Input for User Name */}
        <input
          type="text"
          name="username"
          className="form-control"
          id="username-input"
          placeholder="user name"
          onChange={onChange}
        ></input>
        {/* Input for Email Address */}
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
        {/* Input for Password */}
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
        {/* Button to submit the form */}
        <button type="submit" className="btn btn-primary signup">
          Create account
        </button>
      </form>
    </div>
  );
};

// export the component
export default SignUp;
