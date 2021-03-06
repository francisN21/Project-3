import React from "react";

const SignUp = () => {
  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <br></br>
          <input
            type="text"
            className="form-control"
            id="name-input"
            placeholder="Full Name"
          ></input>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <br></br>
          <input
            type="email"
            className="form-control"
            id="email-input"
            placeholder="Email"
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <br></br>
          <input
            type="password"
            className="form-control"
            id="password-input"
            placeholder="Password"
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
