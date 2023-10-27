import { ShoppingBasket } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../Context/CartContext';

export default function CartBtn() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <Link to="/cart" className="cartBtn">
        <Badge badgeContent={cart.length} color="error">
          <ShoppingBasket color="action" />
        </Badge>
      </Link>
    </>
  );
}
