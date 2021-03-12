import React, { useEffect } from "react";

const Profile = () => {





  const getUsers = () => {
    fetch('/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Json that response
    })
      .then((response) => response.json())
      // Then get the data
      .then((data) => {
        // Console log the data 
        console.log(data)



      })

  }
  // use Effect to call the get users function
  useEffect(() => {
    getUsers()
    // eslint-disable-line no-alert
  }, [])

  return <div>Hello From Profile</div>;
};

export default Profile;
