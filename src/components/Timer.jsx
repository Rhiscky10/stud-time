import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setTime((t) => t - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const format = (t) =>
    `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(
      2,
      "0"
    )}`;

  return (
    <div>
      <h2>Pomodoro Timer</h2>
      <h3>{format(time)}</h3>
      <button onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Start"}
      </button>
      <button onClick={() => setTime(25 * 60)}>Reset</button>
    </div>
  );
}
