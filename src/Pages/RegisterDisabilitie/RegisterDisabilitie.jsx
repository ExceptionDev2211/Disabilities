import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RegisterDisabilitie.module.css';

function RegisterDisabilitie() {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className={styles.formContainer}>
      <h2>Registrar Nueva Incapacidad</h2>
      <form>
        <div className={styles.formGrid}>
          <div className={styles.formField}>
            <label htmlFor="tipoDocumento">Tipo de Documento:</label>
            <select id="tipoDocumento" name="tipoDocumento">
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="CE">Cédula de Extranjería</option>
              <option value="PAS">Pasaporte</option>
              <option value="TI">Tarjeta de Identidad</option>
              <option value="RC">Registro Civil</option>
            </select>
          </div>

          <div className={styles.formField}>
            <label htmlFor="numeroDocumento">Número de Documento:</label>
            <input type="text" id="numeroDocumento" name="numeroDocumento" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="primerNombre">Primer Nombre:</label>
            <input type="text" id="primerNombre" name="primerNombre" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="segundoNombre">Segundo Nombre (Opcional):</label>
            <input type="text" id="segundoNombre" name="segundoNombre" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="primerApellido">Primer Apellido:</label>
            <input type="text" id="primerApellido" name="primerApellido" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="segundoApellido">Segundo Apellido (Opcional):</label>
            <input type="text" id="segundoApellido" name="segundoApellido" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="salario">Salario (COP):</label>
            <input type="number" id="salario" name="salario" min="0" step="any" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="eps">EPS:</label>
            <input type="text" id="eps" name="eps" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="fechaContratacion">Fecha de Contratación:</label>
            <input type="date" id="fechaContratacion" name="fechaContratacion" max={today} />
          </div>
          
          <div className={styles.formField}>
            <label htmlFor="correo">Correo Electrónico:</label>
            <input type="email" id="correo" name="correo" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="fechaInicioIncapacidad">Fecha Inicio Incapacidad:</label>
            <input type="date" id="fechaInicioIncapacidad" name="fechaInicioIncapacidad" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="fechaFinIncapacidad">Fecha Fin Incapacidad:</label>
            <input type="date" id="fechaFinIncapacidad" name="fechaFinIncapacidad" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="telefono">Teléfono (Opcional):</label>
            <input type="tel" id="telefono" name="telefono" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="estado">Estado:</label>
            <select id="estado" name="estado" defaultValue="pendiente" disabled>
              <option value="pendiente">Pendiente</option>
              <option value="en curso">En Curso</option>
              <option value="completado">Completado</option>
            </select>
          </div>
        </div>

        <div className={styles.formActions}>
          <Link to="/incapacidades" className={`${styles.btn} ${styles.btnSecondary}`}>
            Cancelar
          </Link>
          <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
            Guardar Incapacidad
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterDisabilitie;