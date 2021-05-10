import React, { Component, Fragment } from "react";
import CabeceraCalculo from "./CabeceraCalculo";
import CuerpoCalculo from "./CuerpoCalculo";

export default class CalculadorApp extends Component {
  constructor() {
    super();

    //Asi creamos el estado en una clase
    this.state = {
      paciente: "Mauricio",
    };
  }

  render() {
    //Accedmos a los props en clases con el this.props
    return (
      <Fragment>
        <CabeceraCalculo />
        <CuerpoCalculo logo={this.props.logo} />
      </Fragment>
    );
  }
}
