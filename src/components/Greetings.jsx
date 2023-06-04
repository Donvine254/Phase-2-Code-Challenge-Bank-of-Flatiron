import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [time, setTime] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const currentDate = new Date();
      const options = {
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      };
      const formattedTime = currentDate.toLocaleString('en-US', options);
      const hours = currentDate.getHours();

      setTime(formattedTime);
      setGreeting(getGreeting(hours));
    };

    const timer = setInterval(updateTime, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getGreeting = (hours) => {
    if (hours < 12) {
      return 'Good morning';
    } else if (hours >= 12 && hours < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  return (
    <div>
      <h2>{greeting}, Donvine!</h2>
      <h3>{time}</h3>
    </div>
  );
};

export default Greeting;
