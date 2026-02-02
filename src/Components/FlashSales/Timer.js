import React from "react";
import { useState, useEffect } from "react";
import "./Flashsales.css";
import moment from "moment";

const Timer = ({ endDate }) => {
  // Step 1: Initialize state for time remaining
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Step 2: useEffect to update the countdown every second
  useEffect(() => {
    // Create an interval to update the countdown every second
    const timerId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Step 3: Function to calculate time remaining
  function calculateTimeRemaining() {
    const now = new Date();
    const end = new Date(endDate);
    const difference = end - now; // Difference in milliseconds

    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  // Step 4: Check if time remaining is up
  if (
    timeRemaining.days <= 0 &&
    timeRemaining.hours <= 0 &&
    timeRemaining.minutes <= 0 &&
    timeRemaining.seconds <= 0
  ) {
    return <div className="countdown-timer">The sale has ended!</div>;
  }

  return (
    <div>
      <h2 className="timerheading">Sale Ends In:</h2>
      <p>
        {timeRemaining.days} Days <span className="colon">:</span>{" "}
        {timeRemaining.hours} Hours <span className="colon">:</span>{" "}
        {timeRemaining.minutes} Minutes
      </p>
    </div>
  );
};

export default Timer;
