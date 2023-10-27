import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function HomeBtn({ btnType }) {
  return (
    <>
      <Link to="/" className={`btn ${btnType}`}>
        Home
      </Link>
    </>
  );
}

HomeBtn.propTypes = {
  btnType: PropTypes.string,
};
