import React from "react";
// name block, block,history, cohort
class SendStudent extends React.Component {
  state = {
    name: "",
    startingBlock: undefined,
    cohort: -1
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
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
          Block
          <select
            name={"block"}
            onChange={this.handleInput}
            value={this.state.startingBlock}
          >
            <option>Fundamentals</option>
            <option>Front End</option>
            <option>Back End</option>
            <option>Projects</option>
            <option>Graduate</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SendStudent;
