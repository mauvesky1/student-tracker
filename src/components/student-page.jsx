import React from "react";
import axios from "axios";
import StudentCard from "./students-page/student-card";

class Student extends React.Component {
  state = {
    id: "",
    blockHistory: [],
    startingCohort: 0,
    name: ""
  };

  formatBlockHistory = () => {
    let formattedHistory = "";
    this.state.blockHistory.forEach((block, index) => {
      formattedHistory += `${block.name} A  `;
    });

    return formattedHistory;
  };

  updateStudent = () => {
    console.log("updating...");
    return null;
  };

  componentDidMount = () => {
    axios
      .get(
        `https://nc-student-tracker.herokuapp.com/api/students/${this.props.id}`
      )
      .then(({ data }) => {
        this.setState({
          id: data.student._id,
          name: data.student.name,
          startingCohort: data.student.startingCohort,
          blockHistory: data.student.blockHistory
        });
      });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.id != this.props.id) {
      axios
        .get(
          `https://nc-student-tracker.herokuapp.com/api/students/${this.props.id}`
        )
        .then(({ data }) => {
          this.setState({
            id: data.student._id,
            name: data.student.name,
            startingCohort: data.student.startingCohort,
            blockHistory: data.student.blockHistory
          });
        });
    }
  };

  render() {
    return (
      <div>
        <StudentCard student={this.state} />
      </div>
    );
  }
}

export default Student;
