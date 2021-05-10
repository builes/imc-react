import React, { Component } from 'react'
import CalculadorApp from './calculador/CalculadorApp';

//Para usar imagenes debemos de importarlas
import bascula from '../documentos/bascula-dibujo.png'


export default class Main extends Component {

    //en el constructor podemos recibir los props
    consstructor(){
        

    }

    render() {
        return (
            <section className="App">
                {/* Podemos enviar los props en varios componentes, este prop pasa por 3 componentes */}
                <CalculadorApp logo={bascula}></CalculadorApp>
            </section>
        )
    }
}
