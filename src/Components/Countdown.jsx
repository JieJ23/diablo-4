import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Target date is October 1, 2024
  const targetDate = new Date("October 1, 2024 00:00:00").getTime();

  // Calculate the difference between the target date and the current date
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  // Format the time to always have two digits
  const formatTime = (time) => time.toString().padStart(2, "0");

  return (
    <div className="text-white text-center my-5 px-2 max-w-[500px] bg-transparent rounded-xl flex justify-center mx-auto backdrop-blur-sm p-2">
      <div>
        <div className="text-[24px] font-customDress text-red-500">
          Pit Lock Countdown
        </div>
        <p className="text-[20px] font-[monospace]">
          {formatTime(timeLeft.days * 24 + timeLeft.hours)}:
          {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
