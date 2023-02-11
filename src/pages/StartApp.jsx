import React, { useState } from 'react';
import login from './login';


const images = [
  require('../images/next1.png'),
  require('../images/next2.png'),
  require('../images/next3.png'),
];

 export const StartApp= () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage === images.length - 1) {
      // Mostrar el botón de inicio de sesión o redirigir a la vista de inicio de sesión
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <div className='bg-slate-800 '>
      <img src={images[currentImage]} alt="Introducción a la aplicación" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StartApp;
