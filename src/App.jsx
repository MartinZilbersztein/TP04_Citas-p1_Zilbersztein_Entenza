import { useEffect, useState } from 'react'
import { Listado } from './Listado'
import { Form } from './Form'
import './App.css'


function App() {
  const [lista, setLista] = useState([]);
  useEffect(()=>{
   setLista(JSON.parse(localStorage.getItem("citas"))); 
  },[]);

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
            <Listado listado={lista} setLista={setLista}/>
          </div>
        </div>
      </div>  
    </div>
    </>
  )
}

export default App
