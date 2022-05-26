/**
 * Tabela2.js
 */

import React, { Component } from "react";

function Cabecalho() {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Apelido</th>
            </tr>
        </thead>
    )
}

const Corpo = () => {
    return (
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
    )
}


class Tabela2 extends Component {
    render() {
        return (
            <table className="table table-bordered">
                <Cabecalho />
                <Corpo />
            </table>
        )
    }
}

export default Tabela2