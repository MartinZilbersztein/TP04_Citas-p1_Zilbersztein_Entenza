import React from 'react'
import "./Ingresar.css"

function Ingresar({etiqueta, tipo, nombre, holder}) {
  return (
    <div>
        <label>{etiqueta}</label>
        <input type={tipo} name={nombre} className="u-full-width" placeholder={holder}></input>
    </div>
  )
}

export default Ingresar