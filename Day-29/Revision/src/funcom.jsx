import React, { Component } from "react";

class FunctionCom extends React.Component {
    render(){
        return(
            <div>
                <First/>
                <Second/>
            </div>
        );
    }
}

class First extends React.Component{
    render(){
        return(
            <div>
                <h1>This is headding H1</h1>
            </div>
        );
    }
}

class Second extends React.Component{
    render(){
        return(
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eius.</p>
            </div>
        );
    }
}

export default FunctionCom;