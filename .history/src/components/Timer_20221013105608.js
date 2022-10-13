import React from "react";
import useCountdown from "../hooks/useCountdown";

const Timer = () => {
  const [second, minute, hour] = useCountdown();
  return <div>
    
  </div>;
};

export default Timer;
