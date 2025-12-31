import React,{Component} from "react";
import ReactDOM from "react-dom";

export default class Exe1 extends Component{
    
    FindNode1 = () => {
        var mydiv = document.getElementById("Node1");
        mydiv.style.color = "Red";
    }

    FindNode2 = () => {
        var mydiv = document.getElementById("Node2");
        mydiv.style.color = "Blue";
    }

    render(){
        return(
            <>
                <h1>ReactJs Find DOM Node Example</h1>
                <button onClick={this.FindNode1}>Find DOM Node 1</button>
                <button onClick={this.FindNode2}>Find DOM Node 2</button>
                <h3 id="Node1">JTP-NODE1</h3>
                <h3 id="Node2">JTP-NODE2</h3>
            </>
        );
    }
}