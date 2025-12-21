import React,{Component} from "react";
class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[{"Name":"A"},{"Name":"B"},{"Name":"C"},{"Name":"D"},{"Name":"E"}],
    }
  }
  render() {
    return (
      <div>
        <StudentName/>
        <ul>
          {this.state.data.map((item)=><List data={item}/>)}
        </ul>
      </div>
    );
  }
}
class StudentName extends React.Component {
  render() {
    return (
      <h1>Student Names Details</h1>
    );
  }
}
class List extends React.Component {
  render() {
    return (
      <li>{this.props.data.Name}</li>
    );
  }
}
export default App;