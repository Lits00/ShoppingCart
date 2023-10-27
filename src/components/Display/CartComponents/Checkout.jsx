import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function Checkout({ cart }) {
  const [total, setTotal] = useState(0);

  const alertMessage = () => {
    alert(
      'Thank you for checking out but this feature is currently unavailable!'
    );
  };

  useEffect(() => {
    const getTotal = () => {
      let amount = 0;
      cart.forEach((item) => (amount += item.price * item.quantity));
      setTotal(amount);
    };
    getTotal();
  }, [cart]);

  return (
    <div data-testid="cartCheckout" className="total">
      <p className="amount">{`Total amount: $${total}`}</p>
      <button className="checkout" onClick={() => alertMessage()}>
        Checkout
      </button>
    </div>
  );
}

Checkout.propTypes = {
  cart: PropTypes.array,
};
