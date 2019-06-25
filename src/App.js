// react libraries
import React from "react";

// styles
import './assets/styles/App.css';

// components
import SideBar from "./components/Sidebar";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

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
