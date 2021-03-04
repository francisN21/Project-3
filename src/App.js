import React from "react";
import Nav from "./components/Nav/Nav";
import Map from "./components/Map/Map";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormAuthentication from "./components/Forms/FormAuthenticate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/login" component={FormAuthentication} />
          <Route path="/" component={Map} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
