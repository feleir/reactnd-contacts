import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      screen: 'list'
    }
  }

  componentDidMount() {
    ContactsAPI.getAll()
      .then(contacts => {
        this.setState({
          contacts
        })
      })
  }

  removeContact = (contact) => {
    ContactsAPI.remove(contact)
      .then(() => {
        this.setState((state) => ({
          contacts: state.contacts.filter(c => c.id !== contact.id)
        }));
      });
  }

  render() {
    return <div>
      {this.state.screen === 'list' && (
        <ListContacts 
          contacts={this.state.contacts} 
          onDeleteContact={this.removeContact}
          onNavigate={screen => {
            this.setState({ screen })
          }}
        />
      )}
      {this.state.screen === 'create' && (
        <CreateContact />
      )}
      </div>
  }
}

export default App;
