import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Register.module.css";
import Button from '../../components/Button/Button.jsx';
import Input from '../../components/Input/Input.jsx';
import Select from '../../components/Select/Select.jsx';


const Register = () => {
    const idTypes = [
    { value: 'CC', label: 'Cédula' },
    { value: 'P', label: 'Pasaporte'},
    { value: 'RC', label: 'Registro Civil' },
    { value: 'TI', label: 'Tarjeta de identidad' },
  ]
  return (
    <div className={styles.register_container}> 
      <div className={styles.register_card}>
        <h2>Registro</h2>
        <form>
          <Input label="Usuario" id="username" name="username" required />
          <Input label="Correo" id="email" type="email" name="email" required />
          <Input label="Contraseña" id="password" type="password" name="password" required />
          <Input label="Nombres" id="firstName" name="firstName" required />
          <Input label="Apellidos" id="lastName" name="lastName" required />
          <Select label={"Tipo de documento"}id= "documentType" name="documentType" options={idTypes}/>
          <Input label="N° de documento" id="documentNumber" name="documentNumber"  required />

          <Button type="submit">Registrarse</Button>
        </form>
        <p>¿Ya tienes una cuenta? <Link to="/">Ingresa aquí</Link></p>
      </div>
    </div>
  );
};

export default Register;
