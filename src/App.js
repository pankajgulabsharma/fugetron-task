import React from "react";
import "./App.css";

import AppBar from "./components/AppBar";
import AddRecord from "./pages/AddRecord";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <AppBar />
      {/* <HomePage /> */}
      <AddRecord />
    </div>
  );
}

export default App;
