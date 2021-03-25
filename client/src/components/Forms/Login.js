// Import all the react goodness
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../utils/API";
import UserContext from "../../Context/UserContext";
import "../Forms/styles.css";

// Login component
const Login = () => {
  // Set the state for the login Details
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  // Set user data to the userContext
  const { userData, setUserData } = useContext(UserContext);
  // use history to be able to redirect people
  const history = useHistory();

  // Use effect to see if the user is logged in
  useEffect(() => {
    console.log(userData);
    // If the user is logged in, send them to the map
    if (userData.token) history.push("/");
  }, [userData.token, history]);

  const onChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // console.log(loginDetails, "FROM LOGIN.js");
      loginUser(loginDetails).then((res) => {
        // set the user data to the token, and the user info
        setUserData({
          token: res.data.token,
          user: res.data.user,
        });
        // Set the local storage token
        localStorage.setItem("auth-token", res.data.token);
        // After login, send to the map
        return history.push("/");
      });
    } catch (error) {
      console.log(error);
    }
  };
  // Return the component
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
        <button type="submit" className="btn btn-primary login">
          Login
        </button>
      </form>
    </div>
  );
};

// Export the component
export default Login;
