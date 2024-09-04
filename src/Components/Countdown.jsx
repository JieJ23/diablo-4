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
    <div className="text-white text-center my-5 w-full max-w-[160px] sm:max-w-[200px] bg-[#cc3737cc] rounded-xl flex justify-center backdrop-blur-sm p-2">
      <div>
        <p className="text-[20px] font-customNoto">
          {formatTime(timeLeft.days * 24 + timeLeft.hours)}:
          {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </p>
        <div className="text-[14px] font-customNoto text-blue-gray-100">
          S5 Ladder Time
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
