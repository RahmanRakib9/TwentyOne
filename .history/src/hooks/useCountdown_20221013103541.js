import React, { useState } from "react";

const useCountdown = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [day, setDays] = useState(0);
  return <div></div>;
};

export default useCountdown;
