import React, { useState } from "react";
import "./PaqueteItem.css";
import { assets } from "../../assets/datos";
import PaqueteInfo from "../PaqueteInfo/PaqueteInfo";

const PaqueteItem = ({ id, nombre, descripcion, imagen,setMostrarPopupPaquete,setNombrePaquete}) => {

  return (
    <div className="paquete-item">
      
      <div className="paquete-item-img-container">
        <img onClick={()=>{setMostrarPopupPaquete(true); setNombrePaquete(nombre)}}  className="paquete-item-image" src={imagen} alt="" />
        <div className="reservar">
          <a href="">Reservar</a>
        </div>
      </div>
      <div className="paquete-item-info">
        <div className="paquete-item-name-rating">
          <p>{nombre}</p>
          <img src={assets.rating_stars} alt="" />
        </div>
        <p className="paquete-item-desc">{descripcion}</p>
      </div>
    </div>
  );
};

export default PaqueteItem;
