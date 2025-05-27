import React from 'react'
import { Cita } from './Cita'

export const Listado = ({listado, setLista}) => {    
  let variableRetorno = "";
  if (listado && listado.length > 0) 
 variableRetorno = <ul>
   {listado.map((cita, index) => (<Cita key={index} cita={cita} listado={listado} setLista={setLista}/>))}
  </ul>
  return (
     variableRetorno 
  )
}
