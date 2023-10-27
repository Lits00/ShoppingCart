import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ShopBtn({ text = 'Shop', btnType }) {
  return (
    <>
      <Link to="/shop" className={`btn ${btnType}`}>
        {text}
      </Link>
    </>
  );
}

ShopBtn.propTypes = {
  text: PropTypes.string,
  btnType: PropTypes.string,
};
