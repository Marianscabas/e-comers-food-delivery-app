import React from "react";
import Carrucel from "../components/Carrucel";

const Home = () => {
  const images = [
    require("../images/Promo1.png"),
    require("../images/Promo1.png"),
    require("../images/Promo1.png"),
   
  ];

  return(
  <div
   className="  "
   >
    <Carrucel images={images} />
  </div>
  );
};
export default Home;
