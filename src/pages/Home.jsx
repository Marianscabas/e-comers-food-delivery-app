import React from "react";
import Carrucel from "../components/Carrucel";
import Navbar from "../layout/Navbar";
import CardRest from "../components/CardRest";

const Home = () => {

  const images = [
    require("../images/Promo1.png"),
    require("../images/Promo2.png"),
    require("../images/Promo3.png"),
  ];

  return (
    <div >
      <div className="p-5">
      <div className=" flex flex-row  ">
        <div>
          <img width="40px" src="./location.svg" alt="icono-location" />
        </div>

        <div className=" items-justify font-extralight flex flex-col ">
          <p className=" text-sm text-yellow-hol  font-sans">DELIVER TO</p>

          <p> 882 Well St, New-York</p>
        </div>
      </div>

      <div>
        <Carrucel images={images} />
      </div>
      <span className=" text-gray ">Restaurants and cafes</span>
       </div>
      <div 
      className=" "
      >  
      <CardRest/>
         <Navbar/>
      </div>
 
    </div>
  );
};
export default Home;
