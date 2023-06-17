import PropTypes from 'prop-types';
import css from './contact.module.css';
import { Contact } from './Contact';

export const ContactList = props => {
  return (
    <ul className={css.contactsItem}>
      {props.contactFunc().map(el => (
        <Contact
          key={el.key}
          id={el.key}
          name={el.name}
          number={el.number}
          deleteFunc={props.deleteFunc}
        ></Contact>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactFunc: PropTypes.func.isRequired,
  deleteFunc: PropTypes.func.isRequired,
};
