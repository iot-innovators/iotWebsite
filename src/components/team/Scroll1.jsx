import { useState, useEffect } from "react";

const Scroll1 = () => {
  const [count, setCount] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  useEffect(() => {
    let intervalId;
    if (hasScrolled) {
      let i = 1; // Start from 1
      intervalId = setInterval(() => {
        if (i <= 13) {
          // Stop after reaching 13
          setCount(i);
          i++;
        } else {
          clearInterval(intervalId); // Stop after counting to 13
        }
      }, 500); // Change this interval time to control speed of animation
    }

    return () => clearInterval(intervalId); // Cleanup on unmount or when count is finished
  }, [hasScrolled]);

  return (
    <div className="relative overflow-hidden w-full h-16">
      <span
        className={`absolute ${hasScrolled ? "animate-scroll" : ""} text-xl`}
      >
        {count}
      </span>
    </div>
  );
};

export default Scroll1;
