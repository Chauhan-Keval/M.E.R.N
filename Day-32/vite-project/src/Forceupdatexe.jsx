import React,{Component} from "react";
export default class Forceup extends Component{
    
    constructor(){
        super();
        this.forceUpdateState = this.forceUpdateState.bind(this);
    }

    forceUpdateState()  {
        this.forceUpdate();
    }

    render(){
        return(
            <div>
                <h1>Example of Forece Update </h1>
                <h3>Generate a ramdaom number</h3>
                <p>Random Number : {Math.random()}</p>
                <button onClick={this.forceUpdateState}>Update</button>
            </div>
        );
    }
}