import React from 'react'

import Filho from './Filho'

export default props => 
  <div>
    <h3>Componente Filho</h3>
    {/* Todas as propriedades do pai*/}
    <Filho {...props}><u>João</u></Filho>
    {/* Única propriedades do pai*/}
    <Filho sobrenome={props.sobrenome}>Maria</Filho>
    <Filho sobrenome="Silva">Pedro</Filho>
  </div>