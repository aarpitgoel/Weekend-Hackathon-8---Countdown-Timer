import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [remTime, setRemTime] = useState(0);
  function handleKeyDown(event) {
    console.log("in");
    if (event.key === "Enter") {
      clearInterval(interval);
      if (isNaN(event.target.value)) {
        setRemTime(0);
        return;
      }
      setRemTime(parseInt(event.target.value));
    }
  }

  let interval = setInterval(() => {
    clearInterval(interval);
    if (remTime <= 0) {
      return;
    }
    setRemTime((remTime) => {
      remTime - 1;
    });
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
