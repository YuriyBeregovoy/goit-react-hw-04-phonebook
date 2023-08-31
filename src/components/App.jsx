import { useState } from "react"
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Layout } from "./Layout";

export const App = () => {
   const loginInputId = nanoid();

 
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  
   const handleNameSet = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;
    const newContact = { id: nanoid(), name: name.value, number: number.value, };

    const isExistingContact = contacts
    .map((contact) => contact.name.toLowerCase())
    .includes(name.value.toLowerCase());
      
   if (!isExistingContact) { setContacts(prevState => ({
      contacts: [...prevState.contacts, newContact], 
      name: '',
      number: '',
    }));} else { alert(`${name.value} is already in contacts!`)}
     e.currentTarget.reset();
  }

const filterContacts = () => {
   return  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
 
};





    return (
      <Layout>
      <h1>Phonebook</h1>
        <ContactForm
          saveContactsStorage={this.componentDidUpdate}
          addContactName={handleNameSet}
          setNanoidId={loginInputId}
          onChangeName={e => setName(e.target.value)}
          onChangeNumber={e => setNumber(e.target.value)}
          nameInpytValue={name}
          numberIputValue={number} />
     
      <h2>Contacts</h2>
        <Filter
          filterInputValue={filter}
          onChangeInputFilter={e => setFilter(e.target.value )} />
        <ContactList
          contacts={filterContacts}
          onContactDelete={this.handleContactDelete} />
</Layout>
  );}