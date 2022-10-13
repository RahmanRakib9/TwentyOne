import React, { useState } from "react";

const useCountdown = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  return <div></div>;
};

export default useCountdown;
