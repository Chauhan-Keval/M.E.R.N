import React from "react";
import "./App.css";
//Reading Lists inside Component
function NameList(props){
  const myList = props.myList;
  const listItems = myList.map((myList,index)=>
  <li key={index}>{myList}</li> );
  return(
    <div>
      <h2>Rendering Lits inside Components</h2>
      <ul>{listItems}</ul>
    </div>
  );
}
export default function App(){
  const myList = ['Petet','Tony','Stive','Natasha','Thor'];
  return <NameList myList={myList}/>
}