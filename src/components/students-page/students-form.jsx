import React from "react";

class studentsForm extends React.Component {
  state = {
    input: ""
  };

  changeInput = event => {
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            console.log(event);
            this.props.filterStudents(this.props.studentData, this.state.input);
          }}
        >
          <input
            value={this.state.input}
            onChange={this.changeInput}
            type=""
          ></input>
          <button>Search By Block</button>
        </form>
        <button
          onCLick={() => {
            this.props.resetStudents;
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default studentsForm;
