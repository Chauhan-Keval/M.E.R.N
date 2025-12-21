import React,{Component} from "react";
import PropTypes from "prop-types";

export default class PT extends Component{
    render(){
        return(
            <>
                <h1>ReactJS props Validation Example</h1>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Valid</th>
                    </tr>
                    <tr>
                        <td>Array</td>
                        <td>{this.props.propArray}</td>
                        <td>{this.props.propArray ? "True" : "False"}</td>
                    </tr>
                    <tr>
                        <td>Boolean</td>
                        <td>{this.props.propBool ? "True" : "False"}</td>
                        <td>{this.props.propBool ? "True" : "False"}</td>
                    </tr>
                    <tr>
                        <td>Function</td>
                        <td>{this.props.propsFunc(5)}</td>
                        <td>{this.props.propsFunc(5) ? "True" : "False"}</td>
                    </tr>
                    <tr>
                        <td>String</td>
                        <td>{this.props.propsString}</td>
                        <td>{this.props.propsString ? "True" : "False"}</td>
                    </tr>
                    <tr>
                        <td>Number</td>
                        <td>{this.props.propNumber}</td>
                        <td>{this.props.propNumber ? "True" : "False"}</td>
                    </tr>
                </table>
            </>
        );
    }
}

PT.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propsFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propsString: PropTypes.string,
}

PT.defaultProps = {
    propArray: [1,2,3,4,5],
    propBool: true,
    propsFunc: function(x){ return x + 5; },
    propNumber: 1,
    propsString: "Java Point"
};