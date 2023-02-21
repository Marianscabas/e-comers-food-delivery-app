import React, { useEffect , useState } from "react";
import axios from "axios";

const Card = () => {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/Marianscabas/rest-api/restaurantes"
        );
        setRestaurantes(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    fetchData();
  }, []);


  return (
      <div
      data-te-spy="scroll"
      data-te-target="#scrollspy1"
      data-te-offset="200"
      className="relative h-72  overflow-auto">
      
        {restaurantes.map((restaurante) => (
          <div className="">
            <div className=" bg-white text-xs p-5 m-5 rounded-xl flex  flex-row gap-5 ">
              <img
              className=""
              width="100px"
             src={restaurante.banner} 
              alt="Banner" />
            <div className="flex  flex-col text-justify font-serif  ">
              <h2>{restaurante.name}</h2>
              <p>{restaurante.description}</p>
            </div>          

            </div>
          </div>
        ))}
      </div>
      );
};

export default Card;
