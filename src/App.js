import React, { useState, useEffect } from 'react';
import Formulario from './componentes/Formulario';
import Lista from './componentes/Lista';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    const storedGastos = JSON.parse(localStorage.getItem('gastos'));
    if (storedGastos) {
      setGastos(storedGastos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);

  return (
    <div className="App container">
      <h1 className="my-4">Seguimiento de Gastos💲</h1>
      <Formulario setGastos={setGastos} />
      <Lista gastos={gastos} setGastos={setGastos} />
    </div>
  );
}

export default App;