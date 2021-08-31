import { useState, useEffect } from 'react';
import ContactList from './Componenets/ContactList/ContactList';
import FIlter from './Componenets/Filter/FIlter';
import Form from './Componenets/Form/Form';
import Section from './Componenets/Section/Section';
import { contactsBase } from './contacts.json';
import GlobalStyles from "../src/style/GlobalStyle";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    parsedContacts?.length ? setContacts(parsedContacts) : setContacts(contactsBase);
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])


  const handleSubmit = data => {
    const findName = contacts.find(item => item.name === data.name);
    console.log(findName)
    if (!findName) {
      return setContacts(prevContacts => [...prevContacts, data])
    } else {
      return alert(`${data.name} is already in contacts`)
    }
  };

  const onChangeFilter = event => setFilter(event.currentTarget.value);

  const getVisibleContacs = () => {
    const normalizedFilter = filter.toLowerCase();
    if (normalizedFilter) {
      return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    } else {
      return contacts;
    }

  };


  const onDeleteContact = contactId => {
    setContacts(prevContacts => ([...prevContacts.filter(contact => contact.id !== contactId)]))
  };



  return (
    <>
      <GlobalStyles />
      <Section title={'Phonebook'}>
        <Form onSubmit={handleSubmit} />
      </Section>
      <Section title={'Contacts'}>
        <div className="contactsWrapper">
          <FIlter filter={filter} onChange={onChangeFilter} />
          <ContactList contacts={getVisibleContacs()} onDeleteContact={onDeleteContact} />
        </div>
      </Section>
    </>
  );
}

