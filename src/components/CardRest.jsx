import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardRest = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  const [category, setCategory] = useState("todos");

  useEffect(() => {
    const fetchRestaurant = async () => {
      const response = await fetch(
        `https://my-json-server.typicode.com/Marianscabas/restaurante-api/restaurants/${id}`
      );
      const data = await response.json();
      setRestaurant(data);
      setMenu(data.menu);
    };
    fetchRestaurant();
  }, [id]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredMenu = menu.filter(
    (item) => category === "todos" || item.category === category
  );

  if (!restaurant) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="restaurant-page">
      <img src={restaurant.image} alt={restaurant.name} />
      <h2>{restaurant.name}</h2>
      <p>{restaurant.description}</p>
      <select value={category} onChange={handleCategoryChange}>
        <option value="todos">Todos</option>
        <option value="entradas">Entradas</option>
        <option value="platos-principales">Platos principales</option>
        <option value="postres">Postres</option>
        <option value="bebidas">Bebidas</option>
      </select>
      <ul>
        {filteredMenu.map((item) => (
          <li key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CardRest;

// import React,{useEffect, useState} from "
// import axios from "axios";
// const CardRest = () => {
//   const [restaurantes, setRestaurantes] = useState([]);
//   const [filteredMenu, setFilteredMenu] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('https://my-json-server.typicode.com/Marianscabas/restaurante-api/restaurantes');
//         setRestaurantes(response.data);
//       } catch (error) {
//         console.error('Error al obtener los datos:', error);
//       }
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (selectedCategory === '') {
//       setFilteredMenu([]);
//       return;
//     }
//     const filtered = restaurantes.flatMap(restaurante => {
//       return restaurante.menu.filter(item => item.category === selectedCategory);
//     });
//     setFilteredMenu(filtered);
//   }, [restaurantes, selectedCategory]);

//   const handleSelectCategory = e => {
//     setSelectedCategory(e.target.value);
//   };

//   return (
//     <div className='bg-yellow border-spacing-6 '>
//       <h1>Restaurantes:</h1>
//       {restaurantes.map((restaurante) => (
//         <div
//         className='bg-gray p-5'
//         key={restaurante.id}>
//           <h2>{restaurante.name}</h2>
//           <p>{restaurante.description}</p>
//           <img src={restaurante.banner} alt="Banner" />
//           <p>Horario: {restaurante.schedule}</p>

//           <h3>Menú:</h3>
//           <label htmlFor="category-select">Filtrar por categoría:</label>
//           <select id="category-select" onChange={handleSelectCategory}>
//             <option value="">Todas</option>
//             {restaurante['food-categories'].map((categoria) => (
//               <option key={categoria} value={categoria}>{categoria}</option>
//             ))}
//           </select>
//           {filteredMenu.length === 0 ? (
//             restaurante.menu.map((item) => (
//               <div key={item.idItem}>
//                 <h4>{item.name}</h4>
//                 <p>{item.description}</p>
//                 <img src={item.image} alt="Imagen del plato" />
//                 <p>Categoría: {item.category}</p>
//                 <p>Precio: {item.price}</p>
//                 <p>Tiempo de preparación: {item.cookingTime}</p>
//               </div>
//             ))
//           ) : (
//             filteredMenu.map((item) => (
//               <div key={item.idItem}>
//                 <h4>{item.name}</h4>
//                 <p>{item.description}</p>
//                 <img src={item.image} alt="Imagen del plato" />
//                 <p>Categoría: {item.category}</p>
//                 <p>Precio: {item.price}</p>
//                 <p>Tiempo de preparación: {item.cookingTime}</p>
//               </div>
//             ))
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CardRest;
