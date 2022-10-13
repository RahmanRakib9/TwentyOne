import React, { useState } from "react";

const useCountdown = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHours] = useState(0);
  const [days, setDays] = useState(0);
  return <div></div>;
};

export default useCountdown;
