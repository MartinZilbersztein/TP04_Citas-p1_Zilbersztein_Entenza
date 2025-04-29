import { useState } from 'react'
import { Listado } from './Listado'

function App() {
  const [lista,setLista] = useState(["hola", "chau"]);
  return (
    <>
      <Listado listado={lista}/>
    </>
  )
}

export default App
