"use client";

import { useEffect, useRef, useState } from "react";

const Statistics = ({text, number }) => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);

  const numberCounter = (number) => {
    const interval = 5000;
    const endValue = number;
    const duration = Math.floor(interval / endValue);
    let startValue = 0;

    const counter = setInterval(() => {
      // Increment the start value based on certain conditions
      if (startValue < 1000) {
        startValue += 1;
      } else if (startValue < 100_000_000) {
        startValue += 5;
      } else {
        startValue += 100_000;
      }

      // Determine the updated number to display
      const updatedNumber =
        startValue >= 1000 ? `${(startValue / 1000).toFixed(1)}K` : startValue;

      // Update the counter state with the updated number
      setCounter(updatedNumber);

      // Check if the start value has reached or exceeded the end value
      if (startValue >= endValue) {
        clearInterval(counter);
      }
    }, duration);
  };

  useEffect(() => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        const isIntersecting = target.isIntersecting;

        // Check if the counter element is intersecting the viewport
        if (isIntersecting) {
          // Call the numberCounter function to start the counting animation
          numberCounter(number);

          // Stop observing the counter element
          observer.unobserve(counterRef.current);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    // Get a reference to the counter element
    const currentRef = counterRef.current;

    // Observe the counter element
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [number]);

  return (
    <div ref={counterRef} className="flex flex-col justify-center items-center">
      <p className="text-6xl font-bold mx-1">{counter}</p>
      <span className=" text-slate-500 text-center">
        Plus
        <br />
        {text}
      </span>
    </div>
  );
};

export default Statistics;
