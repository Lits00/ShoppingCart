import { useParams } from 'react-router-dom';
import Shop from './ShopComponents/Shop';
import Cart from './CartComponents/Cart';
import ErrorPage from '../ErrorPage';
import Home from './Home';

export default function Container() {
  const { name } = useParams();

  return (
    <main>
      {name === undefined || name === '' ? (
        <Home />
      ) : name === 'shop' ? (
        <Shop />
      ) : name === 'cart' ? (
        <Cart />
      ) : (
        <ErrorPage />
      )}
    </main>
  );
}
