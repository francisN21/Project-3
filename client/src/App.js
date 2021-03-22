import React, {useEffect, useState} from "react";
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

function App() {
  const [userData, setUserData] = useState({
    user: undefined, 
    token: undefined
  })

  const checkLoggedIn = () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "")
    }
  }

useEffect(()=> {
  checkLoggedIn()
}, [])

  return (
    <div className="App">
      <BrowserRouter>
      <UserContext.Provider value={{userData, setUserData}}>
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
