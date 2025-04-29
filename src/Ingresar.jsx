import React from 'react'

function Ingresar(etiqueta, tipo, nombre, holder) {
  return (
    <div>
        <label>{etiqueta}</label>
        <input type={tipo} name={nombre} class="u-full-width" placeholder={holder}></input>
    </div>
  )
}

export default Ingresar