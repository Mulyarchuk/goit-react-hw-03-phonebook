import React from "react";
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem =({id,name,number,deleteContact}) =>{
    return  (
        <li key={id} className={css.contactList__item}>
            <p>{name}: {number}</p>
        <button type="button" className={css.contactList__button} onClick={() =>{deleteContact(id)}}>Delete</button>
        </li>)
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };