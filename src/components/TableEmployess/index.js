import React from 'react'

import './styles.css'

const TableEmployess = ({ employess }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>FOTO</th>
                    <th>NOME</th>
                    <th>CARGO</th>
                    <th>DATA DE ADMINSSÃO</th>
                    <th>TELEFONE</th>
                </tr>
            </thead>

            <tbody>
                {employess.map(employee => {
                    const formatedDate = employee.admission_date.split('T', 1)[0].split('-').reverse().join('/')
                    return (
                        <tr key={employee.id}>
                            <td><img src={employee.image} alt={employee.name} /></td>
                            <td>{employee.name}</td>
                            <td>{employee.job}</td>
                            <td>{formatedDate}</td>
                            <td>{employee.phone}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableEmployess