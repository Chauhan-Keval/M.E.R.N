//React props 
import React,{Component} from "react";
class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, enim a eligendi consequuntur deserunt repellendus nesciunt in ducimus, laborum repudiandae, molestias animi cum ea et rem dicta hic facilis dolore ut voluptas ullam veniam? Consequuntur error amet natus at quam.
        </h4>
      </div>
    );
  }
}
export default App;