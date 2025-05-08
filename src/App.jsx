import { useState } from 'react'
import { Listado } from './Listado'
import { Form } from './Form'
import './App.css'


function App() {
  const [lista, setLista] = useState([{Mascota: "Nina", Dueno: "Martín", Fecha: new Date().toDateString(), Hora: "8:20", Sintomas: "ladra"}]);
  return (
    <>
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Form listado={lista} setLista={setLista}/>
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            <Listado listado={lista}/>
          </div>
        </div>
      </div>  
    </div>
    </>
  )
}

export default App
