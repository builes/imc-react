import React, { Component } from 'react'

export default class FormularioCalculo extends Component {
    render() {
        return (
            <article>
                <form>
                    <div>
                    <label htmlFor="peso">Peso<small>(Kilos)</small></label>
                    <input type="number"  step="any" name="peso" id="peso"/>
                    </div>
                    <div>
                    <label htmlFor="altura"><small>Altura(cm)</small></label>
                    <input type="number"  step="any" name="altura" id="altura"/>
                    </div>
                    <button type='submit' name="enviar">Enviar</button>
                </form>
            </article>
        )
    }
}
