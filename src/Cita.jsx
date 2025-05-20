import React from 'react'
import './Cita.css'

export const Cita = ({cita, listado, setLista}) => {
 const Eliminar = () =>{
  let indice = cita.Id;
  let aux = [...listado];
  aux.splice(indice-1,1);
  let i = indice-1;
  while (i>= 0 && i<aux.length)
  {
    aux[i].Id--;
    i++;
  }
  setLista(aux);
  localStorage.setItem("citas", JSON.stringify(aux));
} 
return (
  <>
    <div className='cita'>
      <p>Mascota: {cita.Mascota}</p>
      <p>Dueño: {cita.Dueno}</p>
      <p>Fecha: {cita.Fecha}</p>
      <p>Hora: {cita.Hora}</p>
      <p>Síntoma: {cita.Sintomas}</p>
      <button onClick={(()=>Eliminar())} className="button elimnar u-full-width">Eliminar ×</button>
    </div>
  </>
)
}
