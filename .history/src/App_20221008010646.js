import logo from "./logo.svg";
import "./App.css";

function App() {
  let time=new Date().toLocaleDateString()
  return (
    <div className="App">
      {/* <header className="App-header">
      

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>{time}</h1>
    </div>
  );
}

export default App;
