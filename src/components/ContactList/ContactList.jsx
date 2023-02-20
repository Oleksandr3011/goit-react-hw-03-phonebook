import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

function ContactList({contacts, onDeleteContact} ) {
    const contact = contacts.map(({ name, number, id }) => (
        <li key={id} className={css.item}>
            <p className={css.itemText}>{name} : {number}</p>
            <button className={css.itemButton} onClick={() => onDeleteContact(id)} type='button'>Delate</button>
        </li>
    ));

    return (
        <ul className={css.list}>
            {contact}
        </ul>
    )
    }

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number:PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        }
    ))
}

export default ContactList;
