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



// class App extends Component {
//   state = {
//     contacts,
//     filter: ''
//   };

//   componentDidMount() {
//     const parsedContacts = JSON.parse(localStorage.getItem('contacts'))
//     if (parsedContacts) this.setState({ contacts: parsedContacts })
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//     }
//   }

//   onDeleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId)
//     }));
//   };

//   handleSubmit = data => {
//     this.setState(prevState => {
//       const findName = prevState.contacts.find(item => item.name === data.name);
//       if (!findName) {
//         return { contacts: [data, ...prevState.contacts] }
//       } else {
//         return alert(`${data.name} is already in contacts`)
//       }
//     }
//     );
//   };

//   onChangeFilter = event => {
//     this.setState({ filter: event.currentTarget.value })
//   };


//   getVisibleContacs = () => {
//     const { filter, contacts } = this.state
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter))
//   };


//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacs();

//     return (
//       <>
//         <GlobalStyles />
//         <Section title={'Phonebook'}>
//           <Form onSubmit={this.handleSubmit} />
//         </Section>
//         <Section title={'Contacts'}>
//           <div className="contactsWrapper">
//             <FIlter filter={filter} onChange={this.onChangeFilter} />
//             <ContactList contacts={visibleContacts} onDeleteContact={this.onDeleteContact} />
//           </div>
//         </Section>
//       </>
//     );
//   }
// }

// export default App
