import React,{Component} from "react";
export default class Exe2 extends Component{

    constructor(props){
        super(props);
        this.state = { hello : "Webcare" };
        this.changeState = this.changeState.bind(this);
    }

    render(){
        return(
            <div>
                <h1>ReactJs Component lifecycle</h1>
                <h3>Hello {this.state.hello}</h3>
                <button onClick={this.changeState}>Click Here</button>
            </div>
        );
    }

    componentWillMount(){
        console.log("Component Will MONUNT!");
    }

    componentDidMount(){
        console.log("Component Did MOUNT");
    }

    changeState(){
        this.setState({hello: "ALL - its a great reactjs tutorial"});
    }

    componentWillReceiveProps(newProps){
        console.log("Component Will Receive props");
    }

    shouldComponentUpdate(newProps,newState){
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log("Component Will UPDATE!");
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Component Did UPDATE");
    }

    componentWillUnmount(){
        console.log("Component will Unmount");
    }
}