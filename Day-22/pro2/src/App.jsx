import React,{Component} from "react";
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:"www.webcare.com"
    };
  }
  handelEvent = () =>{
    console.log(this.props);
  }
  render(){
    return(
      <div className="App">
        <h2>React Constructor Example</h2>
        <input type="text" value={this.state.data}/>
        <button onClick={this.handelEvent}>Click</button>
      </div>
    );
  }
}
export default App;