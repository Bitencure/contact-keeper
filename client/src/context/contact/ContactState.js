import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Matheus Gomes',
        email: 'matheus@gmail.com',
        phone: '1124562',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Gustavo Gomes',
        email: 'gustavo@gmail.com',
        phone: '111232132',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Adriana Gomes',
        email: 'adriana@gmail.com',
        phone: '1124324234',
        type: 'personal'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact

  //Delete Contact

  //Set Current Contact

  //Clear current contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
