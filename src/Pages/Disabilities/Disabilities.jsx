import React from 'react';
import { Link } from 'react-router-dom';

function Disabilities() {
  const exampleDisabilities = [
    { id: 1, numeroRadicado: 'RAD001', numeroDocumento: '12345678', primerNombre: 'Juan', primerApellido: 'Perez', fechaInicioIncapacidad: '2024-01-10', fechaFinIncapacidad: '2024-01-15', estado: 'completado' },
    { id: 2, numeroRadicado: 'RAD002', numeroDocumento: '87654321', primerNombre: 'Ana', primerApellido: 'Gomez', fechaInicioIncapacidad: '2024-02-20', fechaFinIncapacidad: '2024-02-25', estado: 'en curso' },
    { id: 3, numeroRadicado: 'RAD003', numeroDocumento: '11223344', primerNombre: 'Carlos', primerApellido: 'Lopez', fechaInicioIncapacidad: '2024-03-01', fechaFinIncapacidad: '2024-03-05', estado: 'pendiente' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2>Mis Incapacidades</h2>
        <Link to="/incapacidades/nueva">
          <button style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            + Registrar Nueva Incapacidad
          </button>
        </Link>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <label htmlFor="filtroEstado" style={{ marginRight: '0.5rem' }}>Filtrar por Estado:</label>
          <select id="filtroEstado" name="filtroEstado" style={{ padding: '0.5rem' }}>
            <option value="">Todos</option>
            <option value="pendiente">Pendiente</option>
            <option value="en curso">En Curso</option>
            <option value="completado">Completado</option>
          </select>
        </div>
        <div>
          <label htmlFor="terminoBusqueda" style={{ marginRight: '0.5rem' }}>Buscar:</label>
          <input
            type="text"
            id="terminoBusqueda"
            name="terminoBusqueda"
            placeholder="Nro Documento o Nombre..."
            style={{ padding: '0.5rem' }}
          />
        </div>
      </div>

      {exampleDisabilities.length === 0 ? (
        <p>No hay incapacidades para mostrar.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Radicado</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Documento</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Nombre Completo</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Fecha Inicio</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Fecha Fin</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Estado</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {exampleDisabilities.map(inc => (
              <tr key={inc.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{inc.numeroRadicado}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{inc.numeroDocumento}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{inc.primerNombre} {inc.primerApellido}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{inc.fechaInicioIncapacidad}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{inc.fechaFinIncapacidad}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <span style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', backgroundColor: inc.estado === 'completado' ? 'lightgreen' : inc.estado === 'en curso' ? 'lightyellow' : 'lightcoral' }}>
                    {inc.estado}
                  </span>
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <Link to={`/incapacidades/editar/${inc.id}`}>
                    <button style={{ marginRight: '0.5rem', padding: '0.25rem 0.5rem' }}>Editar</button>
                  </Link>
                  <button style={{ padding: '0.25rem 0.5rem', backgroundColor: '#dc3545', color: 'white', border: 'none' }}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Disabilities;