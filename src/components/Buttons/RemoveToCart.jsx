import PropTypes from 'prop-types';

export default function RemoveToCart({ handleClick }) {
  return (
    <button className="remove" onClick={() => handleClick()}>
      Remove
    </button>
  );
}

RemoveToCart.propTypes = {
  handleClick: PropTypes.func,
};
