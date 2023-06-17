import PropTypes from 'prop-types';
import css from './Form.module.css';

export const Form = props => {
  return (
    <form className={css.form} onSubmit={props.submitFunc}>
      <label>Name</label>
      <input
        className={css.formInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Phone</label>
      <input
        className={css.formInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.formBtn}>Add contacts</button>
    </form>
  );
};

Form.propTypes = { submitFunc: PropTypes.func.isRequired };
