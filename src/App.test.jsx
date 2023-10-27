import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import Cart from './components/Display/CartComponents/Cart';
import CartContext from './components/Context/CartContext';

// vitest with react testing library
// test suite (describe) contains all related tests
describe('Initial render of App component', () => {
  // test cases (it/test)
  it('renders home page', () => {
    const { container } = render(<App />, { wrapper: BrowserRouter });
    // console.log(container.outerHTML);

    // assertion (expect().toMatch etc.)
    expect(container).toMatchSnapshot();
  });

  //   it('renders nav buttons', () => {
  // render(<App />, { wrapper: BrowserRouter });
  // console.log(screen.getByRole('navigation').outerHTML);

  // expect(screen.getByRole('navigation')).toBeInTheDocument();
  //   });

  //   it('renders main container', () => {
  // render(<App />, { wrapper: BrowserRouter });
  // console.log(screen.getByRole('main').outerHTML);
  // expect(screen.getByRole('main')).toBeInTheDocument();
  //   });
});

describe('Nav bar links', () => {
  it('redirects to home page', async () => {
    const user = userEvent.setup();

    render(<App />, { wrapper: BrowserRouter });
    const homeBtn = screen.getByRole('link', { name: 'Home' });

    await user.click(homeBtn);
    expect(window.location.pathname).toEqual('/');
  });

  it('redirects to shop page', async () => {
    const user = userEvent.setup();

    render(<App />, { wrapper: BrowserRouter });
    const shopBtn = screen.getByRole('link', { name: 'Shop' });

    await user.click(shopBtn);
    expect(window.location.pathname).toEqual('/shop');
  });

  it('redirects to cart page', async () => {
    const user = userEvent.setup();

    render(<App />, { wrapper: BrowserRouter });
    const cartBtn = screen.getByTestId('ShoppingBasketIcon');

    await user.click(cartBtn);
    expect(window.location.pathname).toEqual('/cart');
  });
});

describe('Cart page render', () => {
  it('renders initial cart page', () => {
    const cart = [];
    const setCart = () => {};

    render(
      <CartContext.Provider value={{ cart, setCart }}>
        <Cart />
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByTestId('cartSection')).toBeInTheDocument();
    expect(screen.getByTestId('cartRedirect')).toBeInTheDocument();
  });
});
