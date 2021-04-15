import React, { useState } from "react";
import Logo from "../util/Logo";
import useInterval from '../util/useInterval'

export default function LocalTime({className}) {
  const [time, setTime] = useState();
    useInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);


  return (
    <div className={className}>
      <div className="time-wrapper">
        <p className="time">{time ? time : "loading"}</p>
        <Logo filling={"white"} />
      </div>
    </div>
  );
}
