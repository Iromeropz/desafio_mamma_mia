import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useAppContext } from '../contexts/ContextData';
import { formatPrice } from '../components/FromatoPrecio';

const Carrito = () => {
  const { cartItems, removeItemFromCart } = useAppContext();

  // Calcular la suma total de los productos en el carrito
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h1>Carrito de Compra</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Remove from cart</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.img} alt={item.name} style={{ width: '50px' }} />
              </td>
              <td>{item.name}</td>
              <td>${formatPrice(item.price)}</td>
              <td>
                <button onClick={() => removeItemFromCart(item.id)} className="btn btn-danger">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-right">
        <h4>Total: ${formatPrice(total)}</h4>
        <Button className="btn btn-primary">Ir a pagar</Button>
      </div>
    </div>
  );
};

export default Carrito;


