import PropTypes from 'prop-types';

export default function AddToCart({
  name,
  price,
  image,
  id,
  quantity,
  handleClick,
}) {
  return (
    <button
      className="toCart"
      onClick={() => handleClick(name, price, image, id, quantity)}
    >
      Add to Cart
    </button>
  );
}

AddToCart.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.number,
  quantity: PropTypes.number,
  handleClick: PropTypes.func,
};
