import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/ContextData';
import { formatPrice } from '../components/FromatoPrecio';

const PizzaCard = ({ pizza }) => {
  const { addItemToCart } = useAppContext();

  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>{pizza.ingredients.join(', ')}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: ${formatPrice(pizza.price)}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex flex-column">
        <Link to={`/pizza/${pizza.id}`} className="btn btn-primary btn-sm mb-2">
          Ver Detalles
        </Link>
        <button onClick={() => addItemToCart(pizza)} className="btn btn-success btn-sm">
          Agregar al Carrito
        </button>
      </Card.Body>
    </Card>
  );
};

export default PizzaCard;
