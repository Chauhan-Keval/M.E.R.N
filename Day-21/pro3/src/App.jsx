import React,{Component} from "react";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"Webcare",
      age:123
    }
  }
  render(){
    return(
      <div>
        <JTP jnprops = {this.state.name} japrops = {this.state.age}></JTP>
      </div>
    );
  }
}
class JTP extends React.Component{
  render(){
    return(
      <>
        <h1>Demo of State using Two variables</h1>
        <h3>This is name :{this.props.jnprops}</h3>
        <h3>This is age :{this.props.japrops}</h3>
      </>
    );
  }
}
export default App;