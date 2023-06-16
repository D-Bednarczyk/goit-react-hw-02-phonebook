import React, { Component } from 'react';
import css from './app.module.css';
import { nanoid } from 'nanoid';
import { Form } from './Form';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

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
