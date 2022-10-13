/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const useCountdown = () => {
  // state declaration for updating second, minute, and an hour respectively
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(0);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSecond(second + 1);

      if (second === 59) {
        setMinute(minute + 1);
        setSecond(0);
      }

      if(minute)

    }, 1000);
  });
};

export default useCountdown;
