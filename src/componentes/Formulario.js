import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Formulario({ setGastos }) {
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!descripcion || !monto || !fecha) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }
    const nuevoGasto = {
      descripcion,
      categoria,
      monto: parseFloat(monto),
      fecha,
      id: Date.now()
    };
    setGastos(prevGastos => [...prevGastos, nuevoGasto]);
    setDescripcion('');
    setCategoria('');
    setMonto('');
    setFecha('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formDescripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control 
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formCategoria">
        <Form.Label>Categoría</Form.Label>
        <Form.Control
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formMonto">
        <Form.Label>Monto</Form.Label>
        <Form.Control
          type="number"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formFecha">
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
      </Form.Group>
      <Button className='mt-3 mb-4' variant="warning" type="submit">
        Agregar Gasto
      </Button>
    </Form>
  );
}

export default Formulario;