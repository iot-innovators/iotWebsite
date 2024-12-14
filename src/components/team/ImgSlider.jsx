import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImgSlider = ({ images, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesToShow, setImagesToShow] = useState(1);

  useEffect(() => {
    const updateImagesToShow = () => {
      if (window.innerWidth >= 1024) {
        setImagesToShow(4); // 3 images on large screens
      } else if (window.innerWidth >= 640) {
        setImagesToShow(2); // 2 images on medium screens
      } else {
        setImagesToShow(1); // 1 image on mobile
      }
    };

    // Set initial value
    updateImagesToShow();

    // Add event listener on window resize
    window.addEventListener("resize", updateImagesToShow);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateImagesToShow);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - imagesToShow ? 0 : prev + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval, imagesToShow]);

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - imagesToShow ? 0 : prev + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - imagesToShow : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-[50rem] mx-auto h-[200px] sm:h-[200px] md:h-[240px] overflow-hidden lg:rounded-xl flex items-center px-8">
      <div
        className="absolute  transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / imagesToShow}%)`,
        }}
      >
        <div className="flex h-full ">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0"
              style={{
                flex: `0 0 ${100 / imagesToShow}%`,
              }}
            >
              <img src={image.url} alt={image.alt} className="border" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ImgSlider;
