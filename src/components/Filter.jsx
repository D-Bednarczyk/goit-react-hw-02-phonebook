import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = props => {
  return (
    <input
      className={css.filterInput}
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      // value={filter}
      onChange={props.filterFunc}
    />
  );
};

Filter.propTypes = { filterFunc: PropTypes.func.isRequired };
