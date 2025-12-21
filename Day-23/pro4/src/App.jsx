import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hello: "Webcare" };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({ hello: "All! - It’s a great ReactJS tutorial." });
  }

  componentDidMount() {
    console.log("Component Did Mount!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount!");
  }

  render() {
    return (
      <div>
        <h1>ReactJS Component's Lifecycle</h1>
        <h3>Hello {this.state.hello}</h3>
        <button onClick={this.changeState}>Click Here</button>
      </div>
    );
  }
}

export default App;
