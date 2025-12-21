import React,{Component} from "react";
import "./statevar.css";

class Var2 extends Component{
    constructor(){
        super();
        this.state={text:'hi'};
    }

    render(){
        return(
            <div className="demo">
                <h1>TEXT : {this.state.text}</h1>
                <button onClick={() => this.setState({text:'Hello'})}>Change</button>
            </div>
        );
    }
}

export default Var2;