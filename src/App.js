/**
 * app.js
 */

import React from "react";

// componente REACT
class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="container">Primeira Lista de Alunos</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Apelido</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>João</td>
              <td>Sousa</td>
            </tr>
            <tr>
              <td>Ana</td>
              <td>Pires</td>
            </tr>
            <tr>
              <td>Mário</td>
              <td>Silva</td>
            </tr>
            <tr>
              <td>Luís</td>
              <td>Sousa</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
