import PropTypes from 'prop-types';

export default function AddBtn({ handleClick }) {
  return (
    <button className="addBtn" onClick={handleClick}>
      +
    </button>
  );
}

AddBtn.propTypes = {
  handleClick: PropTypes.func,
};
