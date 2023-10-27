import PropTypes from 'prop-types';

export default function ReduceBtn({ handleClick }) {
  return (
    <button className="reduceBtn" onClick={handleClick}>
      -
    </button>
  );
}

ReduceBtn.propTypes = {
  handleClick: PropTypes.func,
};
