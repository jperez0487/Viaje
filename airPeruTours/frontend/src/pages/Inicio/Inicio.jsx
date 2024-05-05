import React, { useState } from "react";
import Cabecera from "../../components/Cabecera/Cabecera";
import Destinos from "../../components/Destino/Destino";
import Paquete from "../../components/Paquete/Paquete";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import BarraMenu from "../../components/BarraMenu/BarraMenu";
const Inicio = ({setMostrarPopupPaquete,setNombrePaquete}) => {
  const [destino, setDestino] = useState("All");
  return (
    <div>
      
      <Cabecera />
      <Destinos destino={destino} setDestino={setDestino} />
      <Paquete destino={destino} setMostrarPopupPaquete={setMostrarPopupPaquete} setNombrePaquete={setNombrePaquete}/>
      <FloatingWhatsApp
        statusMessage="Normalmente responde en 1 hora"
        accountName="Pamela"
        chatMessage={`Hola que tal! 🤝 \n Como podemos ayudarte?`}
        phoneNumber="979089150"
        placeholder="Escribe un mensaje.."
        allowClickAway="true"
        allowEsc="true"
      />
    </div>
  );
};

export default Inicio;
