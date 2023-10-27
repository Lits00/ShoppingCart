import CartBtn from '../Buttons/NavBtns/CartBtn';
import HomeBtn from '../Buttons/NavBtns/HomeBtn';
import ShopBtn from '../Buttons/NavBtns/ShopBtn';

export default function NavLinks() {
  return (
    <nav>
      <ul>
        <li>
          <HomeBtn />
        </li>
        <li>
          <ShopBtn />
        </li>
        <li>
          <CartBtn />
        </li>
      </ul>
    </nav>
  );
}
