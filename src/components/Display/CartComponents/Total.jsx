import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import ShopBtn from '../../Buttons/NavBtns/ShopBtn';
import Checkout from './Checkout';

export default function Total() {
  const { cart } = useContext(CartContext);

  const Redirect = () => {
    return (
      <div data-testid="cartRedirect" className="total">
        <p className="redirect">You currently have no items in your cart.</p>
        <ShopBtn text="Shop Now" btnType={'defaultBtn'} />
      </div>
    );
  };

  return <>{cart.length === 0 ? <Redirect /> : <Checkout cart={cart} />}</>;
}
