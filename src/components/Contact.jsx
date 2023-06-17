import PropTypes from 'prop-types';
import css from './contact.module.css';

export const Contact = ({ id, name, number, deleteFunc }) => {
  return (
    <li className={css.contactsItem}>
      {name} {number}{' '}
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => deleteFunc(id)}
      >
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
