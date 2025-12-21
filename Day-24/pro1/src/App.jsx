import React,{Component} from "react";
class App extends Component{
  constructor(props){
    super(props);
    this.updateSubmit=this.updateSubmit.bind(this);
    this.input=React.createRef();
  } 
  updateSubmit(event){
    alert('You have entered the User name and Company name Successfullt ');
    event.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.updateSubmit}>
        <h1>Uncontrolled Form Example</h1>
        <label>Name:
          <input type="text" ref={this.input}></input>
        </label>
        <label>Company Name:
          <input type="text" ref={this.input}></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default App;