import React from "react";
import Axios from "axios";
// name block, block,history, cohort
class SendStudent extends React.Component {
  state = {
    name: "",
    startingCohort: 0,
    posted: false
  };

  postStudent = () => {
    console.log("active");
    Axios.post("https://nc-student-tracker.herokuapp.com/api/students/", {
      startingCohort: this.state.startingCohort,
      name: this.state.name
    }).then(res => {
      console.log("this is the response", res);
      this.setState({ posted: true });
    });
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <>
        <form>
          <label>
            {" "}
            Name
            <input
              name={"name"}
              onChange={this.handleInput}
              value={this.state.name}
            />
          </label>
          <label>
            {" "}
            Starting Cohort
            <input
              type="number"
              name={"startingCohort"}
              onChange={this.handleInput}
              value={this.state.startingCohort}
            ></input>
          </label>
        </form>
        <button onClick={this.postStudent}>Post to Database</button>
        {this.state.posted && <h1>Posted</h1>}
      </>
    );
  }
}

export default SendStudent;
