import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import  css  from './ContactForm.module.css';


class ContactForm extends Component {
    state = {
        name: '',
        number:'',
    }
    handleChangeInfo = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onAddContact({ ...this.state, id:nanoid() });
        this.reset();
    }
    reset() {
        this.setState({
            name: '',
            number: '',
        });
    }
    nameInputId = nanoid();
    numberInputId = nanoid();
    render() {
        const { name, number } = this.state;
        return (
            <form className={css.form} action="" onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId} className={css.formLabel}>Name</label>
                <input
                    id={this.nameInputId}
                    onChange={this.handleChangeInfo}
                    name="name"
                    value={name}
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    className={css.formInput}
                /> 
                <label htmlFor={this.numberInputId} className={css.formLabel}>Number</label>
                <input
                    id={this.numberInputId}
                    onChange={this.handleChangeInfo}
                    name="number"
                    value={number}
                    type="tel"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    className={css.formInput}
                />
                <button className={css.formButton} type="submit">Add contact</button>
        </form>
    )
    }
}

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
}

export default ContactForm
