import React,{Component} from "react";

var A = 10;
var B = 20;
var C = 30;

var avg = (A+B+C)/3;

export default class ClcAvg extends Component{
   
    
    render(){
        return(
            <>
               <table>
                <tr>
                    <td><label>Marks A = {A}</label></td>
                    <td><label>Marks B = {B}</label></td>
                    <td><label>Marks C = {C}</label></td>
                </tr>
                <tr><label>Average : {avg}</label></tr>
               </table>
            </>
        );
    }
}