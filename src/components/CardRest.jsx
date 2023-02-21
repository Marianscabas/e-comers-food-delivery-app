import React, { useState , useEffect} from "react";
import axios from "axios";

const CardRest = () => {
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
    <div>
      {restaurantes.map((restaurante) => (
        <RestaurantCard key={restaurante.id} restaurante={restaurante} />
      ))}
    </div>
  );
};

const RestaurantCard = ({ restaurante }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="bg-gray text-xs p-5 m-5 rounded-xl">
      <img src={restaurante.banner} alt="Banner" />
      <h2>{restaurante.name}</h2>
      <p>{restaurante.description}</p>
      <p>Horario: {restaurante.schedule}</p>
      <Menu menu={restaurante.menu} categories={restaurante["food-categories"]} selectedCategory={selectedCategory} handleSelectCategory={handleSelectCategory} />
    </div>
  );
};

const Menu = ({ menu, categories, selectedCategory, handleSelectCategory }) => {
  const filteredMenu = selectedCategory === "" ? menu : menu.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gray-dark p-5 m-5 text-sm rounded-xl">
      <h3>Menú:</h3>
      <label htmlFor="category-select">Filtrar por categoría:</label>
      <select id="category-select" onChange={handleSelectCategory}>
        <option value="">Todas</option>
        {categories.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
      {filteredMenu.map((item) => (
        <div key={item.idItem}>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <img src={item.image} alt="Imagen del plato" />
          <p>Categoría: {item.category}</p>
          <p>Precio: {item.price}</p>
          <p>Tiempo de preparación: {item.cookingTime}</p>
        </div>
      ))}
    </div>
  );
};

export default CardRest;































// import React, { useEffect, useState } from "react";




// import axios from "axios";

// const CardRest = () => {
//   const [restaurantes, setRestaurantes] = useState([]);
//   const [filteredMenu, setFilteredMenu] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(
//           "https://my-json-server.typicode.com/Marianscabas/rest-api/restaurantes"
//         );
//         setRestaurantes(response.data);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (selectedCategory === "") {
//       setFilteredMenu([]);
//       return;
//     }
//     const filtered = restaurantes.flatMap((restaurante) => {
//       return restaurante.menu.filter(
//         (item) => item.category === selectedCategory
//       );
//     });
//     setFilteredMenu(filtered);
//   }, [restaurantes, selectedCategory]);

//    const handleSelectCategory = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   return (
//     <div className="  ">
//       <h1>Restaurantes:</h1>
//       {restaurantes.map((restaurante) => (
//         <div>
//           key={restaurante.id}
//           <div className=" bg-gray text-xs p-5 m-5 rounded-xl ">
//             <img src={restaurante.banner} alt="Banner" />
//             <h2>{restaurante.name}</h2>
//             <p>{restaurante.description}</p>
//             <p>Horario: {restaurante.schedule}</p>
//           </div>

// <div className="bg-gray-dark p-5 m-5 text-sm rounded-xl">
//           <h3>Menú:</h3>
//           <label htmlFor="category-select">Filtrar por categoría:</label>
//           <select id="category-select" onChange={handleSelectCategory}>
//             <option value="">Todas</option>
//             {restaurante["food-categories"].map((categoria) => (
//               <option key={categoria} value={categoria}>
//                 {categoria}
//               </option>
//             ))}
//           </select>
// </div>

//           {filteredMenu.length === 0
//             ? restaurante.menu.map((item) => (
//                 <div key={item.idItem}>
//                   <h4>{item.name}</h4>
//                   <p>{item.description}</p>
//                   <img src={item.image} alt="Imagen del plato" />
//                   <p>Categoría: {item.category}</p>
//                   <p>Precio: {item.price}</p>
//                   <p>Tiempo de preparación: {item.cookingTime}</p>
//                 </div>
//               ))
//             : filteredMenu.map((item) => (
//                 <div key={item.idItem}>
//                   <h4>{item.name}</h4>
//                   <p>{item.description}</p>
//                   <img src={item.image} alt="Imagen del plato" />
//                   <p>Categoría: {item.category}</p>
//                   <p>Precio: {item.price}</p>
//                   <p>Tiempo de preparación: {item.cookingTime}</p>
//                 </div>
//               ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardRest;
