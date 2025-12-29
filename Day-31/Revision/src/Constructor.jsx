import React,{Component} from "react";

export default class Con extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            data : "www.webcareinfoway.com"
        }
        this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent(){
        console.log(this.props);
    }

    render(){
        return(
            <div className="App">
                <h2>React Constructor Example</h2>
                <input type="text" value={this.state.data} />
                <button onClick={this.handleEvent}>Pleaze click</button>
            </div>
        );
    }
}