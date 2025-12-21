import React,{Component} from "react";
export default class SNP extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"Webcare"
        };
    }
    render(){
        return(
            <>
                <JTP jtpProps = {this.state.name}/>
            </>
        );
    }
}
class JTP extends Component{
    render(){
        return(
            <>
                <h1>State & Props Example!</h1>
                <h3>Welcome to {this.props.jtpProps}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, necessitatibus.</p>
            </>
        );
    }
}