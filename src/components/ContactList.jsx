import PropTypes from 'prop-types';

import { Contact } from './Contact';

export const ContactList = props => {
  return (
    <ul>
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
