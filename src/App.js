import React from "react";
import studentsForm from "./components/students-page/students-form";
import Nav from "./components/nav";
import StudentPage from "./components/students-page/students-page";
import Home from "./components/Home";

import "./App.css";

import { Router } from "@reach/router";

class App extends React.Component {
  state = { studentData: [], isLoading: true, formInputs: "", query: "" };

  render() {
    return (
      <div className="App">
        <h1>Student Tracker</h1>
        <Nav />
        <Router>
          <Home path="/" />
          <StudentPage path="/students" />
        </Router>
      </div>
    );
  }
}

export default App;
