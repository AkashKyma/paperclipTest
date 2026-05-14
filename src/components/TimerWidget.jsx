import React, { useState, useEffect } from 'react';
import './TimerWidget.css';

function TimerWidget() {
  const [time, setTime] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="TimerWidget">
      <h2>Time Remaining</h2>
      <div>{Math.floor(time / 60)}:{time % 60}</div>
    </div>
  );
}

export default TimerWidget;