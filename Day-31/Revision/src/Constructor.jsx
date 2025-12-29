import React,{Component} from "react";
export default class Con extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"Hello World !"
        }
        this.handelEvent = this.handelEvent.bind(this);
    }

    handelEvent () {
        console.log(this.props);
    }

    render(){
        return(
            <div>
                <h2>React constructor Example </h2>
                <input type="text" value={this.state.name} />
                <button onClick={this.handelEvent}>Please click</button>
            </div>
        );
    }
}