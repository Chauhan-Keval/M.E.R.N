import React,{Component} from "react";
export default class Sstate extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            msg : "Welcome to Webcare"
        }
    }

    updateSetState = () =>{
        this.setState({msg : "Its Best React tutorial"});
    }

    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.updateSetState}>Set State</button>
            </div>
        );
    }
}