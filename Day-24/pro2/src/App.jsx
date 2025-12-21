import React,{Component} from "react";
class App extends Component{
 constructor(props){
  super(props);
  this.state = {value:''};
  this.handelChange=this.handelChange.bind(this);
  this.handelSubmit=this.handelSubmit.bind(this);
 }
 handelChange(event){
  this.setState({value:event.target.value});
 }
 handelSubmit(event){
  alert('You have submitted the input successfully :'+this.state.value);
  event.preventDefault();
 }
 render(){
  return(
    <form onSubmit={this.handelSubmit}>
      <h1>Controlled Form Example</h1>
      <label htmlFor="">
        Name:
        <input type="text"value={this.state.value} onChange={this.handelChange}/>
      </label>
      <label htmlFor="">
        <input type="submit" value='Submit' />
      </label>
    </form>
  );
 }
}
export default App;