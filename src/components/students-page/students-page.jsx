import React from "react";
import axios from "axios";
import StudentList from "./students-list";

class StudentPage extends React.Component {
  state = { studentData: [], isLoading: true, query: "" };

  componentDidMount = () => {
    axios
      .get("https://nc-student-tracker.herokuapp.com/api/students")
      .then(({ data }) => {
        this.setState({ studentData: data.students });
      });
  };

  render() {
    return <StudentList studentData={this.state.studentData} />;
  }
}

export default StudentPage;
