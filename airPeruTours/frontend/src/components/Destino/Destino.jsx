import React from "react";
import "./Destino.css";
import { assets, destino_lista } from "../../assets/datos";
const Destinos = ({ destino, setDestino }) => {
  return (
    <div className="destino" id="destino">
      <br />
      <h1>Destinos</h1>
      <p className="destino-texto">{assets.desripcion_destino}</p>
      <div className="destino-lista">
        {destino_lista.map((item, index) => {
          return (
            <div
              onClick={() =>
                setDestino((prev) =>
                  prev === item.destino_nombre ? "All" : item.destino_nombre
                )
              }
              className="destino-lista-item"
              key={index}
            >
              <img
                className={destino === item.destino_nombre ? "active" : ""}
                src={item.destino_imagen}
                alt=""
              />
              <p>{item.destino_nombre}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Destinos;
