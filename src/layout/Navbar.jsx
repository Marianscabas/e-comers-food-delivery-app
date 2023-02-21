import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" border-x-gray-dark fixed bottom-0 text-center space-aruund flex flex-row gap-11 p-3">
      
        <Link to="/Home" className="flex flex-col justify-center items-center">
          <img className="" src="./icono-home.svg" width="40px" alt="icono-home" />
          
        </Link>

        <Link to="/Busqueda" className="flex flex-col justify-center items-center" >
          <img
            src="./icono-lens.svg"
            width="40px"
            alt="icono-lens"
          />
        </Link>


        <Link to="/Orden" className="flex flex-col justify-center items-center">
          <img src="./icono-order.svg" width="40px" alt="icono-order" />
        </Link>

        <Link to="/Profile" className="flex flex-col justify-center items-center">
          <img src="./icono-profile.svg" width="40px" alt="icono-profile" />
        </Link>
      </div>
    
  );
};

export default Navbar;
