import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import PizzaCard from '../components/card';
import { AppContext } from '../contexts/ContextData';

const Home = () => {
  const { data } = useContext(AppContext);

  return (
    <Row>
      {data.map((pizza) => (
        <Col key={pizza.id} xs={12} sm={6} md={4}>
          <PizzaCard pizza={pizza} />
        </Col>
      ))}
    </Row>
  );
};

export default Home;

