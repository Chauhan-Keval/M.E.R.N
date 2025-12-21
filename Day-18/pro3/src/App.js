import { Component } from "react";

class App extends Component {
  render() {
    var myStyle = {
      fontsize: 80,
      fontFamily: "Courier",
      color: "#003300",
    };
    return (
      <div>
        <h1>Welcome babu mosai</h1>
        <p data-demoAttribute="demo">This website cointains Best CS tutorial</p>
        <div>
          <h1 style={myStyle}>www.WebcareInfoway.com</h1>
        </div>
        <div></div>
      </div>
    );
  }
}

export default App;
