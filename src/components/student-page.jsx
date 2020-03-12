import React from "react";
import axios from "axios";

class Student extends React.Component {
  state = {
    id: "",
    blockHistory: [],
    startingCohort: 0,
    name: ""
  };
  componentDidMount = () => {
    axios
      .get(
        `https://nc-student-tracker.herokuapp.com/api/students/${this.props.id}`
      )
      .then(({ data }) => {
        this.setState({ state: data.student });
      });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.id != this.props.id) {
      console.log("updating");
      axios
        .get(
          `https://nc-student-tracker.herokuapp.com/api/students/${this.props.id}`
        )
        .then(({ data }) => {
          this.setState({ state: data.student });
        });
    }
  };

  render() {
    return (
      <div>
        <p
          onClick={() => {
            this.forceUpdate();
          }}
        >
          Hello!
        </p>
      </div>
    );
  }
}

export default Student;
