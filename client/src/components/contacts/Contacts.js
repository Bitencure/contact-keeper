import React, { useContext, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from '../contacts/ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const { contacts, filtered } = useContext(ContactContext);

  if (contacts.length === 0) return <h4>Please add a contact</h4>;

  return (
    <Fragment>
      <TransitionGroup>
        {filtered
          ? filtered.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id} timeout={500}>
                <ContactItem contact={contact} classNames='item' />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
