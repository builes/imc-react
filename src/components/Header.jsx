import React from 'react'

export default function Header({titulo}) {
    return (

        <header>
            <nav>
                <ul>
                    <a>Inicio</a>
                    <a>Calculo</a>
                    <a>Paciente</a>
                </ul>
            </nav>
            <p>{titulo}</p>
        </header>

    )
}
