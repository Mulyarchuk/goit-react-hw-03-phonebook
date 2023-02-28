import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends React.Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }; 


 addContact = text =>{
  if (this.state.contacts.find(contact=> contact.name.toLowerCase() === text.name.toLowerCase())){
    alert (`${text.name} is already in contacts.`);
    return;
  }
  this.setState(prevState=>({
    contacts: [text,...prevState.contacts]
  }));
 } ;

deleteContact = contactId =>{
  this.setState (prevState =>({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  }))
};

changeFilter = e => {
  this.setState({ filter: e.currentTarget.value });
};

getVisibleContacts = () => {
  const { filter, contacts } = this.state;
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

componentDidMount (){
  const parsedContacts = JSON.parse(localStorage.getItem(`contacts`));
  if(parsedContacts){
    this.setState({contacts: parsedContacts})
  }
};

componentDidUpdate (prevProps, prevState){
if (this.state.contacts !== prevState.contacts){
 localStorage.setItem(`contacts`, JSON.stringify(this.state.contacts)) 
}
};

render(){
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: `column`,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm  addContact={this.addContact}/>
      <h2>Contacts</h2>
      <Filter value={this.state.filter} onChange={this.changeFilter}/>
      <ContactList getVisibleContacts={this.getVisibleContacts} deleteContact={this.deleteContact} />
    </div>
  );
    };
};
