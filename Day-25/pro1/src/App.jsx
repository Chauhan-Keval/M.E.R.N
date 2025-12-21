import React,{Component} from "react";
import './App.css';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      companyName:''
    };
  }
  changeText(event){
    this.setState({
      companyName:event.target.value
    });
  }
  render(){
    return(
      <div>
        <h2>Simple Event Example</h2>
        <label htmlFor="name">Enter Company Name :</label>
        <input type="text" name="" id="name" onChange={this.changeText.bind(this)}/>
        <h4>You entered :{this.state.companyName}</h4>
      </div>
    );
  }
}
export default App;