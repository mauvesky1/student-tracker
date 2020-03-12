import React from "react";
import axios from "axios";
import StudentList from "./students-list";
import StudentForm from "./students-form";
import { Router } from "@reach/router";
import Student from "../student-page";
import Toggle from "../toggle";
import SendStudent from "../SendStudent";

class Students extends React.Component {
  state = { studentData: [], isLoading: true, query: "" };

  updateQuery = newQuery => {
    this.setState({ query: newQuery });
  };

  resetStudents = () => {
    this.setState({ query: "" });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.query !== this.state.query) {
      axios
        .get(
          `https://nc-student-tracker.herokuapp.com/api/students?${this.state.query}`
        )
        .then(({ data }) => {
          this.setState({ studentData: data.students });
        });
    }
  };

  componentDidMount = () => {
    axios
      .get(`https://nc-student-tracker.herokuapp.com/api/students?`)
      .then(({ data }) => {
        this.setState({ studentData: data.students });
      });
  };

  render() {
    return (
      <div>
        <Router>
          <Student path="/:id" />
        </Router>
        <StudentList studentData={this.state.studentData} />
        <Toggle>
          <StudentForm
            updateQuery={this.updateQuery}
            studentData={this.state.studentData}
            resetStudents={this.resetStudents}
          />
          <SendStudent />
        </Toggle>
      </div>
    );
  }
}

export default Students;
