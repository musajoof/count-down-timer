import React, { useState, useEffect } from 'react';
import Facebook from './images/icon-facebook.svg';
import Pinterset from './images/icon-pinterest.svg';
import Instagram from './images/icon-instagram.svg';

function App() {

  const currenDate = new Date().getFullYear()
  // Initialize state variables for days, hours, minutes, and seconds
  const [days, setDays] = useState(8);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(55);
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    // Function to update the countdown timer
    const updateCountdown = () => {
      // Calculate the time remaining
      const now = new Date().getTime();
      const launchDate = new Date("01/01/2025"); 
      const timeRemaining = launchDate - now;

      // Calculate days, hours, minutes, and seconds
      const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesRemaining = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Update the state variables
      setDays(daysRemaining);
      setHours(hoursRemaining);
      setMinutes(minutesRemaining);
      setSeconds(secondsRemaining);
    };

    // Update the countdown every 1 second (1000 milliseconds)
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <>
      <div className="w-full h-screen p-10 bg-slate-700 bg-[url('./images.starts.svg')] bg-repeat">
      <div
          className="text-center sm:max-sm: sm:text-xs max-w-3xl  h-[30rem] bg-no-repeat bg-bottom bg-[url('./images/bg-stars.svg')], bg-[url('./images/pattern-hills.svg')] border-none rounded-md m-auto bg-gray-900 ">
          <h1 className="inline-block mt-16 text-slate-200 uppercase tracking-wider font-semibold lg:text-2xl sm:text-xs">We're launching soon</h1>
          <div className="flex justify-center items-center space-x-4 mt-12">
            <div>
              <div className="border max:w-28 h-24 bg-gray-500 rounded-md sm:w-14 sm:h-12 lg:w-28 lg:h-24 ">
                <h2 className="text-4xl font-extrabold text-red-400 mt-5">{days}</h2>
              </div>
              <span className="block mt-2 text-gray-500 font-bold lg:text-xl">Days</span>
            </div>

            <div>
              <div className="border max:w-28 h-24 bg-gray-500 rounded-md sm:w-14 sm:h-12 lg:w-28 lg:h-24">
                <h2 className="text-4xl font-extrabold text-red-400 mt-5">{hours}</h2>
              </div>
              <span className="block mt-2 text-gray-500 font-bold lg:text-xl">Hours</span>
            </div>

            <div>
              <div className="border max:w-28 h-24 bg-gray-500 rounded-md sm:w-14 sm:h-12 lg:w-28 lg:h-24">
                <h2 className="text-4xl font-extrabold text-red-400 mt-5">{minutes}</h2>
              </div>
              <span className="block mt-2 text-gray-500 font-bold lg:text-xl">Minutes</span>
            </div>

            <div>
              <div className="border max:w-28 h-24 bg-gray-500 rounded-md sm:w-14 sm:h-12 lg:w-28 lg:h-24">
                <h2 className="text-4xl font-extrabold text-red-400 mt-5">{seconds}</h2>
              </div>
              <span className="block mt-2 text-gray-500 font-bold lg:text-xl">Secound</span>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4 mt-20">
            <img src={Facebook} alt={"facebook image"} />
            <img src={Pinterset} alt={"pinterset image"} />
            <img src={Instagram} alt={"instagram image"} />
          </div>
        </div>
        <footer className='text-center mt-3 text-slate-200 font-bold lg:text-xl sm:text-xs'>
          <p>&copy; Develop By Musa Joof {currenDate}</p>
        </footer>
      </div>
    </>
  )
}

export default App
