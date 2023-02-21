 import React from 'react';

const Card = ({ restaurante }) => {
  return (
    <div className='bg-yellow border-4'>
      <h2>{restaurante.name}</h2>
      <p>{restaurante.description}</p>
      <img src={restaurante.banner} alt="Banner" />
      <p>Horario: {restaurante.schedule}</p>
      <ul>
        {restaurante['food-categories'].map((categoria) => (
          <li key={categoria}>{categoria}</li>
        ))}
      </ul>
      <h3>Menú:</h3>
      {restaurante.menu.map((item) => (
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

export default Card;
