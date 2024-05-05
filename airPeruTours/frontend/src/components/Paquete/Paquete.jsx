import React, { useContext } from "react";
import "./Paquete.css";
import { StoreContext } from "../../context/StoreContext";
import PaqueteItem from "../PaqueteItem/PaqueteItem";

const Paquete = ({ destino, setMostrarPopupPaquete ,setNombrePaquete}) => {
  const { lista_paquete } = useContext(StoreContext);

  return (
    <div className="paquete" id="paquete">
      <h2>Paquetes Disponibles</h2>
      
      <div className="paquete-lista">
        {lista_paquete.map((item, index) => {
          if (destino === "All" || destino === item.destino) {
            return (
              <PaqueteItem
                setMostrarPopupPaquete={setMostrarPopupPaquete}
                key={index}
                id={item._id}
                nombre={item.nombre}
                descripcion={item.descripcion}
                imagen={item.imagen}
                setNombrePaquete={setNombrePaquete}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Paquete;
