import React from "react";
import axios from "axios";
import StudentList from "./students-list";
import StudentForm from "./students-form";

class StudentPage extends React.Component {
  state = { studentData: [], isLoading: true, query: "" };

  updateQuery = newQuery => {
    this.setState({ query: newQuery });
  };

  resetStudents = () => {
    this.setState({ query: "" });
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.dir(prevState);
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
        <StudentList studentData={this.state.studentData} />
        <StudentForm
          updateQuery={this.updateQuery}
          studentData={this.state.studentData}
          resetStudents={this.resetStudents}
        />
      </div>
    );
  }
}

export default StudentPage;
