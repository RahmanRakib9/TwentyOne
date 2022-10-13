import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }

      if (minutes === 59) {
        setHours(hours + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className="App">
      <h1>{minutes}</h1>
      <h1>{seconds}</h1>
    </div>
  );
}

export default App;
