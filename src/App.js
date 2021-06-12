import React, { useState } from "react";
import "./App.css";

import AppBar from "./components/AppBar";
import AddRecord from "./pages/AddRecord";
import HomePage from "./pages/HomePage";
import EditRecord from "./pages/EditRecord";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/addrecord" component={AddRecord} />
          <Route exact path="/editrecord/:id" component={EditRecord} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </GlobalState>
  );
}

export default App;
