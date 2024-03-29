import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, InputThumb, Input, ButtonThumb } from './ContactForm.styled'; 

class ContactForm extends Component {
  state = {
      name: '',
      number: ''
    };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputThumb>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleNameChange}
          />
        </InputThumb>
        <InputThumb>
          <label htmlFor="number">Number</label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleNumberChange}
          />
        </InputThumb>
        <ButtonThumb>
          <button type="submit">Add contact</button>
        </ButtonThumb>
      </Form>
    );
  }
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  };

export default ContactForm;