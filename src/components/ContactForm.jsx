import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleSubmit = e => {
    //verificare daca inputul nu este gol
    e.preventDefault();
    const { name, number } = this.state;
    if (name.trim() !== '' && number.trim() !== '') {
      this.props.onAddContact(name, number);
      this.setState({ name: '', number: '' });
    }
  };
  
  handleInputChange = event => {
    
    const inputName = event.target.name;
    const inputValue = event.target.value;
     console.log(inputName);
     console.log(inputValue);
    this.setState({ [inputName]: inputValue });
    
  };


  render() {
    return (
      <form className={styles.formContainer}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleInputChange} //(event) => this.handleInputChange(event) pot face asa fara a mai pune functia, dar e recomandat cu functie
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number:</label>
        <input
          type="tel"
          id="number"
          name="number"
          value={this.state.number}
          onChange={this.handleInputChange}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="button" onClick={this.handleSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired
};
export default ContactForm;
