import React, { Component } from "react";
import PropTypes from "prop-types";

// Validating props
class App extends Component {
  render() {
    return (
      <div>
        <h1>Reactjs Props Validation Example</h1>
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Type</th>
              <th>Value</th>
              <th>Valid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Array</td>
              <td>{this.props.propArray.join(", ")}</td>
              <td>{this.props.propArray ? "True" : "False"}</td>
            </tr>
            <tr>
              <td>Boolean</td>
              <td>{this.props.propBool ? "True" : "False"}</td>
              <td>{this.props.propBool ? "True" : "False"}</td>
            </tr>
            <tr>
              <td>String</td>
              <td>{this.props.propString}</td>
              <td>{this.props.propString ? "True" : "False"}</td>
            </tr>
            <tr>
              <td>Function</td>
              <td>{this.props.propFunc(5)}</td>
              <td>{this.props.propFunc(5) ? "True" : "False"}</td>
            </tr>
            <tr>
              <td>Number</td>
              <td>{this.props.propNumber}</td>
              <td>{this.props.propNumber ? "True" : "False"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// ✅ Correct spelling is `propTypes`
App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
};

App.defaultProps = {
  propArray: [1, 2, 3],
  propBool: true,
  propFunc: function (x) {
    return x + 5;
  },
  propNumber: 1,
  propString: "JavaPoint",
};

export default App;
