import React from "react";
import PropTypes from 'prop-types';
import css from './Filter.module.css'

export const Filter = ({value, onChange})=>{
    return (
        <label className={css.filter__label}>Find contacts by name
        <input type="text"
        className={css.filter__input}
        value={value}
        onChange={onChange} />
    </label>
    )
    
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}