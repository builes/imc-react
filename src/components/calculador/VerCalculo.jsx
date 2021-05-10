import React, { Component } from 'react'

export default class VerCalculo extends Component {
    constructor(props){
        super()
    }
    
    render() {
        let imc =(this.props.peso)/(this.props.estatura*this.props.estatura)
        return (
            <article>
                <h2>IMC</h2>
                <span><b>{imc}</b></span>
            </article>
        )
    }
}
