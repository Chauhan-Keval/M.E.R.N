import React,{Component} from "react";
//constructor
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      data:'www.webcareinfoway.com' 
    }
    this.handelEvent=this.handelEvent.bind(this);
  }
  handelEvent(){
    console.log(this.props);
  }
  render(){
    return(
      <div className="App">
        <h2>React Constructor Example</h2>
        <input type="text" value={this.state.data}/>
        <button onClick={this.handelEvent}>Please Click</button>
      </div>
    );
  }
}
export default App;