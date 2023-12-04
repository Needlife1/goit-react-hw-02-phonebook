import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();

    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  render() {
    const filterContacts = this.getFilteredContacts();

    return (
      <>
        <h1 style={{ color: 'pink' }}>Phonebook</h1>
        <Form onChange={this.handleChange} onSubmit={this.addContact} />
        <h2 style={{ color: 'pink' }}>Contacts</h2>
        <Filter onChange={this.handleChange} value={this.state.filter} />

        <ContactList contacts={filterContacts} />
      </>
    );
  }
}
