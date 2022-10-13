import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds == 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
  });

  return <div className="App">
    
  </div>;
}

export default App;
