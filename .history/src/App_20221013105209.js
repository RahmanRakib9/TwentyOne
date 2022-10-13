import logo from "./logo.svg";
import "./App.css";
import useCountdown from "./hooks/useCountdown";

function App() {
  const [second, minute, hour] = useCountdown();
  return (
    <div className="App">
      <h1>Min: {}</h1>
      <h1>Sec: </h1>
      <h1>Hour:</h1>
    </div>
  );
}

export default App;
