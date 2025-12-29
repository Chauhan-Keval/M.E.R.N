import React,{Component} from "react";
export default class AvgMarks extends Component{
    
    
    render(){
        
        return(
            <>
                <form>
                    <table>
                        <tr>
                            <th><label>Marks 1</label></th>
                            <td><input type="number" id="M1" /></td>
                        </tr>
                        <tr>
                            <th><label>Marks 2</label></th>
                            <td><input type="number" id="M2"/></td>
                        </tr>
                        <tr>
                            <th><label>Marks 3</label></th>
                            <td><input type="number" id="M3"/></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Submit" /></td>
                            <td><label>Average Marks :{this.state.avg} </label></td>
                        </tr>
                    </table>
                </form>
            </>
        );
    }
}