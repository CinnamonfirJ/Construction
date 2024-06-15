import { useState } from "react";

import { slides } from "../assets/images/index.js";
import {
  cheveronRight,
  chevronLeft,
  circle,
  circleDot,
} from "../assets/icons/index.js";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // setInterval(() => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   console.log(newIndex);
  //   setCurrentIndex(newIndex);
  // }, 5000);

  const goToSlideIndex = (slideIndex) => {
    setCurrentIndex(slideIndex);
    console.log(slideIndex);
  };

  return (
    <section className=' max-w-[1440px] h-[780px] max-md:h-[560px] w-full relative group'>
      <div className=' absolute w-full h-full bg-black/30 rounded-2xl'></div>
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=' w-full h-full rounded-2xl  duration-500'
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 z-50 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <img src={chevronLeft} alt='left' onClick={prevSlide} width={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 z-50 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <img src={cheveronRight} alt='right' onClick={nextSlide} width={30} />
      </div>
      <div className=' flex justify-center w-full gap-6 py-2 absolute top-[92%] translate-x-0 '>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlideIndex(slideIndex)}
            className=' text-2xl cursor-pointer'
          >
            {currentIndex === slideIndex ? (
              <img src={circleDot} alt='dot' width={20} />
            ) : (
              <img src={circle} alt='dot' width={20} />
            )}
          </div>
        ))}
      </div>
      <div className=' absolute w-full top-[50%] translate-x-0 translate-y-[-50%] flex justify-center text-8xl max-lg:text-4xl max-md:text-2xl font-palanquin text-white font-bold text-center'>
        <h1>
          Welcome to <span className=' text-coral-red'>BuildWise</span>, where
          we turn your remodeling dreams into reality.{" "}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
