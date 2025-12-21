import React,{Component} from "react";
import PropTypes from 'prop-types';
//react components api
class App extends Component{
  constructor(){
    super();
    this.state={
      msg:"Welcome to Webcare"
    };
    this.updateSetstate = this.updateSetstate.bind(this);
  }
  updateSetstate(){
    this.setState({
      msg:"The BESt reactjs tutoiral"
    });
  }
  render(){
    return(
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.updateSetstate}>SET STATE</button>
      </div>
    );
  }
}
export default App;