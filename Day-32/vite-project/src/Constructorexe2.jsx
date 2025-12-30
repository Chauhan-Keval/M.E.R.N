import React,{Component} from "react";
export default class Exe2 extends Component{
    constructor(props){
        super(props);
        this.name = "ABC" ;
    }
    render(){
        return(
            <p>Name : {this.name}</p>
        );
    }
}