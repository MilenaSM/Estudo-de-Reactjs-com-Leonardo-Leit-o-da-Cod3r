import React from 'react'

export default (props) => {
  function acao() {
    props.whenClicar(Math.random(), 'Gerado')
  }

  return (
    <div>
      <button onClick={acao}>Alterar</button>
    </div>
  )
} 

  // a function pode ser arrow ou pode estar fora do return
  // onClick={() => {
  //   props.whenClicar(Math.random())
  // }}