import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.persona.imagen}.png`)}
        alt={`Foto de ${props.persona.nombre}`}
      />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.persona.nombre}</strong> en {props.persona.pais}
        </p>
        <p className="cargo-testimonio">
          {props.persona.cargo} en <strong>{props.persona.empresa}</strong>
        </p>
        {/* <p className="texto-testimonio">"{props.persona.testimonio}"</p> */}
        {props.persona.testimonio()}
      </div>
    </div>
  );
}

export default Testimonio;
