import React from 'react'

export const Cita = (cita) => {
  return (
    <div className='cita'>
      <p>Mascota: {cita.Mascota}</p>
      <p>Dueño: {cita.Dueno}</p>
      <p>Fecha: {cita.Fecha}</p>
      <p>Hora: {cita.Hora}</p>
      <p>Síntoma: {cita.Sintoma}</p>
    </div>
  )
}
