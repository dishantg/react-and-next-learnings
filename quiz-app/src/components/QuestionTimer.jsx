import { useEffect, useState } from "react";

const INTERVAL = 100;
export default function QuestionTimer({ timeout, onTimeUp, mode }) {
  const [timeRemaining, setTimeRemaining] = useState(timeout);

  useEffect(() => {
    console.log("setting time out");
    const timer = setTimeout(() => onTimeUp(), timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeUp]);

  useEffect(() => {
    console.log("setting interval");
    const interval = setInterval(() => {
      setTimeRemaining((prevVal) => prevVal - INTERVAL);
    }, INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={timeRemaining}
      max={timeout}
      className={mode}
    ></progress>
  );
}
