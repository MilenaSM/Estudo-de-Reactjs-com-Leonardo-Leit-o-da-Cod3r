import React, { useState } from 'react'

export default (props) => {
  const [numeros, setNumeros] = useState(Array(props.qtddeNumero).fill(0))
  
  
  function gerarNumerosNaoContido(array) {
    const max = 60
    const min = 1
    const novoNumero = parseInt(Math.random() * (max - min)) + min
    return array.includes(novoNumero) 
      ? gerarNumerosNaoContido(array) : novoNumero
  }

  function gerarNumeros() {
    const novoArray = Array(props.qtddeNumero)
      .fill(0)
      .reduce((acumulado, elementoAtual) => { 
        const novoNumero = gerarNumerosNaoContido(acumulado)
        console.log(acumulado, elementoAtual, novoNumero)
        return [...acumulado, novoNumero]
        }, [])
      
      .sort((a, b) => a - b)
    setNumeros(novoArray)
  }

  return (
    <>
      <h3>Mega</h3>
      <h4>{numeros.join(' ')}</h4>
      <button onClick={gerarNumeros}>Gerar Número</button>
    </>
  )
}
