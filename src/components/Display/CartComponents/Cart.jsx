import { useContext } from 'react';
import CartContext from '../../Context/cartContext';
import CartCard from './CartCard';
import '../style/cart.css';
import Total from './Total';

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const removeToCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <section data-testid="cartSection" className="cartPage">
      <div className="cartItems">
        {cart.map((item) => (
          <CartCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            handleClick={() => removeToCart(item.id)}
          />
        ))}
        <Total />
      </div>
    </section>
  );
}
