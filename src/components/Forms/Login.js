import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const handleName = (e) => {
    e.preventDefault();
    setName({ [e.target.name]: e.target.value });
  };
  const handlePass = (e) => {
    e.preventDefault();
    setPassword({ [e.target.password]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(`Hello `);
  };
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <br></br>
          <input
            onChange={(e) => handleName(e)}
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
            onChange={(e) => handlePass(e)}
            type="password"
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
