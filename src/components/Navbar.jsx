import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { useAppContext } from '../contexts/ContextData';
import headerImage from '../assets/img/pizza-header.jpg';

const Navbar = () => {
  const { cartItems } = useAppContext();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const formatPrice = (price) => {
    return price.toLocaleString('es-CL');
  };

  return (
    <>
      <BootstrapNavbar bg="info" variant="dark" expand="md">
        <Container>
          <NavLink to="/" className="navbar-brand">
          🍕Pizzería Mamma Mia!
          </NavLink>
          <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
          <BootstrapNavbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/carrito" className="nav-link">
                Carrito
              </NavLink>
            </Nav>
            {cartItems.length > 0 && (
              <span className="cart-total">
                🛒${formatPrice(total)}
              </span>
            )}
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
      {/* Agregar la imagen debajo del Navbar */}
      <img src={headerImage} alt="Header" style={{ width: '100%', height: '220px' }} />
    </>
  );
};

export default Navbar;




