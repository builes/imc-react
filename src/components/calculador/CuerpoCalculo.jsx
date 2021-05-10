import React, { Component, Fragment } from 'react'
import Bascula from './Bascula'
import FormularioCalculo from './FormularioCalculo'
import VerCalculo from './VerCalculo'

export default class CuerpoCalculo extends Component {

    constructor(){
        super()
    }

    render() {
        return (
            <Fragment>
                <FormularioCalculo/>
                <VerCalculo estatura={1.80} peso={70.6}/>
                <Bascula logo={this.props.logo}/>
            </Fragment>
        )
    }
}
