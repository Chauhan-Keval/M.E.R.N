import React,{Component} from "react";
class App extends Component{
    render(){
        return(
            <div>
                <h1>Default Props example</h1>
                <h3>Welcome to {this.props.name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nisi quidem quaerat sit. Odio, architecto dolorum possimus magnam excepturi alias inventore minima. Excepturi necessitatibus, maxime earum totam ullam similique asperiores velit labore magnam, corrupti, animi suscipit explicabo architecto minima expedita.</p>
            </div>
        );
    }
}
App.defaultProps={
    name:"Webcare"
}
export default App;