import React from 'react';
import styles from '../Input/Input.module.css';

const Select = ({ label, id, name, required = false, options = [], value, onChange }) => {
  return (
    <div className={styles.input_group}>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className={styles.select}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
