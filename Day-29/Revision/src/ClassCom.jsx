import React, { Component } from "react";

class ClassCom extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { 'name': 'A' },
                { 'name': 'B' },
                { 'name': 'C' }
            ]
        }
    }

    render() {
        return (
            <div>
                <Stdnm />
                <ul>
                    {this.state.data.map((item) => <List data={item} />)}
                </ul>
            </div>
        );
    }
}

class Stdnm extends React.Component {
    render() {
        return (
            <div>
                <h1>Student Name</h1>
            </div>
        );
    }
}

class List extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.data.name}</li>
            </div>
        );
    }
}

export default ClassCom;