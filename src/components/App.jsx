import React, { Component } from 'react';
import css from './app.module.css';
import { nanoid } from 'nanoid';

const Form = props => {
  return (
    <form onSubmit={props.submitFunc}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Phone</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button>Add contacts</button>
    </form>
  );
};

const Filter = props => {
  return (
    <input
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      // value={filter}
      onChange={props.filterFunc}
    />
  );
};

const Contact = ({ id, name, number, deleteFunc }) => {
  return (
    <li>
      {name} {number}{' '}
      <button type="button" onClick={() => deleteFunc(id)}>
        remove
      </button>
    </li>
  );
};

const ContactList = props => {
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

export class App extends Component {
  state = {
    contacts: [
      { key: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { key: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { key: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { key: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleDelete = id => {
    const filteredContacts = this.state.contacts.filter(
      contact => contact.key !== id
    );

    //this.setState(() => ({ contacts: [...filteredContacts] }));

    this.setState({ contacts: [...filteredContacts] });
  };

  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  filterItems = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (this.state.contacts.map(el => el.name).includes(name))
      alert(`${name} is already in contacts`);
    else
      this.setState({
        contacts: [
          ...this.state.contacts,
          { key: nanoid(), name: name, number: number },
        ],
      });
    console.log(this.state.contacts);
    form.reset();
  };

  render() {
    return (
      <div className={css.main_div}>
        <h2>Phonebook</h2>
        <Form submitFunc={this.handleSubmit}></Form>
        <h2>Contacts</h2>
        <Filter filterFunc={this.handleChange}></Filter>
        <ContactList
          contactFunc={this.filterItems}
          deleteFunc={this.handleDelete}
        ></ContactList>
      </div>
    );
  }
}
