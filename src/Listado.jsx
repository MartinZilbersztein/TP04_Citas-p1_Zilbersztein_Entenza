import React from 'react'
import { Cita } from './Cita'

export const Listado = ({listado}) => {
    return (
    <ul>
        {listado.map(cita => (<Cita cita={cita}/>))}
    </ul>
  )
}
