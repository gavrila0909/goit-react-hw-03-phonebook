import React, { Component } from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

class ContactList extends Component {
  handleDelete = deletingContact => {
    //alert(deletingContact.name);
    const newContacts = this.props.contacts.filter(
      contact => contact.id !== deletingContact.id
    );
    this.props.onDelete(newContacts); // Trimit noile contacte către părinte pentru a le actualiza
  };

  render() {
    return (
      <>
        <h4>Find contacts by name</h4>
        <input
          type="text"
          name="search"
          onChange={e => this.props.onSearch(e.target.value)}
        />

        <ul className={styles.listContainer}>
          {this.props.contacts
            .filter(contact => {
              return (
                this.props.filter.toLowerCase() === '' ||
                contact.name
                  .toLowerCase()
                  .includes(this.props.filter.toLowerCase())
              );
            })
            .map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <button onClick={() => this.handleDelete(contact)}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired
};
export default ContactList;
