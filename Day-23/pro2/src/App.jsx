import React,{Component} from "react";
//react components api
class App extends Component{
  constructor(){
    super();
    this.forceUpdateState = this.forceUpdateState.bind(this);
  }
  forceUpdateState(){
    this.forceUpdate();
  }
  render(){
    return(
      <div>
        <h1>Example to Genrate Random number</h1>
        <h3>Random number: {Math.random()}</h3>
        <button onClick={this.forceUpdateState}>Force update</button>
      </div>
    );
  }
}
export default App;