// import the react goodness!
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext"

// Profile Component
const Profile = () => {
  // Get the userData from userContext
  const { userData, setUserData } = useContext(UserContext)
  // Use history to send the user back to login page
  const history = useHistory()
  // Log out function to be able to log out.
  const logout = () => {
    // Set the Local Storage back to empty
    localStorage.setItem("auth-token", "")
    // set the user Data to undefined again
    setUserData({ token: undefined, user: undefined })
    // Push the user back to the login page
    history.push("/login");
  }

  // Use effect to see on page load if the user is logged in
  useEffect(() => {
    console.log(userData)
    // If not logged in, send to the login page
    if (!userData.token) {
      history.push("/login");
    }

  }, [userData.user, history])
  // Styling!
  // Basic Card Styling
  const cardStyles = {
    paddingTop: "10px",
    marginTop: "5px"
  };
  // Basic List Styling
  const listStyles = {
    listStyle: "none",
  };


  // Return it all!
  return (
    <div>
      {
        userData ? (<div className="container account-overflow" >
          {/* Display User Information */}
          < div className="card"
            style={cardStyles} >
            <div className="card-title text-center border-bottom">
              <h4>User: {userData.user?.[0].firstName}{userData.user?.[0].lastName}</h4>
            </div>
            <div className="card-body">
              <h5>UserName:</h5>
              <h6>{userData.user?.[0].username}</h6>
              <br></br>
              <h5>Email:</h5>
              <h6>{userData.user?.[0].email}</h6>
            </div>
            < div className="card-footer" >
              <button
                className="btn btn-danger"
                onClick={() => logout()}
              >Log Out</button>
            </div >
          </div >
        </div >) : (<h3>Loading...</h3>)}
    </div>
  );
};

//Export it all
export default Profile;
