import React from 'react'

export default (props) => {
  return (
    <div className="Contador">
      <label htmlFor="passoInput">Valor: </label>
      {/* + na frente para garantir que o valor vai ser numérico */}
      <input id="passoInput" type="number"
        value={props.passo} 
        onChange={e => props.onPassoChange(+e.target.value)} 
      />
    </div>  
  )
}
        