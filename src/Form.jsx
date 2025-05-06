import React from 'react'
import Ingresar from './Ingresar'
import {Enviar} from './Enviar'
import './Form'

export const Form = () => {
  return (
    <form>
        <Ingresar etiqueta="Nombre Mascota" tipo="text" nombre="mascota" placeholder="Nombre Mascota"/>
        <Ingresar etiqueta="Nombre Dueño" tipo="text" nombre="propietaro" placeholder="Nombre dueño de la mascota"/>
        <Ingresar etiqueta="Fecha" tipo="date" nombre="fecha" placeholder=""/>
        <Ingresar etiqueta="hora" tipo="time" nombre="hora" placeholder=""/>
        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width"></textarea>
        <Enviar />
    </form>
)
}