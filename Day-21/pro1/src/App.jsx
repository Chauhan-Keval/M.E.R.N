import React,{Component} from "react";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"Webcare"
    }
  }
  render(){
    return(
      <div>
        <JTP jitProps = {this.state.name}></JTP>
      </div>
    );
  }
}
class JTP extends React.Component{
  render(){
    return(
      <>
        <h1>State and props Example</h1>
        <h3>Welcome to {this.props.jitProps}</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ipsa, deleniti quod voluptatibus dolores perspiciatis adipisci nostrum beatae! Aut omnis itaque impedit enim expedita laboriosam modi iusto dolores voluptas possimus dolore, voluptatibus hic eius quasi fugit vero nobis qui fugiat.</p>
      </>
    );
  }
}
export default App;