import React from 'react';
import { ContactList } from 'components/contactList/ContactList';
import { ContactForm } from 'components/contactForm/ContactForm';
import { Filter } from 'components/filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { Blocks } from 'react-loader-spinner';
import {
  addContact,
  removeContacts,
  handlFiltration,
  fetchContacts,
} from 'redux/contactsReducer';
import { useEffect } from 'react';
import {
  selectContacts,
  selectContactsError,
  selectContactsFilter,
  selectContactsIsLoading,
} from 'redux/contacts.selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectContactsFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContacts = contactData => {
    if (
      contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() ===
          contactData.name.toLocaleLowerCase()
      )
    ) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(contactData));
  };

  const delitContacts = id => {
    dispatch(removeContacts(id));
  };

  const Filtration = event => {
    dispatch(handlFiltration(event.target.value));
  };

  const filteredContacts = () => {
    const normalizedContacts = filter.toLocaleLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(normalizedContacts);
    });
  };

  const afterFiltration = filteredContacts();

  return (
    <div className="contacts-container">
      <h1 className="phone-title">Phonebook</h1>
      <div className="contacts-group">
        <ContactForm addContact={addContacts} />
        {error && window.alert(error)}
        <div className="right-group">
          <h2 className="contacts-title">Contacts</h2>
          <Filter value={filter} onChange={Filtration} />
          {isLoading && (
            <Blocks
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
            />
          )}
          <ContactList contacts={afterFiltration} onDelit={delitContacts} />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
