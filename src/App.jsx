import { useState } from 'react'
import { Listado } from './Listado'
import { Form } from './Form'

function App() {
  const [lista, setLista] = useState([{Mascota: "Nina", Dueno: "Martín", Fecha: new Date().toLocaleString(), Hora: "8:20", Sintomas: "ladra"}]);
  return (
    <>
      <Listado listado={lista}/>
      <Form/>
    </>
  )
}

export default App
