import { useContext, useState } from 'react';
import AddBtn from '../AddBtn';
import ReduceBtn from '../ReduceBtn';
import AddToCart from './AddToCart';
import PropTypes from 'prop-types';
import CartContext from '../../Context/CartContext';

export default function CardBtns({ name, price, image, id }) {
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((currQuantity) => currQuantity + 1);
  };

  const decrement = () => {
    setQuantity((currQuantity) => {
      return currQuantity === 1 ? currQuantity : currQuantity - 1;
    });
  };

  const addToCart = (name, price, image, id, quantity) => {
    const newItem = { name, price, image, id, quantity };

    if (!cart.some((item) => item.id === id)) {
      setCart((currCart) => {
        return [...currCart, newItem];
      });
    } else {
      const updateOrder = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
      setCart(updateOrder);
    }
  };

  return (
    <>
      <div className="quantityBtn">
        <p>quantity: </p>
        <AddBtn handleClick={increment} />
        <span className="itemQuantity">{quantity}</span>
        <ReduceBtn handleClick={decrement} />
      </div>
      <AddToCart
        name={name}
        price={price}
        image={image}
        id={id}
        quantity={quantity}
        handleClick={addToCart}
      />
    </>
  );
}

CardBtns.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.number,
};
