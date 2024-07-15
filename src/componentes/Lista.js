import React, { useState } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

function Lista({ gastos, setGastos }) {
  const [busqueda, setBusqueda] = useState('');
  
  const eliminarGasto = (id) => {
    setGastos(gastos.filter(gasto => gasto.id !== id));
  };

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const gastosFiltrados = gastos.filter(gasto =>
    gasto.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
    (gasto.categoria && gasto.categoria.toLowerCase().includes(busqueda.toLowerCase())) ||
    gasto.fecha.includes(busqueda)
  );

  return (
    <div>
      <Form.Group className='mb-3' controlId="formBusqueda">
        <Form.Control
          type="text"
          placeholder="Buscar...🔎"
          value={busqueda}
          onChange={handleBusqueda}
        />
      </Form.Group>
      <ListGroup>
        {gastosFiltrados.map(gasto => (
          <ListGroup.Item key={gasto.id}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div>{gasto.descripcion}</div>
                <div className="text-muted">
                  {gasto.categoria ? `Categoría: ${gasto.categoria} - ` : ''}
                  Monto: ${gasto.monto.toFixed(2)} - Fecha: {gasto.fecha}
                </div>
              </div>
              <Button variant="danger" onClick={() => eliminarGasto(gasto.id)}>
                <FaTrash />
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Lista;
