import { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';


const LOCAL_CONTACTS_KEY = 'contactsKey';
export class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(LOCAL_CONTACTS_KEY));
    if (savedContacts) {
        this.setState({ contacts: savedContacts });
    }
    }
    componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
        localStorage.setItem(
        LOCAL_CONTACTS_KEY,
        JSON.stringify(this.state.contacts)
        );
    }
    }

    handleAddContact = newContact => {
        if (this.state.contacts.some(contact => 
            contact.name.toLowerCase().trim() ===
            newContact.name.toLowerCase().trim() || contact.number.trim() === newContact.number.trim()
        )) {
            return alert(`${newContact.name} already exists`);
        }
    
        this.setState((prevState) => ({
            contacts:[...prevState.contacts, newContact]
        }))     
    }

    handleDeleteContact = id => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact=> contact.id !== id)
        })) 
    }

    handleFilter = ({target})=> {
        this.setState({filter: target.value})
    }

    handleFilteredContacts = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();
        const result = contacts.filter((contact) => {
            return contact.name.toLowerCase().includes(normalizedFilter)
        });
        return result;
    };
    
    render() {
    
        return (
            <div style={{ margin:"30px", }}>
                <h1 style={{ paddingBottom:"30px", }}>Phonebook</h1>
                <ContactForm onAddContact={this.handleAddContact}  />
                <h2 style={{ paddingBottom:"30px", }}>Contacts</h2>
                <Filter filter={this.state.filter} onChange={this.handleFilter}/>
                <ContactList contacts={this.handleFilteredContacts()} onDeleteContact={this.handleDeleteContact} />
        </div>
    );
    }
};


