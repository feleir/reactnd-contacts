import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
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
    return (
      <div className="app">
        <Route exact path='/'
          render={() => (
            <ListContacts 
              contacts={this.state.contacts} 
              onDeleteContact={this.removeContact}
            />
          )}
        />
        <Route path='/create' component={CreateContact} />
      </div>
    )
  }
}

export default App;
