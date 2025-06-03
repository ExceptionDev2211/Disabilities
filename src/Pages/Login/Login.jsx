import React from 'react'
import styles from "./Login.module.css";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className={styles.login_container}>
        <form action="" className={styles.login_form}>
          <h2>Login</h2>
            <label htmlFor="">Usuario</label>
            <input type="text" required />
            <label htmlFor="">Contraseña</label>
            <input type="password" required/>
            <button >Ingresar</button>            
             <Link to="/register">Registrarse</Link>
        </form>


    </div>
  )
}

export default Login