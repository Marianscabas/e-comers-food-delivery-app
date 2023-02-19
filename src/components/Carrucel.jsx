import "react-responsive-carousel/lib/styles/carousel.min.css"; // Estilos del carrusel
import { Carousel } from "react-responsive-carousel"; // Componente del carrusel
import { useState, useEffect } from "react";

const Carrucel = ({ images, interval = 7000, transition = 500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearTimeout(timeout);
  }, [currentIndex, images.length, interval]);


  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={interval}
      transitionTime={transition}
      showStatus={true}
      showArrows={false}
      showThumbs={false}
      showIndicators={true}    
      selectedItem={currentIndex}
      onChange={setCurrentIndex}
  
    >
      {images.map((image, index) => (

        <div 
className="rounded-full mt-20 p-3 "
        key={index}>
          <img 
         
          className=" h-16    "
          src={image} alt={`Slide ${index}`} />
        
        </div>
      ))}
    </Carousel>
  );
}


export default Carrucel
