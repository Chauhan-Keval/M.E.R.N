import React,{Component} from "react";
import ReactDOM from 'react-dom';
//react components api
class App extends Component{
  constructor(){
    super();
    this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);
    this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this);
  }
  findDomNodeHandler1(){
    var myDiv = document.getElementById('myDivOne');
    myDiv.style.color = 'red';
  }
  findDomNodeHandler2(){
    var myDiv = document.getElementById('myDivTwo');
    myDiv.style.color = 'blue';
  }
  render(){
    return(
      <div>
        <button onClick={this.findDomNodeHandler1}>Find_DOM_Node_1</button>
        <button onClick={this.findDomNodeHandler2}>Find_DOM_Node_2</button>
        <h3 id="myDivOne">JTP-NODE1</h3>
        <h3 id="myDivTwo">JTP-NODE2</h3>
      </div>
    );
  }
}
export default App;