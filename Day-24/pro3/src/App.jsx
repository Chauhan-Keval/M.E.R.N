import React,{Component} from "react";
import './App.css';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      personGoing:true,
      numberOfPerson:5
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(){
    const target = event.target;
    console.log(target);
    const value = target.type === 'checkbox'?target.checked:target.value;
    console.log(value);
    const name = target.name;
    console.log(name);
    this.setState({[name]:value});
  }
  render(){
    return(
      <form>
        <h1>Multiple input  Controlled From example </h1>
        <label htmlFor="">
          is Person going :
          <input type="checkbox" name="personGoing" checked={this.state.personGoing} onChange={this.handleInputChange} />
        </label>
        <br />
        <label htmlFor="">
          Number of Persons:
          <input type="number" name="numberOfPerson" value={this.state.numberOfPerson} onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
export default App;