import logo from "./logo.svg";
import "./App.css";
import useCountdown from "./hooks/useCountdown";

function App() {
  const [second, minute, hour] = useCountdown();
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
