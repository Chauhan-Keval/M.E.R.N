import React from "react";
//Preventing Component from Rerndering 
function Show({ displayMessage }) {
  if (!displayMessage) {
    return null;
  }
  return <h3>Component is rendered</h3>;
}

export default function App() {
  return (
    <div>
      <h1>Message</h1>
      <Show displayMessage={true} />
    </div>
  );
}
