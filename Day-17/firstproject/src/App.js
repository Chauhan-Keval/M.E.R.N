import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Box-1">
        <img
          className="animal1"
          alt="Dog"
          src="/pexels-chevanon-1108099.jpg"
        ></img>
        <h2>Dog</h2>
        <p>Above img cointains dog</p>
      </div>

      <div className="Box-2">
        <img
          className="animal2"
          alt="Lion"
          src="/pexels-george-desipris-792381.jpg"
        ></img>
        <h2>Lion</h2>
        <p>Above img cointains lion</p>
      </div>
    </div>
  );
}

export default App;
