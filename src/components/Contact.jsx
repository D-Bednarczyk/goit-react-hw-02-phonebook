import PropTypes from 'prop-types';

export const Contact = ({ id, name, number, deleteFunc }) => {
  return (
    <li>
      {name} {number}{' '}
      <button type="button" onClick={() => deleteFunc(id)}>
        remove
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteFunc: PropTypes.func.isRequired,
};
