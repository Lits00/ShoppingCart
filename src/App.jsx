import Container from './components/Display/Container';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import { useState } from 'react';
import CartContext from './components/Context/cartContext';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <>
        <Header />
        <Container />
        <Footer />
      </>
    </CartContext.Provider>
  );
}

export default App;
