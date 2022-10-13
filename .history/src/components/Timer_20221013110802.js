import React from "react";
import useCountdown from "../hooks/useCountdown";

const Timer = () => {
  const [second, minute, hour, day] = useCountdown();
  return (
    <div>
      <h1>Min: {minute}</h1>
      <h1>Sec: {second}</h1>
      <h1>Hour: {hour}</h1>
      <h1>Hour: {day}</h1>
    </div>
  );
};

export default Timer;
