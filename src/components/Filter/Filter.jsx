import PropTypes from 'prop-types';
import React from 'react';
import css from './Filter.module.css';

const Filter = ({filter, onChange}) => {
    return (
        <div className={css.filter}>
            <label className={css.filterLabel}> Find contacts by name    
                <input className={css.filterInput}name='filter' type='text' value={filter} onChange={onChange} placeholder="Filter contacts" />
            </label>
        </div>  
    )
}
export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
