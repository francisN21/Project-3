import React, { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Map from "./components/Map/Map";
import Profile from "./components/Account/Profile";
import Dashboard from "./components/Account/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormAuthentication from "./components/Forms/FormAuthenticate";
import UserContext from "./Context/UserContext"

// import SignUp from "./components/Forms/SignUp";
// import axios from "axios";
import EditEvent from "./components/Account/EditEvent";
import Clusters from "./components/Clusters/Clusters";
import axios from "axios";

function App() {
  // Set state for authentication using UserData
  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined
  })

  // Function to see if the user is logged in
  const checkLoggedIn = async () => {
    // Set token to the local storage AuthToken
    let token = localStorage.getItem("auth-token");
    // If no token, set up the spot in LocalStorage
    if (token === null) {
      localStorage.setItem("auth-token", "")
    } else {
      // If there is a token send the get request to get the user Data
      const userRes = await axios.get("/api/user", {
        headers: { "x-auth-token": token }
      })
      // then console log the results
      console.log("user", userRes)
      // set the user data to the token and the user information
      setUserData({ token, user: userRes.data })
    }
  }
  // use Effect to call the check logged in on the page load
  useEffect(() => {
    // console.log(userData)
    checkLoggedIn()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Nav />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/clusters" component={Clusters} />
            {/* <Route path="/addevent" component={AddEvent} /> */}
            <Route path="/editEvent" component={EditEvent} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={FormAuthentication} />
            <Route path="/" component={Map} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
