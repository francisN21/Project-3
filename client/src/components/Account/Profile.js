// import the react goodness!
import React, { useEffect, useState } from "react";

const Profile = () => {
  // Use State for the users
  const [users, setUsers] = useState([
    {
      firstName: "",
      lastName: "",
      username: "",
      saved: [],
      friends: [],
    },
  ]);

  // Function to get the the user from the database
  // Will need to change to ID so we don't get all users
  const getUsers = () => {
    fetch("/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      // Then get the data
      .then((data) => {
        // Console log the data
        console.log(data);
        //Set the data to users!
        setUsers(data);
      });
  };
  // use Effect to call the get users function when the page loads
  useEffect(() => {
    getUsers();
    // eslint-disable-line no-alert
  }, []);

  // console.log(users)

  // Styling!
  // Basic Card Styling
  const cardStyles = {
    margin: "20px",
  };
  // Basic List Styling
  const listStyles = {
    listStyle: "none",
  };

  // Return it all!
  return (
    <div className="container account-overflow">
      {/* If there is a user, display it */}
      {users.length ? (
        <div className="card" style={cardStyles}>
          {/* Card title for name */}
          <h1 className="card-title text-center">
            {users[0].firstName} {users[0].lastName}
          </h1>
          {/* Break */}
          <hr></hr>
          <div className="card-body">
            {/* Display username, email */}
            <h4>Username: {users[0].username}</h4>
            <h5>Email: {users[0].email}</h5>
            {/* Iterate through the Saved items for the user */}
            <ul style={listStyles}>
              <h4>Saved:</h4>
              {users[0].saved.map((item) => {
                <li>{item}</li>;
              })}
            </ul>
            {/* Iterate through the Friends of the user */}
            <ul style={listStyles}>
              <h4>Friends:</h4>
              {users[0].friends.map((item) => {
                <li>{item}</li>;
              })}
            </ul>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-danger"
              onClick={() => console.log("Delete")}
            >
              Delete Profile
            </button>
          </div>
        </div>
      ) : (
        // If no users, display this
        <h1>No users yet</h1>
      )}
    </div>
  );
};

//Export it all
export default Profile;
