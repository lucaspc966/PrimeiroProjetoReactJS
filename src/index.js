import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import HelloWorld from './components/HelloWorld'
import HelloLucas from './components/HelloLucas'

function sum(a, b) {
  return a + b;
}

function dadosInicias(nome, sobrenome) {
  return nome + "" + sobrenome;
}

function primeiroJSX() {
  return (
    <div className='teste'>
      <h1>Soma: {sum(10, 20)}</h1>
      <h2>Meu nome completo: {dadosInicias("Lucas",  "Cardoso")}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      {primeiroJSX()}
      <HelloWorld />
      <HelloLucas />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)