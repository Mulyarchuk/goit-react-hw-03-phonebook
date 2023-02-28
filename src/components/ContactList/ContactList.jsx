import React from "react";
import { ContactListItem } from "components/ContactListItem/ContactListItem";
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({getVisibleContacts, deleteContact}) =>{
return <ul className={css.contactList__list}>
    {getVisibleContacts().map(({id, name, number}) => {
     return   <ContactListItem id={id} name={name} number={number} deleteContact={deleteContact}/>
    })
    }
</ul>
}


ContactList.propTypes={
    getVisibleContacts: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
      }; 
        
