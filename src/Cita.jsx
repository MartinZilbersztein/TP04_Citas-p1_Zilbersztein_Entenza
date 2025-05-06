import React from 'react'
import './Cita.css'

export const Cita = ({cita}) => {
  console.log(cita);
  return (
    <>
      <div className='cita'>
        <p>Mascota: {cita.Mascota}</p>
        <p>Dueño: {cita.Dueno}</p>
        <p>Fecha: {cita.Fecha}</p>
        <p>Hora: {cita.Hora}</p>
        <p>Síntoma: {cita.Sintomas}</p>
      </div>
    </>
  )
}
