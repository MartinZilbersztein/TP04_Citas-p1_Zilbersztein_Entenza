import React from 'react'
import { useState } from 'react'
import {Enviar} from './Enviar'
import './Form.css'

/*
const citaNueva = () => {
  const [formData, setFormData] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });
}
*/

export const Form = ({listado, setLista}) => {
  const [p, setP] = useState("");
  const enviar = (e) => {
    e.preventDefault();
    console.log(listado);
    if(e.target[0].value != '' && e.target[1].value != '' && e.target[2].value != '' && e.target[3].value != '' && e.target[4].value != ''){
    let cita = {
      Id: listado.length+1, 
      Mascota: e.target[0].value,
      Dueno: e.target[1].value,
      Fecha: new Date(e.target[2].value).toDateString(), 
      Hora: e.target[3].value,
      Sintomas: e.target[4].value,
    }
    console.log(e.target[0].value)
    let aux = [...listado, cita];
    setLista(aux);
    setP("");
  }
  else{
    setP("Complete los datos antes de enviar");
  }
  }; 


  
  const check = () =>{

  }

  return (
    <form onSubmit={enviar}>
        <label>Nombre Mascota</label>
        <input  id="mascota" type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"></input>
        <label>Nombre Dueño</label>
        <input type="text" id="dueno" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota"></input>
        <label>Fecha</label>
        <input type="date" id="fecha" name="fecha" className="u-full-width" placeholder=""></input>
        <label>Hora</label>
        <input type="time" id="hora" name="hora" className="u-full-width" placeholder=""></input>
        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width"></textarea>
        <p>{p}</p>
        <Enviar />
    </form>
)
}