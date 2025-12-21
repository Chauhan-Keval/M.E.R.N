import React,{Component} from "react";
export default class Propsexe1 extends Component{
    render(){
        return(
            <div>
                <h1>Welcome To {this.props.name}</h1>
                <p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae perferendis suscipit dolores tempore illum.</h4>
                </p>
            </div>
        );
    }
}