import React from "react";
import axios from "axios";
import StudentList from "./students-list";
import StudentForm from "./students-form";

class StudentPage extends React.Component {
  state = { studentData: [], isLoading: true, query: "", visibleStudents: [] };

  filterStudents = (studentData, block) => {
    const filteredData = studentData.filter(student => {
      if (student.currentBlock === block) {
        return student;
      }
    });
    this.setState({ visibleStudents: filteredData });
  };

  resetStudents = () => {
    this.setState({ visibleStudents: this.state.studentData });
  };

  componentDidMount = () => {
    axios
      .get("https://nc-student-tracker.herokuapp.com/api/students")
      .then(({ data }) => {
        this.setState({ studentData: data.students });
      });
  };

  render() {
    return (
      <div>
        <StudentList studentData={this.state.visibleStudents} />
        <StudentForm
          filterStudents={this.filterStudents}
          studentData={this.state.studentData}
          resetStudents={this.resetStudents}
        />
      </div>
    );
  }
}

export default StudentPage;
