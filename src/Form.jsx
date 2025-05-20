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
    if(e.target[0].value != '' && e.target[1].value != '' && e.target[2].value != '' && e.target[3].value != '' && e.target[4].value != ''){
    let cita = {
      Id: listado.length+1, 
      Mascota: document.getElementById('mascota').value,
      Dueno:  document.getElementById('dueno').value,
      Fecha: new Date(document.getElementById('fecha').value).toDateString(),
      Hora: document.getElementById('hora').value,
      Sintomas: document.getElementById('sintomas').value,
    }
    
    let aux = [...listado, cita];
    localStorage.setItem("citas", JSON.stringify(aux));
    setLista(aux);
    setP("");
  }
  else{
    setP("Complete los datos antes de enviar");
  }
  }; 

  
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
        <textarea id="sintomas" name="sintomas" className="u-full-width"></textarea>
        <p>{p}</p>
        <Enviar />
    </form>
)
}