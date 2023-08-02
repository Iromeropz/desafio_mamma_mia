import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../contexts/ContextData.jsx';
import { formatPrice } from '../components/FromatoPrecio.jsx';

const PizzaDetail = () => {
  const { id } = useParams();
  const { data, addItemToCart } = useAppContext(); // Agregar addItemToCart del contexto
  const pizza = data.find((pizza) => pizza.id === id);

  if (!pizza) {
    return <p>No se encontró la pizza</p>; // O redirigir a una página de error, etc.
  }

  // Función para agregar la pizza al carrito
  const handleAddToCart = () => {
    addItemToCart(pizza);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          {pizza.desc}
          <br />
          <strong>Ingredients:</strong> {pizza.ingredients.join(', ')}
          <br />
          <strong>Price:</strong> ${formatPrice(pizza.price)}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <button onClick={handleAddToCart} className="btn btn-primary btn-sm">
          Agregar al Carrito
        </button>
      </Card.Body>
    </Card>
  );
};

export default PizzaDetail;

