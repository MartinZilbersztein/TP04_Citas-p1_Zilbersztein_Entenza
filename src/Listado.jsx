import React from 'react'
import { Cita } from './Cita'

export const Listado = ({listado, setLista}) => {
  console.log(listado);  
  return (
    <ul>
        {
          listado.map(cita => (<Cita cita={cita} listado={listado} setLista={setLista}/>))
        }
    </ul>
  )
}
