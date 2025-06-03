import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.register_container}> 
      <div className={styles.register_card}>
        <h2>Registro</h2>
        <form>
          <div>
            <label htmlFor="username">Usuario:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="email">Correo:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <label htmlFor="firstName">Nombres:</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div>
            <label htmlFor="lastName">Apellidos:</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div>
            <label htmlFor="documentType">Tipo de documento:</label>
            <input type="text" id="documentType" name="documentType" required />
          </div>
          <div>
            <label htmlFor="documentNumber">N° de documento:</label>
            <input type="text" id="documentNumber" name="documentNumber" required />
          </div>          
          <button type="submit">Registrarse</button>
        </form>
        <p>¿Ya tienes una cuenta? <Link to="/">Ingresa aquí</Link></p>
      </div>
    </div>
  );
};

export default Register;
