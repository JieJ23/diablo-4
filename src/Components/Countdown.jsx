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
    <div className="text-white text-center rounded-xl flex flex-col justify-between py-3 px-2 gap-2 bg-gradient-to-tl from-[#1c2034] to-[#0a1337] shadow-[0_0_10px_black] border-[1px] border-[#131111] w-[180px]">
      <div className="text-[16px] font-customDiablo text-gray-400">
        Seasonal Pit
      </div>
      <p className="text-[24px] font-customNoto">
        {formatTime(timeLeft.days * 24 + timeLeft.hours)}:
        {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
      </p>
      <div className="text-[11px] font-customNoto text-gray-400">
        Before Finalize
      </div>
    </div>
  );
};

export default CountdownTimer;
