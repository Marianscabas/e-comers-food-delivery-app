import React from "react";
import Carrucel from "../components/Carrucel";
import Navbar from "../layout/Navbar";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const images = [
    require("../images/Promo1.png"),
    require("../images/Promo2.png"),
    require("../images/Promo3.png"),
  ];

  return (
    <div>
      <div className="p-5 overflow-auto">
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
      <div>
        <Card />
      </div>

      <div>
        <Navbar />
      </div>
    </div>
  );
};
export default Home;
