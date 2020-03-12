import React from "react";
import axios from "axios";

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
        <p>
          Student ID: {this.state.id}
          {this.state.startingCohort}, name:{this.state.name}
          startingCohort:{this.state.startingCohort},
        </p>
        <ul>
          {this.state.blockHistory.map((block, index) => {
            return <li key={index + block.name}>{block.name} </li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Student;
