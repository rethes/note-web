// react libraries
import React from "react";

// third-party libraries
import { BrowserRouter as Router } from "react-router-dom";

// components
import SideBar from "./components/Sidebar";
import Routes from "./routes";

function App() {
  return (
    <>
      <Router>
        <SideBar/>
        <Routes/>
      </Router>
    </>
  );
}

export default App;
