//DEPENDENCIES
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Home from './pages/Home';

//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

//COMPONENTS
import Store from './pages/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import CartProvider from './CartContext';
import NavComponent from './components/Navbar/Navbar';

function App() {
  return (
		<div className='bg-parent'>
    <CartProvider>
      <Container>
        <NavComponent></NavComponent>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
						<Route path='/store' element={<Store />} />
            <Route path='success' element={<Success />} />
            <Route path='cancel' element={<Cancel />} />
						<Route path='store' element={<Store />} />
					</Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
		</div>
  );
};

export default App;
