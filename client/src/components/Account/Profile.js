// import the react goodness!
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext"

const Profile = () => {
  const { userData, setUserData } = useContext(UserContext)

  const logout = () => {
    setUserData({ token: undefined, user: undefined })
    localStorage.setItem("auth-token", "")
    console.log(userData)
  }


  // const history = useHistory()

  // useEffect(() => {
  //   console.log(userData)
  //   if (!userData.user) {
  //     history.push("/login");
  //   }

  // }, [userData.user, history])




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
    <div className="container account-overflow">
      {/* Display User Information */}
      <div className="card"
        style={cardStyles}>
        {/* <div className="card-title text-center border-bottom">
          <h4>{userData.user[0].firstName} {userData.user[0].lastName}</h4>
        </div>
        <div className="card-body">
          <h5>UserName:</h5>
          <h6>{userData.user[0].username}</h6>
          <br></br>
          <h5>Email:</h5>
          <h6>{userData.user[0].email}</h6>
        </div> */}
        <div className="card-footer">
          <button
            className="btn btn-danger"
            onClick={() => console.log("logout")}
          >Log Out</button>
        </div>
      </div>
    </div>
  );
};

//Export it all
export default Profile;
