import React, { useState } from "react";

const useCountdown = () => {
  const [second, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  return <div></div>;
};

export default useCountdown;
