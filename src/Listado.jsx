import React from 'react'
import { Cita } from './Cita'

export const Listado = ({listado, setLista}) => {    
  return (
    <ul>
        {
          listado.map((cita, index) => (<Cita key={index} cita={cita} listado={listado} setLista={setLista}/>))
        }
    </ul>
  )
}
