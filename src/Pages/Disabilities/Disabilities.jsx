import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Disabilities.module.css';

function Disabilities() {
  const [disabilities, setDisabilities] = useState([
    { id: 1, numeroRadicado: 'RAD001', numeroDocumento: '12345678', primerNombre: 'Juan', primerApellido: 'Perez', fechaInicioIncapacidad: '2024-01-10', fechaFinIncapacidad: '2024-01-15', estado: 'completado' },
    { id: 2, numeroRadicado: 'RAD002', numeroDocumento: '87654321', primerNombre: 'Ana', primerApellido: 'Gomez', fechaInicioIncapacidad: '2024-02-20', fechaFinIncapacidad: '2024-02-25', estado: 'en curso' },
    { id: 3, numeroRadicado: 'RAD003', numeroDocumento: '11223344', primerNombre: 'Carlos', primerApellido: 'Lopez', fechaInicioIncapacidad: '2024-03-01', fechaFinIncapacidad: '2024-03-05', estado: 'pendiente' },
    { id: 4, numeroRadicado: 'RAD004', numeroDocumento: '55667788', primerNombre: 'Maria', primerApellido: 'Rodriguez', fechaInicioIncapacidad: '2024-04-10', fechaFinIncapacidad: '2024-04-15', estado: 'pendiente' },
    { id: 5, numeroRadicado: 'RAD005', numeroDocumento: '99001122', primerNombre: 'Pedro', primerApellido: 'Ramirez', fechaInicioIncapacidad: '2024-05-01', fechaFinIncapacidad: '2024-05-05', estado: 'completado' },
  ]);

  const [statusFilter, setFiltroEstado] = useState('');
  const [searchWork, setTerminoBusqueda] = useState('');
  const [filteredDisabilities, setFilteredDisabilities] = useState([]);

  useEffect(() => {
    let currentFilteredDisabilities = disabilities;

    if (statusFilter) {
      currentFilteredDisabilities = currentFilteredDisabilities.filter(
        (inc) => inc.estado === statusFilter
      );
    }

    if (searchWork) {
      currentFilteredDisabilities = currentFilteredDisabilities.filter(
        (inc) =>
          inc.numeroDocumento.includes(searchWork) ||
          `${inc.primerNombre} ${inc.primerApellido}`
            .toLowerCase()
            .includes(searchWork.toLowerCase())
      );
    }

    setFilteredDisabilities(currentFilteredDisabilities);
  }, [statusFilter, searchWork, disabilities]);

  const getStatusClassKey = (estado) => {
    switch (estado) {
      case 'completado':
        return 'statusCompletado';
      case 'en curso':
        return 'statusEnCurso';
      case 'pendiente':
        return 'statusPendiente';
      default:
        return '';
    }
  };

  const handleFiltroEstadoChange = (event) => {
    setFiltroEstado(event.target.value);
  };

  const handleTerminoBusquedaChange = (event) => {
    setTerminoBusqueda(event.target.value);
  };

  return (
    <div className={styles.disabilitiesPageContainer}>
      <div className={styles.disabilitiesHeader}>
        <h2>Incapacidades</h2>
        <Link to="/incapacidades/nueva" className={`${styles.btn} ${styles.btnPrimary}`}>
          + Registrar Nueva Incapacidad
        </Link>
      </div>

      <div className={styles.filtersContainer}>
        <div className={styles.filterGroup}>
          <label htmlFor="filtroEstado">Filtrar por Estado:</label>
          <select
            id="filtroEstado"
            name="filtroEstado"
            value={statusFilter}
            onChange={handleFiltroEstadoChange}
          >
            <option value="">Todos</option>
            <option value="pendiente">Pendiente</option>
            <option value="en curso">En Curso</option>
            <option value="completado">Completado</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="terminoBusqueda">Buscar:</label>
          <input
            type="text"
            id="terminoBusqueda"
            name="terminoBusqueda"
            placeholder="Nro Documento o Nombre..."
            value={searchWork}
            onChange={handleTerminoBusquedaChange}
          />
        </div>
      </div>

      {filteredDisabilities.length === 0 ? (
        <p className={styles.noDisabilitiesMessage}>No hay incapacidades para mostrar.</p>
      ) : (
        <table className={styles.disabilitiesTable}>
          <thead>
            <tr>
              <th>Radicado</th>
              <th>Documento</th>
              <th>Nombre Completo</th>
              <th>Fecha Inicio</th>
              <th>Fecha Fin</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredDisabilities.map((inc) => {
              const statusClassKey = getStatusClassKey(inc.estado);
              return (
                <tr key={inc.id}>
                  <td>{inc.numeroRadicado}</td>
                  <td>{inc.numeroDocumento}</td>
                  <td>{inc.primerNombre} {inc.primerApellido}</td>
                  <td>{new Date(inc.fechaInicioIncapacidad).toLocaleDateString()}</td>
                  <td>{new Date(inc.fechaFinIncapacidad).toLocaleDateString()}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${styles[statusClassKey] || ''}`}>
                      {inc.estado}
                    </span>
                  </td>
                  <td className={styles.actionsCell}>
                    <Link to={`/incapacidades/editar/${inc.id}`} className={`${styles.btn} ${styles.btnEdit}`}>
                      Editar
                    </Link>
                    <button className={`${styles.btn} ${styles.btnDelete}`}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Disabilities;