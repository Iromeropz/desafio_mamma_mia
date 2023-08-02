import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Home from './views/Home';
import PizzaDetail from './views/PizzaDetail.jsx';
import Carrito from './views/Carrito';
import NotFound from './views/NotFound';
import { AppProvider } from './contexts/ContextData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const App = () => {
  const [data, setData] = useState([]);

  // Cargar los datos de pizzas desde el archivo pizzas.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/pizzas.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <AppProvider data={data}>
      <div className="App">
        <Router>
          <Navbar />
          <Container className="mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizza/:id" element={<PizzaDetail />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </Router>
      </div>
    </AppProvider>
  );
};

export default App;

