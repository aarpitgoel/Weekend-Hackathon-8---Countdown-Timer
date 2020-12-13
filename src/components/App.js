import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [remTime, setRemTime] = React.useState(0);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      clearInterval(interval);
      if (isNaN(event.target.value)) {
        setRemTime(0);
        return;
      }
      setRemTime(parseInt(event.target.value));
    }
    return;
  };

  let interval = setInterval(() => {
    clearInterval(interval);
    if (remTime <= 0) {
      return;
    }
    setRemTime((remTime) => remTime - 1);
  }, 1000);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(event) => handleKeyDown(event)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{remTime}</div>
    </div>
  );
};

export default App;
