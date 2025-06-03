import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, id, type = "text", name, required = false }) => {
  return (
    <div className={styles.input_group}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
      />
    </div>
  );
};

export default Input;
