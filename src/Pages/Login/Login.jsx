import React from 'react'
import styles from "./Login.module.css";
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
const Login = () => {
  return (
    <div className={styles.login_container}>
        <form action="" className={styles.login_form}>
          <h2>Login</h2>
          <Input label="Usuario" id="username" name="username" required />
          <Input label="Contraseña" id="password" name="password" required />
          <Button children={"Ingresar"} type='submit'/>          
          <Link to="/register">Registrarse</Link>
        </form>


    </div>
  )
}

export default Login