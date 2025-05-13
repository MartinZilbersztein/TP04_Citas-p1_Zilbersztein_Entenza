import React from 'react'
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
  const enviar = (e) => {
    e.preventDefault();
    console.log(listado);
    let cita = {
      Id: listado.length+1, 
      Mascota: e.target[0].value,
      Dueno: e.target[1].value,
      Fecha: new Date(e.target[2].value).toDateString(), 
      Hora: e.target[3].value,
      Sintomas: e.target[4].value,
    }
    let aux = [...listado, cita];
    setLista(aux);
  }; 
  
  return (
    <form onSubmit={enviar}>
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"></input>
        <label>Nombre Dueño</label>
        <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota"></input>
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" placeholder=""></input>
        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" placeholder=""></input>
        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width"></textarea>
        <Enviar />
    </form>
)
}