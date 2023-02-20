import React, { useState } from 'react'



const images = [
  {
    src: require('../images/next1.png'),
    alt: 'Introducción a la aplicación',
    title: 'Choose what to eat choosing from a variety of restaurants from the list'
  },
  {
    src: require('../images/next2.png'),
    alt: 'Introducción a la aplicasion',
    title: 'Choose where you want to deliver by indicating on the map'
  },
  {
    src: require('../images/next3.png'),
    alt: 'Introducción a la aplicasion',
    title: 'We will deliver as soon as possible'
  },
];

export const StartApp = () => {
    const [currentImage, setCurrentImage] = useState(0);
   
  
    const handleNext = () => {

      if (currentImage === images.length - 1) {
     window.location.assign("/LoginButton")
      } else {
        setCurrentImage(currentImage + 1);
      }
    };
  
    return (
      <div className="flex flex-col justify-center   items-center gap-11">
        <img
          className=" "
          src={images[currentImage].src}
          width="250px"
          height="280px"
          alt={images[currentImage].alt}
        />
        <h3 
        className='text-center font-inter  '>
          {images[currentImage].title}
        </h3>
  
        <button 
        className=" bg-yellow fixed mt-96 h-8 w-64 rounded-full    "
         onClick={handleNext}>
          Next
        </button>
  
      </div>
    );
  };

  export default StartApp