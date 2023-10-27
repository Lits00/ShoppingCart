import PropTypes from 'prop-types';
import RemoveToCart from '../../Buttons/RemoveToCart';

export default function CartCard({
  image,
  name,
  price,
  quantity,
  handleClick,
}) {
  function Subtotal() {
    let subtotal = price * quantity;
    return <p>{`Subtotal: $${subtotal}`}</p>;
  }

  return (
    <div className="cartCard">
      <img src={image} alt={name} className="cartImg" />
      <div className="orderInfo">
        <h3 className="orderName">{name}</h3>
        <p className="orderPrice">{`Price: $${price}`}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="orderSetting">
        <Subtotal />
        <RemoveToCart handleClick={handleClick} />
      </div>
    </div>
  );
}

CartCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  handleClick: PropTypes.func,
};
