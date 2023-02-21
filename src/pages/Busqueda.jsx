import React, { useState, useEffect } from "react";
import axios from "axios";

const Busqueda = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [restaurantes, setRestaurantes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/Marianscabas/rest-api/restaurantes"
        );
        setRestaurantes(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setError(error.message);
      }
    }
    fetchData();
  }, []);

  const filteredRestaurantes = restaurantes.filter((restaurante) =>
    restaurante.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div 
    data-te-spy="scroll"
    data-te-target="#scrollspy1"
    data-te-offset="200"
    className="flex flex-col items-center p-5 ">
      <h1 className="text-3xl font-bold mb-5">Buscador de restaurantes</h1>
      <form className="w-full max-w-sm mb-5">
        <div className="flex items-center border-2 border-gray-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Ingresa el nombre del restaurante"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Buscar
          </button>
        </div>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="w-full max-w-md">
        {filteredRestaurantes.map((restaurante) => (
          <li
            key={restaurante.id}
            className="border border-gray-500 p-3 mb-3 rounded-lg"
          >
            <h2 className="text-xl font-bold mb-1">{restaurante.name}</h2>
            <p>{restaurante.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default  Busqueda;
