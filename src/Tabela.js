/**
 * Tabela.js
 */

import React, { Component } from "react";

class Tabela extends Component {
    render() {
        return (
            <table className="table table-hover">
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
        )
    }
}

export default Tabela