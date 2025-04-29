import { useState } from 'react'
import { Listado } from './Listado'
import { Form } from './Form'

function App() {
  const [lista, setLista] = useState(["hola", "chau"]);
  return (
    <>
      <Listado listado={lista}/>
      <Form />
    </>
  )
}

export default App
