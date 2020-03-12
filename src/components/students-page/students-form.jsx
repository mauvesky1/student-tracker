import React from "react";

class studentsForm extends React.Component {
  state = {
    input: "",
    finalQuery: "",
    primarySelectBox: "",
    secondarySelectBox: ""
  };

  formatInput = () => {
    const newQuery = `${this.state.primarySelectBox}=${this.state.secondarySelectBox}&`;
    this.props.updateQuery(newQuery);
    console.log(
      "console log",
      this.state.primarySelectBox,
      this.state.secondarySelectBox
    );
  };

  changePrimarySelectBox = event => {
    this.setState({
      primarySelectBox: event.target.value,
      secondarySelectBox: ""
    });
  };

  changeSecondarySelectBox = event => {
    this.setState({ secondarySelectBox: event.target.value });
  };
  render() {
    return (
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();

            this.formatInput();
          }}
        >
          <button>Submit</button>
          <select
            value={this.state.primarySelectBox}
            onChange={this.changePrimarySelectBox}
          >
            <option value="">Select search term</option>
            <option value="graduated">Graduated</option>
            <option value="block">Block</option>
          </select>
          {this.state.primarySelectBox === "block" ? (
            <label>
              <select
                value={this.state.secondarySelectBox}
                onChange={this.changeSecondarySelectBox}
              >
                <option value="">Select search term</option>
                <option value="grad">Grad</option>
                <option value="fun">Fundamentals</option>
                <option value="fe">Front end</option>
                <option value="be">Back end</option>
                <option value="proj">Projects</option>
              </select>
            </label>
          ) : null}
          {this.state.primarySelectBox === "graduated" ? (
            <label>
              <select
                value={this.state.secondarySelectBox}
                onChange={this.changeSecondarySelectBox}
              >
                <option value="">Select search term</option>
                <option value="true">True</option>
                <option value="false">false</option>
              </select>
            </label>
          ) : null}
        </form>
        <button
          onClick={event => {
            this.props.resetStudents();
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default studentsForm;
