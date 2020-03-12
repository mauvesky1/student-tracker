import React from "react";

class studentsForm extends React.Component {
  state = {
    input: "",
    finalQuery: "",
    primarySelectBox: "",
    secondarySelectBox: ""
  };

  formatInput = () => {
    this.setState(function(currentState) {
      currentState.finalQuery += `${currentState.primarySelectBox}=${currentState.secondarySelectBox}&`;

      return { finalQuery: currentState.finalQuery };
    });
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
          className="inputGrid"
          onSubmit={event => {
            event.preventDefault();

            this.formatInput();
          }}
        >
          {" "}
          <div className="searchTermGrid">
            <button>Build Query</button>

            <select
              value={this.state.primarySelectBox}
              onChange={this.changePrimarySelectBox}
            >
              <option value="">Select search term</option>
              <option value="graduated">Graduated</option>
              <option value="block">Block</option>
              <option value="cohort">Cohort</option>
            </select>
            <div>
              {this.state.primarySelectBox === "block" ? (
                <label>
                  <select
                    required
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
                    required
                    value={this.state.secondarySelectBox}
                    onChange={this.changeSecondarySelectBox}
                  >
                    <option disabled defaultValue>
                      Select search term
                    </option>
                    <option value="true">True</option>
                    <option value="false">false</option>
                  </select>
                </label>
              ) : null}

              {this.state.primarySelectBox === "cohort" ? (
                <label>
                  <input
                    onChange={this.changeSecondarySelectBox}
                    type="number"
                    min="-1"
                  ></input>
                </label>
              ) : null}
            </div>
          </div>
          <p id="displaySearchTerms">{this.state.finalQuery}</p>
        </form>

        <button
          onClick={event => {
            this.props.resetStudents();
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            console.log(this.state.finalQuery);
            this.props.updateQuery(this.state.finalQuery);
            this.setState({
              input: "",
              finalQuery: "",
              primarySelectBox: "",
              secondarySelectBox: ""
            });
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default studentsForm;
