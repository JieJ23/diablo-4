import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Target date is October 1, 2024
  const targetDate = new Date("September 30, 2024 00:00:00").getTime();

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
    <div className="text-white text-center my-5 rounded-xl flex flex-col justify-between p-3 gap-2 bg-gradient-to-t from-[#3b426c] to-blue-gray-900 shadow-[0_0_30px_#28282b]">
      <div className="text-[14px] font-customNoto text-orange-200">
        Season 5 Pit
      </div>
      <p className="text-[24px] font-customNoto">
        {formatTime(timeLeft.days * 24 + timeLeft.hours)}:
        {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
      </p>
      <div className="text-[12px] font-customNoto text-orange-200">
        Before S5 Lock-In
      </div>
    </div>
  );
};

export default CountdownTimer;
