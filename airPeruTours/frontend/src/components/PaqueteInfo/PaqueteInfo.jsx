import React from "react";
import "./PaqueteInfo.css";
import { assets } from "../../assets/datos";

const PaqueteInfo = ({ setMostrarPopupPaquete,mostrarPopupPaquete,nombrePaquete}) => {
  return (
   
    <div className={mostrarPopupPaquete?"paqueteInfo active":"paqueteInfo"}>
        <div className="paqueteInfo-content">
            <div className="paqueteInfo-content-close">
                <h2>{nombrePaquete}</h2>
                <img
                onClick={() => setMostrarPopupPaquete(false)}
                src={assets.cerrar_icon}
                alt=""
                />
            </div>
            <div className="cuerpo">
                
                sdgdfgdgdfgtttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt<br/>
                sdgdfgdgdfgtttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt<br/>
                sdgdfgdgdfgtttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt<br/>
                sdgdfgdgdfgtttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt<br/>
                

            </div>
        </div>
    </div>
    
  );
};

export default PaqueteInfo;
