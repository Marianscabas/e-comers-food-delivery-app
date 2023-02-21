import React from "react";

import Card from "../components/Card";
const CardDetail= ({
  menu,
  categories,
  selectedCategory,
  handleSelectCategory,
}) => {
  const filteredMenu =
    selectedCategory === ""
      ? menu
      : menu.filter((item) => item.category === selectedCategory);

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

export default CardDetail;
