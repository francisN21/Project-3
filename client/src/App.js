import React from "react";
import Nav from "./components/Nav/Nav";
import Map from "./components/Map/Map";
import Profile from "./components/Account/Profile";
import Dashboard from "./components/Account/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormAuthentication from "./components/Forms/FormAuthenticate";
import { updateEvent } from "./utils/API";
import AddEvent from "./components/Forms/AddEvent";
// import SignUp from "./components/Forms/SignUp";
// import axios from "axios";
import EditEvent from "./components/Account/EditEvent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          {/* <Route path="/addevent" component={AddEvent} /> */}
          <Route path="/editEvent" component={EditEvent} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={FormAuthentication} />
          <Route path="/" component={Map} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
