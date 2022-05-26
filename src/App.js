/**
 * app.js
 */

import React from "react";
import Tabela from "./Tabela";
import Tabela2 from "./Tabela2";
import Tabela3 from "./Tabela3";


// componente REACT
class App extends React.Component {
  render() {

    // criar uma lista de alunos
    // PROPS (propriedades)
    // são invariáveis
    const alunos = [
      {
        nome: "João",
        apelido: "Sousa",
      },
      {
        nome: "Ana",
        apelido: "Pires",
      },
      {
        nome: "Mário",
        apelido: "Silva",
      },
      {
        nome: "Luís",
        apelido: "Sousa",
      },
    ]

    return (
      <div className="container">
        <h1>Primeira Lista de Alunos</h1>
        <Tabela />

        <br /><br /><br />
        <h1>Segunda Lista de Alunos</h1>
        <Tabela2 />

        <br /><br /><br />
        <h1>Terceira Lista de Alunos</h1>
        {/* dadosAlunos é um parâmetro de exportação,
            usado para entregar o array com os dados dos alunos
            ao componente Tabela3 */}
        <Tabela3 dadosAlunosIN={alunos} />
      </div>
    )
  }
}

export default App;
