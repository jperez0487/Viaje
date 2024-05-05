import React, { useState } from "react";
import "./BarraMenu.css";
import { assets } from "../../assets/datos";
const BarraMenu = () => {
  const [menu, setmenu] = useState("inicio");
  return (
    <div className="espacioSuperior">
      <div className="barramenu">
        <img src={assets.logo} alt="" className="logo" />
        <ul className="barramenu-opciones">
          <a
            href="#inicio"
            onClick={() => setmenu("inicio")}
            className={menu === "inicio" ? "active" : ""}
          >
            INICIO
          </a>
          <a
            href="#destino"
            onClick={() => setmenu("destino")}
            className={menu === "destino" ? "active" : ""}
          >
            DESTINOS
          </a>
          <a
            href="#paquete"
            onClick={() => setmenu("paquete")}
            className={menu === "paquete" ? "active" : ""}
          >
            PAQUETES ESPECIALES
          </a>
          <a
            href="#reserva"
            onClick={() => setmenu("reserva")}
            className={menu === "reserva" ? "active" : ""}
          >
            RESERVAS
          </a>
          <a
            href="#contacto"
            onClick={() => setmenu("contacto")}
            className={menu === "contacto" ? "active" : ""}
          >
            CONTACTO
          </a>
        </ul>
        <div className="barramenu-derecha">
          <img src={assets.usuario_icon} alt="" className="logo-whatsapp" />
        </div>
      </div>
    </div>
  );
};

export default BarraMenu;
