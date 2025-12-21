import React from "react";
// React List 
const myList = ['Keval','Apurva','Jenil'];
export default function App(){
  const listItems = myList.map((myList)=>{
    return <li>{myList}</li>
  });
  return(
    <div>
      <h1>TEAM A</h1>
      <ul>{listItems}</ul>
    </div>
    
  );
}