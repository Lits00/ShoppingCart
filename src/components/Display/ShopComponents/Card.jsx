import PropTypes from 'prop-types';
import '../style/card.css';
import CardBtns from '../../Buttons/ShopBtns/CardBtns';

export default function Card({ itemName, itemPrice, image, id }) {
  return (
    <div className="card">
      <img className="itemImg" src={image} alt={itemName} />
      <div className="itemInfo">
        <div className="cardTxt">
          <p className="itemName">{itemName}</p>
          <p className="itemPrice">{'$' + itemPrice}</p>
        </div>
        <div className="cardBtns">
          <CardBtns name={itemName} price={itemPrice} image={image} id={id} />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  itemName: PropTypes.string,
  itemPrice: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.number,
};
