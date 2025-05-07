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
const envio = (e) => {
  
}; 


export const Form = ({listado, setLista}) => {
  return (
    <form onSubmit={envio}>
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