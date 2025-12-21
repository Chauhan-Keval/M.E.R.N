import React, { Component } from "react";

class Stateeg2 extends React.Component {
    constructor() {
        super();
        this.state = { displayBio: false };
        console.log('Component this', this);
        this.toggleDispalyBio = this.toggleDispalyBio.bind(this);
    }
    toggleDispalyBio() {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {
        return (
            <div>
                <h1>Welcome to webcare!</h1>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>
                                <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, magni? Beatae, aperiam molestiae. Nam perspiciatis suscipit accusamus nostrum, omnis, nesciunt id explicabo harum ipsa repudiandae obcaecati incidunt eaque, tempore hic?</h3>
                            </p>
                            <button onClick={this.toggleDispalyBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDispalyBio}>Read more</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Stateeg2;