import './App.css'
import React from "react"

import Card from './components/layout/Card'
import Primeiro from './components/comFilhos/Primeiro'
import ComParametro from './components/comFilhos/ComParametro'
import ComFilhos from './components/comFilhos/ComFilhos'
import Repeticao from './components/comFilhos/Repeticao'
import Condicional from './components/comFilhos/Condicional'
import CondicionalComIf from './components/comFilhos/Condicional'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'


export default (props) => (
  <div className="App">
    <Card titulo="#07 - Comunicação Indireta" color="#4995E5">
      <Super></Super>
    </Card>

    <Card titulo="#06 - Comunicação Direta" color="#4298B5">
      <Pai sobrenome="Monteiro"></Pai>
    </Card>

    <Card titulo="#05.1 - Condicional" color="#FA6900">
      <CondicionalComIf numero={10}></CondicionalComIf>
    </Card>

    <Card titulo="#05 - Condicional" color="#FA6900">
      <Condicional numero={11}></Condicional>
    </Card>

    <Card titulo="#04 - Repetição" color="#D96459">
      <Repeticao></Repeticao>
    </Card>

    <Card titulo="#03 - Componente Com Filhos" color="#008BBA">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#02.1 - Componente Com Parametros 2" color="#E94C6F">
      <ComParametro 
        titulo="Opa" 
        subtitulo="Epa" 
      />
    </Card>

    <Card titulo="#02 - Componente Com Parametros 1" color="#E94C6F">
      <ComParametro 
        titulo="Esse é o título" 
        subtitulo="Esse é o subtítulo" 
      />
    </Card>

    <Card titulo="#01 - Primeiro Componente" color="#FF85CB">
      <Primeiro />
    </Card>
  </div>
)