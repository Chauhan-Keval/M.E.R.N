import React,{Component} from "react";
export default class ArrFunc extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            data : "www.webcare.com"
        }
    }

    handelEvent = () => {
        console.log(this.props)
    }

    render(){
        return(
            <div className="App">
                <h2>React Constroctor Example</h2>
                <input type="text" value={this.state.data}/> 
                <button onClick={this.handelEvent}>Click</button>
            </div>
        );
    }
}