import { Component } from "react"
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Layout } from "./Layout";

export class App extends Component {
  loginInputId = nanoid();
  
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
  
  handleNameSet = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;
    const newContact = { id: nanoid(), name: name.value, number: number.value, };

    const isExistingContact = this.state.contacts
    .map((contact) => contact.name.toLowerCase())
    .includes(name.value.toLowerCase());
      
   if (!isExistingContact) { this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact], 
      name: '',
      number: '',
    }));} else { alert(`${name.value} is already in contacts!`)}
     e.currentTarget.reset();
  }


filterContacts = () => {
  const { contacts, filter } = this.state;
   return  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
 
};

  handleContactDelete = (contactId) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
        filter: ''

      };
    })

  };

  
  componentDidMount() {
    const savedContacts = localStorage.getItem("contactsPhonebook");
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      })
    }
  }


  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contactsPhonebook", JSON.stringify(this.state.contacts))
    }
  };


  render() {

    return (
      <Layout>
      <h1>Phonebook</h1>
      <ContactForm saveContactsStorage={this.componentDidUpdate} addContactName={this.handleNameSet} setNanoidId={this.loginInputId} onChangeName={e => this.setState({ name: e.target.value })} onChangeNumber={e => this.setState({ number: e.target.value })} nameInpytValue={this.state.name} numberIputValue={this.state.number } />
     
      <h2>Contacts</h2>
      <Filter filterInputValue={this.state.filter} onChangeInputFilter={e => this.setState({ filter: e.target.value })} />
      <ContactList contacts={this.filterContacts()} onContactDelete={this.handleContactDelete} />
</Layout>
  );}
};
