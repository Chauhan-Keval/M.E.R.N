import React, { Component } from "react";
//this was an examle of Defining state 
class Stateeg1 extends React.Component {
    constructor() {
        super();
        this.state = { displayBio: true };
    }
    render() {
        const bio = this.state.displayBio ? (
            <div>
                <p><h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, harum explicabo molestias sint aut molestiae earum id aliquid et impedit deserunt enim voluptatibus nostrum cumque a dolores nesciunt animi est!</h3></p>
            </div>
        ) : null;
        return (
            <div>
                <h1>Welcome To webcare!</h1>
                {bio}
            </div>
        );
    }
}

export default Stateeg1;