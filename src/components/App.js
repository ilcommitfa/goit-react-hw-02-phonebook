import { Component} from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import {Container} from './App.styled';

class App extends Component {
  state = {
      contacts: [],
      filter: '',
    };

  addContact = (name, number) => {
    const contact = { id: nanoid(), name, number };
    if (this.state.contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState({ contacts: [contact, ...this.state.contacts] });
  };

  deleteContact = (id) => {
    this.setState({ contacts: this.state.contacts.filter((item) => item.id !== id) });
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter((item) =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
