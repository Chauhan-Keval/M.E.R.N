import React,{Component} from "react";
export default class Defaultprops extends Component{
    render(){
        return(
            <div>
                <h1>Default Props!</h1>
                <h2>Welcome TO {this.props.name}</h2>
                <p>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, commodi?</h4>
                </p>
            </div>
        );
    }
}
Defaultprops.defaultProps = {
    name:'Webcare'
}