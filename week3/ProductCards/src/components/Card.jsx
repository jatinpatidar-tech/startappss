// Card.js
import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='container'>
      <img className="card-image" src={props.item.image} alt={props.item.name} />
      <h2 className="card-title">{props.item.brand}</h2>
      <p className='description'>{props.item.description}</p>
      <div className="price-name">
        <h1>₹{props.item.price}</h1>
        <h3>{props.item.name}</h3>
      </div>           
    </div>
  );
};


Card.defaultProps = {
  item: {
    image: 'https://via.placeholder.com/150',
    brand: 'Unknown Brand',
    description: 'No description available.',
    price: 'N/A',
    name: 'Unnamed Product'
  }
};  



 export default Card;
